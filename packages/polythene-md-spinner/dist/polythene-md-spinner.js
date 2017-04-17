!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("mithril"),require("polythene-spinner"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-spinner","polythene-css","polythene-theme"],r):r(e.polythene=e.polythene||{},e.m,e["polythene-spinner"],e["polythene-css"],e["polythene-theme"])}(this,function(e,r,i,n,t){"use strict";function o(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function a(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}r="default"in r?r.default:r;var p="default"in i?i.default:i,l={component:"pe-md-spinner",animation:"pe-md-spinner__animation",circle:"pe-md-spinner__circle",circleClipper:"pe-md-spinner__circle-clipper",circleClipperLeft:"pe-md-spinner__circle-clipper-left",circleClipperRight:"pe-md-spinner__circle-clipper-right",gapPatch:"pe-md-spinner__gap-patch",layer:"pe-md-spinner__layer",layerN:"pe-md-spinner__layer-"},c=t.vars.rgba,s={border_width_small:i.vars.size_small/i.vars.size_regular*3,border_width_regular:3,border_width_medium:i.vars.size_medium/i.vars.size_regular*3,border_width_large:i.vars.size_large/i.vars.size_regular*3,border_width_fab:i.vars.size_fab/i.vars.size_regular*3,rotation_duration:479.88/306,arc_size:270,arc_time:1.333,arc_start_degrees:216,color_light_single:c(t.vars.color_primary),color_light_1:"#42a5f5",color_light_2:"#f44336",color_light_3:"#fdd835",color_light_4:"#4caf50",color_dark_single:c(t.vars.color_primary),color_dark_1:"#42a5f5",color_dark_2:"#f44336",color_dark_3:"#fdd835",color_dark_4:"#4caf50"},d="cubic-bezier(0.4, 0.0, 0.2, 1) infinite both",_=function(){return{" to":{transform:"rotate(360deg)"}}},m=function(){return u(1)},f=function(){return u(-1)},u=function(e){return{" from":{transform:"rotate("+130*e+"deg)"}," 50%":{transform:"rotate("+e*-5+"deg)"}," to":{transform:"rotate("+130*e+"deg)"}}},y=function(){return{" from":{opacity:.99}," to":{opacity:0}}},h=function(e){return{" 12.5%":{transform:"rotate("+.5*e.arc_size+"deg)"}," 25%":{transform:"rotate("+1*e.arc_size+"deg)"}," 37.5%":{transform:"rotate("+1.5*e.arc_size+"deg)"}," 50%":{transform:"rotate("+2*e.arc_size+"deg)"}," 62.5%":{transform:"rotate("+2.5*e.arc_size+"deg)"}," 75%":{transform:"rotate("+3*e.arc_size+"deg)"}," 87.5%":{transform:"rotate("+3.5*e.arc_size+"deg)"}," to":{transform:"rotate("+4*e.arc_size+"deg)"}}},g=function(){return{" from":{opacity:.99}," 25%":{opacity:.99}," 26%":{opacity:0}," 89%":{opacity:0}," 90%":{opacity:.99}," 100%":{opacity:.99}}},b=function(){return{" from":{opacity:0}," 15%":{opacity:0}," 25%":{opacity:.99}," 50%":{opacity:.99}," 51%":{opacity:0}}},v=function(){return{" from":{opacity:0}," 40%":{opacity:0}," 50%":{opacity:.99}," 75%":{opacity:.99}," 76%":{opacity:0}}},S=function(){return{" from":{opacity:0}," 65%":{opacity:0}," 75%":{opacity:.99}," 90%":{opacity:.99}," 100%":{opacity:0}}},z=function(e,r){return o({},"&.pe-md-spinner__layer-"+r,{animation:"mdSpinnerFillUnfillRotate "+4*e.arc_time+"s "+d+",  mdSpinnerLayer"+r+"FadeInOut "+4*e.arc_time+"s "+d})},w=function(e,r){return[o({},e,{" .pe-md-spinner__animation":{animation:"mdSpinnerRotate "+r.rotation_duration+"s linear infinite",position:"relative",width:"100%",height:"100%",direction:"ltr"}," .pe-md-spinner__gap-patch":{position:"absolute",boxSizing:"border-box",top:0,left:"45%",width:"10%",height:"100%",overflow:"hidden",borderColor:"inherit"}," .pe-md-spinner__gap-patch .pe-md-spinner__circle":{width:"1000%",left:"-450%"}," .pe-md-spinner__circle-clipper":{display:"inline-block",fontSize:0,lineHeight:0,position:"relative",width:"50%",height:"100%",overflow:"hidden",borderColor:"inherit"}," .pe-md-spinner__circle-clipper .pe-md-spinner__circle":{width:"200%"}," .pe-md-spinner__circle":[n.mixin.fit(),{animation:"none",boxSizing:"border-box",height:"100%",borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",borderBottomColor:"transparent !important"}],"&":["small","regular","medium","large","fab"].map(function(e){return o({},"&.pe-spinner--"+e,{" .pe-md-spinner__circle":{borderWidth:r["border_width_"+e]+"px"}})})," .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle":{transform:"rotate(129deg)",animation:"mdSpinnerLeftSpin "+r.arc_time+"s "+d,borderRightColor:"transparent !important"}," .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle":{transform:"rotate(-129deg)",animation:"mdSpinnerRightSpin "+r.arc_time+"s "+d,left:"-100%",borderLeftColor:"transparent !important"}," .pe-md-spinner__layer":[[1,2,3,4].map(function(e){return z(r,e)}),{animation:"mdSpinnerFillUnfillRotate "+4*r.arc_time+"s "+d,position:"absolute",width:"100%",height:"100%",whiteSpace:"nowrap"}],"@keyframes mdSpinnerRotate":_(),"@keyframes mdSpinnerRightSpin":f(),"@keyframes mdSpinnerLeftSpin":m(),"@keyframes mdSpinnerFadeOut":y(),"@keyframes mdSpinnerFillUnfillRotate":h(r),"@keyframes mdSpinnerLayer1FadeInOut":g(),"@keyframes mdSpinnerLayer2FadeInOut":b(),"@keyframes mdSpinnerLayer3FadeInOut":v(),"@keyframes mdSpinnerLayer4FadeInOut":S()})]},k=function(e,r,i,n){return[a({},e.map(function(e){return e+r}).join(","),{color:i["color_"+n+"_single"]," .pe-md-spinner__layer":{borderColor:"currentcolor"},":not(.pe-spinner--single-color)":{" .pe-md-spinner__layer-1":{borderColor:i["color_"+n+"_1"]}," .pe-md-spinner__layer-2":{borderColor:i["color_"+n+"_2"]}," .pe-md-spinner__layer-3":{borderColor:i["color_"+n+"_3"]}," .pe-md-spinner__layer-4":{borderColor:i["color_"+n+"_4"]}}})]},C=function(e,r){return[k([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),k(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},j=[w,C],R="."+l.component,L=function(e,r){return n.styler.generateStyles([e,R],O({},s,r),j)};n.styler.generateStyles([R],s,j);var x=function(e){return r("div",{class:[l.layer,l.layerN+e].join(" ")},[r("div",{class:[l.circleClipper,l.circleClipperLeft].join(" ")},r("div",{class:l.circle})),r("div",{class:l.gapPatch},r("div",{class:l.circle})),r("div",{class:[l.circleClipper,l.circleClipperRight].join(" ")},r("div",{class:l.circle}))])},F=function(e){var i=e.attrs;return i.content=r("div",{class:l.animation},[1,2,3,4].map(function(e){return x(e)})),i.class=[l.component,i.class].join(" "),r(p,i)},P={theme:L,view:F};e.default=P,e.classes=l,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-md-spinner.js.map
