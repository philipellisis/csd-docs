"use strict";(self.webpackChunkcleveland_software_design_docs=self.webpackChunkcleveland_software_design_docs||[]).push([[7152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},a="Flipper Boards",l={unversionedId:"Products/Flipper-Boards/index",id:"Products/Flipper-Boards/index",title:"Flipper Boards",description:"image",source:"@site/docs/Products/Flipper-Boards/index.md",sourceDirName:"Products/Flipper-Boards",slug:"/Products/Flipper-Boards/",permalink:"/docs/Products/Flipper-Boards/",draft:!1,editUrl:"https://github.com/philipellisis/csd-docs/edit/main/docs/Products/Flipper-Boards/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PinOne Control Board",permalink:"/docs/Products/PinOne-Control-Board/"},next:{title:"PinOne Main Board",permalink:"/docs/Products/PinOne-Main/"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Specifications and Features",id:"specifications-and-features",level:2},{value:"Hooking it all up",id:"hooking-it-all-up",level:2},{value:"Basic installation",id:"basic-installation",level:3},{value:"Connecting an external switch to turn off the solenoid action",id:"connecting-an-external-switch-to-turn-off-the-solenoid-action",level:3},{value:"Adding a lighted button",id:"adding-a-lighted-button",level:3},{value:"Wiring diagram",id:"wiring-diagram",level:3},{value:"Bypassing to run directly off the PinOne board (Or PinOne Mini board)",id:"bypassing-to-run-directly-off-the-pinone-board-or-pinone-mini-board",level:2},{value:"Hooking up in conjunction with PinOne Mini (Or PinOne Main board) to get 4 solenoids",id:"hooking-up-in-conjunction-with-pinone-mini-or-pinone-main-board-to-get-4-solenoids",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flipper-boards"},"Flipper Boards"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6304).Z,width:"2628",height:"1899"})),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The Flipper boards are a simple hardware solution that allows you to trigger high power solenoids safely from your pinball buttons and forward the signal along to your encoder. This provides flipper solenoids feedback without any software installation needed. "),(0,i.kt)("h2",{id:"specifications-and-features"},"Specifications and Features"),(0,i.kt)("p",null,"Below are some of the features and specifications for the flipper boards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Voltage input requirements: 5-24V DC "),(0,i.kt)("li",{parentName:"ul"},"Current Requirements: Recommended 5A power supply"),(0,i.kt)("li",{parentName:"ul"},"Allows for 12v lighted button connection directly to input"),(0,i.kt)("li",{parentName:"ul"},'Allows for switch to be added to enable "night mode" so that solenoids do not fire with button presses')),(0,i.kt)("h2",{id:"hooking-it-all-up"},"Hooking it all up"),(0,i.kt)("h3",{id:"basic-installation"},"Basic installation"),(0,i.kt)("p",null,"In the most basic install you simply connect the following:"),(0,i.kt)("p",null,'12V DC power supply: Connect to the "12V In"\nSolenoid: Connect to the "Solenoid"\nPC Encoder or game controller: Connect to the "Encoder"\nArcade button: Connect to the "B+" and "Be" terminals\nEnsure that the jumper is in place'),(0,i.kt)("h3",{id:"connecting-an-external-switch-to-turn-off-the-solenoid-action"},"Connecting an external switch to turn off the solenoid action"),(0,i.kt)("p",null,"If you want to add a switch to turn off the solenoids, you can do the following:"),(0,i.kt)("p",null,"Purchase a DPST switch like this one: ",(0,i.kt)("a",{parentName:"p",href:"https://www.amazon.com/Baomain-Toggle-position-mounting-terminal/dp/B01MRV5T5R"},"https://www.amazon.com/Baomain-Toggle-position-mounting-terminal/dp/B01MRV5T5R"),'\nRemove the jumper and connect the switch between the "Bs" and "Be" leads.'),(0,i.kt)("h3",{id:"adding-a-lighted-button"},"Adding a lighted button"),(0,i.kt)("p",null,"To add a lighted button to the board, you can do the following:"),(0,i.kt)("p",null,'Connect the positive lead of the LED to the "B+" connection, and the negative lead to the "G" '),(0,i.kt)("p",null,"Note that this is a direct connection to the power supply, so if you are running a 24v power supply this will be 24v at these points. "),(0,i.kt)("h3",{id:"wiring-diagram"},"Wiring diagram"),(0,i.kt)("p",null,"Below is a wiring diagram showing how to connect all the options listed above"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9280).Z,width:"2805",height:"2807"})),(0,i.kt)("h2",{id:"bypassing-to-run-directly-off-the-pinone-board-or-pinone-mini-board"},"Bypassing to run directly off the PinOne board (Or PinOne Mini board)"),(0,i.kt)("p",null,"In case you have upgraded to the PinOne board and want to use the flipper boards just for the life extender functionality, you can bypass them by connecting a jumper to the button input and connecting one of the PinOne Main outputs directly to the power input on the flipper board. The picture below demonstrates how this can be done."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6534).Z,width:"2121",height:"2828"})),(0,i.kt)("h2",{id:"hooking-up-in-conjunction-with-pinone-mini-or-pinone-main-board-to-get-4-solenoids"},"Hooking up in conjunction with PinOne Mini (Or PinOne Main board) to get 4 solenoids"),(0,i.kt)("p",null,"In this scenario, you can use the encoder on the flipper boards to send a signal to the PinOne Mini board so you get button presses, and then use the other two outputs on the PinOne Mini so you can add an additional 2 solenoids to your setup for a total of 4 solenoids. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(5842).Z,width:"3000",height:"4000"})))}u.isMDXComponent=!0},5842:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/FlipperBoardHookupToPinOneMini-bc6d26c8aa63c0bacb799ccc2dad7925.jpg"},9280:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipper-boards-v2-2-88eb3b08d9306f22b553e72ae0ac951e.jpg"},6534:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipper-boards-v2-4-3f7d0d80e73ee9c9c733ca9b579496ec.jpg"},6304:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipper-boards-cfca7a7cebd12e75f85610a23bea4c40.jpg"}}]);