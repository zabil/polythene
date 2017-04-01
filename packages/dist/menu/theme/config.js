'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
    min_size: 1.5,
    max_size_small_screen: 5,
    size_factor: _config2.default.grid_unit_menu,
    border_radius: _config2.default.unit_block_border_radius,

    color_light_background: _config2.default.rgba(_config2.default.color_light_background),
    color_dark_background: _config2.default.rgba(_config2.default.color_dark_background)
};
//# sourceMappingURL=config.js.map