'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Note the generic config


require('../../common/object.assign');

var _config = require('../../selection-control/theme/config');

var _config2 = _interopRequireDefault(_config);

var _config3 = require('../../icon-button/theme/config');

var _config4 = _interopRequireDefault(_config3);

var _config5 = require('polythene/config/config');

var _config6 = _interopRequireDefault(_config5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config6.default.rgba;
var hit_area_padding = (_config6.default.grid_unit_icon_button - _config6.default.unit_icon_size) / 2; // 12

var config = _extends({}, _config2.default, {
    track_height: 14,
    track_length: 36,
    thumb_size: 20,
    padding: 1 * _config6.default.grid_unit_component,
    icon_button_padding: _config4.default.padding,
    hit_area_padding: hit_area_padding,

    animation_duration: '.18s',

    color_light_thumb_on: rgba(_config6.default.color_primary),
    color_light_thumb_off: '#f1f1f1',
    color_light_thumb_disabled: '#bdbdbd',

    color_light_track_on: rgba(_config6.default.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: rgba(_config6.default.color_light_foreground, _config6.default.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: rgba(_config6.default.color_light_foreground, _config6.default.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // color_light_focus_on and so on taken from selectionControlConfig

    color_dark_thumb_on: rgba(_config6.default.color_primary), // or '#80cbc4'
    color_dark_thumb_off: '#bdbdbd',
    color_dark_thumb_disabled: '#555',

    color_dark_track_on: rgba(_config6.default.color_primary_faded, _config6.default.blend_dark_text_tertiary), // or '#5a7f7c'
    color_dark_track_on_opacity: .9,
    color_dark_track_off: '#717171',
    color_dark_track_off_opacity: .55,
    color_dark_track_disabled: '#717171',
    color_dark_track_disabled_opacity: .3

    // color_dark_focus_on and so on taken from selectionControlConfig
});

exports.default = config;
//# sourceMappingURL=config.js.map