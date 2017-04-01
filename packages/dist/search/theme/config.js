'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config2.default.rgba;

var insetSideMargin = 8;

var line_height_input = 20;
var font_size_input = 20;

var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_border_radius = _config2.default.unit_block_border_radius;

var fullwidth_side_margin = 0;
var fullwidth_height = 56;
var fullwidth_side_padding = insetSideMargin;
var fullwidth_input_right_padding = 0;
var fullwidth_border_radius = 0;

exports.default = {
    font_size_input: font_size_input,
    line_height_input: line_height_input,

    inset_height: inset_height,
    inset_input_indent: inset_input_indent,
    inset_input_right_padding: inset_input_right_padding,
    inset_border_radius: inset_border_radius,

    fullwidth_height: fullwidth_height,
    fullwidth_side_margin: fullwidth_side_margin,
    fullwidth_side_padding: fullwidth_side_padding,
    fullwidth_input_right_padding: fullwidth_input_right_padding,
    fullwidth_border_radius: fullwidth_border_radius,

    color_light_label_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),
    color_light_background: rgba(_config2.default.color_light_background),

    color_dark_label_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled),
    color_dark_background: rgba(_config2.default.color_dark_background)
};
//# sourceMappingURL=config.js.map