/*
 * Addressable LED connection diagram data. See common.js for the data format.
 */

import {IMG, STORE, edgeTypes, product} from './common';

export {edgeTypes};

// Extension wires are optional (the kit includes one per panel), so they get
// the calmer "optional" tag instead of "sold separately".
const extension = {
  text: 'LED Extension Wire',
  tag: 'Optional · extends the run',
  url: `${STORE}addressable-led-connection-wires`,
  img: `${IMG}aled-extension-wire.png`,
  separate: true,
};

const panelNode = (n, output, x, y, side) => ({
  id: `panel${n}`,
  title: 'Addressable LED Panel',
  subtitle: `Matrix panel ${n} · Output ${output}`,
  img: `${IMG}aled-panel.png`,
  url: product('addressable-led-panel'),
  x,
  y,
  w: 220,
  h: 200,
  ports: [{id: 'in', side, w: side === 'left' ? 100 : 120, label: 'IN (DIN)'}],
});

export const nodes = [
  // ---------------- controller (hub) ----------------
  {
    id: 'ctrl',
    variant: 'hub',
    title: 'Addressable LED Controller',
    subtitle: '10 outputs · powers every strip, panel and ring',
    img: `${IMG}aled-controller.png`,
    url: product('addressable-led-controller'),
    note: 'Each output has a 3-pin plug (JP1–JP10) and a matching green screw terminal, so you can use either one.',
    x: 1000,
    y: 700,
    w: 440,
    h: 760,
    ports: [
      {id: 'power', side: 'top', label: '5V power input (+ −)'},
      {id: 'usb', side: 'bottom', label: 'USB-C (Wemos S2 Mini)'},
      {id: 'jp1', side: 'left', at: 0.1, w: 120, label: 'JP1 · Output 1'},
      {id: 'jp2', side: 'left', at: 0.3, w: 120, label: 'JP2 · Output 2'},
      {id: 'jp3', side: 'left', at: 0.5, w: 120, label: 'JP3 · Output 3'},
      {id: 'jp9', side: 'left', at: 0.7, w: 120, label: 'JP9 · Output 9'},
      {id: 'jp10', side: 'left', at: 0.9, w: 120, label: 'JP10 · Output 10'},
      {id: 'jp4', side: 'right', at: 0.1, w: 120, label: 'JP4 · Output 4'},
      {id: 'jp5', side: 'right', at: 0.3, w: 120, label: 'JP5 · Output 5'},
      {id: 'jp6', side: 'right', at: 0.5, w: 120, label: 'JP6 · Output 6'},
      {id: 'jp7', side: 'right', at: 0.7, w: 120, label: 'JP7 · Output 7'},
      {id: 'jp8', side: 'right', at: 0.9, w: 120, label: 'JP8 · Output 8'},
    ],
  },

  // ---------------- power + PC ----------------
  {
    id: 'psu',
    title: '5V Power Supply',
    subtitle: 'Choose the 5V option · comes with AC cord',
    img: `${IMG}power-supply.png`,
    url: product('12v-10a-power-supply-with-cord'),
    x: 1110,
    y: 330,
    w: 220,
    h: 200,
    ports: [{id: 'dc', side: 'bottom', label: '+V / −V terminals'}],
  },
  {
    id: 'pc',
    title: 'Cabinet PC',
    subtitle: 'Runs DOF and the config tool',
    x: 1110,
    y: 1640,
    w: 220,
    h: 180,
    ports: [{id: 'usb', side: 'top', label: 'USB port'}],
  },

  // ---------------- left: strips, panel 1, speaker rings ----------------
  {
    id: 'stripR',
    title: '144 LED Addressable Strip',
    subtitle: 'Right side rail · Output 1',
    img: `${IMG}aled-strip.png`,
    url: product('144-led-addressable-strip'),
    x: 250,
    y: 500,
    w: 220,
    h: 200,
    ports: [{id: 'in', side: 'right', w: 120, label: 'Input lead'}],
  },
  {
    id: 'stripL',
    title: '144 LED Addressable Strip',
    subtitle: 'Left side rail · Output 2',
    img: `${IMG}aled-strip.png`,
    url: product('144-led-addressable-strip'),
    x: 250,
    y: 740,
    w: 220,
    h: 200,
    ports: [{id: 'in', side: 'right', w: 120, label: 'Input lead'}],
  },
  panelNode(1, 3, 250, 980, 'right'),
  {
    id: 'ring1',
    title: 'Addressable RGB LED Speaker Ring',
    subtitle: 'Output 9',
    img: `${IMG}aled-speaker-ring.png`,
    url: product('addressable-rgb-led-speaker-ring'),
    x: 250,
    y: 1220,
    w: 220,
    h: 200,
    ports: [{id: 'in', side: 'right', w: 120, label: 'Input lead'}],
  },
  {
    id: 'ring2',
    title: 'Addressable RGB LED Speaker Ring',
    subtitle: 'Output 10',
    img: `${IMG}aled-speaker-ring.png`,
    url: product('addressable-rgb-led-speaker-ring'),
    x: 250,
    y: 1460,
    w: 220,
    h: 200,
    ports: [{id: 'in', side: 'right', w: 120, label: 'Input lead'}],
  },

  // ---------------- right: panels 2–6 ----------------
  panelNode(2, 4, 1950, 500, 'left'),
  panelNode(3, 5, 1950, 740, 'left'),
  panelNode(4, 6, 1950, 980, 'left'),
  panelNode(5, 7, 1950, 1220, 'left'),
  panelNode(6, 8, 1950, 1460, 'left'),
];

const stripNote = (side, n) =>
  `The ${side} side rail strip goes on Output ${n} (JP${n}). Each strip draws about 1A at 5V, and the controller supplies the power through the same plug.`;
const panelNote = (n, output) =>
  `Matrix panel ${n} plugs into Output ${output} (JP${output}) at the panel's IN connector. One panel per output gives the fastest frame rate. If you run out of outputs, you can chain panels from OUT to the next panel's IN.`;
const ringNote =
  'Speaker rings work on any free output. You can also chain two rings with a connection wire so they share one output.';

export const edges = [
  {
    id: 'psu-ctrl',
    type: 'power5',
    from: ['psu', 'dc'],
    to: ['ctrl', 'power'],
    note: 'Use the 5V supply, not 12V. The controller passes 5V to every output, so the strips, panels and rings don\'t need separate power.',
  },
  {
    id: 'pc-ctrl',
    type: 'usb',
    from: ['pc', 'usb'],
    to: ['ctrl', 'usb'],
    label: 'USB cable',
    note: 'The controller is a separate USB device from the PinOne. Test it with the CSD Addressable Controller Tool, then set it up in DOF with the cabinet generator.',
  },
  {id: 'ctrl-stripR', type: 'aled', from: ['ctrl', 'jp1'], to: ['stripR', 'in'], cable: extension, note: stripNote('right', 1)},
  {id: 'ctrl-stripL', type: 'aled', from: ['ctrl', 'jp2'], to: ['stripL', 'in'], cable: extension, note: stripNote('left', 2)},
  {id: 'ctrl-panel1', type: 'aled', from: ['ctrl', 'jp3'], to: ['panel1', 'in'], cable: extension, note: panelNote(1, 3)},
  {id: 'ctrl-panel2', type: 'aled', from: ['ctrl', 'jp4'], to: ['panel2', 'in'], cable: extension, note: panelNote(2, 4)},
  {id: 'ctrl-panel3', type: 'aled', from: ['ctrl', 'jp5'], to: ['panel3', 'in'], cable: extension, note: panelNote(3, 5)},
  {id: 'ctrl-panel4', type: 'aled', from: ['ctrl', 'jp6'], to: ['panel4', 'in'], cable: extension, note: panelNote(4, 6)},
  {id: 'ctrl-panel5', type: 'aled', from: ['ctrl', 'jp7'], to: ['panel5', 'in'], cable: extension, note: panelNote(5, 7)},
  {id: 'ctrl-panel6', type: 'aled', from: ['ctrl', 'jp8'], to: ['panel6', 'in'], cable: extension, note: panelNote(6, 8)},
  {id: 'ctrl-ring1', type: 'aled', from: ['ctrl', 'jp9'], to: ['ring1', 'in'], cable: extension, note: ringNote},
  {id: 'ctrl-ring2', type: 'aled', from: ['ctrl', 'jp10'], to: ['ring2', 'in'], cable: extension, note: ringNote},
];
