'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config2.default.rgba;

exports.default = {
    size_regular: 7 * _config2.default.grid_unit_component,
    size_mini: 5 * _config2.default.grid_unit_component,
    padding_regular: 2 * _config2.default.grid_unit_component,

    color_light_background: rgba(_config2.default.color_primary),
    color_light_text: rgba(_config2.default.color_primary_foreground),

    color_dark_background: rgba(_config2.default.color_primary),
    color_dark_text: rgba(_config2.default.color_primary_foreground)
};
//# sourceMappingURL=config.js.map