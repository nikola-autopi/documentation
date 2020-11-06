(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),c=n(6),o=(n(0),n(129)),i={id:"core-cmd-time",title:"Time"},a={unversionedId:"core/commands/core-cmd-time",id:"core/commands/core-cmd-time",isDocsHomePage:!1,title:"Time",description:"time.help",source:"@site/docs/core/commands/time.md",slug:"/core/commands/core-cmd-time",permalink:"/documentation/docs/core/commands/core-cmd-time",version:"current",sidebar:"coreSidebar",previous:{title:"Stn",permalink:"/documentation/docs/core/commands/core-cmd-stn"},next:{title:"Tracking",permalink:"/documentation/docs/core/commands/core-cmd-tracking"}},l=[{value:"<code>time.help</code>",id:"timehelp",children:[]},{value:"<code>time.ntp</code>",id:"timentp",children:[]},{value:"<code>time.set</code>",id:"timeset",children:[]},{value:"<code>time.status</code>",id:"timestatus",children:[]}],m={rightToc:l};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"timehelp"},Object(o.b)("inlineCode",{parentName:"h2"},"time.help")),Object(o.b)("p",null,"Shows this help information."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"timentp"},Object(o.b)("inlineCode",{parentName:"h2"},"time.ntp")),Object(o.b)("p",null,"Enable or disable network time synchronization."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"enable"))," (bool): Default is ",Object(o.b)("inlineCode",{parentName:"li"},"True"),".")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"timeset"},Object(o.b)("inlineCode",{parentName:"h2"},"time.set")),Object(o.b)("p",null,"Set system time."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"value"))," (str): Time string to set.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"adjust_system_clock"))," (bool): Default is ",Object(o.b)("inlineCode",{parentName:"li"},"False"),".")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"timestatus"},Object(o.b)("inlineCode",{parentName:"h2"},"time.status")),Object(o.b)("p",null,"Show current time settings."))}b.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var m=c.a.createContext({}),b=function(e){var t=c.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=b(e.components);return c.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,d=u["".concat(i,".").concat(s)]||u[s]||p[s]||o;return n?c.a.createElement(d,a(a({ref:t},m),{},{components:n})):c.a.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var m=2;m<o;m++)i[m]=n[m];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);