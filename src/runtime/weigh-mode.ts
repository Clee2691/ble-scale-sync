import { createRequire } from 'node:module';
import { createLogger } from '../logger.js';
import type { MqttConfig } from '../exporters/config.js';
import type { AppContext, WeighPublisher } from './context.js';

const require = createRequire(import.meta.url);
const pkg = require('../../package.json') as { version: string };

const log = createLogger('WeighMode');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MqttClient = any;

export class WeighModeManager implements WeighPublisher {
  private client: MqttClient | null = null;
  private readonly config: MqttConfig;
  private readonly ctx: AppContext;

  private readonly switchStateTopic: string;
  private readonly switchCommandTopic: string;
  private readonly weightTopic: string;

  constructor(config: MqttConfig, ctx: AppContext) {
    this.config = config;
    this.ctx = ctx;
    const base = config.topic;
    this.switchStateTopic = `${base}/weigh_mode/state`;
    this.switchCommandTopic = `${base}/weigh_mode/set`;
    this.weightTopic = `${base}/weigh_mode/weight`;
  }

  async start(): Promise<void> {
    const { connect } = await import('mqtt');

    this.client = connect(this.config.brokerUrl, {
      clientId: `${this.config.clientId}-weigh-mode`,
      username: this.config.username,
      password: this.config.password,
      // Persist subscription across reconnects
      clean: false,
    });

    this.client.on('error', (err: Error) => {
      log.warn(`MQTT error: ${err.message}`);
    });

    this.client.on('connect', () => {
      this.client.subscribe(this.switchCommandTopic, { qos: 1 }, (err: Error | null) => {
        if (err) log.warn(`Subscribe error: ${err.message}`);
      });
    });

    this.client.on('message', (_topic: string, message: Buffer) => {
      const cmd = message.toString().trim().toUpperCase();
      if (cmd !== 'ON' && cmd !== 'OFF') return;
      this.ctx.weighMode = cmd === 'ON';
      log.info(`Weigh mode: ${cmd}`);
      this.client.publish(this.switchStateTopic, cmd, { qos: 1, retain: true });
    });

    // Wait for initial connection before publishing discovery + initial state
    await new Promise<void>((resolve, reject) => {
      const onConnect = () => {
        this.client.off('error', onError);
        resolve();
      };
      const onError = (err: Error) => {
        this.client.off('connect', onConnect);
        reject(err);
      };
      this.client.once('connect', onConnect);
      this.client.once('error', onError);
    });

    if (this.config.haDiscovery) {
      await this.publishDiscovery();
    }

    // Always reset to OFF on (re)start so weigh mode is never silently stuck ON
    await new Promise<void>((resolve) => {
      this.client.publish(this.switchStateTopic, 'OFF', { qos: 1, retain: true }, () => resolve());
    });

    this.ctx.weighPublisher = this;
    log.info('Weigh mode manager started.');
  }

  async publishWeight(weightKg: number): Promise<void> {
    if (!this.client) return;
    const payload = JSON.stringify({ weight: weightKg });
    await new Promise<void>((resolve) => {
      this.client.publish(
        this.weightTopic,
        payload,
        { qos: this.config.qos, retain: this.config.retain },
        () => resolve(),
      );
    });
    log.info(`Published ${weightKg.toFixed(2)} kg to ${this.weightTopic}`);
  }

  async stop(): Promise<void> {
    this.ctx.weighPublisher = undefined;
    if (!this.client) return;
    await new Promise<void>((resolve) => {
      this.client.end(false, {}, () => resolve());
    });
    this.client = null;
    log.info('Weigh mode manager stopped.');
  }

  private async publishDiscovery(): Promise<void> {
    const deviceId = 'ble-scale-sync';
    const device = {
      identifiers: [deviceId],
      name: this.config.haDeviceName,
      manufacturer: 'BLE Scale Sync',
      model: 'Smart Scale',
      sw_version: pkg.version,
    };

    const switchPayload = JSON.stringify({
      name: 'Weigh Mode',
      unique_id: `${deviceId}_weigh_mode`,
      command_topic: this.switchCommandTopic,
      state_topic: this.switchStateTopic,
      icon: 'mdi:scale',
      device,
    });
    await new Promise<void>((resolve) => {
      this.client.publish(
        `homeassistant/switch/${deviceId}/weigh_mode/config`,
        switchPayload,
        { qos: 1, retain: true },
        () => resolve(),
      );
    });

    const sensorPayload = JSON.stringify({
      name: 'Weigh Mode Weight',
      unique_id: `${deviceId}_weigh_mode_weight`,
      state_topic: this.weightTopic,
      value_template: '{{ value_json.weight }}',
      unit_of_measurement: 'kg',
      device_class: 'weight',
      suggested_display_precision: 2,
      icon: 'mdi:scale',
      device,
    });
    await new Promise<void>((resolve) => {
      this.client.publish(
        `homeassistant/sensor/${deviceId}/weigh_mode_weight/config`,
        sensorPayload,
        { qos: 1, retain: true },
        () => resolve(),
      );
    });

    log.info('Published HA discovery for Weigh Mode switch + weight sensor.');
  }
}
