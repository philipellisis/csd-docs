---
sidebar_position: 9
---

# Mac Setup

macOS blocks the Config Tool by default because it is quarantined as a downloaded app. Removing the quarantine flag is all that's needed to get it running.

### Step 1 - Install the app

Move `PinOne Configuration Tool.app` into your `/Applications` folder.

### Step 2 - Remove the quarantine flag

Open Terminal and run:

```bash
xattr -dr com.apple.quarantine "/Applications/PinOne Configuration Tool.app"
```

### Step 3 - Launch the Config Tool

Open the app from `/Applications` as normal.
