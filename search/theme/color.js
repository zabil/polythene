"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.defineProperty(exports,"__esModule",{value:!0});var _mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),style=function(config,tint){var scope=arguments.length<=2||void 0===arguments[2]?"":arguments[2];return[_defineProperty({},scope+".pe-search",{"background-color":config["color_"+tint+"_background"]," .pe-textfield__label":{color:config["color_"+tint+"_label_text"]}})]},createStyles=function(config){return[style(config,"light"),{".pe-dark-theme":[style(config,"dark"," "),style(config,"dark","&")]}]};exports["default"]=function(config){return _mixin2["default"].createStyles(config,createStyles)},module.exports=exports["default"];
//# sourceMappingURL=color.js.map