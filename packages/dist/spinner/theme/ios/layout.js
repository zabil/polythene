'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var kfFade = function kfFade() {
    return {
        ' 0%': {
            opacity: .640
        },
        ' 100%': {
            opacity: .035
        }
    };
};

var positionBlades = function positionBlades(config) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
        // reverse to improve performance on iOS
        var delay = -(1 / 12 * i * config.animation_duration);
        var rotation = 360 - 360 / 12 * i;

        return _defineProperty({}, ' div:nth-of-type(' + (i + 1) + ')', [_mixin2.default.vendorize({
            'transform': 'rotate(' + rotation + 'deg) translate3d(0,-142%,0)'
        }, _config2.default.prefixes_transform), _mixin2.default.vendorize({
            'animation': 'iosSpinnerFade ' + config.animation_duration + 's ' + delay + 's linear infinite'
        }, _config2.default.prefixes_animation)]);
    });
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-spinner--ios': [_mixin2.default.vendorize({ 'transform': 'translate3d(0,0,0)' }, _config2.default.prefixes_transform), positionBlades(config), {
            position: 'relative',

            ' > div': {
                position: 'absolute',
                width: '10%',
                height: '28%',
                left: '44.5%',
                top: '37%',
                opacity: 0,
                'border-radius': '50px'
            },

            '@keyframes iosSpinnerFade': kfFade()
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map