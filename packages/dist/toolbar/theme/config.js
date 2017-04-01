'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var margin_side = 2 * _config2.default.grid_unit_component - 12; // (buttonSize - iconSize) / 2 = (48 - 24) / 2
var height_desktop = _config2.default.grid_unit_component * 8; // 64
var height_mobile_portrait = _config2.default.grid_unit_component * 7; // 56
var height_mobile_landscape = _config2.default.grid_unit_component * 6; // 48

exports.default = {
    margin_side: margin_side,
    indent: _config2.default.unit_indent,
    transition_duration: _config2.default.animation_duration,
    font_size: _config2.default.font_size_title,
    line_height: _config2.default.line_height,

    height_desktop: height_desktop,
    height_mobile_portrait: height_mobile_portrait,
    height_mobile_landscape: height_mobile_landscape,

    height_normal: height_desktop,
    height_medium_tall: 2 * height_desktop,
    height_tall: 3 * height_desktop,
    height_narrow: height_mobile_portrait,
    height_narrow_medium_tall: 112,
    height_narrow_tall: 168,

    color_light_text: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_dark_text: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary)
};
//# sourceMappingURL=config.js.map