'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shadowDirective = function shadowDirective(dir) {
    return _mixin2.default.vendorize({
        'box-shadow': dir
    }, _config2.default.prefixes_box_shadow);
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-shadow': [_mixin2.default.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none',

            ' .pe-shadow__bottom, .pe-shadow__top': [_mixin2.default.fit(), {
                'border-radius': 'inherit'
            }],

            '&.pe-shadow--animated': {
                ' .pe-shadow__bottom, .pe-shadow__top': _mixin2.default.vendorize({
                    'transition': config.transition
                }, _config2.default.prefixes_transition)
            }
        }, [1, 2, 3, 4, 5].map(function (index) {
            var _ref;

            return _ref = {}, _defineProperty(_ref, ' .pe-shadow__top.pe-shadow--z-' + index, shadowDirective(config['shadow-top-z-' + index])), _defineProperty(_ref, ' .pe-shadow__bottom.pe-shadow--z-' + index, shadowDirective(config['shadow-bottom-z-' + index])), _ref;
        })]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map