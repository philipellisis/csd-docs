---
sidebar_position: 4
---

# Issues updating firmware

When updating the firmware, when you see an image like the following, then you can be sure it has successfully updated:

![Firmware 3](./img/firmware3.png)

If you aren't seeing that dialog, then see the sections below for getting the firmware to upload.

## When clicking the "Update firmware" button, nothing seems to happen

If you are having trouble updating the firmware on your system, sometimes the COM ports in windows can get a little mixed up and there are a few things you can do to try to resolve the issue.

1. First just try to unplug the PinOne USB cable and try again. Typically this will allow it to update
2. Next, if you still can't get it to update after unplugging the USB cable, also try to manually select the COM port in the menu when updating instead of using the "auto" option
3. If this still doesn't work, there are a few more things you can try:

### Re-assign the COM port in windows:

go to device manager and find the device for the COM port, right click on the COM port and select "properties"

![Firmware 4](./img/firmware4.png)

Next, navigate to the "port settings" tab and click "advanced"

![Firmware 5](./img/firmware5.png)

Finally, re-assign a new, unused COM port, unplug the PinOne, restart the Config Tool software, and try updating the firmware again

4. If this step does not work, the last option is to actually press the reset button on the PinOne as the Firmware is updating. This is not simple to get to in some cases, and should never actually need to happen unless somehow the firmware has gotten corrupt.

## Getting the "Ensure PinOne is the only COM PORT Error

![Firmware 1](./img/firmware1.png)

If you see this error, then there might be other COM ports on the system, try restarting the config tool, then manually select one of the COM ports on the list to the right of the button and try again.

## Getting the "Programmer is not responding" error

![Firmware 2](./img/firmware2.png)

This is typically caused by an incorrect COM port selected or some other error. Try restarting the config tool to refresh the COM ports that are available and try again. If you still can't get it to work, then try the steps on the first part of this section.
