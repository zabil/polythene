"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneDialogDialog=require("polythene/dialog/dialog");var _polytheneDialogDialog2=_interopRequireDefault(_polytheneDialogDialog);var _common=require("./common");var _common2=_interopRequireDefault(_common);var darkDialog={view:function view(){return _mithril2["default"].component(_polytheneDialogDialog2["default"],Object.assign({},_common2["default"].dialogProps,{"class":"demo-dialog dark-theme",title:"Modal dialog dark theme",body:_mithril2["default"].trust(_common2["default"].template),modal:true,backdrop:true,transition:window.dialog&&window.dialog.transition===false?"out":"both"}))}};exports["default"]=darkDialog;module.exports=exports["default"];