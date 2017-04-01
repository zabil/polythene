'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config2.default.rgba;

exports.default = {
    border_radius: _config2.default.unit_block_border_radius,
    padding: 3 * _config2.default.grid_unit_component,
    header_bottom: 20,
    header_height: 60,
    footer_height: 52,

    color_light_content_background: rgba(_config2.default.color_light_background),
    color_light_title_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_body_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_regular),
    color_light_body_border: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_border_light),
    color_light_backdrop_background: 'rgba(0, 0, 0, .4)',

    color_dark_content_background: rgba(_config2.default.color_dark_background),
    color_dark_title_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_body_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_regular),
    color_dark_body_border: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_border_light),
    color_dark_backdrop_background: 'rgba(0, 0, 0, .5)'
};
//# sourceMappingURL=config.js.map