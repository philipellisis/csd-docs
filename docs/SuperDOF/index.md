---
sidebar_position: 3.5
---

# SuperDOF (Beta)

## Introduction

SuperDOF is a simple alternative to installing DOF and DOFLinx. If you just want feedback working on your PinOne, it gets everything running with **one exe and a single setup command**. There is no complex installation, and you don't need to copy DLL files into game folders by hand.

It uses the same DOF config files from the [DOF Config tool](https://configtool.vpuniverse.com/) and the same `cabinet.xml` for addressable LEDs, so any setup you have already done carries over.

:::caution Beta
SuperDOF is currently in beta. It works with Visual Pinball, Pinball FX, Pinball M, Future Pinball and PinUP Popper, but it has some limitations compared to a full DOF and DOFLinx install:
- Pinball FX3 table events that rely on DOFLinx memory triggers are not supported.
- DOF2DMD, Pixelcade, SSF sound and B2S animations are not supported. It is for hardware feedback only.

If you need any of these, or have a more complex cabinet, use the full [DOF](../DOF/) and [DOFLinx](../DOFLinx/) installation instead.
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
