"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("polythene/tabs/theme/config"),_config2=_interopRequireDefault(_config),_custom=require("polythene/config/custom"),_custom2=_interopRequireDefault(_custom),_layout=require("polythene/tabs/theme/layout"),_layout2=_interopRequireDefault(_layout),_color=require("polythene/tabs/theme/color"),_color2=_interopRequireDefault(_color),_styler=require("polythene/common/styler"),_styler2=_interopRequireDefault(_styler),_chevronLeft=require("polythene/tabs/theme/chevron-left"),_chevronLeft2=_interopRequireDefault(_chevronLeft),_chevronRight=require("polythene/tabs/theme/chevron-right"),_chevronRight2=_interopRequireDefault(_chevronRight),customConfigFn=_custom2["default"].tabs,config=customConfigFn?customConfigFn(_config2["default"]):_config2["default"];_styler2["default"].add("pe-tabs",(0,_layout2["default"])(config),(0,_color2["default"])(config)),exports["default"]={arrowBackward:{msvg:_chevronLeft2["default"]},arrowForward:{msvg:_chevronRight2["default"]}},module.exports=exports["default"];
//# sourceMappingURL=theme.js.map