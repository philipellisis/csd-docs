"use strict";(self.webpackChunkcleveland_software_design_docs=self.webpackChunkcleveland_software_design_docs||[]).push([[4853],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>f});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},h=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),p=u(n),c=i,f=p["".concat(l,".").concat(c)]||p[c]||d[c]||a;return n?o.createElement(f,r(r({ref:e},h),{},{components:n})):o.createElement(f,r({ref:e},h))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4551:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},r="Output Settings",s={unversionedId:"PinOne/Configuring/outputs",id:"PinOne/Configuring/outputs",title:"Output Settings",description:"There are three additional tabs in the settings menu that allow you to adjust the settings for all of the outputs available on the board. The main board has the first 31 outputs that are available on the main board, and the other two tabs are for the optional expansion boards if you have them connected.",source:"@site/docs/PinOne/Configuring/outputs.md",sourceDirName:"PinOne/Configuring",slug:"/PinOne/Configuring/outputs",permalink:"/docs/PinOne/Configuring/outputs",draft:!1,editUrl:"https://github.com/philipellisis/csd-docs/edit/main/docs/PinOne/Configuring/outputs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Inputs",permalink:"/docs/PinOne/Configuring/inputs"},next:{title:"Plunger",permalink:"/docs/PinOne/Configuring/plunger"}},l={},u=[{value:"Max Output Value",id:"max-output-value",level:2},{value:"Timed Off Value and Set Value After",id:"timed-off-value-and-set-value-after",level:2},{value:"Toy Category",id:"toy-category",level:2},{value:"How to set button colors",id:"how-to-set-button-colors",level:2}],h={toc:u},p="wrapper";function d(t){let{components:e,...a}=t;return(0,i.kt)(p,(0,o.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"output-settings"},"Output Settings"),(0,i.kt)("p",null,"There are three additional tabs in the settings menu that allow you to adjust the settings for all of the outputs available on the board. The main board has the first 31 outputs that are available on the main board, and the other two tabs are for the optional expansion boards if you have them connected."),(0,i.kt)("h2",{id:"max-output-value"},"Max Output Value"),(0,i.kt)("p",null,"This setting configures the absolute maximum output that will be allowed for the output, regardless of what output has been sent to the board. This will override any command given so the output will never go above this amount. This can be great for modifying the speed of a motor, or adjusting the brightness of lights. Sometimes this can also be adjusted in DOF, but it's much more convenient to set it here and just leave DOF to it's default setting."),(0,i.kt)("h2",{id:"timed-off-value-and-set-value-after"},"Timed Off Value and Set Value After"),(0,i.kt)("p",null,'This is the value that the output will go to after the "Set Value After" time limit is reached. This means that if the value is set to 255 initially, and you have the "Set Value After" set to 1000ms, then after 1000ms, the value will change to what you have set here. This is useful for assigning "flipper logic" to solenoids or preventing LED lights from being at full brightness for too long. If you are using the life extenders, then there is no need to set this, but it can be used to turn off a solenoid that might have been left on for too long to protect it in case you don\'t have life extenders installed.'),(0,i.kt)("h2",{id:"toy-category"},"Toy Category"),(0,i.kt)("p",null,"Set this depending on the nature of the device. Below is a description of the different settings and how it affects the output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Normal")," A normal output with no special considerations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Noisy")," when the night mode is enabled, then the devices set to noisy will stop responding to events, thus preventing the cabinet from being noisy at night."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Light Show Medium"),' That output will be set for the special "light show" that is available if no input our output is received by the device for a set period of time. This allows you to enjoy special effects with your lighted buttons and other lights in your setup even if you don\'t have DOF functioning. The "Medium" setting specifies that the lights will be at 50% intensity until a button press, which will then cause them to light up to max intensity until the button is released.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Light Show High")," Same as the above, only in this mode the lights will always be at 100% intensity, so pressing a button won't affect how bright it is."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shared")," These outputs are also affected by night mode, but they will also share events. This is typically used with solenoids so if you have an event telling a solenoid to trigger, but that output is already enabled, it wil look to other shared outputs to trigger instead.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(8909).Z,width:"2344",height:"1153"})),(0,i.kt)("h2",{id:"how-to-set-button-colors"},"How to set button colors"),(0,i.kt)("p",null,"If you want your buttons to always light up to a certain color, you can do that by changing a couple of settings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the Max Output Value to the number you want"),(0,i.kt)("li",{parentName:"ol"},'Set the "light show" to "Light Show High" this will ensure the button LED is always at maximum intensity. ')),(0,i.kt)("p",null,"When you click save and exit the menu, the buttons will turn off. The button colors will turn on to the set values once you exit the config tool and wait for the light show to start. The number of seconds before the light show turns on is configurable on the main settings menu, but is defaulted to 10 seconds."),(0,i.kt)("p",null,'Note that the secondary light show will still apply when the buttons are in "attract mode" (Attract mode can be disabled in the main settings menu) but as soon as you press a button, the colors will change to the setting defined. An example of this setting for the RGB Flippers is below. In this case, the buttons will always be a light purple color.'))}d.isMDXComponent=!0},8909:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/Outputs-720219704121fdd8e6a6c3a69f9f126d.png"}}]);