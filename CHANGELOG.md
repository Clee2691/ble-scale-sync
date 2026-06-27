# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.20.1](https://github.com/Clee2691/ble-scale-sync/compare/v1.20.0...v1.20.1) (2026-06-27)


### Fixed

* resolve BLE listener leak warnings ([954fd94](https://github.com/Clee2691/ble-scale-sync/commit/954fd947dae461204b18295bb3af2cc9d6d6259c))
* resolve BLE listener leak warnings ([39a8dc8](https://github.com/Clee2691/ble-scale-sync/commit/39a8dc83324145496a278302251d3c9a572b3c7d))

## [1.20.0](https://github.com/Clee2691/ble-scale-sync/compare/v1.19.0...v1.20.0) (2026-06-22)


### Added

* add File (CSV/JSONL) and Strava exporters ([53a55bf](https://github.com/Clee2691/ble-scale-sync/commit/53a55bfa6266444ef79c1368a9f7bc499b2d9dbd))
* BLE adapter selection for multi-adapter setups ([#55](https://github.com/Clee2691/ble-scale-sync/issues/55)) ([a174824](https://github.com/Clee2691/ble-scale-sync/commit/a1748247ccd7e57c9ad62457a7076a9eb8f45e04))
* **ble:** add adapter liveness probe for watchdog classification ([#213](https://github.com/Clee2691/ble-scale-sync/issues/213)) ([e50ce5b](https://github.com/Clee2691/ble-scale-sync/commit/e50ce5b0128ab488f06ec3895306cdc4e557bfbe))
* **ble:** add consecutive-failure watchdog for BlueZ stuck-state recovery ([dcc822d](https://github.com/Clee2691/ble-scale-sync/commit/dcc822d16bbebe7682490114febc92326b69a611))
* **ble:** add poll-failure classification helpers ([#213](https://github.com/Clee2691/ble-scale-sync/issues/213)) ([484e16a](https://github.com/Clee2691/ble-scale-sync/commit/484e16ac32d58bd24dd78fe6d190afd97bd5dd04))
* **ble:** add Robi S9 adapter (Lefu/Fitdays FFB0-new protocol) ([#228](https://github.com/Clee2691/ble-scale-sync/issues/228)) ([4a8fda5](https://github.com/Clee2691/ble-scale-sync/commit/4a8fda56fa57bbb4f97b2a7cb36ca475a70e5515))
* **ble:** consecutive-failure watchdog for BlueZ stuck-state recovery ([91fdd82](https://github.com/Clee2691/ble-scale-sync/commit/91fdd8264223f2ed0118741ca2eac352df3098ba))
* **ble:** embedded MQTT broker ([#54](https://github.com/Clee2691/ble-scale-sync/issues/54)) + ESPHome proxy transport ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([8c58475](https://github.com/Clee2691/ble-scale-sync/commit/8c58475f88a3fc7ba957e260c060fa4bd5ea5433))
* **ble:** embedded MQTT broker for ESP32 proxy ([#54](https://github.com/Clee2691/ble-scale-sync/issues/54)) ([332cb0a](https://github.com/Clee2691/ble-scale-sync/commit/332cb0a9dc318ab428b3fbc582ed134b62e0648b))
* **ble:** ESPHome Native API broadcast handler, phase 1 ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([71cd5e7](https://github.com/Clee2691/ble-scale-sync/commit/71cd5e7dcac27feae17ca1c0769e13ae290f933d))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([98c7764](https://github.com/Clee2691/ble-scale-sync/commit/98c77649265c825e63aa353fdce28ca11441ff63))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([d00dba4](https://github.com/Clee2691/ble-scale-sync/commit/d00dba48776fec5b99a5bb04230b64ce8e0a1e0f))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([27a58d5](https://github.com/Clee2691/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([3868663](https://github.com/Clee2691/ble-scale-sync/commit/3868663c627ad490e54ea2fb0e78724045d4287c))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([9bff727](https://github.com/Clee2691/ble-scale-sync/commit/9bff727b98129fe89a50428d4b7131713fdd0bc2))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([d3bf8cc](https://github.com/Clee2691/ble-scale-sync/commit/d3bf8cc59156f48160c0a9177c971064669a1eec))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([4b5ce11](https://github.com/Clee2691/ble-scale-sync/commit/4b5ce1108cc51445827df36fbfbc2fbd9320e400))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([68517cd](https://github.com/Clee2691/ble-scale-sync/commit/68517cdc55df25a286b9fed07edfd414082f1ee7))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([67cc838](https://github.com/Clee2691/ble-scale-sync/commit/67cc838dae1776fbf1ab035c9cdde8406cafc257))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([0ce5c1a](https://github.com/Clee2691/ble-scale-sync/commit/0ce5c1af1a153086edb64d660c6fbadfb5afef70))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([663f55a](https://github.com/Clee2691/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([3289452](https://github.com/Clee2691/ble-scale-sync/commit/328945231a22a4914951d503ad7647023e74da04))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([bf15b87](https://github.com/Clee2691/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([c091439](https://github.com/Clee2691/ble-scale-sync/commit/c0914394f4cee8bc7053a37735ca0b0b727267a4))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([#187](https://github.com/Clee2691/ble-scale-sync/issues/187)) ([c850aa3](https://github.com/Clee2691/ble-scale-sync/commit/c850aa3b55b018143cb99e4659b53f04f1720ae2))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([98c7764](https://github.com/Clee2691/ble-scale-sync/commit/98c77649265c825e63aa353fdce28ca11441ff63))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([d00dba4](https://github.com/Clee2691/ble-scale-sync/commit/d00dba48776fec5b99a5bb04230b64ce8e0a1e0f))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([27a58d5](https://github.com/Clee2691/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([3868663](https://github.com/Clee2691/ble-scale-sync/commit/3868663c627ad490e54ea2fb0e78724045d4287c))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([9bff727](https://github.com/Clee2691/ble-scale-sync/commit/9bff727b98129fe89a50428d4b7131713fdd0bc2))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([d3bf8cc](https://github.com/Clee2691/ble-scale-sync/commit/d3bf8cc59156f48160c0a9177c971064669a1eec))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([4b5ce11](https://github.com/Clee2691/ble-scale-sync/commit/4b5ce1108cc51445827df36fbfbc2fbd9320e400))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([68517cd](https://github.com/Clee2691/ble-scale-sync/commit/68517cdc55df25a286b9fed07edfd414082f1ee7))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([67cc838](https://github.com/Clee2691/ble-scale-sync/commit/67cc838dae1776fbf1ab035c9cdde8406cafc257))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([0ce5c1a](https://github.com/Clee2691/ble-scale-sync/commit/0ce5c1af1a153086edb64d660c6fbadfb5afef70))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([663f55a](https://github.com/Clee2691/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([3289452](https://github.com/Clee2691/ble-scale-sync/commit/328945231a22a4914951d503ad7647023e74da04))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([bf15b87](https://github.com/Clee2691/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))
* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/Clee2691/ble-scale-sync/issues/182)) ([c091439](https://github.com/Clee2691/ble-scale-sync/commit/c0914394f4cee8bc7053a37735ca0b0b727267a4))
* **config:** add ble.bind_key and adapter configure() hook ([#232](https://github.com/Clee2691/ble-scale-sync/issues/232)) ([b319e69](https://github.com/Clee2691/ble-scale-sync/commit/b319e69f7ea085472bfcb5ba6218b21b37aaede1))
* **config:** hot-reload config.yaml without restart ([#123](https://github.com/Clee2691/ble-scale-sync/issues/123)) ([d213d5c](https://github.com/Clee2691/ble-scale-sync/commit/d213d5ccd242312f5251c59128708ca503b0cb23))
* **config:** schema + types for esphome-proxy handler ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([25acfff](https://github.com/Clee2691/ble-scale-sync/commit/25acfffd6de38f758e177bdec357575d157fe1ab))
* drop Node 20 support, require Node 22+ ([25712d1](https://github.com/Clee2691/ble-scale-sync/commit/25712d1b84274fbab95f0adbef3c76bcf423f3d8))
* ESP32 BLE MQTT proxy ([97eae97](https://github.com/Clee2691/ble-scale-sync/commit/97eae973988ef06b595a21dcfc72671c33b0ae8f))
* **eufy-p2:** AES handshake adapter for T9148/T9149 ([#98](https://github.com/Clee2691/ble-scale-sync/issues/98)) ([2f9ec52](https://github.com/Clee2691/ble-scale-sync/commit/2f9ec52f6d5c9eb0d606d3a047aa6558151c7cc4))
* **exporter:** add Intervals.icu exporter ([#203](https://github.com/Clee2691/ble-scale-sync/issues/203)) ([60af3d0](https://github.com/Clee2691/ble-scale-sync/commit/60af3d0e98fdb90268dbe43d7316b6bc8e9ff3c1))
* **exporter:** add Runalyze exporter ([#204](https://github.com/Clee2691/ble-scale-sync/issues/204)) ([8f8d7a0](https://github.com/Clee2691/ble-scale-sync/commit/8f8d7a0222bfb883fedf9c989764aed585769712))
* **exporter:** add Telegram exporter ([#207](https://github.com/Clee2691/ble-scale-sync/issues/207)) ([0b73e0f](https://github.com/Clee2691/ble-scale-sync/commit/0b73e0f76601603e578f824d5b92cccf2c451e29))
* **exporter:** add Wger exporter ([#205](https://github.com/Clee2691/ble-scale-sync/issues/205)) ([a9aed3a](https://github.com/Clee2691/ble-scale-sync/commit/a9aed3a7d57db9a8a93ebf6c6bc1bc8d710085d3))
* **firmware:** support generic ESP-WROOM-32 boards ([487e482](https://github.com/Clee2691/ble-scale-sync/commit/487e482084ac42be73f8f6f4bde9d356f2f6a1a1))
* **ha-addon:** unit preferences, last_known_weight persistence, docs ([4bf6562](https://github.com/Clee2691/ble-scale-sync/commit/4bf65628b7e1e7022713eb6a26e1c3eb525344b8))
* Home Assistant Add-on with MQTT auto-detection ([48ad8bd](https://github.com/Clee2691/ble-scale-sync/commit/48ad8bd68c74953b3920b3fa9795e9c00de7e884))
* **mqtt-proxy:** ESP32 autonomous GATT connect for fast-sleeping scales ([#214](https://github.com/Clee2691/ble-scale-sync/issues/214)) ([c4a3b33](https://github.com/Clee2691/ble-scale-sync/commit/c4a3b33ce28a003e63dfbdf14ae10991d6df9ff1))
* replay cached offline frames with timestamps ([#164](https://github.com/Clee2691/ble-scale-sync/issues/164)) ([6bae585](https://github.com/Clee2691/ble-scale-sync/commit/6bae5858a8d63f373361ed1aef979915a23c1183))
* **runtime:** systemd Type=notify watchdog integration ([#144](https://github.com/Clee2691/ble-scale-sync/issues/144)) ([68ee5bf](https://github.com/Clee2691/ble-scale-sync/commit/68ee5bf4b1aede87080c432512233f4e09b5a680))
* **scales:** add declarative MatchDescriptor and matchesDescriptor helper ([#245](https://github.com/Clee2691/ble-scale-sync/issues/245)) ([7e63799](https://github.com/Clee2691/ble-scale-sync/commit/7e637998ba8c68002fad9f9bb331f9340263305e))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([98c7764](https://github.com/Clee2691/ble-scale-sync/commit/98c77649265c825e63aa353fdce28ca11441ff63))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([d00dba4](https://github.com/Clee2691/ble-scale-sync/commit/d00dba48776fec5b99a5bb04230b64ce8e0a1e0f))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([27a58d5](https://github.com/Clee2691/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([3868663](https://github.com/Clee2691/ble-scale-sync/commit/3868663c627ad490e54ea2fb0e78724045d4287c))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([9bff727](https://github.com/Clee2691/ble-scale-sync/commit/9bff727b98129fe89a50428d4b7131713fdd0bc2))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([d3bf8cc](https://github.com/Clee2691/ble-scale-sync/commit/d3bf8cc59156f48160c0a9177c971064669a1eec))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([4b5ce11](https://github.com/Clee2691/ble-scale-sync/commit/4b5ce1108cc51445827df36fbfbc2fbd9320e400))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([68517cd](https://github.com/Clee2691/ble-scale-sync/commit/68517cdc55df25a286b9fed07edfd414082f1ee7))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([67cc838](https://github.com/Clee2691/ble-scale-sync/commit/67cc838dae1776fbf1ab035c9cdde8406cafc257))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([0ce5c1a](https://github.com/Clee2691/ble-scale-sync/commit/0ce5c1af1a153086edb64d660c6fbadfb5afef70))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([663f55a](https://github.com/Clee2691/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([3289452](https://github.com/Clee2691/ble-scale-sync/commit/328945231a22a4914951d503ad7647023e74da04))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([bf15b87](https://github.com/Clee2691/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([c091439](https://github.com/Clee2691/ble-scale-sync/commit/c0914394f4cee8bc7053a37735ca0b0b727267a4))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/Clee2691/ble-scale-sync/issues/178)) ([3f5ecd4](https://github.com/Clee2691/ble-scale-sync/commit/3f5ecd44e6f511b86e343f4dd392a9d031960ba1))
* **scales:** add Xiaomi Mi Scale 2 broadcast adapter ([#134](https://github.com/Clee2691/ble-scale-sync/issues/134)) ([6e5ffb4](https://github.com/Clee2691/ble-scale-sync/commit/6e5ffb4fa994546231d42b6493cd875e2f2e46fe))
* **scales:** add Xiaomi Mijia S800 broadcast adapter ([#232](https://github.com/Clee2691/ble-scale-sync/issues/232)) ([5ee2c2e](https://github.com/Clee2691/ble-scale-sync/commit/5ee2c2eb4edf600eba414e91585743b103db641c))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([98c7764](https://github.com/Clee2691/ble-scale-sync/commit/98c77649265c825e63aa353fdce28ca11441ff63))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([d00dba4](https://github.com/Clee2691/ble-scale-sync/commit/d00dba48776fec5b99a5bb04230b64ce8e0a1e0f))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([27a58d5](https://github.com/Clee2691/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([3868663](https://github.com/Clee2691/ble-scale-sync/commit/3868663c627ad490e54ea2fb0e78724045d4287c))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([9bff727](https://github.com/Clee2691/ble-scale-sync/commit/9bff727b98129fe89a50428d4b7131713fdd0bc2))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([d3bf8cc](https://github.com/Clee2691/ble-scale-sync/commit/d3bf8cc59156f48160c0a9177c971064669a1eec))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([4b5ce11](https://github.com/Clee2691/ble-scale-sync/commit/4b5ce1108cc51445827df36fbfbc2fbd9320e400))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([68517cd](https://github.com/Clee2691/ble-scale-sync/commit/68517cdc55df25a286b9fed07edfd414082f1ee7))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([67cc838](https://github.com/Clee2691/ble-scale-sync/commit/67cc838dae1776fbf1ab035c9cdde8406cafc257))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([0ce5c1a](https://github.com/Clee2691/ble-scale-sync/commit/0ce5c1af1a153086edb64d660c6fbadfb5afef70))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([663f55a](https://github.com/Clee2691/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([3289452](https://github.com/Clee2691/ble-scale-sync/commit/328945231a22a4914951d503ad7647023e74da04))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([bf15b87](https://github.com/Clee2691/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([c091439](https://github.com/Clee2691/ble-scale-sync/commit/c0914394f4cee8bc7053a37735ca0b0b727267a4))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([#180](https://github.com/Clee2691/ble-scale-sync/issues/180)) ([3f52568](https://github.com/Clee2691/ble-scale-sync/commit/3f525688a099d5e5510edfb96e60cec9ab91fe3e))
* **scales:** central resolveAdapter with priority-based precedence and startup overlap detection ([#245](https://github.com/Clee2691/ble-scale-sync/issues/245)) ([dcc2bdd](https://github.com/Clee2691/ble-scale-sync/commit/dcc2bddafa31f5320729538b1d59a1ac08fad2ba))
* **scales:** register Xiaomi S800 and inject bind key at startup ([#232](https://github.com/Clee2691/ble-scale-sync/issues/232)) ([d3fdb65](https://github.com/Clee2691/ble-scale-sync/commit/d3fdb655fdf9d89f96f3e2770d15b0aa9c7db685))
* **scales:** scaffold experimental ADE A2 adapter ([#159](https://github.com/Clee2691/ble-scale-sync/issues/159)) ([#160](https://github.com/Clee2691/ble-scale-sync/issues/160)) ([11aec6f](https://github.com/Clee2691/ble-scale-sync/commit/11aec6f79bc01c4c4a7dee9e68ffa2e0c72b2d51))
* **scale:** support Renpho ES-32MD via ES-CS20M adapter ([#172](https://github.com/Clee2691/ble-scale-sync/issues/172)) ([068c14f](https://github.com/Clee2691/ble-scale-sync/commit/068c14f4563a6529afb6b5bbc7bfaa716371642f))
* stats.blescalesync.dev and docs update ([c60605f](https://github.com/Clee2691/ble-scale-sync/commit/c60605fef5446ee77c52f971238c33911c5cfbdd))
* stats.blescalesync.dev domain, docs update, navbar link ([edf0b77](https://github.com/Clee2691/ble-scale-sync/commit/edf0b771324511f6b50944fac1984d52c11e2a2a))
* stats.blescalesync.dev, docs update, navbar link ([26046ad](https://github.com/Clee2691/ble-scale-sync/commit/26046ad2fcb7901f4a3ad9aa41f6ce11c8b63a04))
* **trisa:** implement ADE BA 1600 challenge response ([#138](https://github.com/Clee2691/ble-scale-sync/issues/138)) ([#158](https://github.com/Clee2691/ble-scale-sync/issues/158)) ([91aa28e](https://github.com/Clee2691/ble-scale-sync/commit/91aa28eedef68e0c77da7ceb389fe411b151f48c))
* **trisa:** partial support for ADE BA 1600 (fitvigo) ([190ba95](https://github.com/Clee2691/ble-scale-sync/commit/190ba953121d0cc1bb6ae7b7a49ff3141b3ee9a2))
* **trisa:** support ADE BA 1600 (fitvigo) firmware variant — weight only ([515d1a7](https://github.com/Clee2691/ble-scale-sync/commit/515d1a72faab28abbadddc41ddca60337358b68b))
* update check with anonymous usage statistics ([5837d95](https://github.com/Clee2691/ble-scale-sync/commit/5837d95fb6aec66403e242b6df551b41fbeb9570))
* update check with anonymous usage statistics ([#87](https://github.com/Clee2691/ble-scale-sync/issues/87)) ([d60e6be](https://github.com/Clee2691/ble-scale-sync/commit/d60e6beb85d115eb57dd6d56e403e0b00ec20671))
* update check with anonymous usage statistics ([#87](https://github.com/Clee2691/ble-scale-sync/issues/87)) ([7984085](https://github.com/Clee2691/ble-scale-sync/commit/79840853a0000ada3b1cfc4b1b49f2f1e707630f))
* **wizard:** esphome-proxy setup step ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([0e9246b](https://github.com/Clee2691/ble-scale-sync/commit/0e9246b28884dd03b9d95850454904df10b550a5))
* **worker:** fetch latest version from GitHub Releases API ([2ef71e5](https://github.com/Clee2691/ble-scale-sync/commit/2ef71e5f3467520ac96979a8aaa2712b2e537523))
* **worker:** show daily average installations for 7d/30d periods ([d1b428a](https://github.com/Clee2691/ble-scale-sync/commit/d1b428ae2ac77347eb158e8b7c6ac778f36c0e37))


### Fixed

* add 0x22 start measurement command and debug logging to QN Scale ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([c60087e](https://github.com/Clee2691/ble-scale-sync/commit/c60087ea09ad55c900b1a2c1e76fda9edf451e32))
* add AE01 auth handshake and inter-step delays to QN Scale ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([9f24d53](https://github.com/Clee2691/ble-scale-sync/commit/9f24d53a5ad0c307b81a4d35ca3f0d8aaab202b8))
* **addon:** run as root, add host_dbus, create garmin-tokens dir ([65e11fc](https://github.com/Clee2691/ble-scale-sync/commit/65e11fcdf69e1ea055799ca59bc13dbcc9575e31))
* **addon:** unignore add-on config.yaml, warn on missing MQTT broker ([8d30a03](https://github.com/Clee2691/ble-scale-sync/commit/8d30a031769a6c889f42def863ed5ef910d1c870))
* **addon:** version quoting, yaml_escape hardening, birth_date validation ([f2824a7](https://github.com/Clee2691/ble-scale-sync/commit/f2824a7ac3fb0dea2296bf5245413a6aa1c32dc7))
* **addon:** YAML escaping, manifest fields, adapter scope ([e83adfc](https://github.com/Clee2691/ble-scale-sync/commit/e83adfc1da74c0534a0072f8a254d35eeb077748))
* address Copilot review comments on PR [#47](https://github.com/Clee2691/ble-scale-sync/issues/47) ([ca2e2b8](https://github.com/Clee2691/ble-scale-sync/commit/ca2e2b89e4d3b030dab20161942dba02f5a88c9e))
* address Copilot review feedback on update check ([#88](https://github.com/Clee2691/ble-scale-sync/issues/88)) ([001d030](https://github.com/Clee2691/ble-scale-sync/commit/001d0305033ae6dba547da0ee25a4b93c4c44ad9))
* address Copilot review on ESP32 proxy docs ([#53](https://github.com/Clee2691/ble-scale-sync/issues/53)) ([7b09f52](https://github.com/Clee2691/ble-scale-sync/commit/7b09f52f14fd560f2e0a1f3d14b27dc70c72c9f6))
* address remaining Copilot review issues on PR [#95](https://github.com/Clee2691/ble-scale-sync/issues/95) ([7375278](https://github.com/Clee2691/ble-scale-sync/commit/7375278066048e095a489290c6fa9a63a5dde7f2))
* address review feedback on update check ([3b3e83b](https://github.com/Clee2691/ble-scale-sync/commit/3b3e83b84bd391bdda2d9e22b8962b574e739f45))
* address review feedback on update check ([a626f31](https://github.com/Clee2691/ble-scale-sync/commit/a626f318c4dbf61a5b123733b3cc1081394dfd95))
* address second round of Copilot review on PR [#95](https://github.com/Clee2691/ble-scale-sync/issues/95) ([ec7bfe7](https://github.com/Clee2691/ble-scale-sync/commit/ec7bfe7d257fb9becc0d5b74f245110a721595ea))
* **beurer-sanitas:** parse SBF70 compact 0x58 frame ([#112](https://github.com/Clee2691/ble-scale-sync/issues/112)) ([db8cf74](https://github.com/Clee2691/ble-scale-sync/commit/db8cf7436d4c432223443b816402541c1262ed5e))
* **beurer-sanitas:** parse SBF70 compact 0x58 frame with weight at bytes [3-4] ([#112](https://github.com/Clee2691/ble-scale-sync/issues/112)) ([bc4738d](https://github.com/Clee2691/ble-scale-sync/commit/bc4738d5a631306c34cc9ba944f8d7db7b247862))
* BLE_ADAPTER validation, wizard adapter passthrough, run.sh hardening ([46c3d28](https://github.com/Clee2691/ble-scale-sync/commit/46c3d28373cecded3777b50143752632c37b1faf))
* **ble,eufy:** address Copilot review feedback on [#120](https://github.com/Clee2691/ble-scale-sync/issues/120) ([b013d05](https://github.com/Clee2691/ble-scale-sync/commit/b013d05740f94a0343471323b13426ec8c72d2c1))
* **ble,logger:** warn on dual-mode adapter GATT gap + honor runtime.debug ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([ea88f68](https://github.com/Clee2691/ble-scale-sync/commit/ea88f6807ec9842cfde5ce15db234e5713e30cc9))
* **ble:** advertise lazy_notify capability to ESP32 proxy ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([9004d31](https://github.com/Clee2691/ble-scale-sync/commit/9004d316b60b70c3cc7e76f673a4dbada609fa96))
* **ble:** attempt bonding and name failed CCCD subscribe for Beurer BF720 ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([45bfd87](https://github.com/Clee2691/ble-scale-sync/commit/45bfd87cf51de6ec565d6fdcd7038f5da197d31e))
* **ble:** bootstrap ESP32 autonomous GATT connect for GATT-only scales ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([2266086](https://github.com/Clee2691/ble-scale-sync/commit/226608682f973e444b3741cae4af92a9c98d5427))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([98c7764](https://github.com/Clee2691/ble-scale-sync/commit/98c77649265c825e63aa353fdce28ca11441ff63))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([d00dba4](https://github.com/Clee2691/ble-scale-sync/commit/d00dba48776fec5b99a5bb04230b64ce8e0a1e0f))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([27a58d5](https://github.com/Clee2691/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([3868663](https://github.com/Clee2691/ble-scale-sync/commit/3868663c627ad490e54ea2fb0e78724045d4287c))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([9bff727](https://github.com/Clee2691/ble-scale-sync/commit/9bff727b98129fe89a50428d4b7131713fdd0bc2))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([d3bf8cc](https://github.com/Clee2691/ble-scale-sync/commit/d3bf8cc59156f48160c0a9177c971064669a1eec))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([4b5ce11](https://github.com/Clee2691/ble-scale-sync/commit/4b5ce1108cc51445827df36fbfbc2fbd9320e400))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([68517cd](https://github.com/Clee2691/ble-scale-sync/commit/68517cdc55df25a286b9fed07edfd414082f1ee7))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([67cc838](https://github.com/Clee2691/ble-scale-sync/commit/67cc838dae1776fbf1ab035c9cdde8406cafc257))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([0ce5c1a](https://github.com/Clee2691/ble-scale-sync/commit/0ce5c1af1a153086edb64d660c6fbadfb5afef70))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([663f55a](https://github.com/Clee2691/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([3289452](https://github.com/Clee2691/ble-scale-sync/commit/328945231a22a4914951d503ad7647023e74da04))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([bf15b87](https://github.com/Clee2691/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([c091439](https://github.com/Clee2691/ble-scale-sync/commit/c0914394f4cee8bc7053a37735ca0b0b727267a4))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/Clee2691/ble-scale-sync/issues/177)) ([#179](https://github.com/Clee2691/ble-scale-sync/issues/179)) ([6cb7992](https://github.com/Clee2691/ble-scale-sync/commit/6cb799290687fd02c84dbcbfb7dd1fc5106eddcb))
* **ble:** command host-ordered proxy notify enable after subscribe ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([d33e3aa](https://github.com/Clee2691/ble-scale-sync/commit/d33e3aa60214dad1326c706bdb9cbde97c09fa61))
* **ble:** connect before publishing scan results on autonomous path ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([793fdb2](https://github.com/Clee2691/ble-scale-sync/commit/793fdb2025d8da47500b2eaa5a102c34811c0d2e))
* **ble:** connect random-address GATT scales via ESP32 proxy ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([989ace6](https://github.com/Clee2691/ble-scale-sync/commit/989ace6a529d8252a149016349bad231fe07f940))
* **ble:** correct misreported static-random addr_type at scan source ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([0a2097e](https://github.com/Clee2691/ble-scale-sync/commit/0a2097e8973445a6201599b41d5a7f872dfeb34e))
* **ble:** correct Robi S9 weight scaling to 3-byte grams ([#248](https://github.com/Clee2691/ble-scale-sync/issues/248)) ([21b3afa](https://github.com/Clee2691/ble-scale-sync/commit/21b3afa5a707815ddceb3f8a750f65f2eea69ee9))
* **ble:** decode Sanitas SBF70/BF710 body composition via 0x59 ACK stream ([#211](https://github.com/Clee2691/ble-scale-sync/issues/211)) ([c3beb00](https://github.com/Clee2691/ble-scale-sync/commit/c3beb007372ff0a051a82d1ba411b6ef14d9e7ab))
* **ble:** derive connect addr_type from MAC bits for misreported random scales ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([4909038](https://github.com/Clee2691/ble-scale-sync/commit/4909038b2a4f2052d0fba85e7fc10131e4fad938))
* **ble:** ESPHome handler listener leaks, error messages, and shared AsyncQueue ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([4004e7d](https://github.com/Clee2691/ble-scale-sync/commit/4004e7d171c44f0056a2d7675395139d323ff8f8))
* **ble:** guard against dying-peer connect stall ([#143](https://github.com/Clee2691/ble-scale-sync/issues/143)) ([abd3c22](https://github.com/Clee2691/ble-scale-sync/commit/abd3c227547c4a92f05f2d5be47087049339b7c3))
* **ble:** harden embedded MQTT broker ACL, auth, and shutdown ([#54](https://github.com/Clee2691/ble-scale-sync/issues/54)) ([fee0240](https://github.com/Clee2691/ble-scale-sync/commit/fee02408321fd5b68f7409d10ddd8a4d83bbee1e))
* **ble:** keep a permanent error listener on the ESPHome proxy client ([#210](https://github.com/Clee2691/ble-scale-sync/issues/210)) ([ca7eb7d](https://github.com/Clee2691/ble-scale-sync/commit/ca7eb7d2f048a6f90d65d75878340ba7b0544525))
* **ble:** log Phase 1 capability summary on ESPHome proxy connect ([abca479](https://github.com/Clee2691/ble-scale-sync/commit/abca4793e216d53dcbcd6714819c3825ddc81132)), closes [#133](https://github.com/Clee2691/ble-scale-sync/issues/133)
* **ble:** match QN scales advertising AE00 alongside fff0 ([#235](https://github.com/Clee2691/ble-scale-sync/issues/235)) ([6a12687](https://github.com/Clee2691/ble-scale-sync/commit/6a126877120b106ff1a9d452e46eb146477c3160))
* **ble:** parse QN 0x23 stored record for V10 Renpho/ES-CS20M ([#213](https://github.com/Clee2691/ble-scale-sync/issues/213)) ([5617f28](https://github.com/Clee2691/ble-scale-sync/commit/5617f28fb7d02f47a34c86a2aa7b29fbdbe33688))
* **ble:** per-address grace state in esphome-proxy scanAndReadRaw ([#161](https://github.com/Clee2691/ble-scale-sync/issues/161)) ([875cb28](https://github.com/Clee2691/ble-scale-sync/commit/875cb283c9df725e615f76e1c9919185ad773cc0))
* **ble:** preserve bond by not RemoveDevice'ing paired scales ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([d662199](https://github.com/Clee2691/ble-scale-sync/commit/d662199e45a14c6bfaf45018682177bbe618e6a1))
* **ble:** purge BlueZ cache after failed GATT read ([#80](https://github.com/Clee2691/ble-scale-sync/issues/80)) ([31cc295](https://github.com/Clee2691/ble-scale-sync/commit/31cc2958dd45e7e68944f1c8142353d48d74370d))
* **ble:** read ESPHome proxy pre-decoded GATT uuid ([#229](https://github.com/Clee2691/ble-scale-sync/issues/229)) ([#234](https://github.com/Clee2691/ble-scale-sync/issues/234)) ([c1079c7](https://github.com/Clee2691/ble-scale-sync/commit/c1079c72375856b8179234bebd5d5e1ef82a7f60))
* **ble:** register BlueZ pairing agent for BF720 encrypted bonding ([#168](https://github.com/Clee2691/ble-scale-sync/issues/168)) ([d2a1aaf](https://github.com/Clee2691/ble-scale-sync/commit/d2a1aafa650c4e02dc5da89db7c99d15a0f0e012))
* **ble:** remove shadowed deviceMac from merge conflict resolution ([2894f17](https://github.com/Clee2691/ble-scale-sync/commit/2894f17cab044e641d89affe826c16d97d1449ef))
* **ble:** reset gattInProgress on failed GATT connect + clearer ESP32 errors ([#201](https://github.com/Clee2691/ble-scale-sync/issues/201)) ([dcd1ac6](https://github.com/Clee2691/ble-scale-sync/commit/dcd1ac6f7d1a456b1e83eecf57a3709bddb2dd5f))
* **ble:** retry GATT char enumeration on BlueZ ServicesResolved race ([#98](https://github.com/Clee2691/ble-scale-sync/issues/98)) ([6ea663d](https://github.com/Clee2691/ble-scale-sync/commit/6ea663d23bca60dd8b9776a78492219d46c4f9a1))
* **ble:** route dual-mode adapters to GATT when no broadcast data ([#201](https://github.com/Clee2691/ble-scale-sync/issues/201)) ([9de2dee](https://github.com/Clee2691/ble-scale-sync/commit/9de2deea0f8223f72a1c631ed31584a5600a6fba))
* **ble:** RSSI freshness no longer treats absent prop as stale ([#167](https://github.com/Clee2691/ble-scale-sync/issues/167)) ([8340caa](https://github.com/Clee2691/ble-scale-sync/commit/8340caa0ef3de7a5499dfca26190cc5864ab8e7e)), closes [#169](https://github.com/Clee2691/ble-scale-sync/issues/169)
* **ble:** RSSI freshness no longer treats absent prop as stale ([#167](https://github.com/Clee2691/ble-scale-sync/issues/167)) ([396837f](https://github.com/Clee2691/ble-scale-sync/commit/396837fd10c683ae334e9224150a4d7d1abb795f))
* **ble:** send BLE address type on ESPHome proxy GATT connect ([#215](https://github.com/Clee2691/ble-scale-sync/issues/215)) ([#223](https://github.com/Clee2691/ble-scale-sync/issues/223)) ([71e735b](https://github.com/Clee2691/ble-scale-sync/commit/71e735b6c3460f9aa2b3d2d9e724c06da94ddeae))
* **ble:** tag idle vs wedge poll failures in scanAndReadRaw ([#213](https://github.com/Clee2691/ble-scale-sync/issues/213)) ([407753e](https://github.com/Clee2691/ble-scale-sync/commit/407753e261815f31e128a88b5f97da7352baabda))
* bust camo cache for license badge ([67aac16](https://github.com/Clee2691/ble-scale-sync/commit/67aac16937dc3159bffb1cb3184bfe173a356df4))
* **ci:** add encoding dependency to resolve npm ci sync error ([e0d97f2](https://github.com/Clee2691/ble-scale-sync/commit/e0d97f2130a0a471e65f6ee14b18636e9db7b101))
* clean up MQTT subscription on read timeout ([#49](https://github.com/Clee2691/ble-scale-sync/issues/49)) ([c8da15c](https://github.com/Clee2691/ble-scale-sync/commit/c8da15cc99d20a17042bd3a81ca2838482a63019))
* **config:** accept bare 32-hex CoreBluetooth UUID for scale_mac ([#212](https://github.com/Clee2691/ble-scale-sync/issues/212)) ([#224](https://github.com/Clee2691/ble-scale-sync/issues/224)) ([47d5033](https://github.com/Clee2691/ble-scale-sync/commit/47d503329a828c5127c827df98e902dc26cee36c))
* Copilot round 5 review on PR [#95](https://github.com/Clee2691/ble-scale-sync/issues/95) ([f44d420](https://github.com/Clee2691/ble-scale-sync/commit/f44d42068fa05a88a2dbb6ea0f3f6daa3bb52d02))
* **deps:** regen package-lock.json with emnapi entries (CI fix) ([40b3d9d](https://github.com/Clee2691/ble-scale-sync/commit/40b3d9dd5e77aeafc45818363a52db3bb50ab15a))
* **docker:** add missing diagnose command to entrypoint ([#98](https://github.com/Clee2691/ble-scale-sync/issues/98)) ([38463bb](https://github.com/Clee2691/ble-scale-sync/commit/38463bb532ab7ed63983fb8378c7bbf98b9b7ebf))
* **docker:** add missing setup-strava command to entrypoint ([#188](https://github.com/Clee2691/ble-scale-sync/issues/188)) ([#189](https://github.com/Clee2691/ble-scale-sync/issues/189)) ([af47e3a](https://github.com/Clee2691/ble-scale-sync/commit/af47e3aa1322fa34a440f8d43781793802a46080))
* **docker:** add python3-dev + libffi-dev + libssl-dev for armv7 cffi build ([79f474b](https://github.com/Clee2691/ble-scale-sync/commit/79f474b1344894e7e9b6b7d31c4711634061dd89))
* ensure AE02 subscribe before AE01 init in state machine ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([28a4390](https://github.com/Clee2691/ble-scale-sync/commit/28a4390384426247d3744b2bfef240c20e8f3573))
* **esp32:** restore aioble IRQ before GATT connect ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([c29dc1c](https://github.com/Clee2691/ble-scale-sync/commit/c29dc1c41439b35207b16759481aa81ffd6c5d9e))
* **exporters:** fail fast on non-retryable HTTP errors + validate required config ([6ebea77](https://github.com/Clee2691/ble-scale-sync/commit/6ebea77b81320eeb7bf20a106c96b1cb460c524a))
* **firmware:** add per-board IDF-heap guard tunables defaulting to 0 ([#139](https://github.com/Clee2691/ble-scale-sync/issues/139)) ([59bd65f](https://github.com/Clee2691/ble-scale-sync/commit/59bd65f8a7b83851c1acecd75c8d91054409b992))
* **firmware:** correct mip ref position for async primitives install ([8974caa](https://github.com/Clee2691/ble-scale-sync/commit/8974caa1f9b55cabb792fb0532b29785518feabb)), closes [#198](https://github.com/Clee2691/ble-scale-sync/issues/198)
* **firmware:** drain aioble services before characteristic discovery ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([c584098](https://github.com/Clee2691/ble-scale-sync/commit/c58409824672a9ab163d523a9bcbe3d7e9a36498))
* **firmware:** drive aioble GATT discovery with async for ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([c943e11](https://github.com/Clee2691/ble-scale-sync/commit/c943e11b87213300619872656b5af91ea3579970))
* **firmware:** ease GATT connect on no-PSRAM ESP32 + heap diagnostic ([#139](https://github.com/Clee2691/ble-scale-sync/issues/139)) ([7bef0f6](https://github.com/Clee2691/ble-scale-sync/commit/7bef0f6866a3e1700eff607d1adbe18dea0cf00e))
* **firmware:** enable proxy notify lazily on per-char subscribe command ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([f4a4492](https://github.com/Clee2691/ble-scale-sync/commit/f4a4492606bd798d3813d698806d5c46f8cb073f))
* **firmware:** flush scan batch early on a known scale MAC ([#201](https://github.com/Clee2691/ble-scale-sync/issues/201)) ([c692b42](https://github.com/Clee2691/ble-scale-sync/commit/c692b426972edaf0fb895475262afa166cf72587))
* **firmware:** harden constrained ESP32 boards against scan-buffer OOM ([c99605e](https://github.com/Clee2691/ble-scale-sync/commit/c99605e22f667f06023fdd9ee3f57c4f0c8b9e36))
* **firmware:** match scan_duration_ms to GATT connect timeout ([#141](https://github.com/Clee2691/ble-scale-sync/issues/141)) ([54dcc3b](https://github.com/Clee2691/ble-scale-sync/commit/54dcc3bda965ac9482659017f3c08d68efea716d))
* **firmware:** parse 128-bit / 32-bit service UUIDs and service data ([bf918ad](https://github.com/Clee2691/ble-scale-sync/commit/bf918ad75fbaeb35465544af74871a5f0bd286fb))
* **firmware:** parse lazy_notify capability flag from config ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([b24292a](https://github.com/Clee2691/ble-scale-sync/commit/b24292a447bd851f92c7db9508047b3050a05841))
* **firmware:** publish service-UUID-only devices in scan results ([c1f9723](https://github.com/Clee2691/ble-scale-sync/commit/c1f9723013972749846acb7ff76fa5ec169a164c)), closes [#201](https://github.com/Clee2691/ble-scale-sync/issues/201)
* **firmware:** refuse GATT connect on near-empty IDF heap instead of crashing ([#139](https://github.com/Clee2691/ble-scale-sync/issues/139)) ([1beac82](https://github.com/Clee2691/ble-scale-sync/commit/1beac82c6fdf57279855a7f06972f83a05502ac2))
* **firmware:** retry opposite BLE address type on any connect failure ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([7a958ab](https://github.com/Clee2691/ble-scale-sync/commit/7a958ab0f4ca83364014617281bed1f21a259d64))
* **firmware:** trust controller-reported BLE address type on autonomous connect ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([4ae2662](https://github.com/Clee2691/ble-scale-sync/commit/4ae2662fd96e8b29d13226c1909a97222254f758))
* force-exit on hung shutdown so the watchdog actually restarts the container ([#194](https://github.com/Clee2691/ble-scale-sync/issues/194)) ([#196](https://github.com/Clee2691/ble-scale-sync/issues/196)) ([3b60393](https://github.com/Clee2691/ble-scale-sync/commit/3b6039397f53bc4d85f94a9889b7fedac4b24356))
* **garmin:** migrate Python bridge to garminconnect 0.3.x ([#114](https://github.com/Clee2691/ble-scale-sync/issues/114)) ([d16ecfc](https://github.com/Clee2691/ble-scale-sync/commit/d16ecfc303a7b55524e47633666378ae8b783e1e))
* harden Strava token handling and CSV escaping ([4831c25](https://github.com/Clee2691/ble-scale-sync/commit/4831c258c577eb4a382c388cd197b5a1a92b7995))
* improve fallback profile warning for GATT readings ([#50](https://github.com/Clee2691/ble-scale-sync/issues/50)) ([60e993d](https://github.com/Clee2691/ble-scale-sync/commit/60e993dcf446c2a4cda7d038aba1d5aff982544c))
* MQTT proxy code quality improvements ([6e8371e](https://github.com/Clee2691/ble-scale-sync/commit/6e8371e4ec4635b4c77ffe05475752216f42a2fd))
* **node-ble:** add timeout to device.gatt() and waitForRawReading ([2d672f5](https://github.com/Clee2691/ble-scale-sync/commit/2d672f594695478b063f447e363eb81d7f21d992))
* **node-ble:** add timeout to device.gatt() and waitForRawReading ([2e45366](https://github.com/Clee2691/ble-scale-sync/commit/2e45366623f873aaf1b415c3f1ccc4edef860613)), closes [#140](https://github.com/Clee2691/ble-scale-sync/issues/140)
* persistent adapter, continuous discovery, and deeper recovery tiers ([#80](https://github.com/Clee2691/ble-scale-sync/issues/80)) ([e456009](https://github.com/Clee2691/ble-scale-sync/commit/e4560099631977396fec98ab37b23aa001796d24))
* persistent D-Bus connection to prevent orphaned BlueZ discovery sessions ([#80](https://github.com/Clee2691/ble-scale-sync/issues/80)) ([49be8fa](https://github.com/Clee2691/ble-scale-sync/commit/49be8fa23124441f9a441b840572229751ab092e))
* preemptive btmgmt reset after GATT to clear BlueZ zombie state ([#80](https://github.com/Clee2691/ble-scale-sync/issues/80)) ([7766c3e](https://github.com/Clee2691/ble-scale-sync/commit/7766c3e09ca38478d56133aaa9649e85d85a6abe))
* prettier formatting and BLE_HANDLER env var validation ([928f5c7](https://github.com/Clee2691/ble-scale-sync/commit/928f5c765690753f5e8f56db01f326825998354d))
* prevent orphaned BlueZ discovery sessions in continuous mode ([e6ee513](https://github.com/Clee2691/ble-scale-sync/commit/e6ee51350ced0ef9a50d77380d201a21627fcc76))
* prevent orphaned BlueZ discovery sessions in continuous mode ([#80](https://github.com/Clee2691/ble-scale-sync/issues/80)) ([7ab4a66](https://github.com/Clee2691/ble-scale-sync/commit/7ab4a66e41a1b99a1a138658ce0864d9c2c53b77))
* QN Scale 0x13 config byte set to 0x01 (kg) instead of 0x08 ([22aa010](https://github.com/Clee2691/ble-scale-sync/commit/22aa01056d14cd34dec6d1be62fd5aa152157510))
* QN Scale fallback handshake for Linux node-ble timing ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([80eb254](https://github.com/Clee2691/ble-scale-sync/commit/80eb2540965ae3fd34cca2dcc8dc2f4dc4544af0))
* QN Scale full handshake with AE00 service init ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([1a4c7ac](https://github.com/Clee2691/ble-scale-sync/commit/1a4c7ac996bc3b74f4d26545e6f4af2f99e50950))
* QN Scale notification-driven handshake for newer firmware ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([fcda1d7](https://github.com/Clee2691/ble-scale-sync/commit/fcda1d78b89c0a222b9042d4fd22cd7f5dc61e61))
* QN Scale notification-driven state machine for newer firmware ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([75cf05f](https://github.com/Clee2691/ble-scale-sync/commit/75cf05f8be2ac1a88aff79b7267514d39bd7b69e))
* QN Scale pure notification-driven handshake for Linux ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([156ac61](https://github.com/Clee2691/ble-scale-sync/commit/156ac61b33437d55ad40d440a148200975d525df))
* QN Scale skip impedance-less stable frames, deduplicate state machine ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([0226c99](https://github.com/Clee2691/ble-scale-sync/commit/0226c99139304f66a1cf9d50d1f1f0cedae734a7))
* QN Scale state machine must not depend on hasAe00 flag ([#75](https://github.com/Clee2691/ble-scale-sync/issues/75)) ([d88009f](https://github.com/Clee2691/ble-scale-sync/commit/d88009f542426561faa1380e06052eadedf9dcd7))
* QN Scale UUID fallback no longer matches named devices ([#98](https://github.com/Clee2691/ble-scale-sync/issues/98)) ([e753c91](https://github.com/Clee2691/ble-scale-sync/commit/e753c91444f380089e4dc71c267e8b64a6938268))
* QN Scale UUID fallback no longer matches named devices ([#98](https://github.com/Clee2691/ble-scale-sync/issues/98)) ([1e0d8a6](https://github.com/Clee2691/ble-scale-sync/commit/1e0d8a61636530dca9a479537089e001cdcae07e))
* **qn-scale:** handle 18-byte 0x12 frame from Renpho ES-26M ([69bd4fb](https://github.com/Clee2691/ble-scale-sync/commit/69bd4fbf0f16ae8f96f8e1a4a5f25ab982b957a9))
* **qn-scale:** handle 18-byte 0x12 frame from Renpho ES-26M ([45e4d6e](https://github.com/Clee2691/ble-scale-sync/commit/45e4d6e82f31a30f8a95e0d53b9bd588a337b110))
* recover stale BlueZ discovery state after Docker restart ([a3e83a8](https://github.com/Clee2691/ble-scale-sync/commit/a3e83a844a1af615f42a2e1144b39eccf8a4df58))
* reset D-Bus connection after GATT to prevent zombie discovery ([#80](https://github.com/Clee2691/ble-scale-sync/issues/80)) ([cd479f3](https://github.com/Clee2691/ble-scale-sync/commit/cd479f3d242d8664d5b72c430ce06abb5670762f))
* **review:** address v1.12.0 review findings ([ed90fbf](https://github.com/Clee2691/ble-scale-sync/commit/ed90fbf4d7fc3bbc1bdd94bc241942ef10df7c10))
* **runtime:** cache systemd-notify ENOENT to avoid spawn-storm on hosts without it ([#144](https://github.com/Clee2691/ble-scale-sync/issues/144)) ([8959287](https://github.com/Clee2691/ble-scale-sync/commit/895928768b78e84cd70c79a9bc7e26ff285a308d))
* **runtime:** use raw weight for single-user mqtt display ([b8d0b90](https://github.com/Clee2691/ble-scale-sync/commit/b8d0b909874f44385d2d2b595481d7a3f8e3f306))
* **runtime:** watchdog ignores idle no-shows ([#213](https://github.com/Clee2691/ble-scale-sync/issues/213)) ([9e1588f](https://github.com/Clee2691/ble-scale-sync/commit/9e1588faf84ac352ec3f9e41029d8406007e060c))
* **scales:** ack offline frames on Renpho ES-26BB-B ([#157](https://github.com/Clee2691/ble-scale-sync/issues/157)) ([70f2066](https://github.com/Clee2691/ble-scale-sync/commit/70f20669e178d99a2aa6783ed1f65b3c8fed1997))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([98c7764](https://github.com/Clee2691/ble-scale-sync/commit/98c77649265c825e63aa353fdce28ca11441ff63))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([d00dba4](https://github.com/Clee2691/ble-scale-sync/commit/d00dba48776fec5b99a5bb04230b64ce8e0a1e0f))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([27a58d5](https://github.com/Clee2691/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([3868663](https://github.com/Clee2691/ble-scale-sync/commit/3868663c627ad490e54ea2fb0e78724045d4287c))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([9bff727](https://github.com/Clee2691/ble-scale-sync/commit/9bff727b98129fe89a50428d4b7131713fdd0bc2))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([d3bf8cc](https://github.com/Clee2691/ble-scale-sync/commit/d3bf8cc59156f48160c0a9177c971064669a1eec))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([4b5ce11](https://github.com/Clee2691/ble-scale-sync/commit/4b5ce1108cc51445827df36fbfbc2fbd9320e400))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([68517cd](https://github.com/Clee2691/ble-scale-sync/commit/68517cdc55df25a286b9fed07edfd414082f1ee7))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([67cc838](https://github.com/Clee2691/ble-scale-sync/commit/67cc838dae1776fbf1ab035c9cdde8406cafc257))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([0ce5c1a](https://github.com/Clee2691/ble-scale-sync/commit/0ce5c1af1a153086edb64d660c6fbadfb5afef70))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([663f55a](https://github.com/Clee2691/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([3289452](https://github.com/Clee2691/ble-scale-sync/commit/328945231a22a4914951d503ad7647023e74da04))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([bf15b87](https://github.com/Clee2691/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))
* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/Clee2691/ble-scale-sync/issues/191)) ([c091439](https://github.com/Clee2691/ble-scale-sync/commit/c0914394f4cee8bc7053a37735ca0b0b727267a4))
* **scales:** preserve exact/startsWith claim semantics in generic-adapter exclusion ([#245](https://github.com/Clee2691/ble-scale-sync/issues/245)) ([99a5a10](https://github.com/Clee2691/ble-scale-sync/commit/99a5a1085f13c91bba3661a8a88e2c0fe459103b))
* **scales:** warn instead of debug when ES-26BB-B offline ack write fails ([4e265e1](https://github.com/Clee2691/ble-scale-sync/commit/4e265e16bf20c5bedaff52c636f0fe71128982bf))
* send both QN Scale unlock variants for broader firmware compatibility ([7e3a246](https://github.com/Clee2691/ble-scale-sync/commit/7e3a2465f32699a9045b714bcea64deec5783dcc)), closes [#75](https://github.com/Clee2691/ble-scale-sync/issues/75)
* skip adapter prompt when Noble driver is forced ([8c33b1c](https://github.com/Clee2691/ble-scale-sync/commit/8c33b1ce7b8fe8758b3b57ac39fc8d19d37c7940))
* **trisa:** fail fast when no measurement char and harden ADE parser boundary ([74a34a6](https://github.com/Clee2691/ble-scale-sync/commit/74a34a6e14d6b525114ed78372c43e07a0de6cd3))
* use ATT Write Request instead of Reliable Write in node-ble handler ([#85](https://github.com/Clee2691/ble-scale-sync/issues/85)) ([9044796](https://github.com/Clee2691/ble-scale-sync/commit/9044796162a440e6eb23cb890b5e27ec3ac6189f))
* use calendar-day cooldown for update check ([5d32ee9](https://github.com/Clee2691/ble-scale-sync/commit/5d32ee985a2ab8eb73add8f2e81c117f4caf90cf))
* use calendar-day cooldown for update check instead of 24h timer ([ba1eaa8](https://github.com/Clee2691/ble-scale-sync/commit/ba1eaa88d3082462b648d43c2c9d85e5a04b65a7))
* warn on invalid FILE_FORMAT env var value ([6db87d5](https://github.com/Clee2691/ble-scale-sync/commit/6db87d5ac1ef18dd1b59fa070d9e5c0f6c3f42b2))
* wizard adapter preservation, MQTT topic fallback, adapter log gating ([b59b72f](https://github.com/Clee2691/ble-scale-sync/commit/b59b72f09920e25e1b22dbab62609d1ff2d80e8f))
* **wizard,orchestrator:** guard empty exporter list ([34374c9](https://github.com/Clee2691/ble-scale-sync/commit/34374c991424c0ef7edac7409320527743911e3d))


### Changed

* **ble:** single pre-connect GC pass on PSRAM boards ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([62e134b](https://github.com/Clee2691/ble-scale-sync/commit/62e134b1f4859a613bfb99f002d60bbc5316edb6))


### Docs

* add auto update guide ([58c8a23](https://github.com/Clee2691/ble-scale-sync/commit/58c8a23239d0d27f65de4c1b71a2829dcefff642))
* add auto update guide ([6e0488b](https://github.com/Clee2691/ble-scale-sync/commit/6e0488b0d58cb26d3c141024235a0990409699c7))
* add boildead and alexw23 to contributors ([98c7764](https://github.com/Clee2691/ble-scale-sync/commit/98c77649265c825e63aa353fdce28ca11441ff63))
* add boildead and alexw23 to contributors ([d00dba4](https://github.com/Clee2691/ble-scale-sync/commit/d00dba48776fec5b99a5bb04230b64ce8e0a1e0f))
* add boildead and alexw23 to contributors ([27a58d5](https://github.com/Clee2691/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* add boildead and alexw23 to contributors ([3868663](https://github.com/Clee2691/ble-scale-sync/commit/3868663c627ad490e54ea2fb0e78724045d4287c))
* add boildead and alexw23 to contributors ([9bff727](https://github.com/Clee2691/ble-scale-sync/commit/9bff727b98129fe89a50428d4b7131713fdd0bc2))
* add boildead and alexw23 to contributors ([d3bf8cc](https://github.com/Clee2691/ble-scale-sync/commit/d3bf8cc59156f48160c0a9177c971064669a1eec))
* add boildead and alexw23 to contributors ([4b5ce11](https://github.com/Clee2691/ble-scale-sync/commit/4b5ce1108cc51445827df36fbfbc2fbd9320e400))
* add boildead and alexw23 to contributors ([68517cd](https://github.com/Clee2691/ble-scale-sync/commit/68517cdc55df25a286b9fed07edfd414082f1ee7))
* add boildead and alexw23 to contributors ([67cc838](https://github.com/Clee2691/ble-scale-sync/commit/67cc838dae1776fbf1ab035c9cdde8406cafc257))
* add boildead and alexw23 to contributors ([0ce5c1a](https://github.com/Clee2691/ble-scale-sync/commit/0ce5c1af1a153086edb64d660c6fbadfb5afef70))
* add boildead and alexw23 to contributors ([663f55a](https://github.com/Clee2691/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* add boildead and alexw23 to contributors ([3289452](https://github.com/Clee2691/ble-scale-sync/commit/328945231a22a4914951d503ad7647023e74da04))
* add boildead and alexw23 to contributors ([bf15b87](https://github.com/Clee2691/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))
* add boildead and alexw23 to contributors ([c091439](https://github.com/Clee2691/ble-scale-sync/commit/c0914394f4cee8bc7053a37735ca0b0b727267a4))
* add contributors section to README ([a545d3f](https://github.com/Clee2691/ble-scale-sync/commit/a545d3fbd087e12dd2a3b06218c54eacda906d80))
* add contributors section with avatars to README ([3f709f2](https://github.com/Clee2691/ble-scale-sync/commit/3f709f23f45d4b7c9d43988e83f9f12400eb655c))
* add Dockerfile armv7 fix to v1.7.5 changelog ([02a5cc2](https://github.com/Clee2691/ble-scale-sync/commit/02a5cc2be3bdc80f69ea47fa2156b9cce74a8dc5))
* add ESP32 BLE proxy section to getting started guide ([ad4323d](https://github.com/Clee2691/ble-scale-sync/commit/ad4323df557c3322c48ce3da6be32baf3ab478f1))
* add ESP32 proxy to getting started guide ([d0fd7d2](https://github.com/Clee2691/ble-scale-sync/commit/d0fd7d28a3eab743ae3de7697926b7ba9e073591))
* add FAQ page ([fa272a4](https://github.com/Clee2691/ble-scale-sync/commit/fa272a42f1b75f0e10dea3896fb45d83d73e2fa9))
* add FAQ page ([cb5c5d2](https://github.com/Clee2691/ble-scale-sync/commit/cb5c5d2210f3255d23ff958c134b76ff9f941933))
* add fromport to contributors ([cfa2a0b](https://github.com/Clee2691/ble-scale-sync/commit/cfa2a0b05ba8792f6d99e90d9e1fe6157ab59282))
* add repo owner avatar to contributors section ([f3fe1a0](https://github.com/Clee2691/ble-scale-sync/commit/f3fe1a00be669e04975b5a650a7cf61018ed40f7))
* add repo owner to contributors ([488135e](https://github.com/Clee2691/ble-scale-sync/commit/488135e26f9342baecf23ab68fe36deb3bbc56f1))
* add SEO meta keywords to all pages ([a1776c6](https://github.com/Clee2691/ble-scale-sync/commit/a1776c6f62ec1e6ade86add39b319d91c19badfb))
* add SEO meta keywords to all pages ([ea1451f](https://github.com/Clee2691/ble-scale-sync/commit/ea1451f780c112e847c0b11e141c2a18ed5c2b23))
* add Setup Wizard feature card to landing page ([938ce0d](https://github.com/Clee2691/ble-scale-sync/commit/938ce0d4abc2106e507bbec7234a35f210abb593))
* **addon:** backfill CHANGELOG and refresh DOCS for v1.8.2 through v1.10.2 ([d918a1d](https://github.com/Clee2691/ble-scale-sync/commit/d918a1d677dad982dc123133352ae58539b93fb1))
* align landing page with Docker-first install order ([a1a9f06](https://github.com/Clee2691/ble-scale-sync/commit/a1a9f062ad35d1ed04a56ff3e3d7aadeadeca593))
* align scale-type vs board support table cells for [#139](https://github.com/Clee2691/ble-scale-sync/issues/139) ([e301da7](https://github.com/Clee2691/ble-scale-sync/commit/e301da7839398fd8868e48bb23704aae0df96831))
* bump adapter and exporter counts to 25 and 8 ([0e21abe](https://github.com/Clee2691/ble-scale-sync/commit/0e21abe88f5073238d2e3bdc7da840a505270304))
* **contributing:** document squash-only merge policy and PR title requirement ([8bbcc5b](https://github.com/Clee2691/ble-scale-sync/commit/8bbcc5b5a00e08eab777e4e6aae82d2322d33929))
* **contributing:** refresh project structure tree ([a44000d](https://github.com/Clee2691/ble-scale-sync/commit/a44000dc35e7516668e993bea99ec7fd4e0c9b49))
* credit QN-Scale and Eufy P2/P2 Pro as independent work ([a5b1fa9](https://github.com/Clee2691/ble-scale-sync/commit/a5b1fa90374e418e37b3580e64871bbdf3246535))
* deep consistency sweep across guide and reference pages ([e979b0c](https://github.com/Clee2691/ble-scale-sync/commit/e979b0cf5b12d75f6d74e3152db9628a824297b8))
* document aioble versioning in firmware requirements ([#51](https://github.com/Clee2691/ble-scale-sync/issues/51)) ([b9d9eb6](https://github.com/Clee2691/ble-scale-sync/commit/b9d9eb6299c20a54bbe3d267db7adf7062c267b6))
* document no-PSRAM broadcast-only vs PSRAM GATT support for [#139](https://github.com/Clee2691/ble-scale-sync/issues/139) ([fa63930](https://github.com/Clee2691/ble-scale-sync/commit/fa6393045e168020b7dc19932f96a7cc8da311bb))
* document Pi 3/4 BlueZ stuck-state limitation + watchdog mitigation ([a039b4b](https://github.com/Clee2691/ble-scale-sync/commit/a039b4b155b5677001994a1f6a3bbfc723b2b876))
* document Xiaomi S800 support and ble.bind_key ([#232](https://github.com/Clee2691/ble-scale-sync/issues/232)) ([6ccccb0](https://github.com/Clee2691/ble-scale-sync/commit/6ccccb09e937db62ac09f58aebea9b38c98f3ae9))
* **esp32-proxy:** add Windows flashing guidance ([c5af41f](https://github.com/Clee2691/ble-scale-sync/commit/c5af41fd2cf4e5c0a4392823383af8c4b649ae7a))
* **esp32-proxy:** add Windows flashing guidance ([2796d7b](https://github.com/Clee2691/ble-scale-sync/commit/2796d7b0bcbced0bc1e5bca026fc275b6e02be21))
* ESPHome Bluetooth proxy guide ([#116](https://github.com/Clee2691/ble-scale-sync/issues/116)) ([f7c1b59](https://github.com/Clee2691/ble-scale-sync/commit/f7c1b59c67aa4d2d5b149cd22a28a6f3ddbd6641))
* **firmware:** correct gc-vs-IDF-heap comment around the connect guard ([#139](https://github.com/Clee2691/ble-scale-sync/issues/139)) ([e576e8e](https://github.com/Clee2691/ble-scale-sync/commit/e576e8e4d36baac608c1dd9419e099dfa4c79242))
* fix consistency issues from audit ([8c09188](https://github.com/Clee2691/ble-scale-sync/commit/8c09188ca8e9e63754a46e3f3dad871032577654))
* fix dead link to MQTT exporter section ([dfc233f](https://github.com/Clee2691/ble-scale-sync/commit/dfc233f682b336617c02d7015a5a3ad98d3e5281))
* fix stale counts, logo easter egg, and consolidate changelog menu ([cf85243](https://github.com/Clee2691/ble-scale-sync/commit/cf852434b591a49370f8d711008dcd7920946735))
* **getting-started:** reorder install methods, flag HA addon requirements ([7b30524](https://github.com/Clee2691/ble-scale-sync/commit/7b30524ebeedebe6db802776315b5b20cea73ec9))
* **ha-addon:** one-click install via My Home Assistant badge ([5917bff](https://github.com/Clee2691/ble-scale-sync/commit/5917bff328754b22c0c52976c682fd6be0339342))
* **ha-addon:** surface weight/height unit options and persistence ([ec42905](https://github.com/Clee2691/ble-scale-sync/commit/ec42905529622bb8d89866aee17d782f36aca37f))
* improve ESP32 proxy page ([c256235](https://github.com/Clee2691/ble-scale-sync/commit/c256235d1df2775b23f11c7362da2688818d5a02))
* improve ESP32 proxy page with Docker section, board prices, and fixes ([1f2fe0b](https://github.com/Clee2691/ble-scale-sync/commit/1f2fe0b482f14003690205b9824797552a2d79d9))
* improve Strava setup guide and update wizard welcome text ([ed2035d](https://github.com/Clee2691/ble-scale-sync/commit/ed2035d6d363a9820eabaf84ca94104ef5c25ce7))
* mark ESP32 MQTT proxy as experimental in setup wizard ([831ca61](https://github.com/Clee2691/ble-scale-sync/commit/831ca6182790a49878159cb40195c79200a3e3b6))
* move ESP32 BLE Proxy to new Deployment sidebar section ([54cc9d4](https://github.com/Clee2691/ble-scale-sync/commit/54cc9d40a7423bccaff96667c9fa85bd33e7b374))
* note idle-aware watchdog behavior ([#213](https://github.com/Clee2691/ble-scale-sync/issues/213)) ([7de309e](https://github.com/Clee2691/ble-scale-sync/commit/7de309ed6a33fab0150a2101909bcaa65544af6f))
* note minimal-delay autonomous connect for GATT scales ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([b679550](https://github.com/Clee2691/ble-scale-sync/commit/b6795504c6dc562c18c2551629fbbe38cd381c61))
* polish FAQ presentation ([c904907](https://github.com/Clee2691/ble-scale-sync/commit/c904907bab7c180a53e013d3bba7adda5c76d4e1))
* polish FAQ presentation ([bb9f0ba](https://github.com/Clee2691/ble-scale-sync/commit/bb9f0ba8dec88943e0a79714a165fee11b61b934))
* promote Home Assistant Add-on to first-class quick start ([6b22bcc](https://github.com/Clee2691/ble-scale-sync/commit/6b22bccaee804ff6d7d276498718c347af88f6b9))
* put contributor avatars inline on single line ([f1a3510](https://github.com/Clee2691/ble-scale-sync/commit/f1a3510f04661410a85d4bc00062baf73aeff903))
* **readme:** align install order and naming with docs site ([bdbe03c](https://github.com/Clee2691/ble-scale-sync/commit/bdbe03c321aa77924db8b10b9333730387c05688))
* **readme:** bump scale count, note Linux stability features ([5a47c06](https://github.com/Clee2691/ble-scale-sync/commit/5a47c064911a36b46f909e3e8bd55b7ad1a1fdab))
* recommend scale_mac for GATT-only scales over the ESP32 proxy ([#231](https://github.com/Clee2691/ble-scale-sync/issues/231)) ([8b670c1](https://github.com/Clee2691/ble-scale-sync/commit/8b670c1e1042d1b8d76fcb9c65d8eb3743cc49f7))
* remove HA Add-on section from README (not released yet) ([5efdfdf](https://github.com/Clee2691/ble-scale-sync/commit/5efdfdfbf8df72541d2177b59c035511e47ebee9))
* rephrase scale count as "20+" in marketing, "23 protocol adapters" in technical sections ([605275e](https://github.com/Clee2691/ble-scale-sync/commit/605275ecb03b799fa5c185ed522072da49d1e7d3))
* **scales:** note Mi Scale 2 works on all BLE transports ([e126848](https://github.com/Clee2691/ble-scale-sync/commit/e126848ad11a976c6956dbff5ee67ce755553306))
* space contributor avatars apart ([89285d0](https://github.com/Clee2691/ble-scale-sync/commit/89285d09f84ffbf19bec75af23d4897062009879))
* **trisa:** clarify optional-binding + variant-detection semantics ([ae87d84](https://github.com/Clee2691/ble-scale-sync/commit/ae87d8421a446dd3b56cec63ab3baad476d87a0a))
* unify historical changelog entries to release-please format ([6d29c7e](https://github.com/Clee2691/ble-scale-sync/commit/6d29c7e839827685cefd6072c1a172523a64d4a5))
* update alternatives page with Strava, file export, and ESP32 proxy ([b12f43c](https://github.com/Clee2691/ble-scale-sync/commit/b12f43cbee087af712af00ea75475735ba069e97))
* update alternatives with Strava, file export, ESP32 proxy ([b858ce1](https://github.com/Clee2691/ble-scale-sync/commit/b858ce1c5630920e44f9fa2fa53057ddee284b6c))
* update landing page with ESP32 proxy feature and fixes ([d84cd07](https://github.com/Clee2691/ble-scale-sync/commit/d84cd07e01651398e74bd7d7a39b4fa1a276d54d))
* update website changelog with v1.5.0 and v1.6.0 ([4e4e827](https://github.com/Clee2691/ble-scale-sync/commit/4e4e827690f90fdf398ce226558d9dac3e3462c2))
* update website changelog with v1.5.0 and v1.6.0 ([770231a](https://github.com/Clee2691/ble-scale-sync/commit/770231abdb67c0881ded07fb8a77850a722b4767))
* use table layout for contributors (inline avatars) ([23f6e67](https://github.com/Clee2691/ble-scale-sync/commit/23f6e67532ae656c59135f0b59e3767cbe7eebef))

## [1.19.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.18.0...v1.19.0) (2026-06-19)


### Added

* **config:** add ble.bind_key and adapter configure() hook ([#232](https://github.com/KristianP26/ble-scale-sync/issues/232)) ([b319e69](https://github.com/KristianP26/ble-scale-sync/commit/b319e69f7ea085472bfcb5ba6218b21b37aaede1))
* **scales:** add declarative MatchDescriptor and matchesDescriptor helper ([#245](https://github.com/KristianP26/ble-scale-sync/issues/245)) ([7e63799](https://github.com/KristianP26/ble-scale-sync/commit/7e637998ba8c68002fad9f9bb331f9340263305e))
* **scales:** add Xiaomi Mijia S800 broadcast adapter ([#232](https://github.com/KristianP26/ble-scale-sync/issues/232)) ([5ee2c2e](https://github.com/KristianP26/ble-scale-sync/commit/5ee2c2eb4edf600eba414e91585743b103db641c))
* **scales:** central resolveAdapter with priority-based precedence and startup overlap detection ([#245](https://github.com/KristianP26/ble-scale-sync/issues/245)) ([dcc2bdd](https://github.com/KristianP26/ble-scale-sync/commit/dcc2bddafa31f5320729538b1d59a1ac08fad2ba))
* **scales:** register Xiaomi S800 and inject bind key at startup ([#232](https://github.com/KristianP26/ble-scale-sync/issues/232)) ([d3fdb65](https://github.com/KristianP26/ble-scale-sync/commit/d3fdb655fdf9d89f96f3e2770d15b0aa9c7db685))


### Fixed

* **ble:** advertise lazy_notify capability to ESP32 proxy ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([9004d31](https://github.com/KristianP26/ble-scale-sync/commit/9004d316b60b70c3cc7e76f673a4dbada609fa96))
* **ble:** command host-ordered proxy notify enable after subscribe ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([d33e3aa](https://github.com/KristianP26/ble-scale-sync/commit/d33e3aa60214dad1326c706bdb9cbde97c09fa61))
* **ble:** correct Robi S9 weight scaling to 3-byte grams ([#248](https://github.com/KristianP26/ble-scale-sync/issues/248)) ([21b3afa](https://github.com/KristianP26/ble-scale-sync/commit/21b3afa5a707815ddceb3f8a750f65f2eea69ee9))
* **firmware:** add per-board IDF-heap guard tunables defaulting to 0 ([#139](https://github.com/KristianP26/ble-scale-sync/issues/139)) ([59bd65f](https://github.com/KristianP26/ble-scale-sync/commit/59bd65f8a7b83851c1acecd75c8d91054409b992))
* **firmware:** drain aioble services before characteristic discovery ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([c584098](https://github.com/KristianP26/ble-scale-sync/commit/c58409824672a9ab163d523a9bcbe3d7e9a36498))
* **firmware:** drive aioble GATT discovery with async for ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([c943e11](https://github.com/KristianP26/ble-scale-sync/commit/c943e11b87213300619872656b5af91ea3579970))
* **firmware:** enable proxy notify lazily on per-char subscribe command ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([f4a4492](https://github.com/KristianP26/ble-scale-sync/commit/f4a4492606bd798d3813d698806d5c46f8cb073f))
* **firmware:** parse lazy_notify capability flag from config ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([b24292a](https://github.com/KristianP26/ble-scale-sync/commit/b24292a447bd851f92c7db9508047b3050a05841))
* **firmware:** refuse GATT connect on near-empty IDF heap instead of crashing ([#139](https://github.com/KristianP26/ble-scale-sync/issues/139)) ([1beac82](https://github.com/KristianP26/ble-scale-sync/commit/1beac82c6fdf57279855a7f06972f83a05502ac2))
* **firmware:** retry opposite BLE address type on any connect failure ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([7a958ab](https://github.com/KristianP26/ble-scale-sync/commit/7a958ab0f4ca83364014617281bed1f21a259d64))
* **firmware:** trust controller-reported BLE address type on autonomous connect ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([4ae2662](https://github.com/KristianP26/ble-scale-sync/commit/4ae2662fd96e8b29d13226c1909a97222254f758))
* **scales:** preserve exact/startsWith claim semantics in generic-adapter exclusion ([#245](https://github.com/KristianP26/ble-scale-sync/issues/245)) ([99a5a10](https://github.com/KristianP26/ble-scale-sync/commit/99a5a1085f13c91bba3661a8a88e2c0fe459103b))


### Docs

* align scale-type vs board support table cells for [#139](https://github.com/KristianP26/ble-scale-sync/issues/139) ([e301da7](https://github.com/KristianP26/ble-scale-sync/commit/e301da7839398fd8868e48bb23704aae0df96831))
* document no-PSRAM broadcast-only vs PSRAM GATT support for [#139](https://github.com/KristianP26/ble-scale-sync/issues/139) ([fa63930](https://github.com/KristianP26/ble-scale-sync/commit/fa6393045e168020b7dc19932f96a7cc8da311bb))
* document Xiaomi S800 support and ble.bind_key ([#232](https://github.com/KristianP26/ble-scale-sync/issues/232)) ([6ccccb0](https://github.com/KristianP26/ble-scale-sync/commit/6ccccb09e937db62ac09f58aebea9b38c98f3ae9))
* **firmware:** correct gc-vs-IDF-heap comment around the connect guard ([#139](https://github.com/KristianP26/ble-scale-sync/issues/139)) ([e576e8e](https://github.com/KristianP26/ble-scale-sync/commit/e576e8e4d36baac608c1dd9419e099dfa4c79242))
* fix stale counts, logo easter egg, and consolidate changelog menu ([cf85243](https://github.com/KristianP26/ble-scale-sync/commit/cf852434b591a49370f8d711008dcd7920946735))
* unify historical changelog entries to release-please format ([6d29c7e](https://github.com/KristianP26/ble-scale-sync/commit/6d29c7e839827685cefd6072c1a172523a64d4a5))

## [1.18.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.17.0...v1.18.0) (2026-06-16)


### Added

* **exporter:** add Runalyze exporter ([#204](https://github.com/KristianP26/ble-scale-sync/issues/204)) ([8f8d7a0](https://github.com/KristianP26/ble-scale-sync/commit/8f8d7a0222bfb883fedf9c989764aed585769712))
* **exporter:** add Wger exporter ([#205](https://github.com/KristianP26/ble-scale-sync/issues/205)) ([a9aed3a](https://github.com/KristianP26/ble-scale-sync/commit/a9aed3a7d57db9a8a93ebf6c6bc1bc8d710085d3))


### Fixed

* **ble:** bootstrap ESP32 autonomous GATT connect for GATT-only scales ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([2266086](https://github.com/KristianP26/ble-scale-sync/commit/226608682f973e444b3741cae4af92a9c98d5427))
* **ble:** connect before publishing scan results on autonomous path ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([793fdb2](https://github.com/KristianP26/ble-scale-sync/commit/793fdb2025d8da47500b2eaa5a102c34811c0d2e))
* **ble:** connect random-address GATT scales via ESP32 proxy ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([989ace6](https://github.com/KristianP26/ble-scale-sync/commit/989ace6a529d8252a149016349bad231fe07f940))
* **ble:** correct misreported static-random addr_type at scan source ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([0a2097e](https://github.com/KristianP26/ble-scale-sync/commit/0a2097e8973445a6201599b41d5a7f872dfeb34e))
* **ble:** derive connect addr_type from MAC bits for misreported random scales ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([4909038](https://github.com/KristianP26/ble-scale-sync/commit/4909038b2a4f2052d0fba85e7fc10131e4fad938))
* **ble:** preserve bond by not RemoveDevice'ing paired scales ([#168](https://github.com/KristianP26/ble-scale-sync/issues/168)) ([d662199](https://github.com/KristianP26/ble-scale-sync/commit/d662199e45a14c6bfaf45018682177bbe618e6a1))
* **ble:** register BlueZ pairing agent for BF720 encrypted bonding ([#168](https://github.com/KristianP26/ble-scale-sync/issues/168)) ([d2a1aaf](https://github.com/KristianP26/ble-scale-sync/commit/d2a1aafa650c4e02dc5da89db7c99d15a0f0e012))
* **esp32:** restore aioble IRQ before GATT connect ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([c29dc1c](https://github.com/KristianP26/ble-scale-sync/commit/c29dc1c41439b35207b16759481aa81ffd6c5d9e))


### Changed

* **ble:** single pre-connect GC pass on PSRAM boards ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([62e134b](https://github.com/KristianP26/ble-scale-sync/commit/62e134b1f4859a613bfb99f002d60bbc5316edb6))


### Docs

* note minimal-delay autonomous connect for GATT scales ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([b679550](https://github.com/KristianP26/ble-scale-sync/commit/b6795504c6dc562c18c2551629fbbe38cd381c61))
* recommend scale_mac for GATT-only scales over the ESP32 proxy ([#231](https://github.com/KristianP26/ble-scale-sync/issues/231)) ([8b670c1](https://github.com/KristianP26/ble-scale-sync/commit/8b670c1e1042d1b8d76fcb9c65d8eb3743cc49f7))

## [1.17.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.16.1...v1.17.0) (2026-06-15)


### Added

* **ble:** add Robi S9 adapter (Lefu/Fitdays FFB0-new protocol) ([#228](https://github.com/KristianP26/ble-scale-sync/issues/228)) ([4a8fda5](https://github.com/KristianP26/ble-scale-sync/commit/4a8fda56fa57bbb4f97b2a7cb36ca475a70e5515))


### Fixed

* **ble:** attempt bonding and name failed CCCD subscribe for Beurer BF720 ([#168](https://github.com/KristianP26/ble-scale-sync/issues/168)) ([45bfd87](https://github.com/KristianP26/ble-scale-sync/commit/45bfd87cf51de6ec565d6fdcd7038f5da197d31e))
* **ble:** match QN scales advertising AE00 alongside fff0 ([#235](https://github.com/KristianP26/ble-scale-sync/issues/235)) ([6a12687](https://github.com/KristianP26/ble-scale-sync/commit/6a126877120b106ff1a9d452e46eb146477c3160))
* **firmware:** ease GATT connect on no-PSRAM ESP32 + heap diagnostic ([#139](https://github.com/KristianP26/ble-scale-sync/issues/139)) ([7bef0f6](https://github.com/KristianP26/ble-scale-sync/commit/7bef0f6866a3e1700eff607d1adbe18dea0cf00e))

## [1.16.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.16.0...v1.16.1) (2026-06-15)


### Fixed

* **ble:** decode Sanitas SBF70/BF710 body composition via 0x59 ACK stream ([#211](https://github.com/KristianP26/ble-scale-sync/issues/211)) ([c3beb00](https://github.com/KristianP26/ble-scale-sync/commit/c3beb007372ff0a051a82d1ba411b6ef14d9e7ab))
* **ble:** parse QN 0x23 stored record for V10 Renpho/ES-CS20M ([#213](https://github.com/KristianP26/ble-scale-sync/issues/213)) ([5617f28](https://github.com/KristianP26/ble-scale-sync/commit/5617f28fb7d02f47a34c86a2aa7b29fbdbe33688))
* **ble:** read ESPHome proxy pre-decoded GATT uuid ([#229](https://github.com/KristianP26/ble-scale-sync/issues/229)) ([#234](https://github.com/KristianP26/ble-scale-sync/issues/234)) ([c1079c7](https://github.com/KristianP26/ble-scale-sync/commit/c1079c72375856b8179234bebd5d5e1ef82a7f60))

## [1.16.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.15.0...v1.16.0) (2026-06-04)


### Added

* **ble:** add adapter liveness probe for watchdog classification ([#213](https://github.com/KristianP26/ble-scale-sync/issues/213)) ([e50ce5b](https://github.com/KristianP26/ble-scale-sync/commit/e50ce5b0128ab488f06ec3895306cdc4e557bfbe))
* **ble:** add poll-failure classification helpers ([#213](https://github.com/KristianP26/ble-scale-sync/issues/213)) ([484e16a](https://github.com/KristianP26/ble-scale-sync/commit/484e16ac32d58bd24dd78fe6d190afd97bd5dd04))
* **mqtt-proxy:** ESP32 autonomous GATT connect for fast-sleeping scales ([#214](https://github.com/KristianP26/ble-scale-sync/issues/214)) ([c4a3b33](https://github.com/KristianP26/ble-scale-sync/commit/c4a3b33ce28a003e63dfbdf14ae10991d6df9ff1))


### Fixed

* **ble:** keep a permanent error listener on the ESPHome proxy client ([#210](https://github.com/KristianP26/ble-scale-sync/issues/210)) ([ca7eb7d](https://github.com/KristianP26/ble-scale-sync/commit/ca7eb7d2f048a6f90d65d75878340ba7b0544525))
* **ble:** reset gattInProgress on failed GATT connect + clearer ESP32 errors ([#201](https://github.com/KristianP26/ble-scale-sync/issues/201)) ([dcd1ac6](https://github.com/KristianP26/ble-scale-sync/commit/dcd1ac6f7d1a456b1e83eecf57a3709bddb2dd5f))
* **ble:** send BLE address type on ESPHome proxy GATT connect ([#215](https://github.com/KristianP26/ble-scale-sync/issues/215)) ([#223](https://github.com/KristianP26/ble-scale-sync/issues/223)) ([71e735b](https://github.com/KristianP26/ble-scale-sync/commit/71e735b6c3460f9aa2b3d2d9e724c06da94ddeae))
* **ble:** tag idle vs wedge poll failures in scanAndReadRaw ([#213](https://github.com/KristianP26/ble-scale-sync/issues/213)) ([407753e](https://github.com/KristianP26/ble-scale-sync/commit/407753e261815f31e128a88b5f97da7352baabda))
* **config:** accept bare 32-hex CoreBluetooth UUID for scale_mac ([#212](https://github.com/KristianP26/ble-scale-sync/issues/212)) ([#224](https://github.com/KristianP26/ble-scale-sync/issues/224)) ([47d5033](https://github.com/KristianP26/ble-scale-sync/commit/47d503329a828c5127c827df98e902dc26cee36c))
* **firmware:** flush scan batch early on a known scale MAC ([#201](https://github.com/KristianP26/ble-scale-sync/issues/201)) ([c692b42](https://github.com/KristianP26/ble-scale-sync/commit/c692b426972edaf0fb895475262afa166cf72587))
* **runtime:** watchdog ignores idle no-shows ([#213](https://github.com/KristianP26/ble-scale-sync/issues/213)) ([9e1588f](https://github.com/KristianP26/ble-scale-sync/commit/9e1588faf84ac352ec3f9e41029d8406007e060c))


### Docs

* note idle-aware watchdog behavior ([#213](https://github.com/KristianP26/ble-scale-sync/issues/213)) ([7de309e](https://github.com/KristianP26/ble-scale-sync/commit/7de309ed6a33fab0150a2101909bcaa65544af6f))

## [1.15.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.14.1...v1.15.0) (2026-05-21)


### Added

* **exporter:** add Intervals.icu exporter ([#203](https://github.com/KristianP26/ble-scale-sync/issues/203)) ([60af3d0](https://github.com/KristianP26/ble-scale-sync/commit/60af3d0e98fdb90268dbe43d7316b6bc8e9ff3c1))
* **exporter:** add Telegram exporter ([#207](https://github.com/KristianP26/ble-scale-sync/issues/207)) ([0b73e0f](https://github.com/KristianP26/ble-scale-sync/commit/0b73e0f76601603e578f824d5b92cccf2c451e29))
* **firmware:** support generic ESP-WROOM-32 boards ([487e482](https://github.com/KristianP26/ble-scale-sync/commit/487e482084ac42be73f8f6f4bde9d356f2f6a1a1))


### Fixed

* **ble:** route dual-mode adapters to GATT when no broadcast data ([#201](https://github.com/KristianP26/ble-scale-sync/issues/201)) ([9de2dee](https://github.com/KristianP26/ble-scale-sync/commit/9de2deea0f8223f72a1c631ed31584a5600a6fba))
* **exporters:** fail fast on non-retryable HTTP errors + validate required config ([6ebea77](https://github.com/KristianP26/ble-scale-sync/commit/6ebea77b81320eeb7bf20a106c96b1cb460c524a))
* **firmware:** harden constrained ESP32 boards against scan-buffer OOM ([c99605e](https://github.com/KristianP26/ble-scale-sync/commit/c99605e22f667f06023fdd9ee3f57c4f0c8b9e36))
* **firmware:** parse 128-bit / 32-bit service UUIDs and service data ([bf918ad](https://github.com/KristianP26/ble-scale-sync/commit/bf918ad75fbaeb35465544af74871a5f0bd286fb))
* **firmware:** publish service-UUID-only devices in scan results ([c1f9723](https://github.com/KristianP26/ble-scale-sync/commit/c1f9723013972749846acb7ff76fa5ec169a164c)), closes [#201](https://github.com/KristianP26/ble-scale-sync/issues/201)


### Docs

* bump adapter and exporter counts to 25 and 8 ([0e21abe](https://github.com/KristianP26/ble-scale-sync/commit/0e21abe88f5073238d2e3bdc7da840a505270304))
* **scales:** note Mi Scale 2 works on all BLE transports ([e126848](https://github.com/KristianP26/ble-scale-sync/commit/e126848ad11a976c6956dbff5ee67ce755553306))

## [1.14.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.14.0...v1.14.1) (2026-05-19)


### Fixed

* **firmware:** correct mip ref position for async primitives install ([8974caa](https://github.com/KristianP26/ble-scale-sync/commit/8974caa1f9b55cabb792fb0532b29785518feabb)), closes [#198](https://github.com/KristianP26/ble-scale-sync/issues/198)
* force-exit on hung shutdown so the watchdog actually restarts the container ([#194](https://github.com/KristianP26/ble-scale-sync/issues/194)) ([#196](https://github.com/KristianP26/ble-scale-sync/issues/196)) ([3b60393](https://github.com/KristianP26/ble-scale-sync/commit/3b6039397f53bc4d85f94a9889b7fedac4b24356))

## [1.14.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.13.1...v1.14.0) (2026-05-18)


### Added

* **ble:** registry self-check to prevent adapter matches() collisions ([#182](https://github.com/KristianP26/ble-scale-sync/issues/182)) ([663f55a](https://github.com/KristianP26/ble-scale-sync/commit/663f55a8a9736967626312ca6d4f561a6db62295))
* **ble:** ESPHome proxy Phase 2 - GATT + multi-proxy ([#116](https://github.com/KristianP26/ble-scale-sync/issues/116)) ([#187](https://github.com/KristianP26/ble-scale-sync/issues/187)) ([c850aa3](https://github.com/KristianP26/ble-scale-sync/commit/c850aa3b55b018143cb99e4659b53f04f1720ae2))
* **scales:** Beurer BF720 / BF105 SIG-standard adapter ([#168](https://github.com/KristianP26/ble-scale-sync/issues/168)) ([#180](https://github.com/KristianP26/ble-scale-sync/issues/180)) ([3f52568](https://github.com/KristianP26/ble-scale-sync/commit/3f525688a099d5e5510edfb96e60cec9ab91fe3e))
* **scales:** add Eufy T9120 (A1) support ([#178](https://github.com/KristianP26/ble-scale-sync/issues/178)) ([3f5ecd4](https://github.com/KristianP26/ble-scale-sync/commit/3f5ecd44e6f511b86e343f4dd392a9d031960ba1))


### Fixed

* **scales:** defer Renpho ES-WBE28 from the QN adapter ([#191](https://github.com/KristianP26/ble-scale-sync/issues/191)) ([27a58d5](https://github.com/KristianP26/ble-scale-sync/commit/27a58d5dda2e10ff6aced5df296637efa890c851))
* **ble:** characteristic-aware adapter matching for 0xFFF0 collision ([#177](https://github.com/KristianP26/ble-scale-sync/issues/177)) ([#179](https://github.com/KristianP26/ble-scale-sync/issues/179)) ([6cb7992](https://github.com/KristianP26/ble-scale-sync/commit/6cb799290687fd02c84dbcbfb7dd1fc5106eddcb))


### Docs

* add boildead and alexw23 to contributors ([bf15b87](https://github.com/KristianP26/ble-scale-sync/commit/bf15b8766da1670600dc71d246d04d7587001226))

## [1.13.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.13.0...v1.13.1) (2026-05-18)


### Fixed

* **docker:** add missing setup-strava command to entrypoint ([#188](https://github.com/KristianP26/ble-scale-sync/issues/188)) ([#189](https://github.com/KristianP26/ble-scale-sync/issues/189)) ([af47e3a](https://github.com/KristianP26/ble-scale-sync/commit/af47e3aa1322fa34a440f8d43781793802a46080))

## [1.13.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.12.1...v1.13.0) (2026-05-13)


### Added

* drop Node 20 support, require Node 22+ ([25712d1](https://github.com/KristianP26/ble-scale-sync/commit/25712d1b84274fbab95f0adbef3c76bcf423f3d8))
* replay cached offline frames with timestamps ([#164](https://github.com/KristianP26/ble-scale-sync/issues/164)) ([6bae585](https://github.com/KristianP26/ble-scale-sync/commit/6bae5858a8d63f373361ed1aef979915a23c1183))
* **scale:** support Renpho ES-32MD via ES-CS20M adapter ([#172](https://github.com/KristianP26/ble-scale-sync/issues/172)) ([068c14f](https://github.com/KristianP26/ble-scale-sync/commit/068c14f4563a6529afb6b5bbc7bfaa716371642f))


### Fixed

* **deps:** regen package-lock.json with emnapi entries (CI fix) ([40b3d9d](https://github.com/KristianP26/ble-scale-sync/commit/40b3d9dd5e77aeafc45818363a52db3bb50ab15a))
* **runtime:** use raw weight for single-user mqtt display ([b8d0b90](https://github.com/KristianP26/ble-scale-sync/commit/b8d0b909874f44385d2d2b595481d7a3f8e3f306))

## [1.12.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.12.0...v1.12.1) (2026-05-12)


### Fixed

* **ble:** RSSI freshness no longer treats absent prop as stale ([#167](https://github.com/KristianP26/ble-scale-sync/issues/167)) ([8340caa](https://github.com/KristianP26/ble-scale-sync/commit/8340caa0ef3de7a5499dfca26190cc5864ab8e7e)), closes [#169](https://github.com/KristianP26/ble-scale-sync/issues/169)

## [1.12.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.11.0...v1.12.0) (2026-05-06)


### Added

* **config:** hot-reload config.yaml without restart ([#123](https://github.com/KristianP26/ble-scale-sync/issues/123)) ([d213d5c](https://github.com/KristianP26/ble-scale-sync/commit/d213d5ccd242312f5251c59128708ca503b0cb23))
* **runtime:** systemd Type=notify watchdog integration ([#144](https://github.com/KristianP26/ble-scale-sync/issues/144)) ([68ee5bf](https://github.com/KristianP26/ble-scale-sync/commit/68ee5bf4b1aede87080c432512233f4e09b5a680))
* **scales:** add Xiaomi Mi Scale 2 broadcast adapter ([#134](https://github.com/KristianP26/ble-scale-sync/issues/134)) ([6e5ffb4](https://github.com/KristianP26/ble-scale-sync/commit/6e5ffb4fa994546231d42b6493cd875e2f2e46fe))
* **scales:** scaffold experimental ADE A2 adapter ([#159](https://github.com/KristianP26/ble-scale-sync/issues/159)) ([#160](https://github.com/KristianP26/ble-scale-sync/issues/160)) ([11aec6f](https://github.com/KristianP26/ble-scale-sync/commit/11aec6f79bc01c4c4a7dee9e68ffa2e0c72b2d51))
* **trisa:** implement ADE BA 1600 challenge response ([#138](https://github.com/KristianP26/ble-scale-sync/issues/138)) ([#158](https://github.com/KristianP26/ble-scale-sync/issues/158)) ([91aa28e](https://github.com/KristianP26/ble-scale-sync/commit/91aa28eedef68e0c77da7ceb389fe411b151f48c))


### Fixed

* **ble:** guard against dying-peer connect stall ([#143](https://github.com/KristianP26/ble-scale-sync/issues/143)) ([abd3c22](https://github.com/KristianP26/ble-scale-sync/commit/abd3c227547c4a92f05f2d5be47087049339b7c3))
* **ble:** per-address grace state in esphome-proxy scanAndReadRaw ([#161](https://github.com/KristianP26/ble-scale-sync/issues/161)) ([875cb28](https://github.com/KristianP26/ble-scale-sync/commit/875cb283c9df725e615f76e1c9919185ad773cc0))
* **review:** address v1.12.0 review findings ([ed90fbf](https://github.com/KristianP26/ble-scale-sync/commit/ed90fbf4d7fc3bbc1bdd94bc241942ef10df7c10))
* **runtime:** cache systemd-notify ENOENT to avoid spawn-storm on hosts without it ([#144](https://github.com/KristianP26/ble-scale-sync/issues/144)) ([8959287](https://github.com/KristianP26/ble-scale-sync/commit/895928768b78e84cd70c79a9bc7e26ff285a308d))
* **scales:** ack offline frames on Renpho ES-26BB-B ([#157](https://github.com/KristianP26/ble-scale-sync/issues/157)) ([70f2066](https://github.com/KristianP26/ble-scale-sync/commit/70f20669e178d99a2aa6783ed1f65b3c8fed1997))
* **scales:** warn instead of debug when ES-26BB-B offline ack write fails ([4e265e1](https://github.com/KristianP26/ble-scale-sync/commit/4e265e16bf20c5bedaff52c636f0fe71128982bf))


### Docs

* deep consistency sweep across guide and reference pages ([e979b0c](https://github.com/KristianP26/ble-scale-sync/commit/e979b0cf5b12d75f6d74e3152db9628a824297b8))
* **readme:** bump scale count, note Linux stability features ([5a47c06](https://github.com/KristianP26/ble-scale-sync/commit/5a47c064911a36b46f909e3e8bd55b7ad1a1fdab))

## [1.11.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.10.2...v1.11.0) (2026-05-01)


### Added

* **ble:** consecutive-failure watchdog for BlueZ stuck-state recovery ([#154](https://github.com/KristianP26/ble-scale-sync/pull/154)) ([dcc822d](https://github.com/KristianP26/ble-scale-sync/commit/dcc822d16bbebe7682490114febc92326b69a611))
* **trisa:** support ADE BA 1600 (fitvigo) firmware variant — weight only ([#153](https://github.com/KristianP26/ble-scale-sync/pull/153)) ([515d1a7](https://github.com/KristianP26/ble-scale-sync/commit/515d1a72faab28abbadddc41ddca60337358b68b))


### Fixed

* **firmware:** match scan_duration_ms to GATT connect timeout ([#141](https://github.com/KristianP26/ble-scale-sync/issues/141)) ([54dcc3b](https://github.com/KristianP26/ble-scale-sync/commit/54dcc3bda965ac9482659017f3c08d68efea716d))
* **node-ble:** add timeout to device.gatt() and waitForRawReading ([#142](https://github.com/KristianP26/ble-scale-sync/pull/142)) ([2e45366](https://github.com/KristianP26/ble-scale-sync/commit/2e45366623f873aaf1b415c3f1ccc4edef860613)), closes [#140](https://github.com/KristianP26/ble-scale-sync/issues/140)
* prevent orphaned BlueZ discovery sessions in continuous mode ([#81](https://github.com/KristianP26/ble-scale-sync/pull/81)) ([e6ee513](https://github.com/KristianP26/ble-scale-sync/commit/e6ee51350ced0ef9a50d77380d201a21627fcc76))
* **trisa:** fail fast when no measurement char and harden ADE parser boundary ([74a34a6](https://github.com/KristianP26/ble-scale-sync/commit/74a34a6e14d6b525114ed78372c43e07a0de6cd3))


### Docs

* **addon:** backfill CHANGELOG and refresh DOCS for v1.8.2 through v1.10.2 ([d918a1d](https://github.com/KristianP26/ble-scale-sync/commit/d918a1d677dad982dc123133352ae58539b93fb1))
* document Pi 3/4 BlueZ stuck-state limitation + watchdog mitigation ([a039b4b](https://github.com/KristianP26/ble-scale-sync/commit/a039b4b155b5677001994a1f6a3bbfc723b2b876))
* **esp32-proxy:** add Windows flashing guidance ([#152](https://github.com/KristianP26/ble-scale-sync/pull/152)) ([2796d7b](https://github.com/KristianP26/ble-scale-sync/commit/2796d7b0bcbced0bc1e5bca026fc275b6e02be21))
* **trisa:** clarify optional-binding + variant-detection semantics ([ae87d84](https://github.com/KristianP26/ble-scale-sync/commit/ae87d8421a446dd3b56cec63ab3baad476d87a0a))


### Thanks

* [@fromport](https://github.com/fromport) for the `device.gatt()` / `waitForRawReading` GATT-acquisition timeout fix that prevents indefinite hangs on stalled BlueZ adapters ([#142](https://github.com/KristianP26/ble-scale-sync/pull/142))

## [1.10.2](https://github.com/KristianP26/ble-scale-sync/compare/v1.10.1...v1.10.2) (2026-04-24)


### Fixed

* **Renpho ES-26M**: the 18-byte `0x12` scale-info frame (where byte[1] is the packet length and bytes [2-7] carry the device MAC) was being misread as "byte[2] is the protocol type", yielding `proto=0xFF` and causing every subsequent handshake command to be rejected by the scale. No `0x10` weight frames were ever returned. The QN-Scale adapter now detects the long-frame format (`data.length >= 18 && data[1] === length`) and falls through to the ES-30M code path with `weightScaleFactor=10`, so the existing heuristic auto-corrects the weight divisor. The unconditional skip of `R1=R2=0` stable frames in ES-30M mode is also lifted: the ES-26M never reports impedance when the user is wearing socks, and those frames are the only stable reading available in that scenario. Contributed by [@fromport](https://github.com/fromport) ([#128](https://github.com/KristianP26/ble-scale-sync/pull/128))


### Changed

* **ESPHome proxy**: the handler now logs a one-time Phase 1 capability summary on connect, listing which configured scale adapters are broadcast-capable (produce readings on this transport) and which are GATT-only (will time out until Phase 2 / [#116](https://github.com/KristianP26/ble-scale-sync/issues/116) ships). Users who were only seeing the generic `Timed out waiting for any recognized scale broadcast via ESPHome proxy` line now immediately see whether their scale brand is in the broadcast-capable set, instead of having to reproduce the failure twice to catch the per-MAC warn. Surfaces the Yunmai / Beurer / Mi Scale 2 / etc. mismatch reported by [@geniusliang](https://github.com/geniusliang) in [#133](https://github.com/KristianP26/ble-scale-sync/issues/133)


### Docs

* **CONTRIBUTING.md**: project structure tree refreshed to match the current layout (HA add-on, ESPHome proxy handler, updated scale/test files)
* **README**: contributors migrated to a GitHub-style table with inline avatars, [@fromport](https://github.com/fromport) added for the ES-26M contribution


### Thanks

* [@fromport](https://github.com/fromport) for diagnosing and fixing the ES-26M handshake end to end, including the heuristic weight-divisor path
* [@geniusliang](https://github.com/geniusliang) for the detailed ESPHome proxy repro that led to the capability-summary UX improvement

## [1.10.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.10.0...v1.10.1) (2026-04-22)


### Fixed

* **ESPHome proxy**: the `ReadingWatcher` silently dropped advertisements from dual-mode scale adapters (`parseBroadcast` defined **and** `charNotifyUuid` set) when the broadcast frame was not weight-bearing. Reported by [@deadhurricane](https://github.com/deadhurricane) on an Elis 1 / ES-30M, which matches by name as a QN-Scale but only beacons its MAC in manufacturer data and carries weight over GATT. The handler now warns once per MAC that the scale needs a GATT connection (Phase 2), pointing the user at the native BLE handler or the ESP32 MQTT proxy as workarounds instead of leaving them staring at a silent log ([#116](https://github.com/KristianP26/ble-scale-sync/issues/116), [#75](https://github.com/KristianP26/ble-scale-sync/issues/75))
* **Logger**: `runtime.debug: true` in `config.yaml` did not switch the log level to DEBUG, only the `DEBUG=true` env var did. The app now honors the config value on startup, so HA Add-on users (who pass `debug` as an option, not an env var) and anyone driving the runtime from `config.yaml` get the verbose BLE logs they expect

## [1.10.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.9.0...v1.10.0) (2026-04-22)


### Added

* **Embedded MQTT broker for the ESP32 proxy**: zero-config setup, no Mosquitto required. When `ble.mqtt_proxy.broker_url` is omitted, BLE Scale Sync now starts an embedded [aedes](https://github.com/moscajs/aedes) broker on `0.0.0.0:1883` by default; the internal client connects over loopback, and the ESP32 firmware just points at the host machine's LAN IP. Port and bind interface are configurable via `embedded_broker_port` and `embedded_broker_bind`, optional username/password are enforced when set. Existing `broker_url` setups are untouched ([#54](https://github.com/KristianP26/ble-scale-sync/issues/54))
* **ESPHome Bluetooth proxy transport (experimental, phase 1 / broadcast-only)**: third BLE handler option `ble.handler: esphome-proxy`. If you already run an [ESPHome Bluetooth proxy](https://esphome.io/components/bluetooth_proxy.html) mesh for Home Assistant, BLE Scale Sync can connect to it over Native API (port 6053, optional Noise encryption or legacy password) and reuse it as its BLE radio, so no dedicated ESP32 with custom firmware and no MQTT broker are required. Phase 1 handles broadcast scales only; GATT scales log a warning and are skipped until phase 2 lands. New `docs/guide/esphome-proxy.md` covers setup, encryption key handling and limitations ([#116](https://github.com/KristianP26/ble-scale-sync/issues/116))
* **Setup wizard**: new "Use built-in embedded broker" option for the mqtt-proxy handler, so new installs skip the external broker prompt by default. Handler selection now also includes "Via ESPHome Bluetooth proxy" with prompts for host, port and authentication mode


### Security

* **Embedded MQTT broker**: configs that bind the embedded broker to a non-loopback interface (default `0.0.0.0`) now require `username` + `password` and are rejected at schema validation time. The wizard defaults to requiring auth and falls back to `127.0.0.1` when the user declines, so misconfiguration cannot silently expose a LAN-reachable broker without credentials.
* **ESPHome proxy**: configs that set both `encryption_key` and `password` are rejected at schema validation time. Pick Noise (`encryption_key`, recommended) or legacy password, not both.

## [1.9.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.8.2...v1.9.0) (2026-04-21)


### Added

* **Eufy Smart Scale P2 (T9148) and P2 Pro (T9149)**: new dedicated adapter with the AES-128-CBC C0/C1/C2/C3 handshake required by these models. Weight + impedance over GATT FFF2 after authentication, passive weight reading from the 19-byte advertisement without connecting. Prevents the prior false match as a QN scale that crashed with `Operation is not supported` on FFF1 ([#98](https://github.com/KristianP26/ble-scale-sync/issues/98))


### Fixed

* **Setup wizard**: picking no exporter in the export-targets checkbox silently produced a config without any `global_exporters` block, so the first run emitted `All exports failed` and exited with code 1. The wizard now asks an explicit `Continue without exporters?` confirmation when the checkbox is submitted empty and re-prompts if the user declines ([#98](https://github.com/KristianP26/ble-scale-sync/issues/98))
* **Orchestrator**: `dispatchExports([])` logged `All exports failed` because `allFailed` defaulted to `true` with zero iterations. Empty exporter lists now short-circuit with a clear warning (`No exporters configured — measurement processed but not sent anywhere`) and return `success`, so single-shot mode no longer exits with code 1 when the config has no exporters


### Thanks

* [@mart1058](https://github.com/mart1058) and [@dbrb2](https://github.com/dbrb2) for diagnose output, HCI snoop logs, and testing the Eufy P2 Pro protocol reverse-engineering ([#98](https://github.com/KristianP26/ble-scale-sync/issues/98))
* [bdr99/eufylife-ble-client](https://github.com/bdr99/eufylife-ble-client) for the reference Python implementation of the Eufy T9148/T9149 auth handshake and frame formats

## [1.8.2](https://github.com/KristianP26/ble-scale-sync/compare/v1.8.1...v1.8.2) (2026-04-20)


### Fixed

* **Sanitas SBF70 / Beurer BF710 family**: weight parsed as a stuck `12.80 kg` regardless of the real reading on the scale. Root cause: the BF710 variant (start byte `0xE7`) sends a compact 5-byte `0x58` frame with weight at bytes `[3-4]` BE, not the 6+ byte BF700/BF800 layout the adapter assumed. The adapter rejected every live weight frame as too short and then mis-parsed the `0x59` finalize frame. Now branches on `isBf710Type` and applies a 3-reading stability window (0.3 kg tolerance) so the scale's initial metadata frame does not trigger early completion ([#112](https://github.com/KristianP26/ble-scale-sync/issues/112))


### Thanks

* [@flow778](https://github.com/flow778) for capturing raw BLE frames that made the fix possible ([#112](https://github.com/KristianP26/ble-scale-sync/issues/112))

## [1.8.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.8.0...v1.8.1) (2026-04-20)


### Fixed

* **Garmin**: upload failed with `'Garmin' object has no attribute 'garth'` after `garminconnect` released 0.3.0 on 2026-04-02, which dropped the `garth` dependency in favor of native authentication. The Python bridge accessed `garmin.garth.sess.headers` and `garmin.garth.dump()`, both removed in 0.3.x. Migrated to the new API: `Garmin.login(tokenstore)` auto-persists on successful credential login, and `client.dump(token_dir)` saves tokens after MFA. Custom User-Agent override is no longer needed because `garminconnect` now uses `curl_cffi` TLS impersonation and randomized browser fingerprints internally ([#114](https://github.com/KristianP26/ble-scale-sync/issues/114))
* **Docker**: added `libcurl4-openssl-dev` so `curl_cffi` (new transitive dep via `garminconnect` 0.3.x) builds from source on armv7, where PyPI has no prebuilt wheel


### Breaking

* Tokens from `garminconnect` 0.2.x (old garth OAuth1/OAuth2 files) are incompatible with 0.3.x. Existing installs must re-authenticate: `npm run setup-garmin`, or in the HA Add-on just restart the add-on so it re-runs setup from the credentials you entered. The setup script auto-removes leftover `oauth*_token.json` files before writing the new token format.


### Thanks

* [@Phipseyy](https://github.com/Phipseyy) and [@mooredav87](https://github.com/mooredav87) for reporting the Garmin upload regression ([#114](https://github.com/KristianP26/ble-scale-sync/issues/114))

## [1.8.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.7.5...v1.8.0) (2026-04-17)


### Added

* **HA Add-on**: one-click install via a [My Home Assistant](https://www.home-assistant.io/integrations/my/) badge in the README, landing page, getting-started guide, and HA Add-on guide. Manual steps remain as a fallback for users without My Home Assistant configured
* **HA Add-on**: `weight_unit` and `height_unit` exposed as add-on options (kg/lbs, cm/in). The CLI and exporters display in the chosen unit while internal math stays in kg/cm
* **HA Add-on**: `last_known_weight` persists across restarts. The runtime config lives at `/data/config.yaml` and a small Python helper (`merge_last_weights.py`) copies preserved per-user weights from the previous run into the freshly generated config on every startup, so multi-user identification by weight stays accurate after reboots and add-on updates
* **Docs**: new [Home Assistant Add-on guide](https://blescalesync.dev/guide/home-assistant-addon) covering install, full configuration reference, MQTT auto-detection, Garmin setup (including the MFA and IP-block workarounds), custom config mode, persistence semantics, and troubleshooting. Promoted to a first-class quick-start in the README and landing page

## [1.7.5](https://github.com/KristianP26/ble-scale-sync/compare/v1.7.4...v1.7.5) (2026-04-15)


### Fixed

* **HA Add-on**: Garmin Connect uploads now work out of the box. The add-on previously created an empty `/data/garmin-tokens/` directory and never ran the authentication step, so the first upload always failed with `No such file or directory: '/data/garmin-tokens/oauth1_token.json'`. On first start the add-on now runs `setup_garmin.py --from-config` to generate OAuth tokens from the email and password you entered in the UI ([#111](https://github.com/KristianP26/ble-scale-sync/issues/111))
* **Docker**: armv7 image builds failed because `cffi` (transitive dep via `garminconnect`) had no pre-built wheel for armv7 + Python 3.11 and pip could not compile from source. Added `python3-dev`, `libffi-dev`, and `libssl-dev` to the image so cffi builds cleanly


### Added

* **HA Add-on**: MFA-friendly token import. If your Garmin account uses 2FA, drop pre-generated `oauth1_token.json` and `oauth2_token.json` files into `/share/ble-scale-sync/garmin-tokens/` and the add-on imports them on startup, skipping the interactive auth that has no terminal inside an add-on container
* **HA Add-on**: DOCS.md now explains the full Garmin setup flow including the MFA workaround and the IP-block workaround


### Thanks

* [@Phipseyy](https://github.com/Phipseyy) for reporting the HA Add-on Garmin failure ([#111](https://github.com/KristianP26/ble-scale-sync/issues/111))

## [1.7.4](https://github.com/KristianP26/ble-scale-sync/compare/v1.7.3...v1.7.4) (2026-04-02)


### Fixed

* **QN Scale**: rewrote adapter as a notification-driven state machine for newer firmware (Renpho Elis 1, ES-CS20M) that requires an AE00 service handshake before measurement data flows ([#75](https://github.com/KristianP26/ble-scale-sync/issues/75), [#84](https://github.com/KristianP26/ble-scale-sync/issues/84))
* **QN Scale**: added ES-30M weight frame format detection (different byte layout for weight and impedance)
* **QN Scale**: 0x13 config byte now sends 0x01 (kg) instead of 0x08, which was switching the scale display to lb
* **QN Scale**: 2-second fallback timer for Linux (BlueZ D-Bus) where the initial 0x12 frame may be lost due to a CCCD subscription race condition
* **QN Scale**: skip impedance-less stable frames on ES-30M so the adapter waits for the full body composition reading


### Thanks

* [@DJBenson](https://github.com/DJBenson) for extensive macOS testing, packet capture analysis, and reverse-engineering the state machine flow ([#84](https://github.com/KristianP26/ble-scale-sync/issues/84))
* [@ericandreani](https://github.com/ericandreani) for persistent Linux/Docker testing across multiple iterations ([#75](https://github.com/KristianP26/ble-scale-sync/issues/75))

## [1.7.3](https://github.com/KristianP26/ble-scale-sync/compare/v1.7.2...v1.7.3) (2026-04-02)


### Fixed

* **Docker**: `diagnose` command was missing from the entrypoint, causing "exec: diagnose: not found" when running `docker run ... diagnose <MAC>` ([#98](https://github.com/KristianP26/ble-scale-sync/issues/98))


### Thanks

* [@mart1058](https://github.com/mart1058) for reporting the missing Docker diagnose command ([#98](https://github.com/KristianP26/ble-scale-sync/issues/98))

## [1.7.2](https://github.com/KristianP26/ble-scale-sync/compare/v1.7.1...v1.7.2) (2026-04-01)


### Fixed

* **QN Scale**: UUID fallback (FFF0/FFE0) no longer matches named devices from other brands. Prevents Eufy, 1byone, and similar scales that share the FFF0 service from being incorrectly identified as QN Scale and failing with "Operation is not supported" ([#98](https://github.com/KristianP26/ble-scale-sync/issues/98))


### Thanks

* [@mart1058](https://github.com/mart1058) for reporting the Eufy P2 Pro connection failure ([#98](https://github.com/KristianP26/ble-scale-sync/issues/98))

## [1.7.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.7.0...v1.7.1) (2026-03-30)


### Fixed

* **Update check**: replaced strict 24-hour cooldown with calendar-day (UTC) comparison. Users who weigh in slightly earlier each day (e.g. 7:00 AM, then 6:55 AM) were being skipped

## [1.7.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.6.4...v1.7.0) (2026-03-29)


### Added

* **Update check** with anonymous usage statistics ([#87](https://github.com/KristianP26/ble-scale-sync/issues/87)). After each successful measurement (max once per 24h), the app checks `api.blescalesync.dev` for newer versions. Only the app version, OS, and architecture are sent via the User-Agent header. Disable with `update_check: false` in config.yaml. Automatically disabled in CI environments
* **Cloudflare Worker** (`worker/`) serving the `/version` endpoint and a public stats dashboard at [stats.blescalesync.dev](https://stats.blescalesync.dev) with aggregated anonymous data (version distribution, OS/architecture breakdown)
* Setup wizard shows an update notice before the first step if a newer version is available
* **CI**: GitHub Actions workflow for automatic Cloudflare Worker deployment on push to main (`worker.yml`)

## [1.6.4](https://github.com/KristianP26/ble-scale-sync/compare/v1.6.3...v1.6.4) (2026-03-27)


### Fixed

* **BLE**: use ATT Write Request instead of Reliable Write in node-ble handler, fixing "Operation is not supported" errors on Medisana BS430 and similar scales that do not support reliable writes ([#85](https://github.com/KristianP26/ble-scale-sync/issues/85))


### Improved

* **BLE**: GATT characteristic flags are now logged during discovery (`DEBUG=true`) for easier troubleshooting


### Thanks

* [@Ikari34](https://github.com/Ikari34) for reporting the Medisana BS430 issue ([#85](https://github.com/KristianP26/ble-scale-sync/issues/85))

## [1.6.3](https://github.com/KristianP26/ble-scale-sync/compare/v1.6.2...v1.6.3) (2026-03-04)


### Fixed

* **Docker**: removed cleanup workflow that was deleting multi-arch platform manifests, making all Docker images unpullable ([#74](https://github.com/KristianP26/ble-scale-sync/issues/74), [#76](https://github.com/KristianP26/ble-scale-sync/issues/76))


### Thanks

* [@marcelorodrigo](https://github.com/marcelorodrigo) for reporting the broken Docker images ([#74](https://github.com/KristianP26/ble-scale-sync/issues/74))
* [@mtcerio](https://github.com/mtcerio) for the additional report ([#76](https://github.com/KristianP26/ble-scale-sync/issues/76))

## [1.6.2](https://github.com/KristianP26/ble-scale-sync/compare/v1.6.1...v1.6.2) (2026-03-02)


### Changed

* **CI**: Docker `latest` tag now only applies to GitHub releases, not every push to main ([#70](https://github.com/KristianP26/ble-scale-sync/pull/70))
* **CI**: Removed push-to-main Docker build trigger ([#71](https://github.com/KristianP26/ble-scale-sync/pull/71))
* **Docs**: SEO meta keywords added to all documentation pages ([#69](https://github.com/KristianP26/ble-scale-sync/pull/69))
* **Docs**: Alternatives page updated with Strava, file export, and ESP32 proxy sections ([#68](https://github.com/KristianP26/ble-scale-sync/pull/68))
* **Docs**: ESP32 BLE proxy section added to getting started guide ([#67](https://github.com/KristianP26/ble-scale-sync/pull/67))

## [1.6.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.6.0...v1.6.1) (2026-03-01)


### Fixed

* **BlueZ stale discovery recovery** after Docker container restart. Adds kernel-level adapter reset via `btmgmt` as Tier 4 fallback when D-Bus recovery fails, plus proactive adapter reset in Docker entrypoint ([#39](https://github.com/KristianP26/ble-scale-sync/issues/39), [#43](https://github.com/KristianP26/ble-scale-sync/pull/43))


### Changed

* **CI**: Docker cleanup workflow removes PR images and untagged versions from GHCR ([#58](https://github.com/KristianP26/ble-scale-sync/pull/58))
* **Docs**: Contributors section added to README
* **Node.js**: minimum version bumped to 20.19.0 (required by eslint 10.0.2)
* **Deps**: @stoprocent/noble 2.3.16, eslint 10.0.2, typescript-eslint 8.56.1, @types/node 25.3.3, @inquirer/prompts 8.3.0


### Thanks

* [@marcelorodrigo](https://github.com/marcelorodrigo) for reporting the stale BlueZ discovery issue ([#39](https://github.com/KristianP26/ble-scale-sync/issues/39))

## [1.6.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.5.0...v1.6.0) (2026-02-28)


### Added

* **ESP32 BLE proxy** (experimental) for remote BLE scanning over MQTT. Use a cheap ESP32 board (~8€) as a wireless Bluetooth radio, enabling BLE Scale Sync on machines without local Bluetooth. Supports both broadcast and GATT scales
* **ESP32 display board** (Guition ESP32-S3-4848S040) with LVGL UI showing scan status, user matches, and export results
* **Beep feedback** on ESP32 boards with I2S buzzer (Atom Echo) when a known scale is detected
* **Streaming BLE scan** for ESP32-S3 boards with hardware radio coexistence
* **Docker mqtt-proxy compose** (`docker-compose.mqtt-proxy.yml`) requiring no BlueZ, D-Bus, or `NET_ADMIN`
* Setup wizard includes interactive mqtt-proxy configuration
* `BLE_HANDLER=mqtt-proxy` environment variable as alternative to config.yaml
* ESP32 proxy documentation page with architecture diagram, flashing guide, and MQTT topics reference


### Changed

* Renpho broadcast parsing consolidated into QN scale adapter
* Landing page updated with ESP32 proxy and Setup Wizard feature cards


### Thanks

* [@APIUM](https://github.com/APIUM) for the ESP32 MQTT proxy implementation ([#45](https://github.com/KristianP26/ble-scale-sync/pull/45))

## [1.5.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.4.0...v1.5.0) (2026-02-24)


### Added

* **File exporter** (CSV/JSONL) for local measurement logging without external services. Auto-header CSV with proper escaping, JSONL format, per-user file paths, and directory writability healthcheck
* **Strava exporter** with OAuth2 token management. Updates athlete weight via PUT /api/v3/athlete. Automatic token refresh, restricted file permissions (0o600), and interactive setup script (`npm run setup-strava`)
* Strava API application setup guide in documentation with step-by-step instructions

## [1.4.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.3.1...v1.4.0) (2026-02-24)


### Added

* **BLE diagnostic tool** (`npm run diagnose`) for detailed device analysis: advertisement data, service UUIDs, RSSI, connectable flag, and step-by-step GATT connection testing
* **Broadcast mode** for non-connectable QN-protocol scales (#34). Reads weight directly from BLE advertisement data without requiring a GATT connection
* **Garmin 2FA/MFA support** in `setup_garmin.py`. Prompts for authenticator code when Garmin requires multi-factor authentication


### Fixed

* **QN broadcast parser**: corrected byte layout (LE uint16 at bytes 17-18, stability flag at byte 15). Previous layout produced incorrect weight values
* **ES-CS20M**: service UUID 0x1A10 fallback for unnamed Yunmai-protocol devices (#34)
* **ES-CS20M**: 0x11 STOP frame support as stability signal (#34)


### Changed

* **CI**: Node.js 24 added to test matrix (required check)
* **CI**: PR-triggered Docker image builds with `pr-{id}` tags (#44)
* **Deps**: ESLint v10, typescript-eslint v8.56


### Thanks

* [@APIUM](https://github.com/APIUM) for Garmin 2FA support ([#41](https://github.com/KristianP26/ble-scale-sync/pull/41))
* [@Tosiman-Global](https://github.com/Tosiman-Global) and [@BenBaril83](https://github.com/BenBaril83) for debugging the ES-CS20M broadcast protocol (#34)
* [@marcelorodrigo](https://github.com/marcelorodrigo) for PR-triggered Docker builds ([#44](https://github.com/KristianP26/ble-scale-sync/pull/44))

## [1.3.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.2.2...v1.3.0) (2026-02-16)


### Added

* Garmin multi-user Docker authentication — `setup-garmin --user <name>` and `--all-users` commands
* `setup_garmin.py --from-config` mode reads users and credentials from `config.yaml`
* `--token-dir` argument for `garmin_upload.py` and `setup_garmin.py` — per-user token directories
* Tilde expansion for `token_dir` in TypeScript exporter
* 4 new Garmin exporter tests (token_dir passing, tilde expansion, backward compat)
* `pyyaml` dependency for config.yaml parsing in Python scripts
* Docker multi-user volume examples in `docker-compose.example.yml` and docs


### Fixed

* Friendly error message when D-Bus socket is not accessible (missing `-v /var/run/dbus:/var/run/dbus:ro` in Docker) instead of raw `ENOENT` crash (#25)


### Changed

* Wizard passes Garmin credentials via environment variables instead of CLI arguments (security)


### Thanks

* [@marcelorodrigo](https://github.com/marcelorodrigo) for [#29](https://github.com/KristianP26/ble-scale-sync/pull/29) — the initial implementation that inspired this solution

## [1.2.2](https://github.com/KristianP26/ble-scale-sync/compare/v1.2.1...v1.2.2) (2026-02-14)


### Added

* Annotated `config.yaml.example` with all sections and exporters
* `CONTRIBUTING.md` — development guide, project structure, test coverage, adding adapters/exporters, PR guidelines
* `CHANGELOG.md`
* GitHub Release and TypeScript badges
* Documentation split into `docs/` — exporters, multi-user, body-composition, troubleshooting


### Changed

* Rewrite README (~220 lines, Docker-first quick start, simplified scales table)
* Move dev content (project structure, test coverage, adding adapters/exporters) into CONTRIBUTING.md
* `.env.example` now notes that `config.yaml` is the preferred configuration method

## [1.2.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.2.0...v1.2.1) (2026-02-13)


### Added

* Docker support with multi-arch images (`linux/amd64`, `linux/arm64`, `linux/arm/v7`)
* `Dockerfile`, `docker-entrypoint.sh`, `docker-compose.example.yml`
* GitHub Actions workflow for automated GHCR builds on release
* Docker health check via heartbeat file

## [1.2.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.1.0...v1.2.0) (2026-02-13)


### Added

* Interactive setup wizard (`npm run setup`) — BLE discovery, user profiles, exporter configuration, connectivity tests
* Edit mode — reconfigure any section without starting over
* Non-interactive mode (`--non-interactive`) for CI/automation
* Schema-driven exporter prompts — new exporters auto-appear in the wizard

## [1.1.0](https://github.com/KristianP26/ble-scale-sync/compare/v1.0.1...v1.1.0) (2026-02-13)


### Added

* Multi-user support — weight-based user matching (4-tier priority)
* Per-user exporters (override global for specific users)
* `config.yaml` as primary configuration format (`.env` fallback preserved)
* Automatic `last_known_weight` tracking (debounced, atomic YAML writes)
* Drift detection — warns when weight approaches range boundaries
* `unknown_user` strategy (`nearest`, `log`, `ignore`)
* SIGHUP config reload (Linux/macOS)
* Exporter registry with self-describing schemas
* Multi-user context propagation to all 5 exporters (MQTT topic routing, InfluxDB tags, Webhook fields, Ntfy prefix)

## [1.0.1](https://github.com/KristianP26/ble-scale-sync/compare/v1.0.0...v1.0.1) (2026-02-13)


### Changed

* Configuration is now `config.yaml`-first with `.env` as legacy fallback
* README rewritten for `config.yaml` workflow

## [1.0.0](https://github.com/KristianP26/ble-scale-sync/releases/tag/v1.0.0) (2026-02-12)


### Added

* Initial release
* 23 BLE scale adapters (QN-Scale, Xiaomi Mi Scale 2, Yunmai, Beurer, Sanitas, Medisana, and more)
* 5 export targets: Garmin Connect, MQTT (Home Assistant), Webhook, InfluxDB, Ntfy
* BIA body composition calculation (10 metrics)
* Cross-platform BLE support (Linux/node-ble, Windows/@abandonware/noble, macOS/@stoprocent/noble)
* Continuous mode with auto-reconnect
* Auto-discovery (no MAC address required)
* Exporter healthchecks at startup
* 894 unit tests across 49 test files
