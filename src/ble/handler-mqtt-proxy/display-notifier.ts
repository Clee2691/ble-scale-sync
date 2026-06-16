import type { DisplayNotifier } from '../../interfaces/display-notifier.js';
import type { MqttProxyConfig } from '../../config/schema.js';
import { publishBeep, publishDisplayReading, publishDisplayResult } from './display.js';

/**
 * DisplayNotifier backed by the ESP32 display over MQTT. Reads the (possibly
 * hot-swapped) config via the getter on each call so config reloads take effect
 * and a momentarily-undefined config no-ops instead of throwing.
 */
export function createMqttProxyDisplayNotifier(
  getConfig: () => MqttProxyConfig | undefined,
): DisplayNotifier {
  return {
    reading(slug, name, weight, impedance, exporterNames) {
      const config = getConfig();
      if (!config) return;
      publishDisplayReading(config, slug, name, weight, impedance, exporterNames).catch(() => {});
    },
    result(slug, name, weight, details) {
      const config = getConfig();
      if (!config) return;
      publishDisplayResult(config, slug, name, weight, details).catch(() => {});
    },
    beep(freq, duration, repeat) {
      const config = getConfig();
      if (!config) return;
      publishBeep(config, freq, duration, repeat).catch(() => {});
    },
  };
}
