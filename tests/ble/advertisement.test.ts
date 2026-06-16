import { describe, it, expect } from 'vitest';
import { evaluateAdvertisement } from '../../src/ble/advertisement.js';
import type {
  ScaleAdapter,
  ScaleReading,
  BleDeviceInfo,
} from '../../src/interfaces/scale-adapter.js';

// ─── Minimal adapter builders ─────────────────────────────────────────────────

const baseAdapter = (over: Partial<ScaleAdapter>): ScaleAdapter =>
  ({
    name: 'Test',
    charNotifyUuid: '',
    charWriteUuid: '',
    unlockCommand: [],
    unlockIntervalMs: 0,
    matches: () => true,
    parseNotification: () => null,
    isComplete: (r: ScaleReading) => r.weight > 0 && r.impedance > 0,
    computeMetrics: () => ({}) as never,
    ...over,
  }) as ScaleAdapter;

const MFG = (weight: number, impedance: number): BleDeviceInfo => ({
  localName: 'x',
  serviceUuids: [],
  manufacturerData: { id: 0xffff, data: encode(weight, impedance) },
});

const SVC = (weight: number, impedance: number): BleDeviceInfo => ({
  localName: 'x',
  serviceUuids: [],
  serviceData: [{ uuid: '181b', data: encode(weight, impedance) }],
});

function encode(weight: number, impedance: number): Buffer {
  const b = Buffer.alloc(4);
  b.writeUInt16LE(Math.round(weight * 100), 0);
  b.writeUInt16LE(impedance, 2);
  return b;
}

const parseMfg = (data: Buffer): ScaleReading => ({
  weight: data.readUInt16LE(0) / 100,
  impedance: data.readUInt16LE(2),
});

describe('evaluateAdvertisement', () => {
  it('returns complete for a non-passive adapter on any non-null reading', () => {
    const adapter = baseAdapter({ parseBroadcast: parseMfg });
    const d = evaluateAdvertisement(adapter, MFG(75, 0));
    expect(d).toEqual({ kind: 'complete', reading: { weight: 75, impedance: 0 } });
  });

  it('returns complete for a passive adapter only when isComplete is true', () => {
    const adapter = baseAdapter({
      preferPassive: true,
      parseServiceData: () => parseMfg(encode(70, 500)),
    });
    const d = evaluateAdvertisement(adapter, SVC(70, 500));
    expect(d.kind).toBe('complete');
  });

  it('returns partial for a passive adapter when the frame is weight-only', () => {
    const adapter = baseAdapter({
      preferPassive: true,
      parseServiceData: () => parseMfg(encode(70, 0)),
    });
    const d = evaluateAdvertisement(adapter, SVC(70, 0));
    expect(d).toEqual({ kind: 'partial', reading: { weight: 70, impedance: 0 } });
  });

  it('prefers parseBroadcast over parseServiceData', () => {
    const adapter = baseAdapter({
      parseBroadcast: () => parseMfg(encode(80, 0)),
      parseServiceData: () => parseMfg(encode(99, 0)),
    });
    const info: BleDeviceInfo = {
      ...MFG(80, 0),
      serviceData: [{ uuid: '181b', data: encode(99, 0) }],
    };
    const d = evaluateAdvertisement(adapter, info);
    expect(d.kind === 'complete' && d.reading.weight).toBe(80);
  });

  it('iterates serviceData entries and breaks on the first non-null', () => {
    const seen: string[] = [];
    const adapter = baseAdapter({
      parseServiceData: (uuid: string, data: Buffer) => {
        seen.push(uuid);
        return uuid === 'match' ? parseMfg(data) : null;
      },
    });
    const info: BleDeviceInfo = {
      localName: 'x',
      serviceUuids: [],
      serviceData: [
        { uuid: 'miss', data: encode(0, 0) },
        { uuid: 'match', data: encode(60, 0) },
        { uuid: 'after', data: encode(0, 0) },
      ],
    };
    const d = evaluateAdvertisement(adapter, info);
    expect(d.kind).toBe('complete');
    expect(seen).toEqual(['miss', 'match']); // stopped after the match
  });

  it('returns wait when no reading but a parseable broadcast source is present', () => {
    const adapter = baseAdapter({
      charNotifyUuid: 'fff4',
      parseBroadcast: () => null,
    });
    const d = evaluateAdvertisement(adapter, MFG(0, 0));
    expect(d).toEqual({ kind: 'wait' });
  });

  it('returns gatt when no reading, no broadcast source, but a notify char exists', () => {
    const adapter = baseAdapter({ charNotifyUuid: 'fff4' });
    const info: BleDeviceInfo = { localName: 'x', serviceUuids: [] };
    expect(evaluateAdvertisement(adapter, info)).toEqual({ kind: 'gatt' });
  });

  it('returns none when no reading, no broadcast source, and no notify char', () => {
    const adapter = baseAdapter({ charNotifyUuid: '' });
    const info: BleDeviceInfo = { localName: 'x', serviceUuids: [] };
    expect(evaluateAdvertisement(adapter, info)).toEqual({ kind: 'none' });
  });

  it('with waitForBroadcast=false, a parseable broadcast source falls through to gatt', () => {
    const adapter = baseAdapter({
      charNotifyUuid: 'fff4',
      parseBroadcast: () => null,
    });
    const d = evaluateAdvertisement(adapter, MFG(0, 0), { waitForBroadcast: false });
    expect(d).toEqual({ kind: 'gatt' });
  });

  it('with waitForBroadcast=false and no notify char, returns none', () => {
    const adapter = baseAdapter({ charNotifyUuid: '', parseBroadcast: () => null });
    const d = evaluateAdvertisement(adapter, MFG(0, 0), { waitForBroadcast: false });
    expect(d).toEqual({ kind: 'none' });
  });
});
