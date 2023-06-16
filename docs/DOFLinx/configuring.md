---
sidebar_position: 2
---

# Configuring DOFLinx

## Setting up the DOFLinx.ini file

In order to configure DOFLinx, you need to setup the DOFLinx.ini file and save it in the same directory that DOFLinx.exe resides in. Thankfully there are some great examples included with DOFLinx to use. I recommend to look at the ```DOFLinx-Almost Everything TerryRed update.ini``` in the ```C:\DirectOutput\Sample INI files``` directory. The main thing to be aware of are the different toys and how to send the outputs to each. In the file you will see shorthand two character codes that represent a different output toy followed by which board and output it corresponds to, the duration and intensity. For example: ```LINK_LF=101,50,10000,255``` shows that the Left Flipper (LINK_LF) is connected to board 1, output 01 (101), will be on for 50ms at minimum, 10000ms at most (50,10000) and will be on at maximum intensity (255).

All your outputs will be configured in the same way, and for the most part you will only need to modify the output number. The rest can stay the way it is, so in the case of ```LINK_LF=101,50,10000,255``` if your left flipper happens to be on output #5 on your PinOne board, all you need to do is change the line to ```LINK_LF=105,50,10000,255```.

Here is a list of most of the codes and what output they correspond to:

### Solenoids
- LF = Left flipper
- RF = Right flipper
- LS = Left slingshot
- RS = Right slingshot
- ML = Mid field left solenoid
- MC = Mid field centre solenoid
- MR = Mid field right solenoid
- BL = Back left solenoid
- BC = Back centre solenoid
- BR = Back right solenoid

### Flasher and strobe
- FLOL = Flasher outer left
- FLIL = Flasher Inner Left
- FLCN = Flasher Centre
- FLOR = Flasher Outer Right
- FLIR = Flasher Inner Right
- SR = Strobe

### Buttons
- ST = Start button
- EB = Extra Ball button
- EX = Exit button
- CN = Coin button
- LB = Launch Ball button
- FR = Fire Button

### Other toys
- SH = Shaker motor
- GR = Gear motor
- KN = Knocker
- FN = Fan
- BK = Beacon

## Running

The only thing to do to run DOFLinx is to launch the DOFLinx.exe file. If your config file is setup properly it should launch without any error messages being displayed.