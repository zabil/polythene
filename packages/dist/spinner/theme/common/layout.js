'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = function sizes(size) {
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var sizesRaised = function sizesRaised(size) {
    var padding = size / 4;
    var paddedSize = size + padding * 2;
    return {
        width: paddedSize + 'px',
        height: paddedSize + 'px',
        padding: padding + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-spinner': [_mixin2.default.vendorize({
            'transition-timing-function': 'ease-out'
        }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
            'transition-property': 'opacity'
        }, _config2.default.prefixes_transition), {
            opacity: 0,

            '&.pe-spinner--visible, &.pe-spinner--permanent': {
                opacity: 1
            },

            '&.pe-spinner--small': sizes(config.size_small),
            '&.pe-spinner--regular': sizes(config.size_regular),
            '&.pe-spinner--medium': sizes(config.size_medium),
            '&.pe-spinner--large': sizes(config.size_large),
            '&.pe-spinner--fab': sizes(config.size_fab),

            '&.pe-spinner--raised': {
                position: 'relative',
                'border-radius': '50%',

                '&.pe-spinner--small': sizesRaised(config.size_small),
                '&.pe-spinner--regular': sizesRaised(config.size_regular),
                '&.pe-spinner--medium': sizesRaised(config.size_medium),
                '&.pe-spinner--large': sizesRaised(config.size_large),
                '&.pe-spinner--fab': sizesRaised(config.size_fab)
            }
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map