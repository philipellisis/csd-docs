---
sidebar_position: 1.07
sidebar_label: Addressable LED visual connection diagram
title: Addressable LED visual connection diagram
hide_table_of_contents: true
---

import ConnectionDiagram, {ConnectionTable} from '@site/src/components/ConnectionDiagram';
import {nodes, edges, edgeTypes} from '@site/src/components/ConnectionDiagram/addressableData';

This diagram shows how the side rail strips, matrix panels and speaker rings plug into the [Addressable LED Controller](https://www.clevelandsoftwaredesign.com/pinball-parts/p/addressable-led-controller). Each label next to a product names the output it plugs into, using the same layout as the [Addressable LED Kit](./AddressableLED/kit.md).

- **Drag** to move around. **Scroll** (after clicking the diagram, or while holding Ctrl / ⌘) or **pinch** to zoom. Use **⤢** to fit the whole diagram and **⛶** for full screen.
- **Hover** over a product or a wire to highlight its connections and see wiring notes.
- **Click** a product to open its page in the store.

<ConnectionDiagram nodes={nodes} edges={edges} edgeTypes={edgeTypes} height="80vh" />

:::tip Power and wiring
- Everything runs from the **5V** power supply (choose the 5V option, not 12V). The controller feeds that power to every output, so you don't need to run separate power to the strips, panels or rings.
- Need a longer run? Add [Addressable LED Extension Wires](https://www.clevelandsoftwaredesign.com/pinball-parts/p/addressable-led-connection-wires) between the controller and any strip, panel or ring. Each order includes three 60 cm cables.
:::

The diagram shows the 6 panel kit, which leaves outputs 9 and 10 for speaker rings. With more panels, keep going in order (panel 7 on output 9, panel 8 on output 10). Once the hardware is connected, see [Configuring and Testing](./AddressableLED/configuring.md) and the [cabinet generator](./AddressableLED/cabinetGenerator.md) to set it up in DOF.

## Every connection

<ConnectionTable nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
