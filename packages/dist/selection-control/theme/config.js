'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activeColor = _config2.default.color_primary; // or override in CSS by setting 'color' property on '.pe-checkbox' / '.pe-radio-button'
var rgba = _config2.default.rgba;
var label_padding = (_config2.default.grid_unit_icon_button - _config2.default.unit_icon_size) / 2; // 12

exports.default = {
    label_font_size: 2 * _config2.default.grid_unit_component, // 16
    label_height: 3 * _config2.default.grid_unit_component, // 24
    padding: Math.floor(1.7 * _config2.default.grid_unit_component),
    label_padding: label_padding,
    button_size: 6 * _config2.default.grid_unit_component,
    icon_size: 3 * _config2.default.grid_unit_component,
    animation_duration: _config2.default.animation_duration,

    color_light_on_text: _config2.default.rgba(activeColor),
    color_light_off_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_off_icon: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_label_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_disabled_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,

    color_light_focus_on: rgba(_config2.default.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: rgba(_config2.default.color_light_foreground),
    color_light_focus_off_opacity: .07,

    color_dark_on_text: _config2.default.rgba(activeColor),
    color_dark_off_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_off_icon: '#fff',
    color_dark_label_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_disabled_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,

    color_dark_focus_on: rgba(_config2.default.color_primary), // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: rgba(_config2.default.color_dark_foreground),
    color_dark_focus_off_opacity: .09
};
//# sourceMappingURL=config.js.map