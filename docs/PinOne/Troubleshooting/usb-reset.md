---
sidebar_position: 7
---

# Resetting USB Devices in Windows

If the PinOne's USB HID devices (such as the gamepad or keyboard buttons) are not working as expected, a full reset of the Windows USB device entries can often fix it. This tends to work better than editing the registry directly (see [Windows USB Game controllers](./game-controller.md)) and is worth trying first.

1. Open Command Prompt as Administrator.
2. Find all the PinOne device entries by running:

```cmd
pnputil /enum-devices | findstr /i 9207
```

This lists every device instance associated with the PinOne's USB VID/PID (`0E8F`/`9207`).

3. Unplug the PinOne from the computer's USB port.
4. Remove every device listed in step 2 using `pnputil /remove-device` with the instance ID shown for each one. For example:

```cmd
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_00\7&1cc7825a&0&0000"
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_00\6&22872f6f&0&0000"
pnputil /remove-device "HID\VID_0E8F&PID_9207&MI_03\8&306f7c2d&0&0000"
pnputil /remove-device "HID\VID_0E8F&PID_9207&MI_02\8&18abefe8&0&0000"
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_02\7&1cc7825a&0&0002"
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_02\6&22872f6f&0&0002"
pnputil /remove-device "HID\VID_0E8F&PID_9207&MI_02\7&32b3b109&0&0000"
pnputil /remove-device "USB\VID_0E8F&PID_9207\6&34110b8c&0&2"
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_03\7&1cc7825a&0&0003"
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_03\6&22872f6f&0&0003"
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_04\7&1cc7825a&0&0004"
pnputil /remove-device "USB\VID_0E8F&PID_9207\CDE"
pnputil /remove-device "HID\VID_0E8F&PID_9207&MI_04\7&32c987f&0&0000"
pnputil /remove-device "USB\VID_0E8F&PID_9207&MI_04\6&22872f6f&0&0004"
pnputil /remove-device "HID\VID_0E8F&PID_9207&MI_03\7&1af024c4&0&0000"
```

:::note
The instance IDs above are just an example — always use the IDs returned by the `findstr` command in step 2 on your own machine, since they will differ from device to device.
:::

5. Plug the PinOne back in. Windows will reinstall all the device entries fresh, and the gamepad and keyboard buttons should now work correctly.
