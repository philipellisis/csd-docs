"use strict";(self.webpackChunkcleveland_software_design_docs=self.webpackChunkcleveland_software_design_docs||[]).push([[3225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:6},o="Steam",s={unversionedId:"PinOne/Configuring/steam",id:"PinOne/Configuring/steam",title:"Steam",description:"image",source:"@site/docs/PinOne/Configuring/steam.md",sourceDirName:"PinOne/Configuring",slug:"/PinOne/Configuring/steam",permalink:"/docs/PinOne/Configuring/steam",draft:!1,editUrl:"https://github.com/philipellisis/csd-docs/edit/main/docs/PinOne/Configuring/steam.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/PinOne/Configuring/mainSettings"},next:{title:"PinOne In Arduino",permalink:"/docs/PinOne/ardiuno"}},c={},l=[{value:"Setting steam calibration",id:"setting-steam-calibration",level:2},{value:"Steam calibration text",id:"steam-calibration-text",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"steam"},"Steam"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9413).Z,width:"2344",height:"1435"})),(0,i.kt)("h2",{id:"setting-steam-calibration"},"Setting steam calibration"),(0,i.kt)("p",null,"Use this box to set the buttons to a standard xbox controller that can be used to map items to Steam. Once you are done, you can click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Steam Config")," button to automatically save the configuration to the steam VDF file."),(0,i.kt)("h2",{id:"steam-calibration-text"},"Steam calibration text"),(0,i.kt)("p",null,"Besides the obvious of being able to see button presses made in the PinOne board when in this screen, it also provides a way to generate a steam calibration file that can be used to directly map the buttons of the PinOne to a Steam controller. Just set the buttons the way you want them to work in steam and paste the text shown into steam during the calibration phase. Now you can also save the configuration directly to your Steam .vdf file so there is no need to do any calibration in steam at all!"))}p.isMDXComponent=!0},9413:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/steam-09f985e5d765d3459e73d34c92e5c8ac.png"}}]);