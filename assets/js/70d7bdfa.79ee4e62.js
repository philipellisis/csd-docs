"use strict";(self.webpackChunkcleveland_software_design_docs=self.webpackChunkcleveland_software_design_docs||[]).push([[2281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,p=d["".concat(s,".").concat(g)]||d[g]||h[g]||r;return n?i.createElement(p,a(a({ref:t},u),{},{components:n})):i.createElement(p,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},a="Accelerometer",l={unversionedId:"PinOne/Configuring/accelerometer",id:"PinOne/Configuring/accelerometer",title:"Accelerometer",description:"image",source:"@site/docs/PinOne/Configuring/accelerometer.md",sourceDirName:"PinOne/Configuring",slug:"/PinOne/Configuring/accelerometer",permalink:"/docs/PinOne/Configuring/accelerometer",draft:!1,editUrl:"https://github.com/philipellisis/csd-docs/edit/main/docs/PinOne/Configuring/accelerometer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PinOne Configuration Tool",permalink:"/docs/PinOne/Configuring/"},next:{title:"Inputs",permalink:"/docs/PinOne/Configuring/inputs"}},s={},c=[{value:"Setting sensitivity",id:"setting-sensitivity",level:3},{value:"Setting the Pins checkbox",id:"setting-the-pins-checkbox",level:3},{value:"Setting the orientation",id:"setting-the-orientation",level:3},{value:"Setting the dead zone",id:"setting-the-dead-zone",level:3},{value:"Recording the Tilt Value",id:"recording-the-tilt-value",level:3},{value:"Recording the Max Value",id:"recording-the-max-value",level:3},{value:"Setting Tilt in VPX",id:"setting-tilt-in-vpx",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accelerometer"},"Accelerometer"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(3174).Z,width:"2355",height:"1108"})),(0,o.kt)("p",null,"Configuring the accelerometer is fairly straight forward, but a good configuration can add a lot of realism to your pinball machine, while also preventing common issues. The first time you go to configure the accelerometer, I recommend performing the following steps:"),(0,o.kt)("h3",{id:"setting-sensitivity"},"Setting sensitivity"),(0,o.kt)("p",null,"2G is the most sensitive setting. At this setting, small nudges will make big impacts in the cursor. You can reduce the sensitivity to make the nudges have less effect, or you can also simply change the max value as another way to adjust the accelerometer sensitivity. "),(0,o.kt)("h3",{id:"setting-the-pins-checkbox"},"Setting the Pins checkbox"),(0,o.kt)("p",null,'Set the "Pins" checkbox correctly. When mounted to a board, the pins on the board are facing down, so the box will not be checked. When the board is mounted by itself, then the pins on the board will likely be facing upward and you will want the box to be checked.\nIf the board is mounted on its side (like it is on the PinOne Mini Machine) then you will check the box "mounted on side"'),(0,o.kt)("h3",{id:"setting-the-orientation"},"Setting the orientation"),(0,o.kt)("p",null,'Set the orientation. The USB connection refers to where the USB plug on the board is facing when you are standing in front of the pinball machine. So if the USB connection is away from you, then you would select "USB Facing Back"'),(0,o.kt)("h3",{id:"setting-the-dead-zone"},"Setting the dead zone"),(0,o.kt)("p",null,"Use the slider to set the dead zone. I've found the dead zone is typically going to be a small number, less than 10 in most cases. The Dead Zone value is highlighted with a gray square on the accelerometer graph. This can be helpful if toys like your shaker or solenoids are activating the accelerometer, and also to improve performance of the PinOne board by only sending accelerometer events when they are actually happening."),(0,o.kt)("h3",{id:"recording-the-tilt-value"},"Recording the Tilt Value"),(0,o.kt)("p",null,'Use the tilt value sliders to set your tilt on the table to a point where you would consider a tilt event occurring. This value is shown with the yellow square on the accelerometer graph. When tilt is activated, it will send an output to the button selected in the "tilt button" dropdown.'),(0,o.kt)("h3",{id:"recording-the-max-value"},"Recording the Max Value"),(0,o.kt)("p",null,"Use the max value slider to set the absolute maximums you would expect to receive on the accelerometer. If you want to make the accelerometer less sensitive to movement, this is actually the best item to adjust. You can set this to a much higher number manually and it will restrict the overall sensitivity to accelerometer events sent."),(0,o.kt)("h2",{id:"setting-tilt-in-vpx"},"Setting Tilt in VPX"),(0,o.kt)("p",null,"In VPX, you need to configure the tilt to use a real tilt bob (even though the PinOne is simulated, it will work just as good as a real tilt bob) in order to do this, you need to take the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to your visual pinball scripts folder. Typically ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Visual Pinball\\Scripts")),(0,o.kt)("li",{parentName:"ol"},"Find the file named ",(0,o.kt)("inlineCode",{parentName:"li"},"NudgePlugIn_mjrAccelAndTilt.vbs")," and rename it to ",(0,o.kt)("inlineCode",{parentName:"li"},"NudgePlugIn.vbs")," This will ensure that the tilt from the PinOne board does not cause a real tilt event on the table and also counts the tilt event properly towards a mechanical tilt.")))}h.isMDXComponent=!0},3174:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/accelerometer-7868bed08f26d262bd4b72e765ec0ae4.png"}}]);