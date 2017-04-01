'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kfRipple = function kfRipple(config) {
    return {
        ' 100%': {
            transform: 'scale(' + config.end_scale + ')',
            'opacity': config.end_opacity
        }
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-ripple': [_mixin2.default.fit(), {
            color: 'inherit',
            'border-radius': 'inherit',

            '&.pe-ripple--constrained': {
                'border-radius': 'inherit',

                ' .pe-ripple__mask': {
                    overflow: 'hidden',
                    'border-radius': 'inherit'
                }
            },
            ' .pe-ripple__mask': [_mixin2.default.fit(), _mixin2.default.vendorize({
                'transform': 'translate3d(0,0,0)'
            }, _config2.default.prefixes_transform)],

            ' .pe-ripple__waves': [_mixin2.default.vendorize({
                'transform': 'scale(' + config.start_scale + ')'
            }, _config2.default.prefixes_transform), _mixin2.default.vendorize({
                'animation': 'ripple ' + _config2.default.animation_curve_default
            }, _config2.default.prefixes_animation),
            // default durations; finally set in js
            _mixin2.default.vendorize({
                'animation-duration': _config2.default.animation_duration
            }, _config2.default.prefixes_animation), {
                outline: '1px solid transparent', // for IE10
                position: 'absolute',
                'border-radius': '50%',
                opacity: config.start_opacity,
                'pointer-events': 'none',
                display: 'none'
            }],
            ' .pe-ripple__waves--animated': {
                display: 'block'
            }
        }],

        '@keyframes ripple': kfRipple(config)
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map