(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),l=(n(0),n(129)),c={id:"cloud-config-obd",title:"OBD"},b={unversionedId:"cloud/configuration/cloud-config-obd",id:"cloud/configuration/cloud-config-obd",isDocsHomePage:!1,title:"OBD",description:"Elm327 Proxy",source:"@site/docs/cloud/configuration/obd.md",slug:"/cloud/configuration/cloud-config-obd",permalink:"/documentation/docs/cloud/configuration/cloud-config-obd",version:"current",sidebar:"cloudSidebar",previous:{title:"Cloud Api",permalink:"/documentation/docs/cloud/configuration/cloud-config-api"},next:{title:"Power",permalink:"/documentation/docs/cloud/configuration/cloud-config-power"}},o=[{value:"Elm327 Proxy",id:"elm327-proxy",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"elm327-proxy"},"Elm327 Proxy"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ENABLED"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enable the ELM327 proxy to support 3rd party mobile apps like Torque Lite/Pro on Android and Car Scanner on iOS. This is currently an experimental feature."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"False"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PORT"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specify which port to listen on."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"35000"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PAUSE WORKERS"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pause all OBD worker threads while the ELM327 proxy is being used? The threads will be resumed when the proxy is no longer in use."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"True"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RESET AFTER USE"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Reset the underlying STN subsystem after the proxy has been used?"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"True"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h4",{id:"logging"},"Logging"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FILE"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The filename to which logs should be written. The default directory path is '/var/log/salt' if none other specified. Leave empty to disable logging."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"elm327_proxy.log"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LEVEL"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Change if you want more detailed logging. Please note that more logging can have a negative impact on performance."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"20"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}u.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,j=p["".concat(c,".").concat(d)]||p[d]||O[d]||l;return n?r.a.createElement(j,b(b({ref:t},i),{},{components:n})):r.a.createElement(j,b({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);