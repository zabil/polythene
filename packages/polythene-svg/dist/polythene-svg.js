!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-core"),require("polythene-css")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-css"])}(this,function(e,t,r,n){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t="default"in t?t.default:t;var l={color_light:"currentcolor",color_dark:"currentcolor"},c=function(e){return[o({},e,{lineHeight:1})]},u=function(e,t,r,n){return[i({},e.map(function(e){return e+t}).join(","),{color:"inherit"," svg":{color:"inherit"," path, rect, circle, polygon":{"&:not([fill=none])":{fill:r["color_"+n]||"currentcolor"}}}})]},a=function(e,t){return[u([".pe-dark-theme",".pe-dark-theme "],e,t,"dark"),u(["",".pe-light-theme",".pe-light-theme "],e,t,"light")]},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=[c,a],s=function(e,t){return n.styler.generateStyles([e,".pe-svg"],f({},l,t),p)};n.styler.generateStyles([".pe-svg"],l,p);var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y={component:"pe-svg"},d=function(e){var n=e.attrs,o=n.element||"div",i=h({},r.filterSupportedAttributes(n),{class:[y.component,n.class].join(" ")}),l=n.content?n.content:n.children||e.children;return t(o,i,[n.before,l,n.after])},v={theme:s,view:d};e.default=v,e.classes=y,e.vars=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-svg.js.map
