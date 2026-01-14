---
sidebar_position: 7
---

# True Leaf Buttons

## Introduction

This is a true leaf switch button with an RGB light built into it! You can even select from single and double switch action which can enable advanced features in VPX. Gold contacts, long throw and a great spring make this the most authentic pinball experience to date, and the best part is that the RGB lights are built right into the button, making it extremely easy to hook up to your rig. The LED lights already have the resistors built in for 5v operation as well, making them easy to hook up to any system.

## Staged Flipper Configuration

1. Edit the VPMkeys.vbs file in the scripts folder to not combine the regular flipper keys with the staged flipper keys. You add “Staged” to before where it says LeftFlipperKey and RightFlipperKey. See the pic for the change.
![image](./img/staged_flippers_1.jpg)

2. You need to assign the buttons in the VPX keys. In my setup I plugged the new staged terminations (only positive wire was needed) to physical port 12 and 13 of my PinOne interface board.
![image](./img/staged_flippers_2.jpg)

3. change the settings by modding the vpx table code. Addams Family has a simple true false setup for stages flippers. It’s a good test table.
![image](./img/staged_flippers_3.jpg)