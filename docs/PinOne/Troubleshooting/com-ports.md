---
sidebar_position: 2
---

# Com Port Issues

### Com ports are showing up as "in use" in device manager

To fix this, use the following steps:

1. In an elevated command prompt:

```cmd
set DEVMGR_SHOW_NONPRESENT_DEVICES=1
devmgmt.msc
```

2. Device Manager → View ▶ Show hidden devices → Ports.
3. Right-click every greyed-out “(COM xx)” entry and choose Uninstall to free the number. Also uninstall the COM port used by the PinOne board.
4. Reboot and retry.