/**
 * Transport-neutral display/beep capability. A BLE handler that drives an
 * external display (e.g. the ESP32 over the mqtt-proxy) provides an
 * implementation; the reading processor calls it generically and never names a
 * specific transport (#183). Methods are fire-and-forget: the implementation
 * swallows its own async errors.
 */
export interface DisplayNotifier {
  /** Show the raw scale reading + target exporters on the display. */
  reading(
    slug: string,
    name: string,
    weight: number,
    impedance: number | undefined,
    exporterNames: string[],
  ): void;
  /** Show the export result (per-exporter ok/fail) on the display. */
  result(
    slug: string,
    name: string,
    weight: number,
    details: Array<{ name: string; ok: boolean }>,
  ): void;
  /** Emit an audible cue (e.g. matched vs unknown user). */
  beep(freq: number, duration: number, repeat: number): void;
}
