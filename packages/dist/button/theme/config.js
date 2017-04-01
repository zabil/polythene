'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config2.default.rgba;

var touch_height = _config2.default.unit_touch_height;
var height = 36;

exports.default = {
    margin_h: _config2.default.grid_unit,
    border_radius: _config2.default.unit_item_border_radius,
    font_size: 14,
    font_weight: 500,
    outer_padding_v: (touch_height - height) / 2,
    padding_h: 2 * _config2.default.grid_unit,
    padding_v: 11,
    min_width: 8 * _config2.default.grid_unit_component,
    text_transform: 'uppercase',
    border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

    color_light_flat_normal_background: 'transparent',
    color_light_flat_normal_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_flat_hover_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),
    color_light_flat_focus_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),
    color_light_flat_active_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_active),
    color_light_flat_disabled_background: 'transparent',
    color_light_flat_disabled_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_light_flat_normal_border: 'transparent',
    // color_light_flat_hover_border: 'transparent',
    // color_light_flat_active_border: 'transparent',
    // color_light_flat_disabled_border: 'transparent',

    color_light_raised_normal_background: '#E0E0E0',
    color_light_raised_normal_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_raised_hover_background: 'transparent',
    color_light_raised_focus_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),
    color_light_raised_active_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover), // same as hover
    color_light_raised_disabled_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_disabled),
    color_light_raised_disabled_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),

    color_dark_flat_normal_background: 'transparent',
    color_dark_flat_normal_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_flat_hover_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_hover),
    color_dark_flat_focus_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_hover),
    color_dark_flat_active_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_active),
    color_dark_flat_disabled_background: 'transparent',
    color_dark_flat_disabled_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_dark_flat_normal_border: 'transparent',
    // color_dark_flat_hover_border: 'transparent',
    // color_dark_flat_active_border: 'transparent',
    // color_dark_flat_disabled_border: 'transparent',

    color_dark_raised_normal_background: rgba(_config2.default.color_primary),
    color_dark_raised_normal_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_raised_hover_background: _config2.default.color_primary_active,
    color_dark_raised_focus_background: _config2.default.color_primary_active,
    color_dark_raised_active_background: _config2.default.color_primary_dark,
    color_dark_raised_disabled_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_disabled),
    color_dark_raised_disabled_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled)
};
//# sourceMappingURL=config.js.map