"use strict";(self.webpackChunkcleveland_software_design_docs=self.webpackChunkcleveland_software_design_docs||[]).push([[51],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),h=r,g=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7375:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(7294);function r(t){let{children:e,source:n}=t;return a.createElement("iframe",{style:{width:"100%",aspectRatio:"16/9"},src:n,title:"YouTube video player",frameborder:"0",allow:"accelerometer;  autoplay;  clipboard-write;  encrypted-media;  gyroscope;  picture-in-picture;  web-share",allowfullscreen:!0})}},1587:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(7375);const o={sidebar_position:2},i="PinOne Main Board",l={unversionedId:"Products/PinOne-Main/index",id:"Products/PinOne-Main/index",title:"PinOne Main Board",description:"Introduction",source:"@site/docs/Products/PinOne-Main/index.md",sourceDirName:"Products/PinOne-Main",slug:"/Products/PinOne-Main/",permalink:"/docs/Products/PinOne-Main/",draft:!1,editUrl:"https://github.com/philipellisis/csd-docs/edit/main/docs/Products/PinOne-Main/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Flipper Boards",permalink:"/docs/Products/Flipper-Boards/"},next:{title:"8 Output Relay Board",permalink:"/docs/Products/8 Output Relay Board/"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Difference from PinOne Mini board",id:"difference-from-pinone-mini-board",level:2},{value:"Hooking it all up",id:"hooking-it-all-up",level:2},{value:"Connecting to the PC",id:"connecting-to-the-pc",level:3},{value:"Button Board",id:"button-board",level:3},{value:"Expansion Board",id:"expansion-board",level:3},{value:"Plunger",id:"plunger",level:3},{value:"Knocker",id:"knocker",level:3},{value:"Service Board",id:"service-board",level:3},{value:"Connecting other devices",id:"connecting-other-devices",level:3}],p={toc:s},u="wrapper";function c(t){let{components:e,...o}=t;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pinone-main-board"},"PinOne Main Board"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The PinOne Main board is a board that attaches to the PinOne and exposes all the inputs/outputs in a way so that you can easily connect perephrials and other devices to your board. The board by itself supports the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"16 button inputs through pluggable screw terminals"),(0,r.kt)("li",{parentName:"ul"},"Plunger input through pluggable screw terminals"),(0,r.kt)("li",{parentName:"ul"},"12 high power outputs to connect solenoids and other toys"),(0,r.kt)("li",{parentName:"ul"},"Header pins to connect the button board, which supports 14 buttons (5 RGB and 9 normal buttons) along with DOF controlled lighted outputs for 5 RGB and 4 single color buttons -- all powered from the USB port, so no external power supply needed to operate"),(0,r.kt)("li",{parentName:"ul"},"3 additional signal level outputs that can be used to drive other equipment -- the knocker board, as well as other perepherials that only need a signal level output to trigger."),(0,r.kt)("li",{parentName:"ul"},"Header pins for connecting the expansion boards to power the light bar or add another bank of 16 high power outputs to your cabinet"),(0,r.kt)("li",{parentName:"ul"},"Header pins to easily connect the service board or add additional buttons to the PinOne"),(0,r.kt)("li",{parentName:"ul"},"All the normal PinOne features like nudge/tilt, and many software enabled features")),(0,r.kt)("h2",{id:"difference-from-pinone-mini-board"},"Difference from PinOne Mini board"),(0,r.kt)("p",null,"A question I get a lot is how can I tell if I should get the PinOne Main board or the PinOne Mini board? They both use the same PinOne control board, so the software is the same, but there are some hardware differences to be aware of. Here are the differences of both of them"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"PinOne Main"),(0,r.kt)("th",{parentName:"tr",align:null},"PinOne Mini"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Number of High Power Outputs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"12")," - 11 mosfet, 1 motor controller"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2")," - With Life extenders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Number of Life Extenders")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"0")," - designed to be used with life extenders if adding solenoids"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2")," - designed to have 2 solenoids plugged directly into board")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Number of Button Inputs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"14")," - screw terminal type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"9")," - JST-XH connectors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Number of Low Power Outputs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"3")," - Normally for knocker and 2 others"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"16")," - enough for 5 RGB buttons and 4 single color buttons")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Input Voltage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5V-36V")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5V-24V"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Plunger input")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")," - dedicated 3 wire input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")," - dedicated 3 wire input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Supports Button Board")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")," - Required for lighted button outputs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"No")," - Buttons connect directly to board")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Supports PinOne Mini Expansion Board")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"No")," - All high power outputs are on the PinOne Main Board"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")," - Used to upgrade the Mini to a PinOne Main like board")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Supports Service Board")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Maximum Supported Outputs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"63")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"63"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Maximum Supported Inputs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"24")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"24"))))),(0,r.kt)("h2",{id:"hooking-it-all-up"},"Hooking it all up"),(0,r.kt)("h3",{id:"connecting-to-the-pc"},"Connecting to the PC"),(0,r.kt)("p",null,"Connecting to your PC is simple through a USB cable. Once you plug it into the PC, you can use the configuration tool to activate all the outputs and configure the board. Unless you want to use the high power outputs, there is no need to connect a power supply"),(0,r.kt)("h3",{id:"button-board"},"Button Board"),(0,r.kt)("p",null,"In order to easily connect buttons and get the lighted buttons working, you need to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.clevelandsoftwaredesign.com/pinball-parts/p/virtual-pinball-button-hookup-kit"},"Button Hookup Kit"),". This allows you to easily connect RGB and LED buttons to the kit. If you are only using non-lighted buttons then you can opt to connect them directly to the board using the built-in screw connectors, but those are typically used for extra buttons that aren't routed through the button kit, like a tilt bob or a power switch. If you are looking for a solution that doesn't require the button board for lighted buttons, then checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://www.clevelandsoftwaredesign.com/pinball-parts/p/pinone-mini-virtual-pinball-connection-board"},"PinOne Mini")," It sacrifices outputs, but has all the button connections built into the board."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(3463).Z,width:"2227",height:"1688"})),(0,r.kt)("h3",{id:"expansion-board"},"Expansion Board"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.clevelandsoftwaredesign.com/pinball-parts/p/pinone-expansion-board"},"Expansion Boards"),' are connected to the 4 pin headers labeled "to expansion board" available on the main board. There are two rows of 4 pins, but only one of them needs to be used. You can connect up to two expansion boards to a PinOne board to add an additional 32 PWM outputs. (63 outputs total)'),(0,r.kt)("p",null,'Be sure when connecting the 4 pin wires to the expansion board that the wires are connected the right way, as you can reverse the polarity when connecting. Ensure the black wire is going to the pin labeled "GND" on both boards'),(0,r.kt)("p",null,"The low power expansion board is required to run the ",(0,r.kt)("a",{parentName:"p",href:"https://www.clevelandsoftwaredesign.com/pinball-parts/p/rgb-12v-virtual-pinball-light-bar"},"Light Bar")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(7290).Z,width:"1859",height:"1355"})),(0,r.kt)("h3",{id:"plunger"},"Plunger"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://www.clevelandsoftwaredesign.com/pinball-parts/p/virtual-pinball-plunger-attachment"},"Plunger"),' can be connected directly to the main board via the 5 pin connector where it is labeled "GND", "5V" and "WIPER" by connecting those inputs to the corrisponding inputs on the plunger board. It can also be connected through the button board as another option to keep the wires a little more controlled in the cabinet.'),(0,r.kt)("h3",{id:"knocker"},"Knocker"),(0,r.kt)("p",null,"There is a dedicated knocker output that is a low power output (signal only) on the board. This is designed to be plugged into the ",(0,r.kt)("a",{parentName:"p",href:"https://www.clevelandsoftwaredesign.com/pinball-parts/p/12v-to-24v-knocker-circuit-conversion-kit"},"Knocker Board"),' Simply connect the "USB GND" to the "Signal -" and the "knocker" output to the "signal +" on the knocker board.'),(0,r.kt)("h3",{id:"service-board"},"Service Board"),(0,r.kt)("p",null,"This is as simple as just connecting the 20 pin ribbon cable from the PinOne main board to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.clevelandsoftwaredesign.com/pinball-parts/p/expansion-breakout-board-zx5y6"},"Service Board"),"."),(0,r.kt)("h3",{id:"connecting-other-devices"},"Connecting other devices"),(0,r.kt)("p",null,"Below is a picture showing how to connect most devices to the PinOne Main board"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(2136).Z,width:"3390",height:"2845"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(5301).Z,width:"3155",height:"2373"})))}c.isMDXComponent=!0},3463:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PinOneButtonBoard-f4545ea88a1839e9597da156e5f1aabc.jpg"},7290:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PinOneExpansionConnection-5ef971725c7af8d0cf39de7ab24fc910.jpg"},2136:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PinOneMainConnections-a6810626ffd39e2dec1e4ce023be6183.jpg"},5301:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PinOneMainSchematic-6420a69bfcf7373d66da541e8f458228.jpg"}}]);