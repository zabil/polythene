'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _custom = require('../../config/custom');

var _custom2 = _interopRequireDefault(_custom);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _color = require('./color');

var _color2 = _interopRequireDefault(_color);

var _styler = require('polythene/common/styler');

var _styler2 = _interopRequireDefault(_styler);

var _chevronLeft = require('./chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('./chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customConfigFn = _custom2.default.tabs;


var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-tabs', (0, _layout2.default)(config), (0, _color2.default)(config));

// default icons
exports.default = {
    arrowBackward: {
        msvg: _chevronLeft2.default
    },
    arrowForward: {
        msvg: _chevronRight2.default
    }
};
//# sourceMappingURL=index.js.map