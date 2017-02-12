"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("polythene/config/config"),_config2=_interopRequireDefault(_config),_mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),_flex=require("polythene/layout/theme/flex"),_flex2=_interopRequireDefault(_flex),positionBorder=function(thumbSize,borderWidth){return{"border-width":borderWidth+"px",width:thumbSize-2*borderWidth+"px",height:thumbSize-2*borderWidth+"px",left:"2px",top:"2px"}},createStyles=function(config){var thumbSize=Math.max(config.thumb_size,2*config.thumb_border_width),scaledThumbDiff=(config.active_thumb_scale-1)*thumbSize/2,barOffset=thumbSize/2,scaledBorderWidth=Math.max(1,config.thumb_border_width/config.active_thumb_scale),thumbTouchSize=config.thumb_touch_size,stepsOffset=barOffset-1;return[{".pe-slider":[_mixin2["default"].vendorize({"user-select":"none"},_config2["default"].prefixes_user_select),{height:config.height+"px","margin-top":(config.height-config.track_height)/2+"px "," > .pe-icon":{height:config.height+"px"}," .pe-slider__track":[_flex2["default"].layoutHorizontal,_flex2["default"].flexGrow(1),_mixin2["default"].defaultTransition("transform",config.animation_duration),_mixin2["default"].vendorize({"user-select":"none"},_config2["default"].prefixes_user_select),{position:"relative",height:config.track_height+"px",margin:"0 "+config.side_spacing+"px",outline:0}]," div + .pe-slider__track":{margin:"0 "+config.horizontal_layout_side_spacing+"px"}," .pe-slider__control":[_flex2["default"].selfCenter,_mixin2["default"].defaultTransition("transform, background",config.animation_duration),_mixin2["default"].vendorize({"user-select":"none"},_config2["default"].prefixes_user_select),{width:thumbSize+"px",height:thumbSize+"px","line-height":0,"border-radius":"50%",outline:0,"z-index":1,position:"relative","&:before":[_mixin2["default"].defaultTransition("background-color",config.animation_duration),{content:'""',position:"absolute","border-radius":"50%",left:-thumbTouchSize/2+thumbSize/2+"px",top:-thumbTouchSize/2+thumbSize/2+"px",width:thumbTouchSize+"px",height:thumbTouchSize+"px"}],"&:after":[_mixin2["default"].defaultTransition("border",config.animation_duration),positionBorder(thumbSize,config.thumb_border_width),{content:'""',position:"absolute","border-radius":"50%","border-style":"solid"}]}]," .pe-slider__thumb":[_mixin2["default"].defaultTransition("opacity",config.animation_duration),_mixin2["default"].fit(),{"&, .pe-icon":{width:"inherit",height:"inherit"}}]," .pe-slider__label":{height:config.height+"px","line-height":config.height+"px","min-width":_config2["default"].unit_icon_size+"px","text-align":"center","font-size":"16px","font-weight":_config2["default"].font_weight_medium}," .pe-slider__track-part":[_flex2["default"].flex(),_mixin2["default"].vendorize({"user-select":"none"},_config2["default"].prefixes_user_select),{height:config.bar_height+"px",margin:(config.track_height-config.bar_height)/2+"px 0px",overflow:"hidden"}]," .pe-slider__track-value, .pe-slider__track-rest":_flex2["default"].layoutHorizontal," .pe-slider__track-bar":[_flex2["default"].flex(),{position:"relative",overflow:"hidden"}]," .pe-slider__track-bar-value":[_flex2["default"].flex(),_mixin2["default"].defaultTransition("transform, background-color",config.animation_duration),{height:config.bar_height+"px"}]," .pe-slider__track-value .pe-slider__track-bar":{"margin-left":barOffset+"px"}," .pe-slider__track-rest .pe-slider__track-bar":{"margin-right":barOffset+"px"}," .pe-slider__ticks":[_flex2["default"].layoutJustified,_mixin2["default"].vendorize({"user-select":"none"},_config2["default"].prefixes_user_select),{position:"absolute",width:"calc(100% - "+2*stepsOffset+"px)",height:config.bar_height+"px",left:0,top:config.height/2-1+"px",margin:"0 "+stepsOffset+"px","pointer-events":"none"}]," .pe-slider__ticks-tick":{width:config.step_width+"px",height:config.bar_height+"px"}," .pe-slider__pin":[_mixin2["default"].vendorize({transform:"translateZ(0) scale(0) translate(0, 0)"},_config2["default"].prefixes_transform),_mixin2["default"].vendorize({"transform-origin":"bottom"},_config2["default"].prefixes_transform),_mixin2["default"].defaultTransition("transform",".11s"),{position:"absolute","z-index":1,width:config.pin_width+"px",height:0,left:0,top:0,margin:"0 "+stepsOffset+"px 0 "+(stepsOffset-config.pin_width/2+1)+"px","pointer-events":"none","&::before":[_mixin2["default"].vendorize({transform:"rotate(-45deg)"},_config2["default"].prefixes_transform),{content:'" "',position:"absolute",top:0,left:0,width:config.pin_width+"px",height:config.pin_width+"px","border-radius":"50% 50% 50% 0","background-color":"inherit"}],"&::after":{content:"attr(value)",position:"absolute",top:0,left:0,width:config.pin_width+"px",height:config.pin_height+"px","text-align":"center",color:"#fff","font-size":config.pin_font_size+"px","line-height":config.pin_width+"px"}}],"&.pe-slider--active:not(.pe-slider--ticks)":{" .pe-slider__control":[_mixin2["default"].vendorize({transform:"scale("+config.active_thumb_scale+")"},_config2["default"].prefixes_transform),{"border-width":scaledBorderWidth+"px"}]," .pe-slider__track-value .pe-slider__track-bar-value":[_mixin2["default"].vendorize({transform:"translateX("+-scaledThumbDiff+"px)"},_config2["default"].prefixes_transform)]," .pe-slider__track-rest .pe-slider__track-bar-value":[_mixin2["default"].vendorize({transform:"translateX("+scaledThumbDiff+"px)"},_config2["default"].prefixes_transform)]},"&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus":{" .pe-slider__pin":[_mixin2["default"].vendorize({transform:"translateZ(0) scale(1) translate(0, -24px)"},_config2["default"].prefixes_transform)]," .pe-slider__control":[_mixin2["default"].vendorize({transform:"scale("+config.active_pin_thumb_scale+")"},_config2["default"].prefixes_transform)]},"&:not(.pe-slider--disabled)":{" .pe-slider__control":{cursor:"pointer"},"&.pe-slider--track":{" .pe-slider__track":{cursor:"pointer"}}},"&.pe-slider--disabled":{" .pe-slider__control":[_mixin2["default"].vendorize({transform:"scale("+config.disabled_thumb_scale+")"},_config2["default"].prefixes_transform),{"border-width":0}],"&.pe-slider--min":{" .pe-slider__control:after":[positionBorder(thumbSize,1/config.disabled_thumb_scale*config.thumb_border_width)]}}}]}]};exports["default"]=function(config){return _mixin2["default"].createStyles(config,createStyles)},module.exports=exports["default"];
//# sourceMappingURL=layout.js.map