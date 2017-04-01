'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config2.default.rgba;

exports.default = {
    padding: _config2.default.grid_unit_component,
    padding_compact: _config2.default.grid_unit_component / 2,
    border_width_stacked: 1,
    border_width_bordered: 1,

    color_light_border: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_border_light),
    color_dark_border: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_border_light)
};
//# sourceMappingURL=config.js.map