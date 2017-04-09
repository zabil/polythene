!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core"),require("mithril"),require("polythene-shadow"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","mithril","polythene-shadow","polythene-css","polythene-theme"],o):o(e.polythene=e.polythene||{},e["polythene-core"],e.m,e["polythene-shadow"],e["polythene-css"],e["polythene-theme"])}(this,function(e,o,t,r,i,n){"use strict";function l(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}t="default"in t?t.default:t,r="default"in r?r.default:r;var d=n.vars.rgba,s={border_radius:n.vars.unit_block_border_radius,padding:3*n.vars.grid_unit_component,header_bottom:20,header_height:60,footer_height:52,color_light_content_background:d(n.vars.color_light_background),color_light_title_text:d(n.vars.color_light_foreground,n.vars.blend_light_text_primary),color_light_body_text:d(n.vars.color_light_foreground,n.vars.blend_light_text_regular),color_light_body_border:d(n.vars.color_light_foreground,n.vars.blend_light_border_light),color_light_backdrop_background:"rgba(0, 0, 0, .4)",color_dark_content_background:d(n.vars.color_dark_background),color_dark_title_text:d(n.vars.color_dark_foreground,n.vars.blend_dark_text_primary),color_dark_body_text:d(n.vars.color_dark_foreground,n.vars.blend_dark_text_regular),color_dark_body_border:d(n.vars.color_dark_foreground,n.vars.blend_dark_border_light),color_dark_backdrop_background:"rgba(0, 0, 0, .5)"},c=function(e,o){var t;return[(t={},l(t,e,[i.flex.layoutCenterCenter,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:n.vars.z_dialog,height:"100%",padding:o.padding+"px 40px",".pe-dialog--fullscreen":{padding:0," .pe-dialog__content":{borderRadius:0,maxWidth:"none",height:"100%",width:"100%"," .pe-dialog__header, .pe-dialog__footer":{display:"none"}," .pe-dialog__body":{padding:0,height:"100%",maxHeight:"calc(100%)",border:"none"}}}," .pe-dialog__header, pe-dialog__body, pe-dialog__header":{zIndex:1}," .pe-dialog__content":[i.flex.layoutVertical,{position:"relative",maxHeight:"100%",minWidth:"280px",maxWidth:7*n.vars.grid_unit_menu+"px",borderRadius:o.border_radius+"px"," > .pe-shadow":{zIndex:-1},".pe-menu__content":{" .pe-dialog__body":{padding:0,border:"none"}}," p":{margin:0}," p + p":{marginTop:"16px"}}]," .pe-dialog__title":{fontSize:n.vars.font_size_title+"px",lineHeight:"24px",fontWeight:n.vars.font_weight_medium,"& + div":{marginTop:"16px"}}," .pe-dialog__header":{padding:[o.padding-4,o.padding,o.header_bottom-4,o.padding].map(function(e){return e+"px"}).join(" "),minHeight:o.header_height+"px"," .pe-dialog__title":[i.mixin.ellipsis(1),{width:"100%"}]}," .pe-dialog__body":[i.flex.selfStretch,i.mixin.hairline("border-top"),{borderTopStyle:"solid"},i.mixin.hairline("border-top"),{borderBottomStyle:"solid"},{padding:o.padding+"px",overflowY:"auto","-webkit-overflow-scrolling":"touch",borderWidth:"1px",borderStyle:"solid none",borderColor:"transparent",maxHeight:"calc(100vh - "+2*o.padding+"px - "+(o.header_height+o.footer_height)+"px)"}]," .pe-dialog__header + .pe-dialog__body":{paddingTop:0}," .pe-dialog__footer":{padding:"2px 8px",minHeight:o.footer_height+"px",fontSize:0,".pe-dialog__footer--high":{paddingBottom:"8px"}}," .pe-dialog__actions":[i.flex.layoutHorizontal,i.flex.layoutEndJustified,i.flex.layoutWrap,{margin:"0 -4px"," .pe-button":{height:"36px",marginTop:"6px",marginBottom:"6px",padding:0}}]}]),l(t," body.pe-dialog--open",{overflow:"hidden",left:0,"-webkit-overflow-scrolling":"touch",top:0,width:"100%"}),t)]},p=function(e,o,t,r){return[a({},e+o,{"&.pe-dialog--backdrop":{backgroundColor:t["color_"+r+"_backdrop_background"]}," .pe-dialog__content":{backgroundColor:t["color_"+r+"_content_background"]}," .pe-dialog__header .pe-dialog__title":{color:t["color_"+r+"_title_text"]}," .pe-dialog__body":{color:t["color_"+r+"_body_text"]},"&.pe-dialog--overflow-top .pe-dialog__body":{borderTopColor:t["color_"+r+"_body_border"]},"&.pe-dialog--overflow-bottom .pe-dialog__body":{borderBottomColor:t["color_"+r+"_body_border"]}})]},_=function(e,o){return[p("",e,o,"light"),p(".pe-dark-theme",e,o,"dark"),p(".pe-dark-theme ",e,o,"dark")]},g=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=[c,_],h=function(e,o){return i.styler.generateStyles([e,".pe-dialog"],g({},s,o),u)};i.styler.generateStyles([".pe-dialog"],s,u);var f=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b={component:"pe-dialog",visible:"pe-dialog--visible",body:"pe-dialog__body",fullscreen:"pe-dialog--fullscreen",content:"pe-dialog__content",header:"pe-dialog__header",footer:"pe-dialog__footer",footerHigh:"pe-dialog__footer--high",title:"pe-dialog__title",actions:"pe-dialog__actions",hasBackdrop:"pe-dialog--backdrop",hasTopOverflow:"pe-dialog--overflow-top",hasBottomOverflow:"pe-dialog--overflow-bottom",menuContent:"pe-menu__content"},v=function(e){var o=e.scrollEl;o&&(e.topOverflow=o.scrollTop>0,e.bottomOverflow=o.scrollHeight-(o.scrollTop+o.getBoundingClientRect().height)>0)},m=function(e){var o=e.footerEl;if(o){var t=window.getComputedStyle(o);o.getBoundingClientRect().height>parseInt(t.minHeight,10)?o.classList.add(b.footerHigh):o.classList.remove(b.footerHigh)}},y=function(e,t){var r=e.instanceId;e.transitioning=!0;var i=t.transitions||e.transitions;return o.show(f({},t,i.show(e.el,t))).then(function(){e.transitioning=!1,e.visible=!0,e.didShow&&e.didShow(r)})},w=function(e,r){var i=e.instanceId;e.transitioning=!0;var n=r.transitions||e.transitions;return o.hide(f({},r,n.hide(e.el,r))).then(function(){C.remove(i),e.transitioning=!1,e.visible=!1,e.didHide&&e.didHide(i),setTimeout(t.redraw,0)})},x=function(e,o){var r=o.content||o.body||o.menu,i=o.updateContentOnScroll||!1,n=!i&&e.isScrolling;return t("div",{class:b.body,oncreate:function(o){var t=o.dom;return e.scrollEl=t},onbeforeupdate:!n,onscroll:function(){e.isScrolling=!0,v(e),clearTimeout(e.scrollWatchId),e.scrollWatchId=setTimeout(function(){e.isScrolling=!1},150)}},r)},k=function(e,i){var n=function(){v(e),m(e),t.redraw()},l=function(o){i.fullscreen||i.modal||27!==o.which||e.transitioning||(a(),w(e,f({},i,{hideDelay:0})))},a=function(){o.unsubscribe("resize",n),o.unsubscribe("keydown",l)},d=i.element||"form",s=f({},o.filterSupportedAttributes(i,{remove:["style"]}),{class:[b.component,i.fullscreen?b.fullscreen:null,i.backdrop?b.hasBackdrop:null,e.topOverflow||i.borders?b.hasTopOverflow:null,e.bottomOverflow||i.borders?b.hasBottomOverflow:null,e.visible?b.visible:null,i.class].join(" "),oncreate:function(r){var a=r.dom;e.el=a,o.subscribe("resize",n),o.subscribe("keydown",l),v(e),y(e,i).then(function(){v(e),m(e),(e.topOverflow||e.bottomOverflow)&&setTimeout(t.redraw,0)})},onremove:a,onclick:function(o){o.target===e.el&&(i.modal||e.transitioning||w(e,f({},i,{hideDelay:0})))}},i.formOptions?i.formOptions:null),c=x(e,i),p=t("div",{class:[b.content,i.menu?b.menuContent:null].join(" "),style:i.style},[i.fullscreen?null:t(r,{z:e.z,animated:!0}),i.fullscreen?null:i.title?t("div",{class:b.header,oncreate:function(o){var t=o.dom;e.headerHeight=t.scrollHeight}},t("div",{class:b.title},i.title)):null,c,i.fullscreen?null:i.footer?t("div",{class:b.footer,oncreate:function(o){var t=o.dom;e.footerHeight=t.scrollHeight,e.footerEl=t,m(e)},onupdate:function(o){var t=o.dom;return e.footerHeight=t.scrollHeight,m(e)}},[t("div",{class:b.actions},i.footer)]):null]);return t(d,s,[i.before,p,i.after])},O={theme:h,oninit:function(e){var o=e.attrs,t=o.opts,r=void 0!==t.z?t.z:3;e.state=f(e.state,o,{z:r,scrollEl:void 0,footerEl:void 0,topOverflow:!1,bottomOverflow:!1,scrollWatchId:0,isScrolling:!1,headerHeight:0,footerHeight:0,el:void 0,visible:!1,transitioning:!1})},view:function(e){var o=e.state,t=e.attrs,r="function"==typeof t.opts?t.opts():t.opts;return t.hide&&!o.transitioning&&w(o,r),k(o,r)}},H=function(e,o){return{el:e,showDuration:o.showDuration||.22,showDelay:o.showDelay||0,beforeShow:function(){return e.style.opacity=0},show:function(){return e.style.opacity=1}}},S=function(e,o){return{el:e,hideDuration:o.hideDuration||.22,hideDelay:o.hideDelay||0,hide:function(){return e.style.opacity=0}}},z={show:H,hide:S},C=o.multiple({instance:O,transitions:z,defaultId:"default_dialog",element:".pe-dialog__holder",placeholder:"span.pe-dialog__placeholder",bodyShowClass:"pe-dialog--open"});e.default=C,e.classes=b,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-dialog.js.map
