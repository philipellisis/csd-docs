---
sidebar_position: 2
---

# DOF

## Introduction

DOF, or the Direct Output Framework is what is used to send signals from Visual Pinball to a variety of controller boards, including the PinOne, Pinscape and FTDI based boards, which are the primary boards used by Cleveland Software Design. 

In order to get solenoid feedback, shaker motors, and all your lights working with table events in Visual Pinball, you will need to install DOF. You will also need to install DOF if you want table events to work in FX3 or other pinball simulators, but in addition to DOF you will also need to install and configure DOFLinx.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```