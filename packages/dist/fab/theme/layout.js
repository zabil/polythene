'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyles = function createStyles(config) {
    return [{
        '.pe-button--fab': [_mixin2.default.vendorize({
            'user-select': 'none'
        }, _config2.default.prefixes_user_select), {
            display: 'inline-block',
            position: 'relative',
            outline: 'none',
            cursor: 'pointer',
            width: config.size_regular + 'px',
            height: config.size_regular + 'px',
            padding: config.padding_regular + 'px',
            'border-radius': '50%',
            border: 'none',

            '&.pe-button--fab-mini': {
                width: config.size_mini + 'px',
                height: config.size_mini + 'px',
                padding: (config.size_mini - _config2.default.unit_icon_size) / 2 + 'px'
            },

            ' .pe-button__content': {
                padding: 0,
                'border-radius': 'inherit'
            },

            ' .pe-ripple': {
                'border-radius': 'inherit'
            },

            ' .pe-button__wash': [_mixin2.default.vendorize({
                transition: 'background-color ' + _config2.default.animation_duration + ' ease-in-out'
            }, _config2.default.prefixes_transition), {
                'border-radius': 'inherit',
                'pointer-events': 'none',
                'background-color': 'transparent'
            }]
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map