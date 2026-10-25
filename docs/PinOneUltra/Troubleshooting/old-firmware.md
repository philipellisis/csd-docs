---
sidebar_position: 2
---

# Moving from the original PinOne

### Settings from the original PinOne

The PinOne Ultra uses a different microcontroller and a different configuration format than the original PinOne, but you can still use your backup from the original PinOne to migrate to the new one. You should still do a few things after migrating to the Ultra:

- The plunger is now read in millivolts (0-3300), so the plunger must be recalibrated with the [calibration routine](../Configuring/plunger#calibrate).
- The accelerometer is a different chip, so the accelerometer must be recalibrated. See [Accelerometer](../Configuring/accelerometer).
- Steam mappings made for the original PinOne need to be created again from the [Controller page](../Configuring/steam).

### Using the config tool

The PinOne Ultra needs the newer version of the config tool from [here](https://github.com/philipellisis/PinOne/releases/latest/download/pinone-config-tool.exe) (Windows) or the [releases page](https://github.com/philipellisis/PinOne/releases/latest). The original PinOne can continue to use its own version of the tool. The older config tool for firmware updates on original boards is still available here: [Config Tool](https://github.com/philipellisis/virtual-pinball-board-configurator/releases)
