"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneDialogDialog=require("polythene/dialog/dialog");var _polytheneDialogDialog2=_interopRequireDefault(_polytheneDialogDialog);var _polytheneButtonButton=require("polythene/button/button");var _polytheneButtonButton2=_interopRequireDefault(_polytheneButtonButton);var _common=require("./common");var _common2=_interopRequireDefault(_common);var isEmptyValue=true;var formDialog={view:function view(){return _mithril2["default"].component(_polytheneDialogDialog2["default"],Object.assign({},_common2["default"].dialogProps,{title:"Select a file...",body:(0,_mithril2["default"])("input",{type:"file",id:"file",name:"file",onchange:function onchange(e){var fileInput=e.target;isEmptyValue=fileInput.value===undefined;_mithril2["default"].redraw()}}),formOptions:{name:"demo",type:"post",enctype:"multipart/form-data",onsubmit:function onsubmit(e){e.preventDefault();var form=e.target;alert("Posted: "+form.file.value);window.dialog.shouldHide=true;isEmptyValue=true;_mithril2["default"].redraw()}},footer:[_mithril2["default"].component(_polytheneButtonButton2["default"],{label:"Cancel",url:{href:"/dialog",config:_mithril2["default"].route},events:{onclick:function onclick(){window.dialog.shouldHide=true}}}),_mithril2["default"].component(_polytheneButtonButton2["default"],{url:{href:"/dialog",config:_mithril2["default"].route},disabled:isEmptyValue?true:false,label:"Post",tag:"button",type:"submit"})],didHide:function didHide(){if(window.dialog){window.dialog.shouldHide=false}window.dialog=null;isEmptyValue=true;_mithril2["default"].redraw()},transition:window.dialog&&window.dialog.transition===false?"out":"both"}))}};exports["default"]=formDialog;module.exports=exports["default"];