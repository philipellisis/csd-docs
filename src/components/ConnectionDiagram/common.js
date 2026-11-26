/*
 * Shared data for the connection diagrams.
 *
 * Product photos live in /static/img/connection-diagrams and were taken from
 * each product's page on clevelandsoftwaredesign.com.
 *
 * Coordinates are world pixels. Ports: side = top|right|bottom|left,
 * at = 0..1 position along that side, w = chip width for left/right ports.
 */

export const STORE = 'https://www.clevelandsoftwaredesign.com/pinball-parts/p/';
export const IMG = '/img/connection-diagrams/';

export const product = (slug) => `${STORE}${slug}`;

export const edgeTypes = {
  power: {label: '12V DC power', color: '#e5484d'},
  power5: {label: '5V DC power', color: '#e5484d'},
  aled: {label: 'Addressable LED lead (5V · data · GND)', color: '#d6409f'},
  output: {label: 'High-power output', color: '#f76b15'},
  signal: {label: 'Low-power signal / plunger', color: '#30a46c'},
  i2c: {label: '4-pin expansion cable', color: '#8e4ec6'},
  ribbon: {label: 'Ribbon cable', color: '#3e63dd'},
  button: {label: 'Button / LED leads', color: '#0090a8'},
  usb: {label: 'USB', color: '#80838d'},
};

// Life extender wires are the one cable that is sold separately.
export const wire3 = {
  text: '3 Terminal Connector Wire',
  url: `${STORE}terminal-connector-wire`,
  img: `${IMG}wire-3-terminal.png`,
  separate: true,
};
export const wire4 = {
  text: '4 Terminal Connector Wire',
  url: `${STORE}terminal-connector-wire`,
  img: `${IMG}wire-4-terminal.png`,
  separate: true,
};
