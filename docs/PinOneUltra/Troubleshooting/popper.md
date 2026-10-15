---
sidebar_position: 2
---

# PinUp Popper issues 

## game buttons not responding

First check that your game controller is properly responding in windows USB game controllers:

1. Click start and type "USB Game" and click on USB Game Controllers:

![USB Game Controllers](./img/popper1.png)

2. go to properties

![USB Game Controllers](./img/popper2.png)

Ensure that the controller is responding to button presses, plunger movement etc. If not, then follow these steps to fix the game controller: [windows game settings](game-controller)

If the controller is operating fine there, then check for any buttons being permanently pushed down. Button 23 being pushed down is usually the tilt button. If this is the case, then check your accelerometer settings, ensuring they are set properly: [Accelerometer Calibration](../Configuring/accelerometer)

![Accelerometer Settings](./img/popper7.png)

Also check to make sure the plunger is calibrated with the right resting position: [Plunger Calibration](../Configuring/plunger)

## "Invalid Floating Point Operation"

If you get the "Invalid Floating Point Operation" in Pinup Popper with a PinOne installed, it is likely due to a problem with the Z axis or the accelerometer calibration. You can fix this by going into the PinOne calibration menu, or if you don't have a plunger connected, you can simply run through the windows calibration to set everything correctly:

1. Click start and type "USB Game" and click on USB Game Controllers:

![USB Game Controllers](./img/popper1.png)

2. go to properties

![USB Game Controllers](./img/popper2.png)

3. Verify that the plunger is maxed out (z axis)

![USB Game Controllers](./img/popper3.png)

4. Go to the settings table and click calibrate

![USB Game Controllers](./img/popper4.png)

5. Run through all the calibration steps. For the accelerometer, you will want to move the accelerometer to all the extremes by nudging the cabinet to ensure the sensor is set properly in windows. For the plunger there is no need to do anything since it is not connected.

![USB Game Controllers](./img/popper5.png)

6. verify that the plunger is now set in the middle and the error should now be gone when opening Popper

![USB Game Controllers](./img/popper6.png)