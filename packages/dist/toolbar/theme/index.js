'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _custom = require('../../config/custom');

var _custom2 = _interopRequireDefault(_custom);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _color = require('./color');

var _color2 = _interopRequireDefault(_color);

var _styler = require('../../common/styler');

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customConfigFn = _custom2.default.toolbar;


var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-toolbar', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map