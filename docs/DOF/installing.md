---
sidebar_position: 1
---

# Installing DOF

In order to get the LATEST version of DOF, I highly recommend to install from here and not from anywhere else you might find installers on the internet. These are the latest builds of DOF that include important security updates as well as bug fixes and device compatibility that are not available from any other sources that I am aware of at this time.

You can install DOF using the installers found here. Make sure you select the correct version based on the install of VPX on your PC (64 or 32 bit)
- [32bit DOF Installer](./files/DOFSetupBeta.msi) 
- [64bit DOF Installer](./files/DOFSetup64Beta.msi)

## Installing both 32 bit and 64 bit DOF
When installing the 64 bit version, make sure to place it in a different directory from the 32 bit version if you intend on running both at the same time. You will also need to manually update the plugins shortcut that is normally created for you when installing the 64 bit version if you want to be able to run both. The best process to follow for a successful install of both a 32 bit and 64 bit install is the following:

1. Install the 64 bit version of DOF.
2. After install, copy the entire folder (typically C:/DirectOutput) and rename the copy as C:/DirectOutput64
3. Now install the 32 bit version of DOF.
4. After install, check to ensure that the {Visual_Pinball_Install_Location}/tables/plugins directory has a shortcut to the C:/DirectOutput directory, and the {Visual_Pinball_Install_Location}/tables/plugins64 directory has a shortcut to the C:/DirectOutput64 directory. 