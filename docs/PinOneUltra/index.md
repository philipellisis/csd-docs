---
sidebar_position: 1.1
---

# PinOne Ultra

## Introduction

The PinOne Ultra is the next generation of the [PinOne board](https://www.clevelandsoftwaredesign.com/pinball-parts/p/pinone-control-board). It is an open source virtual pinball controller built around the [ESP32-S3](https://www.espressif.com/en/products/socs/esp32-s3) microcontroller instead of the ATmega32U4 used by the original PinOne. It keeps everything the original PinOne offered (DOF support, Steam compatibility, plunger, accelerometer nudge, light show and more) and adds native Bluetooth LE, 15 direct PWM outputs, velocity based nudge, input profiles, a button lock and a refreshed configuration tool.

More details about the features, and a comparison with the original PinOne, can be found on the [features](./features) page.

### Download the config tool

The PinOne Ultra uses a newer version of the PinOne Config Tool than the original PinOne.

[![Get the config tool](./Configuring/img/button.svg)](https://github.com/philipellisis/PinOne/releases/latest/download/pinone-config-tool.exe)

On another platform? Download the [macOS (Intel)](https://github.com/philipellisis/PinOne/releases/latest/download/pinone-config-tool-x64.dmg), [macOS (Apple Silicon)](https://github.com/philipellisis/PinOne/releases/latest/download/pinone-config-tool-arm64.dmg) or [Linux AppImage](https://github.com/philipellisis/PinOne/releases/latest/download/pinone-config-tool.AppImage) build, or see all files on the [releases page](https://github.com/philipellisis/PinOne/releases/latest). Note for Linux or Batocera you might have to run in no sandbox mode.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
