'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgba = _config2.default.rgba;

exports.default = {
    size_small: 24,
    size_regular: 32,
    size_medium: 40,
    size_large: 48,
    size_fab: 56,

    color_light_raised_background: rgba(_config2.default.color_light_background),
    // also use light background with dark theme
    color_dark_raised_background: rgba(_config2.default.color_light_background)
};
//# sourceMappingURL=config.js.map