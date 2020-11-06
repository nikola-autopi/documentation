(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||O[d]||c;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=(n(0),n(129)),l={id:"cloud-config-acc",title:"Accelerometer"},o={unversionedId:"cloud/configuration/cloud-config-acc",id:"cloud/configuration/cloud-config-acc",isDocsHomePage:!1,title:"Accelerometer",description:"| Name | Description | Type | Default | Unit |",source:"@site/docs/cloud/configuration/accelerometer.md",slug:"/cloud/configuration/cloud-config-acc",permalink:"/documentation/docs/cloud/configuration/cloud-config-acc",version:"current",sidebar:"cloudSidebar",previous:{title:"Trips",permalink:"/documentation/docs/cloud/trips/cloud-trips"},next:{title:"Audio",permalink:"/documentation/docs/cloud/configuration/cloud-config-audio"}},i=[{value:"Logger",id:"logger",children:[]}],b={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Unit"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RANGE"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maximum number of g-forces being measured."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"g")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SAMPLING RATE"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"How many samples per second? Increasing this will affect system performance negatively. Only change this value if you know what you are doing."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"float"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.56"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hz")))),Object(c.b)("h2",{id:"logger"},"Logger"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Unit"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DECIMALS"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"More decimals means a lot more data. Be very careful about increasing this value."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}u.isMDXComponent=!0}}]);