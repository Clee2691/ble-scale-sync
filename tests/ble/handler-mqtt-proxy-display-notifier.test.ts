import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { MqttProxyConfig } from '../../src/config/schema.js';

// Mock the publish layer the notifier delegates to.
vi.mock(import('../../src/ble/handler-mqtt-proxy/display.js'), () => ({
  publishBeep: vi.fn(async () => undefined),
  publishDisplayReading: vi.fn(async () => undefined),
  publishDisplayResult: vi.fn(async () => undefined),
}));

const { createMqttProxyDisplayNotifier } =
  await import('../../src/ble/handler-mqtt-proxy/display-notifier.js');
const { publishBeep, publishDisplayReading, publishDisplayResult } =
  await import('../../src/ble/handler-mqtt-proxy/display.js');

const CONFIG = {
  device_id: 'esp32-test',
  topic_prefix: 'ble-proxy',
} as unknown as MqttProxyConfig;

beforeEach(() => {
  vi.mocked(publishBeep).mockClear();
  vi.mocked(publishDisplayReading).mockClear();
  vi.mocked(publishDisplayResult).mockClear();
});

describe('createMqttProxyDisplayNotifier (#183)', () => {
  it('delegates each method to the publish layer with the live config', () => {
    const notifier = createMqttProxyDisplayNotifier(() => CONFIG);

    notifier.reading('dad', 'Dad', 82, 500, ['webhook']);
    notifier.result('dad', 'Dad', 80, [{ name: 'webhook', ok: true }]);
    notifier.beep(1200, 200, 2);

    expect(publishDisplayReading).toHaveBeenCalledWith(CONFIG, 'dad', 'Dad', 82, 500, ['webhook']);
    expect(publishDisplayResult).toHaveBeenCalledWith(CONFIG, 'dad', 'Dad', 80, [
      { name: 'webhook', ok: true },
    ]);
    expect(publishBeep).toHaveBeenCalledWith(CONFIG, 1200, 200, 2);
  });

  it('reads the getter on every call so a hot-swapped config is used', () => {
    let current: MqttProxyConfig | undefined = CONFIG;
    const notifier = createMqttProxyDisplayNotifier(() => current);

    const swapped = { ...CONFIG, device_id: 'esp32-new' } as MqttProxyConfig;
    current = swapped;
    notifier.beep(600, 150, 3);

    expect(publishBeep).toHaveBeenCalledWith(swapped, 600, 150, 3);
  });

  it('no-ops when the config getter returns undefined', () => {
    const notifier = createMqttProxyDisplayNotifier(() => undefined);

    notifier.reading('dad', 'Dad', 82, 500, ['webhook']);
    notifier.result('dad', 'Dad', 80, []);
    notifier.beep(1200, 200, 2);

    expect(publishDisplayReading).not.toHaveBeenCalled();
    expect(publishDisplayResult).not.toHaveBeenCalled();
    expect(publishBeep).not.toHaveBeenCalled();
  });

  it('swallows a rejected publish (no unhandled rejection)', async () => {
    vi.mocked(publishBeep).mockRejectedValueOnce(new Error('mqtt down'));
    const notifier = createMqttProxyDisplayNotifier(() => CONFIG);

    expect(() => notifier.beep(1200, 200, 2)).not.toThrow();
    // Let the rejected promise settle; the .catch in the notifier must absorb it.
    await Promise.resolve();
  });
});
