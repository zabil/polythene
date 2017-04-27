!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-notification"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-notification","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-notification"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,n,r,o){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=c({},n.classes,{component:"pe-notification pe-snackbar",holder:"pe-snackbar__holder",placeholder:"pe-snackbar__placeholder",open:"pe-snackbar--open"}),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=o.vars.rgba,d=u({},n.vars,{border_radius:0,tablet_min_width:288,tablet_max_width:568,min_height:0,color_dark_background:p(o.vars.color_dark_background)}),h=function(e){return{width:"100%",minWidth:e.tablet_min_width+"px",maxWidth:e.tablet_max_width+"px",borderBottomLeftRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:o.vars.unit_block_border_radius+"px",borderTopRightRadius:o.vars.unit_block_border_radius+"px",".pe-notification--horizontal":{" .pe-notification__title":{paddingRight:"30px"}}}},f=function(e,t){var n;return[(n={},a(n,e,{minHeight:t.min_height}),a(n,"@media (min-width: "+o.vars.breakpoint_small_handset_landscape+"px)",a({},e,h(t))),n)]},b=function(e,t,n,r){return[i({},e.map(function(e){return e+t}).join(","),{color:n["color_"+r+"_text"],background:n["color_"+r+"_background"]})]},y=function(e,t){return[b([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),b(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},g=function(e){return[l({},e,[r.flex.layoutCenterCenter,{top:"auto",right:0,bottom:0,left:0,zIndex:o.vars.z_notification,pointerEvents:"none",".pe-multiple--screen":{position:"fixed"},".pe-multiple--container":{position:"absolute"}}])]},_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=[f,y],v="."+s.component.replace(/ /g,"."),w=[g],x="."+s.holder.replace(/ /g,"."),k=function(e,t){return r.styler.generateStyles([e,v],_({},d,t),m),r.styler.generateStyles([e,x],_({},d,t),w)};r.styler.generateStyles([v],d,m),r.styler.generateStyles([x],d,w);var O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j=O({},n.instance,{theme:k}),R=function(e,t){var n=e.getBoundingClientRect().height;return{el:e,showDuration:t.showDuration||.4,showDelay:t.showDelay||0,beforeShow:function(){return e.style.transform="translate3d(0, "+n+"px, 0)"},show:function(){return e.style.transform="translate3d(0, 0px, 0)"}}},D=function(e,t){var n=e.getBoundingClientRect().height;return{el:e,hideDuration:t.hideDuration||.4,hideDelay:t.hideDelay||0,hide:function(){return e.style.transform="translate3d(0, "+n+"px, 0)"},afterHide:function(){return e.style.transform="translate3d(0, 0px, 0)"}}},P={show:R,hide:D},S=t.multiple({instance:j,transitions:P,queue:!0,defaultId:"default_snackbar",class:s.component,element:"."+s.holder.replace(/ /g,"."),placeholder:"span."+s.placeholder.replace(/ /g,"."),bodyShowClass:s.open});e.default=S,e.vars=d,e.classes=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-snackbar.js.map