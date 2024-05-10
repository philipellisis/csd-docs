---
sidebar_position: 4
---

# Addressable LEDs

## Introduction

Addressable LEDs are another component of DOF, but are normally built into a separate board as they are more CPU intensive than the normal on/off DOF events that occur with solenoids and normal lights. Because of this, it makes sense to have a separate, dedicated board that handles the Addressable LED DOF events. 

You can use the config tool to test your outputs and make sure they are all setup OK. Download it here:

[![Get the config tool](../PinOne/Configuring/img/button.svg)](https://github.com/philipellisis/wemos-configurator/releases/latest/download/CSDAddressableControllerTool.exe)


To see how to configure Addressable LEDs in DOF, checkout the docs below.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```