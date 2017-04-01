'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyles = function createStyles() {
    return [{
        '.pe-spinner-determinate': {
            position: 'relative',

            ' .pe-spinner-determinate__animation': [_mixin2.default.vendorize({
                'animation-duration': '1.5s'
            }, _config2.default.prefixes_animation), {
                position: 'absolute',
                width: '100%',
                height: '100%'
            }],

            ' .pe-spinner-determinate__circle': {
                position: 'absolute',
                'box-sizing': 'border-box',
                width: '100%',
                height: '100%',
                'border-style': 'solid',
                'border-radius': '50%'
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map