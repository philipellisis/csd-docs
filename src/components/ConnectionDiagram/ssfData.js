/*
 * SSF (Surround Sound Feedback) connection diagram data. See common.js for the data format.
 */

import {IMG, STORE, edgeTypes, product} from './common';

export {edgeTypes};

const wire = (tag) => ({
  text: 'SSF Speaker Wire',
  tag,
  url: `${STORE}ssf-speaker-wire`,
  img: `${IMG}ssf-speaker-wire.webp`,
  separate: true,
});
const exciterWire = wire('Exciter wire · pick length');
const bassWire = wire('Bass Shaker/Sub wire');
const backboxWire = wire('Pick length + connector');

const exciter = (id, title, subtitle, x) => ({
  id,
  title,
  subtitle,
  img: `${IMG}ssf-exciter.webp`,
  url: product('replacement-exciter-speaker'),
  x,
  y: 200,
  w: 220,
  h: 200,
  ports: [{id: 'in', side: 'bottom', label: 'Speaker terminals (+ −)'}],
});

export const nodes = [
  // ---------------- amplifier (hub) ----------------
  {
    id: 'amp',
    variant: 'hub',
    title: 'SSF Amplifier',
    subtitle: 'USB sound card built in · plugs straight into the PC',
    img: `${IMG}ssf-amp.webp`,
    url: product('ssf-extra-amplifier'),
    note: 'Set the 7.2 / 2.1 mode switch to match your setup. The knobs on the front set the volume for each speaker group, plus the sub and shaker frequency.',
    x: 1000,
    y: 800,
    w: 760,
    h: 440,
    ports: [
      {id: 'backL', side: 'top', at: 0.12, label: 'Back Left (+ −)'},
      {id: 'backR', side: 'top', at: 0.34, label: 'Back Right (+ −)'},
      {id: 'frontL', side: 'top', at: 0.66, label: 'Front Left (+ −)'},
      {id: 'frontR', side: 'top', at: 0.88, label: 'Front Right (+ −)'},
      {id: 'shaker', side: 'right', at: 0.3, w: 130, label: 'Shaker (+ −)'},
      {id: 'sub', side: 'right', at: 0.7, w: 130, label: 'Sub (+ −)'},
      {id: 'spkL', side: 'left', at: 0.2, w: 150, label: 'Speaker Left (+ −)'},
      {id: 'spkR', side: 'left', at: 0.45, w: 150, label: 'Speaker Right (+ −)'},
      {id: 'power', side: 'left', at: 0.8, w: 150, label: 'Power Input 24V DC'},
      {id: 'usb', side: 'bottom', label: 'USB (built-in sound card)'},
    ],
  },

  // ---------------- exciters, top ----------------
  exciter('exBL', 'Exciter Speaker', 'Cabinet rear · left', 900),
  exciter('exBR', 'Exciter Speaker', 'Cabinet rear · right', 1150),
  exciter('exFL', 'Exciter Speaker', 'Cabinet front · left', 1400),
  exciter('exFR', 'Exciter Speaker', 'Cabinet front · right', 1650),

  // ---------------- bass, right ----------------
  {
    id: 'shaker',
    title: 'Bass Shaker Speaker',
    img: `${IMG}ssf-bass-shaker.webp`,
    url: product('bass-shaker-speaker'),
    x: 2300,
    y: 780,
    w: 220,
    h: 200,
    ports: [{id: 'in', side: 'left', w: 110, label: 'Terminals (+ −)'}],
  },
  {
    id: 'sub',
    title: 'Subwoofer',
    img: `${IMG}ssf-subwoofer.webp`,
    url: product('subwoofer'),
    x: 2300,
    y: 1060,
    w: 220,
    h: 200,
    ports: [{id: 'in', side: 'left', w: 110, label: 'Terminals (+ −)'}],
  },

  // ---------------- backbox speakers + power, left ----------------
  {
    id: 'bbL',
    icon: 'speaker',
    title: 'Backbox speaker',
    subtitle: 'Left · your own speaker (not sold by CSD)',
    x: 200,
    y: 700,
    w: 220,
    h: 190,
    ports: [{id: 'in', side: 'right', w: 110, label: 'Terminals (+ −)'}],
  },
  {
    id: 'bbR',
    icon: 'speaker',
    title: 'Backbox speaker',
    subtitle: 'Right · your own speaker (not sold by CSD)',
    x: 200,
    y: 960,
    w: 220,
    h: 190,
    ports: [{id: 'in', side: 'right', w: 110, label: 'Terminals (+ −)'}],
  },
  {
    id: 'psu',
    icon: 'device',
    title: '24V Power Supply',
    subtitle: 'Add it as an option when you order the amplifier',
    url: product('ssf-extra-amplifier'),
    x: 200,
    y: 1220,
    w: 220,
    h: 180,
    ports: [{id: 'dc', side: 'right', w: 110, label: '24V DC plug'}],
  },

  // ---------------- PC, bottom ----------------
  {
    id: 'pc',
    title: 'Cabinet PC',
    subtitle: 'Runs VPX / Pinball FX with SSF',
    x: 1270,
    y: 1420,
    w: 220,
    h: 180,
    ports: [{id: 'usb', side: 'top', label: 'USB port'}],
  },
];

const frontNote = (side) =>
  `Front ${side} drives the exciter at the ${side.toLowerCase()} front of the cabinet. Turn it up or down with the Front Volume knob.`;
const backNote = (side) =>
  `Back ${side} drives the exciter at the ${side.toLowerCase()} rear of the cabinet. Turn it up or down with the Back Volume knob.`;

export const edges = [
  {
    id: 'pc-amp',
    type: 'usb',
    from: ['pc', 'usb'],
    to: ['amp', 'usb'],
    label: 'USB cable',
    note: 'The amplifier has the USB sound card built in, so it plugs straight into the PC. No separate sound card is needed. Don\'t install any extra sound card software; just set it up in Windows Sound settings.',
  },
  {
    id: 'psu-amp',
    type: 'power24',
    from: ['psu', 'dc'],
    to: ['amp', 'power'],
    note: 'Plug the 24V supply into Power Input 24V DC on the amplifier.',
  },
  {id: 'amp-exBL', type: 'speaker', from: ['amp', 'backL'], to: ['exBL', 'in'], cable: exciterWire, labelAt: 0.38, note: backNote('Left')},
  {id: 'amp-exBR', type: 'speaker', from: ['amp', 'backR'], to: ['exBR', 'in'], cable: exciterWire, labelAt: 0.62, note: backNote('Right')},
  {id: 'amp-exFL', type: 'speaker', from: ['amp', 'frontL'], to: ['exFL', 'in'], cable: exciterWire, labelAt: 0.38, note: frontNote('Left')},
  {id: 'amp-exFR', type: 'speaker', from: ['amp', 'frontR'], to: ['exFR', 'in'], cable: exciterWire, labelAt: 0.62, note: frontNote('Right')},
  {
    id: 'amp-shaker',
    type: 'speaker',
    from: ['amp', 'shaker'],
    to: ['shaker', 'in'],
    cable: bassWire,
    note: 'The bass shaker adds the big hits you feel through the cabinet. Tune it with the Shaker Volume and Shaker Frequency knobs.',
  },
  {
    id: 'amp-sub',
    type: 'speaker',
    from: ['amp', 'sub'],
    to: ['sub', 'in'],
    cable: bassWire,
    note: 'Tune the subwoofer with the Sub Volume and Sub Frequency knobs.',
  },
  {
    id: 'amp-bbL',
    type: 'speaker',
    from: ['amp', 'spkL'],
    to: ['bbL', 'in'],
    cable: backboxWire,
    note: 'Speaker Left / Right power your backbox speakers for the game music and callouts. CSD doesn\'t sell backbox speakers, so use your own. Set their level with the Speaker Volume knob.',
  },
  {
    id: 'amp-bbR',
    type: 'speaker',
    from: ['amp', 'spkR'],
    to: ['bbR', 'in'],
    cable: backboxWire,
    note: 'Speaker Left / Right power your backbox speakers for the game music and callouts. CSD doesn\'t sell backbox speakers, so use your own. Set their level with the Speaker Volume knob.',
  },
];
