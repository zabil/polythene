'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config2.default.rgba;
var lightForeground = _config2.default.color_light_foreground;
var darkForeground = _config2.default.color_dark_foreground;
var activeColor = _config2.default.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'

var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 2 / 3;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

exports.default = {
    height: height,
    side_spacing: side_spacing,
    horizontal_layout_side_spacing: horizontal_layout_side_spacing,
    thumb_size: thumb_size,
    thumb_touch_size: thumb_touch_size,
    track_height: height,
    bar_height: 2,
    thumb_border_width: thumb_border_width,
    active_thumb_scale: active_thumb_scale,
    animation_duration: _config2.default.animation_duration,
    disabled_thumb_scale: disabled_thumb_scale,
    active_pin_thumb_scale: active_pin_thumb_scale,

    step_width: 2,
    pin_height: 32,
    pin_width: 26,
    pin_font_size: 10,

    color_light_track_active: rgba(lightForeground, .38),
    color_light_track_inactive: rgba(lightForeground, .26),
    color_light_track_value: rgba(activeColor),
    color_light_thumb_off: rgba(lightForeground, .26),
    color_light_thumb_off_focus: rgba(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: rgba(activeColor),
    color_light_thumb_on_focus_opacity: .11,
    color_light_tick: rgba(lightForeground, 1),
    color_light_icon: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_disabled_icon: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),
    color_light_label: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_disabled_label: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),

    color_dark_track_active: rgba(darkForeground, 0.3),
    color_dark_track_inactive: rgba(darkForeground, 0.2),
    color_dark_track_value: rgba(activeColor),
    color_dark_thumb_off: rgba(darkForeground, 0.2),
    color_dark_thumb_off_focus: rgba(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: rgba(activeColor),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_tick: rgba(darkForeground, 1),
    color_dark_icon: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_disabled_icon: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled),
    color_dark_label: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_disabled_label: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled)
};
//# sourceMappingURL=config.js.map