---
sidebar_position: 1
---

# PinOne Features

## Core Hardware Features

- Fully DOF and DOFLinx compatible board
- 100% compatible in Steam, which means no controller emulation needed to make it work, including the plunger!
- 31 outputs built into the board (20 PWM and 11 on/off outputs)
- 16 5v onboard PWM outputs are capable of providing low current outputs for LEDs and have current limiting resistors built in. No need for an additional power supply to run LED buttons as they are all powered by the USB power
- Using expansion boards can provide an additional 32 outputs for a total of 63 outputs
- 24 inputs for buttons and other devices
- Separate input for potentiometer based plunger
- High accuracy accelerometer and gyroscope for excellent nudge support
- Super low latency "0 delay" button encoder with less than 1ms delay

## Software Enabled Features

- Full graphical utility tool for customizing and configuring the board for your system
- Up to 4 inputs can be assigned to activate any output, allowing for a lot of cool possibilities, but the main use case is to allow the flipper buttons to activate solenoids, so you can have full feedback without configuring any software at all
- There is a full "Light Show" embedded on the board, so even if you don't have DOF configured, you can still enjoy lights flashing and changing colors during game play.
- All outputs can have timed outputs enabled for auto shut off to protect your equipment
- All PWM outputs can have a timed "low output" state that ensures after a period of time that the outputs are turned down to a lower level
- All PWM outputs can have a configured maximum output level so you don't have to rely on external software to change the level of outputs
- Outputs can be configured for "Night Mode", allowing certain outputs to turn off when the night mode switch is activated
- Accelerometer has a dead zone tuning utility that allows you to capture the ideal dead zone to ignore while toys are activated to ensure there is never any nudge event set off by the toys in your cabinet
- Accelerometer can be configured to activate a button press when it reaches a certain level, effectively simulating a tilt bob via software
- Plunger can be configured to actiSvate a button press when pushed in a certain level and also when extended to a certain level, allowing the plunger to be used normally to activate the fire button
- button #9 (normally the fire button) can be programmed as a "shift" button that will allow buttons 5-12 to actually trigger buttons 25-32.
- Solenoid sharing feature allows a good solenoid experience even in very limited cabinet sizes as the software will route solenoid trigger events across all available solenoids
