(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),d=j(a),m=n,o=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?b.a.createElement(o,c(c({ref:t},O),{},{components:a})):b.a.createElement(o,c({ref:t},O))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var O=2;O<r;O++)l[O]=a[O];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),b=a(6),r=(a(0),a(129)),l={id:"cloud-events-system",title:"System"},c={unversionedId:"cloud/events/cloud-events-system",id:"cloud/events/cloud-events-system",isDocsHomePage:!1,title:"System",description:"System events relate to the running system of the device.",source:"@site/docs/cloud/events/system.md",slug:"/cloud/events/cloud-events-system",permalink:"/documentation/docs/cloud/events/cloud-events-system",version:"current",sidebar:"cloudSidebar",previous:{title:"Wifi",permalink:"/documentation/docs/cloud/configuration/cloud-config-wifi"},next:{title:"Vehicle",permalink:"/documentation/docs/cloud/events/cloud-events-vehicle"}},i=[{value:"Device Events",id:"device-events",children:[]},{value:"Minion Events",id:"minion-events",children:[]},{value:"Network Events",id:"network-events",children:[]},{value:"Power Events",id:"power-events",children:[]},{value:"Release Events",id:"release-events",children:[]},{value:"STN Events",id:"stn-events",children:[]},{value:"Time Events",id:"time-events",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"System events relate to the running system of the device."),Object(r.b)("h2",{id:"device-events"},"Device Events"),Object(r.b)("p",null,"These events apply depending on which peripherals are installed inside the dongle."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Fields"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/device/ec2x/gnss/assist_data_updated")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GNSS assist data of the installed EC2X compatible device has been updated."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/device/ec2x/powered_off")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Installed EC2X compatible device was powered off. Automatic power on is expected immediately after."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"FIELD DEFINITIONS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The explanatory cause for the event."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"minion-events"},"Minion Events"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Fields"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/minion/ready")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Minion is started up and ready."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/minion/online")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Minion is connected to the hub."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/minion/offline")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Minion is not connected to the hub."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/minion/restarting")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Minion is restarting because of the specified reason."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"FIELD DEFINITIONS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The explanatory cause for the event."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"network-events"},"Network Events"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Fields"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/network/wwan0/online")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The network interface ",Object(r.b)("em",{parentName:"td"},"wwan0")," has gone online."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/network/wwan0/offline")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The network interface ",Object(r.b)("em",{parentName:"td"},"wwan0")," has gone offline."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"FIELD DEFINITIONS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The explanatory cause for the event."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"power-events"},"Power Events"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Fields"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/power/_booting")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The prefixed underscore indicates that this is a private event and should only be used for debugging purposes. The event describes the internal state of the SPM subsystem. This event may be discarded in the future."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"awaken"),", ",Object(r.b)("inlineCode",{parentName:"td"},"trigger"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/power/on")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Triggered when it is confirmed that the SPM subsystem is in ",Object(r.b)("em",{parentName:"td"},"on")," state."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"awaken"),", ",Object(r.b)("inlineCode",{parentName:"td"},"trigger"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/power/last_off")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Informs during start-up the last known timestamp where the device was last powered off. The actual timestamp is retrieved from the syslog and should only be used for debugging purposes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"timestamp"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/power/recover")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Informs during start-up if the device has recovered from an error condition handled by the SPM subsystem."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"trigger"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/power/sleep")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device went into sleep because of specifed reason."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"delay"),", ",Object(r.b)("inlineCode",{parentName:"td"},"interval"),", ",Object(r.b)("inlineCode",{parentName:"td"},"reason"),", ",Object(r.b)("inlineCode",{parentName:"td"},"uptime"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/power/hibernate")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device went into hibernation because of specifed reason."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"delay"),", ",Object(r.b)("inlineCode",{parentName:"td"},"interval"),", ",Object(r.b)("inlineCode",{parentName:"td"},"reason"),", ",Object(r.b)("inlineCode",{parentName:"td"},"uptime"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/power/3v3/restarted")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The 3V3 power supply has been restarted."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"FIELD DEFINITIONS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"awaken")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The state from which the device awakens."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"off"),", ",Object(r.b)("inlineCode",{parentName:"td"},"sleeping"),", ",Object(r.b)("inlineCode",{parentName:"td"},"hibernating"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"delay")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delay in seconds before execution."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"interval")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Planned duration in seconds before expiration."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"300")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reason")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The explanatory cause for the event."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"timestamp")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timestamp"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time to be reported."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2019-03-13T11:10:14")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"trigger")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Underlying cause of the event reported by the SPM subsystem."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"acc"),", ",Object(r.b)("inlineCode",{parentName:"td"},"boot_timeout"),", ",Object(r.b)("inlineCode",{parentName:"td"},"heartbeat_timeout"),", ",Object(r.b)("inlineCode",{parentName:"td"},"modem"),", ",Object(r.b)("inlineCode",{parentName:"td"},"rpi"),", ",Object(r.b)("inlineCode",{parentName:"td"},"spm"),", ",Object(r.b)("inlineCode",{parentName:"td"},"stn"),", ",Object(r.b)("inlineCode",{parentName:"td"},"timer"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"uptime")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"System uptime in seconds."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3745")))),Object(r.b)("h2",{id:"release-events"},"Release Events"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Fields"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/release/pending")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Installing latest release."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/release/forcing")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Force installing latest release."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/release/retrying")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrying installation of latest release."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/release/failed")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Installation of latest release failed."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/release/updated")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Installation of latest release succeeded."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"FIELD DEFINITIONS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UUID"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID of the concerned release."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8ff5526a3dafe2fc0e80675f32755578ddaf3962")))),Object(r.b)("h2",{id:"stn-events"},"STN Events"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Fields"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/stn/not_connected")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not connected to STN11XX interface."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/stn/interface_connected")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connected to STN11XX interface."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/stn/bus_connected")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connected to bus using specified protocol."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"protocol"),", ",Object(r.b)("inlineCode",{parentName:"td"},"autodetected"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/stn/bus_disconnected")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Was connected to a bus but is now disconnected."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"FIELD DEFINITIONS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"protocol")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID of the protocol."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"autodetected")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Has the protocol been autodetected or not?"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true"))))),Object(r.b)("h2",{id:"time-events"},"Time Events"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Fields"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/time/synced")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The system clock was synchronized with the specifed source."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"new"),", ",Object(r.b)("inlineCode",{parentName:"td"},"old"),", ",Object(r.b)("inlineCode",{parentName:"td"},"source"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"system/time/uncertain")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The system clock is not synchronized."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"FIELD DEFINITIONS")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"new")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timestamp"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The new time after synchronization."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19-03-13 10:08:19")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"old")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timestamp"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The old time before synchronization."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2019-03-13 10:08:30")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"source")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The source that was synchronized against."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"network"),", ",Object(r.b)("inlineCode",{parentName:"td"},"ntp"),", ",Object(r.b)("inlineCode",{parentName:"td"},"rtc"))))))}j.isMDXComponent=!0}}]);