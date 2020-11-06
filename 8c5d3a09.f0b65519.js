(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{129:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),s=function(e){var r=c.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return c.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),b=n,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return t?c.a.createElement(f,i(i({ref:r},l),{},{components:t})):c.a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(2),c=t(6),o=(t(0),t(129)),a={id:"core-services-cloud",title:"Cloud Manager"},i={unversionedId:"core/services/core-services-cloud",id:"core/services/core-services-cloud",isDocsHomePage:!1,title:"Cloud Manager",description:"Handlers",source:"@site/docs/core/services/cloud_manager.md",slug:"/core/services/core-services-cloud",permalink:"/documentation/docs/core/services/core-services-cloud",version:"current",sidebar:"coreSidebar",previous:{title:"Audio Manager",permalink:"/documentation/docs/core/services/core-services-audio"},next:{title:"Ec2X Manager",permalink:"/documentation/docs/core/services/core-services-ec2x"}},u=[{value:"Handlers",id:"handlers",children:[{value:"<code>cache</code>",id:"cache",children:[]},{value:"<code>status</code>",id:"status",children:[]},{value:"<code>upload</code>",id:"upload",children:[]}]}],l={rightToc:u};function s(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"handlers"},"Handlers"),Object(o.b)("h3",{id:"cache"},Object(o.b)("inlineCode",{parentName:"h3"},"cache")),Object(o.b)("p",null,"Queries/calls a given cache function."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"status"},Object(o.b)("inlineCode",{parentName:"h3"},"status")),Object(o.b)("p",null,"Gets current status."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"upload"},Object(o.b)("inlineCode",{parentName:"h3"},"upload")),Object(o.b)("p",null,"Uploads cached data to cloud."))}s.isMDXComponent=!0}}]);