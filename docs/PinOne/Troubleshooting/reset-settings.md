---
sidebar_position: 6
---

# Reset configuration to default

If you would like to reset the PinOne to standard default settings, then place the content of the below in the `PinOneSettings.pinc` file. Then open the config tool, press the `Restore Configuration from PC` button and then press the `Save Config` button. At to ensure all settings are resolved, reset the PinOne by unplugging the USB and plugging it back in again. 

```json
{
  "toySpecialOption": [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "turnOffState": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "maxOutputState": [
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255
  ],
  "maxOutputTime": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "plungerMax": 802,
  "plungerMin": 32,
  "plungerMid": 139,
  "solenoidButtonMap": [
    1,
    3,
    0,
    0
  ],
  "solenoidOutputMap": [
    1,
    2,
    0,
    0
  ],
  "orientation": 9,
  "accelerometer": true,
  "accelerometerMultiplier": 0,
  "accelerometerDeadZone": 269,
  "buttonOption": 2,
  "accelerometerTilt": 6124,
  "accelerometerMax": 8065,
  "accelerometerTiltY": 6460,
  "accelerometerMaxY": 8177,
  "plungerAverageRead": 10,
  "nightModeButton": 34,
  "plungerLaunchButton": 23,
  "tiltButton": 22,
  "shiftButton": 1,
  "buttonKeys": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    110,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "disableAccelOnPlungerMove": true,
  "enablePlungerQuickRelease": 145,
  "disablePlungerWhenNotInUse": true,
  "disableButtonPressWhenKeyboardEnabled": true,
  "buttonKeyDebounce": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "buttonDebounceCounter": 0,
  "enablePlunger": true,
  "tiltSuppression": 10,
  "enableLightShowAttract": true,
  "lightShowTime": 10,
  "reverseButtonOutputPolarity": true
}
```
