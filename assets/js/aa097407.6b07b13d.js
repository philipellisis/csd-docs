"use strict";(self.webpackChunkcleveland_software_design_docs=self.webpackChunkcleveland_software_design_docs||[]).push([[8363],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(o),h=r,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7375:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);function r(e){let{children:t,source:o}=e;return n.createElement("iframe",{style:{width:"100%",aspectRatio:"16/9"},src:o,title:"YouTube video player",frameborder:"0",allow:"accelerometer;  autoplay;  clipboard-write;  encrypted-media;  gyroscope;  picture-in-picture;  web-share",allowfullscreen:!0})}},8251:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905)),i=o(7375);const a={sidebar_position:4},s="Life Extenders",l={unversionedId:"Products/Life-Extenders/index",id:"Products/Life-Extenders/index",title:"Life Extenders",description:"Introduction",source:"@site/docs/Products/Life-Extenders/index.md",sourceDirName:"Products/Life-Extenders",slug:"/Products/Life-Extenders/",permalink:"/docs/Products/Life-Extenders/",draft:!1,editUrl:"https://github.com/philipellisis/csd-docs/edit/main/docs/Products/Life-Extenders/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"PinOne Mini Expansion board",permalink:"/docs/Products/PinOne-Mini-Expansion-Board/"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Why should I rely on these instead of a software solution like the flipper logic in pinscape?",id:"why-should-i-rely-on-these-instead-of-a-software-solution-like-the-flipper-logic-in-pinscape",level:2},{value:"Life Extenders video showing them in action",id:"life-extenders-video-showing-them-in-action",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"life-extenders"},"Life Extenders"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The CSD Life extenders are a simple electronic device that ensures your solenoids work properly over a long period of time. The process for extending the life is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The length of time that the solenoid will recieve full output power from the power supply is goverened by a jumper on the board. This is adjustable in steps of 16ms, 25ms, 50ms and 100ms "),(0,r.kt)("li",{parentName:"ol"},'The "hold voltage" is adjusted by a potentiometer on the board and can be adjusted from about 2v to 10v')),(0,r.kt)("p",null,"In most cases a solenoid needs very little voltage to hold it in place, but to have the best sound and feel, the full voltage must be applied for as long as the solenoid takes to get to fully extend. For short throw solenoids it's less than 16ms but for longer solenoids it can be up to 50ms. Once the solenoid is fully extended, the voltage is instantly dropped to a level that is acceptable for it to be held in place. Typically around 2-4V. In the case of a 12V solenoid with a 3.2 ohm winding, the power requirements go from 45W to under 3W, a massive decrease and enough of a decrease to allow the solenoid to run cool, even in the most extreme operating conditions. "),(0,r.kt)("p",null,"Adjusting the life extender hold voltage is done by rotating the potentiometer. A clockwise motion will increase the hold voltage, and it should be adjusted so it is just above the point where the solenoid drops out while being held on."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(125).Z,width:"1390",height:"626"})),(0,r.kt)("h2",{id:"why-should-i-rely-on-these-instead-of-a-software-solution-like-the-flipper-logic-in-pinscape"},"Why should I rely on these instead of a software solution like the flipper logic in pinscape?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's a hardware solution, which is much\xa0more robust than what you get with a software solution, there are multiple scenarios where the software can fail and running a solenoid at full power will cause massive overheating, and catastrophic failure is inevitable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"These boards are much faster than what a software solution can provide. The solenoids are at full power for only 16 milliseconds on the fastest setting, that's so fast that even if you are hitting the flippers as fast as you can, they still will not overheat, that is not the case with most software logic solutions. Because the reaction is so fast, you can add a slow blow fuse that will get triggered if any solenoid happens to run at full power, which adds another layer of protection from overheating.\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Many times you want to use the PWM outputs for other things, and this frees them up for those other things")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Since you have a hardware solution, and the reaction time is so fast, the power requirements are super low. You can run 10 solenoids off a 5A power supply and never run into problems. That by itself is a huge benefit to using the life extenders. Some people will say you don't need them for the pop bumpers, but if you don't have them, then you need a massive power supply to run all those solenoids as each one uses 3.8 amps of current.\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The PWM on my boards are a higher frequency so you do not have the humming issue you will get when run through pinscape \u2014 these are completely silent."))),(0,r.kt)("h2",{id:"life-extenders-video-showing-them-in-action"},"Life Extenders video showing them in action"),(0,r.kt)(i.Z,{source:"https://www.youtube.com/embed/ZpK8SSSue9s?si=x1Sxj-dvSgc_8-Ey",mdxType:"Video"}))}h.isMDXComponent=!0},125:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/LE1-4384b58315b1af92276f209b279b46f6.jpg"}}]);