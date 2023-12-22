---
sidebar_position: 3
---

import CabinetXml from '@site/src/components/CabinetXml';

# Cabinet File Generator

## Creating your cabinet file

The cabinet file for Addressable LEDs is a little complicated to build, so I have created a simple online helper to generate it for you. Simply enter your specific needs and it will be created. Copy the text from the code created below and save it as `cabinet.xml` inside your `C:/DirectOutput/config` directory.

Why would you combine names of the same outputs? This can be helpful for high density LED Matrix setups where you might have 2048 LEDs in a set of panels. In this instance, you can create 4 separate outputs that are each 512 LEDs in size, and name each one the same so that in DOF it looks like just one large panel, but you can physically connect each panel to 4 separate outputs on the Addressable LED Board.

<CabinetXml></CabinetXml>



