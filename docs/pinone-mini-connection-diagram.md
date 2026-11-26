---
sidebar_position: 1.06
sidebar_label: PinOne Mini visual connection diagram
title: PinOne Mini visual connection diagram
hide_table_of_contents: true
---

import ConnectionDiagram, {ConnectionTable} from '@site/src/components/ConnectionDiagram';
import {nodes, edges, edgeTypes} from '@site/src/components/ConnectionDiagram/pinoneMiniData';

This diagram shows how every part plugs into the [PinOne Mini board](https://www.clevelandsoftwaredesign.com/pinball-parts/p/pinone-mini-virtual-pinball-connection-board) and the [PinOne Mini Expansion board](https://www.clevelandsoftwaredesign.com/pinball-parts/p/pinone-mini-expansion-board). Each label next to a product names the connector printed on the board, so you can see exactly which header each cable goes into.

- **Drag** to move around. **Scroll** (after clicking the diagram, or while holding Ctrl / ⌘) or **pinch** to zoom. Use **⤢** to fit the whole diagram and **⛶** for full screen.
- **Hover** over a product or a wire to highlight its connections and see wiring notes.
- **Click** a product to open its page in the store.

<ConnectionDiagram nodes={nodes} edges={edges} edgeTypes={edgeTypes} height="80vh" />

:::info Mini or Mini + Mini Expansion?
On its own, the Mini handles the buttons, plunger, two solenoids (life extenders built in), the service board and the expansion boards. Add the **Mini Expansion board** for the shaker motor, more solenoids, the knocker and the two output board. With it, the Mini can do everything the [PinOne Main](./pinone-main-connection-diagram.md) can.
:::

:::tip Which wires do I need?
Almost every part comes with the wires it needs. The exception is the wire from the Mini Expansion board to the life extenders, which is sold separately as the [Terminal Connector Wire](https://www.clevelandsoftwaredesign.com/pinball-parts/p/terminal-connector-wire):

- **3 terminal** wire for each **2 position** life extender (outputs 6–7, 8–9 and 10–11)
- **4 terminal** wire for each **3 position** life extender (outputs 3–5)

The two solenoids on the Mini itself don't need a life extender or this wire.
:::

:::caution Check polarity
The expansion board cables, the ribbon cables and the strobes can all be plugged in backwards. A reversed ribbon cable won't damage anything, but the buttons or lights won't work. **Reversed strobes can damage the strobes or the expansion board.** Hover over each wire in the diagram for details.
:::

You don't need every part shown. Start with the Mini, then add the parts you want. See [DIY Cabinet Options](./what-to-buy.md) for help choosing parts.

## Every connection

<ConnectionTable nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
