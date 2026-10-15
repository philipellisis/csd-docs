---
sidebar_position: 8
---

# Linux Setup

Guide for connecting the PinOne Config Tool on Linux. Tested on Ubuntu 24.04 XFCE, VPX 10.8.1 BGFX, and PinOne Config Tool 2.2.1.

### Background

On Linux, the PinOne board is detected correctly and works fine in VPX, but the Config Tool may fail to connect: Auto Connect fails, and manually selecting the correct serial port causes the app to hang indefinitely. This is caused by a HID interface being claimed by the Linux `hid-generic` driver. The fix below unbinds that interface just long enough to connect.

### Prerequisites

Confirm the board is detected:

```bash
lsusb
```

Look for a device with Vendor ID `0e8f` and Product ID `9207`.

Confirm your user is in the `dialout` group (required for serial port access):

```bash
groups
```

### Step 1 - Identify the correct serial port

Don't assume the PinOne is `ttyACM0` — check each ACM device until you find one reporting `idVendor==0e8f` and `idProduct==9207`:

```bash
udevadm info -a -n /dev/ttyACM0 | grep -E "idVendor|idProduct|KERNELS" | head -20
udevadm info -a -n /dev/ttyACM1 | grep -E "idVendor|idProduct|KERNELS" | head -20
```

### Step 2 - Launch the Config Tool

```bash
cd ~/Downloads
chmod +x pinone-config-tool-2.2.1.AppImage
./pinone-config-tool-2.2.1.AppImage --no-sandbox
```

Select the port identified in Step 1 (auto connect does not work) and click **Connect**. Without the fix in Step 3, this will hang.

### Step 3 - Apply the HID fix

Close the Config Tool completely, then unbind interface `.0003`:

```bash
echo "0003:0E8F:9207.0003" | sudo tee /sys/bus/hid/drivers/hid-generic/unbind
```

Verify it's no longer attached — you should only see `.0002` and `.0004` remaining:

```bash
ls /sys/bus/hid/drivers/hid-generic/ | grep 0E8F
```

### Step 4 - Connect

```bash
cd ~/Downloads
./pinone-config-tool-2.2.1.AppImage --no-sandbox
```

Select the PinOne's ACM port and click **Connect**. A successful connection shows:

- Connect changes to Disconnect
- Inputs, Outputs, Plunger, and Accelerometer pages load
- Settings and Controller pages are available

### Step 5 - Restore normal operation

Once you're done configuring, rebind the interface:

```bash
echo "0003:0E8F:9207.0003" | sudo tee /sys/bus/hid/drivers/hid-generic/bind
```

Verify all three interfaces (`.0002`, `.0003`, `.0004`) are present again.

### Optional - One-click launcher script

Create `~/bin/pinone-config.sh`:

```bash
#!/bin/bash
echo "0003:0E8F:9207.0003" | sudo tee /sys/bus/hid/drivers/hid-generic/unbind
APP="$HOME/Downloads/pinone-config-tool-2.2.1.AppImage"
"$APP" --no-sandbox
echo "0003:0E8F:9207.0003" | sudo tee /sys/bus/hid/drivers/hid-generic/bind
```

Make it executable and run it:

```bash
chmod +x ~/bin/pinone-config.sh
~/bin/pinone-config.sh
```

This unbinds the interface, launches the tool, and rebinds the interface automatically when the tool closes.

### Optional - Remote administration with Remmina

The Config Tool can be launched remotely after interface `.0003` is unbound, but input indicators may not update properly over RDP. For input testing, use the tool locally at the cabinet.

