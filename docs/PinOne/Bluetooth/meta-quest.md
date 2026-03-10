---
sidebar_position: 3
---

# Meta Quest Configuration

The PinOne Bluetooth board supports two different input modes for use with the Meta Quest headset: **keyboard mode** for Pinball FX, and **gamepad mode** for VR Classic. This page covers how to configure each mode using the PinOne Configuration Tool.

Before proceeding, make sure the Bluetooth board is installed and paired with your Meta Quest headset. See [Installing the Bluetooth Board](./installing) for pairing instructions.

## Pinball FX — Keyboard Mapping

Pinball FX on the Meta Quest uses keyboard inputs to control the game. You need to configure the PinOne to send the correct keyboard keystrokes for each button press. This is done through the **Inputs** screen in the PinOne Configuration Tool.

### Configuring Keyboard Inputs

1. Connect the PinOne Mini to your PC via USB and open the PinOne Configuration Tool.
2. Navigate to the **Inputs** screen.
3. For each button, click the keyboard icon next to the button and press the corresponding key on your keyboard to record it.

### Keyboard Mapping for Pinball FX

Set the following keyboard keypresses on each button input to match the expected controls in Pinball FX:

| Function | Key |
|---|---|
| Nudge Up | `A` |
| Nudge Down | `S` |
| Nudge Right | `D` |
| Nudge Left | `F` |
| Left Flipper | `U` |
| Right Flipper | `6` |
| Pause | `I` |
| Launch Ball | `8` |
| Powerup | `5` |

Once these keyboard mappings are saved to the PinOne, each button press will transmit the corresponding keystroke wirelessly via Bluetooth to the Meta Quest, where Pinball FX will respond to them as if they were pressed on a keyboard.

> **Tip:** You can use the **Set Meta Quest keyboard bindings** shortcut button on the main configuration screen to apply the above key mappings automatically without having to set them one by one.

### Using the Quick Setup Button

The PinOne Configuration Tool includes a one-click option to apply the recommended Meta Quest keyboard bindings all at once. After connecting the board, click the **Set Meta Quest Keyboard Bindings** button on the main configuration screen. This will set all the keys listed above without affecting your plunger calibration, accelerometer settings, or any other configuration.

---

## VR Classic — Gamepad Inputs

VR Classic mode in Pinball FX uses standard gamepad inputs rather than keyboard inputs. In this mode, the PinOne Bluetooth board presents itself to the Meta Quest as a Bluetooth gamepad, and the buttons map to controller inputs that Pinball FX expects for VR Classic gameplay.

### Configuring Gamepad Mode

Configuring the gamepad inputs for VR Classic is done the same way as the Steam configuration. Connect the PinOne to your PC via USB, open the PinOne Configuration Tool, and navigate to the **Steam Config** screen. Use the dropdowns to assign each physical button to the corresponding Xbox controller input. Once you are happy with the mapping, click the **Save** button — this writes the button mappings directly to the Bluetooth device, so the correct gamepad inputs are sent to the Meta Quest when you play in VR Classic mode.

### Gamepad Button Mapping for VR Classic

Set the following gamepad inputs on the PinOne for use in VR Classic mode:

| Function | Input |
|---|---|
| Left Flipper | Left Trigger |
| Right Flipper | Right Trigger |
| Magna Save Left | Left Bumper |
| Magna Save Right | Right Bumper |
| Launch Ball | `A` Button |
| Nudge | Left Joystick (axis) |
| Pause / Menu | Start |

These mappings align with the default VR Classic control scheme in Pinball FX. Nudge inputs are driven by the accelerometer on the PinOne, which feeds into the left joystick axes — make sure the accelerometer is calibrated correctly for the best nudge response. See [Accelerometer Calibration](../Configuring/accelerometer) for details.

### Setting Up VR Classic in Pinball FX

1. Launch Pinball FX on your Meta Quest.
2. Go to **Options → Controller Settings**.
3. Ensure the PinOne is selected as the active controller.
4. Confirm that the button assignments match the mapping table above. Adjust any bindings in-game if they differ from the defaults.

---

## Switching Between Modes

To switch between keyboard mode (Pinball FX) and gamepad mode (VR Classic), hold the **fire button** (button 9) for 5 seconds. The button lights on the PinOne Mini will flash to confirm that the mode has switched. Repeat the same hold to switch back.

Both the plunger and accelerometer work the same way in either mode, so you do not need to re-calibrate those when switching.

