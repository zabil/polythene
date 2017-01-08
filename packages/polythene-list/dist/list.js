!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-list-tile"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-list-tile","polythene-core","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-list-tile"],e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,r,o,n,l){"use strict";t="default"in t?t.default:t;var i=l.vars.rgba,d={padding:l.vars.grid_unit_component,padding_compact:l.vars.grid_unit_component/2,border_width_stacked:1,border_width_bordered:1,color_light_border:i(l.vars.color_light_foreground,l.vars.blend_light_border_light),color_dark_border:i(l.vars.color_dark_foreground,l.vars.blend_dark_border_light)},s=function(e){return n.mixin.hairline("border-bottom"),{"border-style":"none none solid none","border-width":e.border_width_bordered+"px"}},a=function(e){return[{".pe-list":{padding:e.padding+"px 0","&.pe-list--header":{"padding-top":0},"&.pe-list--compact":{padding:e.padding_compact+"px 0"},"& + &":[n.mixin.hairline("border-top"),{"border-style":"solid none none none","border-width":e.border_width_stacked+"px"}],"&.pe-list--borders":{" .pe-list-tile:not(.pe-list__header)":{"&:not(:last-child)":{"&":s(e)}}},"&.pe-list--borders-indented":{"border-top":"none"," .pe-list-tile:not(.pe-list__header)":{"&:not(:last-child)":{" .pe-list-tile__content:not(.pe-list-tile__content--front)":s(e)}}}}}]},p=function(e){return n.mixin.createStyles(e,a)},c=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(e,t){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return[(r={},c(r,o+".pe-list",{"&.pe-list--borders":{" .pe-list-tile:not(.pe-list__header)":{"&:not(:last-child)":{"border-color":e["color_"+t+"_border"]}}},"&.pe-list--borders-indented":{" .pe-list-tile:not(.pe-list__header)":{" .pe-list-tile__content:not(.pe-list-tile__content--front)":{"border-color":e["color_"+t+"_border"]}}}}),c(r," .pe-list + .pe-list",{"border-color":e["color_"+t+"_border"]}),r)]},b=function(e){return[u(e,"light"),{".pe-dark-theme":[u(e,"dark"," "),u(e,"dark","&")]}]},_=function(e){return n.mixin.createStyles(e,b)},f="list",y="pe-list",m=function(e,t){return n.styler.styleComponent(e,t,f,d,p,_)},v=function(e,t){return m(e,n.styler.addComponentStyle(e,l.styles,f,t))};m(y,l.styles);var g={component:"pe-list",header:"pe-list__header",borders:"pe-list--borders",indentedBorders:"pe-list--borders-indented",hasHeader:"pe-list--header",isCompact:"pe-list--compact",isHoverable:"pe-list--hoverable",isSelectable:"pe-list--selectable"},x=function(e){var n=e.attrs,l=n.element||"div",i=h({},o.filterSupportedAttributes(n),{class:[g.component,n.borders?g.borders:null,n.indentedBorders?g.indentedBorders:null,n.hoverable?g.isHoverable:null,n.selectable?g.isSelectable:null,n.header?g.hasHeader:null,n.compact?g.isCompact:null,n.class].join(" ")}),d=void 0;n.header&&(d=h({},n.header),d.class=[g.header,d.class||null].join(" "));var s=e.children.length&&e.children||n.children,a=[d?t(r.listTile,d):null,n.tiles?n.tiles:n.content?n.content:s&&s[0]?s:null];return t(l,i,[n.before,a,n.after])},w={theme:v,view:x};e.list=w,e.listVars=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=list.js.map