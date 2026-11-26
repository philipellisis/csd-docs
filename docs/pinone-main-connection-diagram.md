---
sidebar_position: 1.05
sidebar_label: PinOne Main visual connection diagram
title: PinOne Main visual connection diagram
hide_table_of_contents: true
---

import ConnectionDiagram, {ConnectionTable} from '@site/src/components/ConnectionDiagram';
import {nodes, edges, edgeTypes} from '@site/src/components/ConnectionDiagram/pinoneMainData';

This diagram shows how every part plugs into the [PinOne Main board](https://www.clevelandsoftwaredesign.com/pinball-parts/p/pinone-main-virtual-pinball-connection-board). Each label next to a product names the connector printed on the board, so you can see exactly which header each cable goes into.

- **Drag** to move around. **Scroll** (after clicking the diagram, or while holding Ctrl / ⌘) or **pinch** to zoom. Use **⤢** to fit the whole diagram and **⛶** for full screen.
- **Hover** over a product or a wire to highlight its connections and see wiring notes.
- **Click** a product to open its page in the store.

<ConnectionDiagram nodes={nodes} edges={edges} edgeTypes={edgeTypes} height="80vh" />

:::tip Which wires do I need?
Almost every part comes with the wires it needs. The exception is the wire from the main board to the life extenders, which is sold separately as the [Terminal Connector Wire](https://www.clevelandsoftwaredesign.com/pinball-parts/p/terminal-connector-wire):

- **3 terminal** wire for each **2 position** life extender (outputs 1–2 and 6–7)
- **4 terminal** wire for each **3 position** life extender (outputs 3–5 and 8–10)
:::

:::caution Check polarity
The expansion board cable, the ribbon cables and the strobes can all be plugged in backwards. A reversed ribbon cable won't damage anything, but the buttons or lights won't work. **Reversed strobes can damage the strobes or the expansion board.** Hover over each wire in the diagram for details.
:::

You don't need every part shown. Start with the main board and power supply, then add the parts you want. See [DIY Cabinet Options](./what-to-buy.md) for help choosing parts, and the [Builders Kit guides](./BuildersKit/intro.md) for close-up photos of each connection.

## Every connection

<ConnectionTable nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
