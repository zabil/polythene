'use strict';

var _styler = require('../../common/styler');

var _styler2 = _interopRequireDefault(_styler);

var _flexStyle = require('./flex-style');

var _flexStyle2 = _interopRequireDefault(_flexStyle);

var _commonStyle = require('./common-style');

var _commonStyle2 = _interopRequireDefault(_commonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styler2.default.add('pe-layout', _flexStyle2.default, _commonStyle2.default);
//# sourceMappingURL=theme.js.map