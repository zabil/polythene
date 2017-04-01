'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('../../../common/object.assign');

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    animation_duration: 1, // seconds

    color_light: _config2.default.rgba(_config2.default.color_light_foreground),
    color_dark: _config2.default.rgba(_config2.default.color_dark_foreground)
};
//# sourceMappingURL=config.js.map