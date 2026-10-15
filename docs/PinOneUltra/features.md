---
sidebar_position: 1
---

# PinOne Ultra Features

## What is new compared to the original PinOne

| | Original PinOne | PinOne Ultra |
|---|---|---|
| Microcontroller | ATmega32U4 (5V) | ESP32-S3 (3.3V), dual core |
| Direct outputs | 31 on the main board | 31 direct PWM outputs on the main board |
| Total outputs | 63 | 63 (15 direct + 48 on three PCA9685 expansion boards) |
| PWM or on/off | Fixed by output number | Each output can be set to PWM (dimmable) or on/off only |
| Bluetooth | Separate Bluetooth module | Native Bluetooth LE built into the board |
| USB | USB serial | Native USB. The config tool talks over a HID channel instead of a COM port |
| Accelerometer | MPU6050 | QMI8658, orientation in 5 degree steps, optional velocity output |
| Plunger ADC | 10-bit | 12-bit, calibration values are in millivolts (0-3300) |
| IR transmitter | Bit-banged | Hardware (RMT) based, NEC, Samsung and Sony SIRC |
| Input profiles | No | Up to 4 keyboard mapping profiles |
| Button lock | No | Yes |
| Firmware | Normal and X-Input builds | One firmware, updated from the config tool |

## Core Hardware Features

- Fully DOF and DOFLinx compatible board
- 100% compatible in Steam, which means no controller emulation needed to make it work, including the plunger
- 15 direct PWM outputs built into the board, each of which can be used as a dimmable PWM output or a simple on/off output
- Up to three expansion boards (PCA9685) can be attached for an additional 48 outputs, for a total of 63 outputs
- 24 physical inputs for buttons and other devices, plus 8 shifted buttons
- Separate analog input for a potentiometer based plunger, read at 12 bit resolution
- Accelerometer for excellent nudge support, with optional velocity based nudge output
- Native Bluetooth LE: connect to a phone, tablet, PC or VR headset as an Xbox style gamepad and keyboard, and receive DOF output over Bluetooth
- Super low latency button encoder. Inputs, plunger and accelerometer are read on a dedicated core, so slow output work (I2C, IR) never delays a button press
- IR transmitter support, so the board can turn your TV on

## Software Enabled Features

- Full graphical utility tool for customizing and configuring the board, with a live view of every input, output, the plunger and the accelerometer
- One click configuration presets for Meta Quest, VPX keyboard bindings and the Mini Machine
- Up to 4 inputs can be assigned to activate any output, allowing the flipper buttons to activate solenoids with full feedback without configuring any software at all
- There is a full "Light Show" embedded on the board, so even if you don't have DOF configured, you can still enjoy lights flashing and changing colors during game play
- All outputs can have timed outputs enabled for auto shut off to protect your equipment
- All PWM outputs can have a timed "low output" state that ensures after a period of time that the outputs are turned down to a lower level
- All PWM outputs can have a configured maximum output level so you don't have to rely on external software to change the level of outputs
- Outputs can be configured for "Night Mode", allowing certain outputs to turn off when the night mode switch is activated
- Inputs and outputs can be given custom names
- **Input profiles**: up to four keyboard mapping profiles that you switch between by holding a button, with an output pulse to tell you which profile is active. See [Inputs](./Configuring/inputs#input-profiles)
- **Button lock**: lock out all buttons except a short allowed list to prevent accidental presses. See [Inputs](./Configuring/inputs#button-lock)
- **Velocity nudge**: optional velocity output on the Rx/Ry axes for simulators that support velocity based nudge. See [Accelerometer](./Configuring/accelerometer#velocity-output)
- Accelerometer dead zone, tilt and max values can be captured automatically with the record buttons
- Accelerometer can press a different button for each of the four nudge directions, effectively simulating a tilt bob via software
- Accelerometer orientation can be set in 5 degree increments with a live preview of how the board is mounted
- Plunger can press a button when pushed in to a certain level and also when extended to a certain level, allowing the plunger to be used normally to activate the fire button
- Plunger quick release for accurate VPX plunger releases
- Button #9 (normally the fire button) can be programmed as a "shift" button that will allow buttons 5-12 to actually trigger buttons 25-32
- Solenoid sharing feature allows a good solenoid experience even in very limited cabinet sizes as the software will route solenoid trigger events across all available solenoids
- The config tool warns you when the same button is assigned to more than one feature
