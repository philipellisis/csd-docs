---
sidebar_position: 6
---

# Reset configuration to default

If you would like to reset the PinOne to standard default settings, then place the content of the below in the `PinOneSettings.xml` file that is in the same location as the `CSDControllerTool.exe`. Then open the config tool, press the `Get Backup` button and then press the `Save Config` button. At to ensure all settings are resolved, reset the PinOne by unplugging the USB and plugging it back in again. 

```xml
<?xml version="1.0" encoding="utf-8"?>
<BoardConfiguration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <toySpecialOption>AQEBAQEBAQEBAQAAAAAAAgICAgICAgICAgICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==</toySpecialOption>
  <turnOffState>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==</turnOffState>
  <maxOutputState>////////////////////////////////////////////////////////////////////////////////////AA==</maxOutputState>
  <maxOutputTime>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==</maxOutputTime>
  <plungerMax>852</plungerMax>
  <plungerMin>60</plungerMin>
  <plungerMid>198</plungerMid>
  <solenoidButtonMap>AAAAAAA=</solenoidButtonMap>
  <solenoidOutputMap>AAAAAAA=</solenoidOutputMap>
  <orentation>1</orentation>
  <accelerometer>true</accelerometer>
  <accelerometerMultiplier>0</accelerometerMultiplier>
  <accelerometerDeadZone>10</accelerometerDeadZone>
  <buttonOption>0</buttonOption>
  <accelerometerTilt>150</accelerometerTilt>
  <accelerometerMax>300</accelerometerMax>
  <accelerometerTiltY>150</accelerometerTiltY>
  <accelerometerMaxY>300</accelerometerMaxY>
  <plungerAverageRead>10</plungerAverageRead>
  <nightModeButton>14</nightModeButton>
  <plungerLaunchButton>23</plungerLaunchButton>
  <tiltButton>22</tiltButton>
  <shiftButton>1</shiftButton>
  <buttonKeys>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</buttonKeys>
  <disableAccelOnPlungerMove>true</disableAccelOnPlungerMove>
  <enablePlungerQuickRelease>true</enablePlungerQuickRelease>
  <disablePlungerWhenNotInUse>true</disablePlungerWhenNotInUse>
  <disableButtonPressWhenKeyboardEnabled>true</disableButtonPressWhenKeyboardEnabled>
  <buttonKeyDebounce>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==</buttonKeyDebounce>
  <buttonDebounceCounter>0</buttonDebounceCounter>
  <enablePlunger>255</enablePlunger>
  <tiltSuppression>255</tiltSuppression>
  <enableLightShowAttract>255</enableLightShowAttract>
  <lightShowTime>30</lightShowTime>
  <reverseButtonOutputPolarity>true</reverseButtonOutputPolarity>
</BoardConfiguration>
```

