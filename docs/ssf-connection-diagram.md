---
sidebar_position: 1.08
sidebar_label: SSF visual connection diagram
title: SSF visual connection diagram
hide_table_of_contents: true
---

import ConnectionDiagram, {ConnectionTable} from '@site/src/components/ConnectionDiagram';
import {nodes, edges, edgeTypes} from '@site/src/components/ConnectionDiagram/ssfData';

This diagram shows how the exciters, bass shaker, subwoofer and backbox speakers plug into the [SSF Amplifier](https://www.clevelandsoftwaredesign.com/pinball-parts/p/ssf-extra-amplifier). Each label next to a product names the terminal printed on the amplifier.

- **Drag** to move around. **Scroll** (after clicking the diagram, or while holding Ctrl / ⌘) or **pinch** to zoom. Use **⤢** to fit the whole diagram and **⛶** for full screen.
- **Hover** over a product or a wire to highlight its connections and see wiring notes.
- **Click** a product to open its page in the store.

<ConnectionDiagram nodes={nodes} edges={edges} edgeTypes={edgeTypes} height="80vh" />

:::tip Good to know
- The amplifier has the **USB sound card built in**, so it plugs straight into the PC. You don't need a separate sound card.
- Connect each speaker with [SSF Speaker Wire](https://www.clevelandsoftwaredesign.com/pinball-parts/p/ssf-speaker-wire). Choose the exciter wire length you need, or the Bass Shaker/Sub version for the bass shaker and subwoofer.
- Backbox speakers aren't sold by CSD. Use your own and connect them to **Speaker Left** and **Speaker Right**.
:::

Once everything is connected, set it up in Windows and in your games: see [Configuring the sound card](./ssf/configuring-computer.md), [Configuring SSF on Visual Pinball](./ssf/configuring-vpx.md) and [Configuring for Pinball FX3](./ssf/configuring-fx3.md).

## Every connection

<ConnectionTable nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
