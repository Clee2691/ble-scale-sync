import type { ScaleAdapter, ScaleReading, BleDeviceInfo } from '../interfaces/scale-adapter.js';
import { hasParseableBroadcastSource } from './shared.js';

// ─── Advertisement decision (pure) ─────────────────────────────────────────────

/**
 * The per-advertisement decision, derived purely from `(adapter, info)`. Every
 * BLE transport handler (noble, mqtt-proxy, esphome-proxy) shares this decision
 * tree; only the sink differs (emit vs queue vs resolve), so that stays at the
 * call site. See #242.
 */
export type AdvertisementDecision =
  /** A usable, stable reading — emit it now. */
  | { kind: 'complete'; reading: ScaleReading }
  /** A weight-only frame from a passive adapter — start/refresh a grace timer. */
  | { kind: 'partial'; reading: ScaleReading }
  /** No usable reading yet, but the device still carries a parseable broadcast
   *  source — keep waiting for a future advertisement. */
  | { kind: 'wait' }
  /** No broadcast reading and the adapter has a GATT path — connect via GATT. */
  | { kind: 'gatt' }
  /** Matched, but the device exposes neither a parseable broadcast source nor a
   *  GATT characteristic — nothing to do. */
  | { kind: 'none' };

export interface EvaluateOptions {
  /**
   * Default true. When false, a null reading never returns `wait` even if a
   * parseable broadcast source is present — it falls straight through to `gatt`
   * or `none`. The esphome-proxy watcher sets this false: it GATT-connects such
   * devices on demand from its per-advertisement stream (QN Elis 1). See the
   * `hasParseableBroadcastSource` doc comment in shared.ts.
   */
  waitForBroadcast?: boolean;
}

/** Try the adapter's broadcast parsers against an advertisement's data. */
function parseAdvertisement(adapter: ScaleAdapter, info: BleDeviceInfo): ScaleReading | null {
  let reading: ScaleReading | null = null;

  if (adapter.parseBroadcast && info.manufacturerData) {
    reading = adapter.parseBroadcast(info.manufacturerData.data);
  }

  if (!reading && adapter.parseServiceData && info.serviceData) {
    for (const sd of info.serviceData) {
      reading = adapter.parseServiceData(sd.uuid, sd.data);
      if (reading) break;
    }
  }

  return reading;
}

/**
 * Classify a single advertisement for a matched adapter. Pure: no side effects,
 * no timers, no I/O. Reproduces the parse-then-classify branch that was
 * copy-pasted across all five handler sites (#242).
 *
 * Passive-preferring adapters (e.g. Mi Scale 2) emit a weight-only frame first
 * and a weight+impedance frame moments later, so they gate on `isComplete`
 * (`partial` until then). Other broadcast adapters embed a "final" flag in the
 * frame itself, so any non-null reading is already `complete`.
 */
export function evaluateAdvertisement(
  adapter: ScaleAdapter,
  info: BleDeviceInfo,
  opts?: EvaluateOptions,
): AdvertisementDecision {
  const reading = parseAdvertisement(adapter, info);
  const requiresStable = adapter.preferPassive === true;

  if (reading && (!requiresStable || adapter.isComplete(reading))) {
    return { kind: 'complete', reading };
  }
  if (reading && requiresStable) {
    return { kind: 'partial', reading };
  }
  if (opts?.waitForBroadcast !== false && hasParseableBroadcastSource(adapter, info)) {
    return { kind: 'wait' };
  }
  if (!adapter.charNotifyUuid) {
    return { kind: 'none' };
  }
  return { kind: 'gatt' };
}
