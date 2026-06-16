// BlueZ pairing agent (org.bluez.Agent1) for scales that mandate an encrypted
// link before their CCCDs can be enabled (#168, Beurer BF720).
//
// node-ble's device.pair() drives BlueZ's pairing, but BlueZ needs a registered
// agent to complete it: with no agent it cannot finish even a Just-Works pairing,
// and it cannot supply a passkey if the scale demands Passkey Entry. The reporter's
// HA add-on container has no system agent, so pairing failed with "Authentication
// Failed". We register our own runtime agent with capability KeyboardDisplay (the
// most flexible: covers Just Works, numeric comparison, and Passkey Entry).
//
// The BF720 HCI snoop showed the phone reusing a stored bond (LE Start Encryption
// with a stored LTK, no fresh SMP pairing in the capture), so the original pairing
// association model is unknown. Every callback logs which method BlueZ invoked so a
// real-hardware retest reveals whether the scale uses Just Works or Passkey Entry,
// and whether beurer_pin is the BLE passkey.

import * as dbusNext from 'dbus-next';
import { bleLog, errMsg } from '../types.js';
import type { MessageBus } from 'dbus-next';

/** D-Bus object path our agent is exported at. */
export const AGENT_PATH = '/org/blescalesync/agent';

/**
 * Agent IO capability. KeyboardDisplay is the broadest: it lets BlueZ pick
 * Passkey Entry (we supply beurer_pin via RequestPasskey) or Just Works /
 * numeric comparison (we auto-accept), depending on what the scale negotiates.
 */
export const AGENT_CAPABILITY = 'KeyboardDisplay';

/** Provider for the current consent/pairing PIN (beurer_pin). May change on reload. */
type PinProvider = () => number | undefined;

/**
 * org.bluez.Agent1 implementation. Supplies the configured PIN for Passkey/PIN
 * entry and accepts the confirmation/authorization association models. A missing
 * PIN rejects the passkey request (rather than offering a bogus 0) so BlueZ fails
 * the bond cleanly and the adapter's "set beurer_pin" guard can surface instead.
 */
export class BlueZPairingAgent extends dbusNext.interface.Interface {
  private pinProvider: PinProvider = () => undefined;

  constructor() {
    super('org.bluez.Agent1');
  }

  setPinProvider(provider: PinProvider): void {
    this.pinProvider = provider;
  }

  private requirePin(method: string): number {
    const pin = this.pinProvider();
    if (pin == null) {
      bleLog.warn(
        `BlueZ pairing agent: ${method} requested but no beurer_pin is configured; ` +
          'rejecting pairing. Set `users[].beurer_pin` to the code the scale was paired with.',
      );
      throw new dbusNext.DBusError('org.bluez.Error.Rejected', 'No beurer_pin configured');
    }
    return pin;
  }

  Release(): void {
    bleLog.debug('BlueZ agent: Release');
  }

  RequestPinCode(device: string): string {
    bleLog.debug(`BlueZ agent: RequestPinCode for ${device}`);
    return String(this.requirePin('RequestPinCode'));
  }

  DisplayPinCode(device: string, pincode: string): void {
    bleLog.debug(`BlueZ agent: DisplayPinCode ${pincode} for ${device}`);
  }

  RequestPasskey(device: string): number {
    bleLog.debug(`BlueZ agent: RequestPasskey for ${device}`);
    return this.requirePin('RequestPasskey');
  }

  DisplayPasskey(device: string, passkey: number, entered: number): void {
    bleLog.debug(`BlueZ agent: DisplayPasskey ${passkey} (entered ${entered}) for ${device}`);
  }

  RequestConfirmation(device: string, passkey: number): void {
    bleLog.debug(`BlueZ agent: RequestConfirmation ${passkey} for ${device} -> accept`);
  }

  RequestAuthorization(device: string): void {
    bleLog.debug(`BlueZ agent: RequestAuthorization for ${device} -> accept`);
  }

  AuthorizeService(device: string, uuid: string): void {
    bleLog.debug(`BlueZ agent: AuthorizeService ${uuid} for ${device} -> accept`);
  }

  Cancel(): void {
    bleLog.debug('BlueZ agent: Cancel');
  }
}

BlueZPairingAgent.configureMembers({
  methods: {
    Release: { inSignature: '', outSignature: '' },
    RequestPinCode: { inSignature: 'o', outSignature: 's' },
    DisplayPinCode: { inSignature: 'os', outSignature: '' },
    RequestPasskey: { inSignature: 'o', outSignature: 'u' },
    DisplayPasskey: { inSignature: 'ouq', outSignature: '' },
    RequestConfirmation: { inSignature: 'ou', outSignature: '' },
    RequestAuthorization: { inSignature: 'o', outSignature: '' },
    AuthorizeService: { inSignature: 'os', outSignature: '' },
    Cancel: { inSignature: '', outSignature: '' },
  },
});

// Module-level state: the agent is registered once per D-Bus connection and torn
// down on resetConnection. The instance is reused so its pin provider can be
// refreshed across scan cycles / config reloads.
let agentInstance: BlueZPairingAgent | null = null;
let registered = false;

/**
 * Register our pairing agent on the given bus (idempotent). Always refreshes the
 * pin provider so a reload-changed beurer_pin is honored even though registration
 * itself runs only once. Best-effort: any failure (e.g. no AgentManager1, another
 * default agent) is logged and pairing falls back to whatever system agent exists.
 */
export async function registerPairingAgent(
  bus: MessageBus,
  pinProvider: PinProvider,
): Promise<void> {
  if (!agentInstance) agentInstance = new BlueZPairingAgent();
  agentInstance.setPinProvider(pinProvider);
  if (registered) return;

  try {
    bus.export(AGENT_PATH, agentInstance);
    const bluez = await bus.getProxyObject('org.bluez', '/org/bluez');
    const manager = bluez.getInterface('org.bluez.AgentManager1');
    try {
      await manager.RegisterAgent(AGENT_PATH, AGENT_CAPABILITY);
    } catch (err) {
      // Re-registering the same path returns AlreadyExists; treat as success.
      if (!errMsg(err).includes('AlreadyExists')) throw err;
    }
    try {
      await manager.RequestDefaultAgent(AGENT_PATH);
    } catch (err) {
      bleLog.debug(`BlueZ RequestDefaultAgent failed (non-fatal): ${errMsg(err)}`);
    }
    registered = true;
    bleLog.debug(`BlueZ pairing agent registered (${AGENT_CAPABILITY})`);
  } catch (err) {
    bleLog.warn(
      `Could not register BlueZ pairing agent: ${errMsg(err)}. ` +
        'Pairing will rely on any system agent that is present.',
    );
    try {
      bus.unexport(AGENT_PATH, agentInstance);
    } catch {
      /* ignore */
    }
  }
}

/**
 * Forget the registered agent so the next registerPairingAgent re-exports it.
 * Called from resetConnection: destroying the D-Bus connection makes BlueZ drop
 * the agent automatically (the owner disconnected), so an explicit UnregisterAgent
 * is unnecessary and would race the connection teardown. Also used to reset state
 * between tests.
 */
export function forgetPairingAgent(): void {
  agentInstance = null;
  registered = false;
}
