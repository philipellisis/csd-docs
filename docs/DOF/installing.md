---
sidebar_position: 1
---

# Installing DOF

:::tip Looking for a simpler install?
If you just want feedback working on your PinOne, [SuperDOF](../SuperDOF/) is a great and simple alternative. It replaces both DOF and DOFLinx, and gets everything running with one exe and a single setup command. SuperDOF is currently in beta and has some limitations, so check the [SuperDOF page](../SuperDOF/) to see if it fits your setup.
:::

In order to get the LATEST version of DOF, I highly recommend to install from here and not from anywhere else you might find installers on the internet. These are the latest builds of DOF that include important security updates as well as bug fixes and device compatibility that are not available from any other sources that I am aware of at this time.

You can install DOF using the installers found here. Make sure you select the correct version based on the install of VPX on your PC (64 or 32 bit)

Released November 12th 2026 - version 3.2.9763
- [32bit DOF Installer](https://github.com/philipellisis/DirectOutputMain/releases/latest/download/DOFSetup.msi)
- [64bit DOF Installer](https://github.com/philipellisis/DirectOutputMain/releases/latest/download/DOFSetup64.msi)

You can also see all files and release notes on the [releases page](https://github.com/philipellisis/DirectOutputMain/releases/tag/v3.2.9763).

:::tip PinOne Ultra users
This version of DOF talks to the PinOne Ultra directly over its USB HID DOF protocol, so the legacy serial connection is no longer needed. After installing, open the PinOne config tool, go to **Settings**, turn off **Legacy RS232 DOF Fallback**, and click **Save Config**. See [PinOne Ultra Settings](../PinOneUltra/Configuring/mainSettings.md#other-settings) for details.
:::

## Installing both 32 bit and 64 bit DOF
Run both installers, and make sure they are both installed in the same location (it will default to your C:/DirectOutput directory) When DOF is installed, they will automatically create directories for x86 (32 bit version) and x64 (64 bit version).