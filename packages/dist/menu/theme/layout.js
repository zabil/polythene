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

var unifySize = function unifySize(config, size) {
    return size < config.min_size ? config.min_size : size;
};

var widthClass = function widthClass(config, size) {
    var sizeStr = size.toString().replace('.', '-');
    return 'pe-menu--width-' + sizeStr;
};

var widthStyle = function widthStyle(config, size) {
    var s = unifySize(config, size);
    return _defineProperty({}, '&.' + widthClass(config, s), {
        width: config.size_factor * s + 'px',
        'max-width': '100%'
    });
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-menu': [
        // transition-duration set in js
        _mixin2.default.vendorize({
            'transition-timing-function': 'ease-out'
        }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
            'transition-property': 'opacity'
        }, _config2.default.prefixes_transition), config.sizes.map(function (size) {
            return widthStyle(config, size);
        }), _defineProperty({
            'z-index': _config2.default.z_menu,
            opacity: 0,
            position: 'absolute',
            width: '100%',
            'min-width': _config2.default.grid_unit_menu * config.min_size + 'px',

            '&.pe-menu--width-auto': {
                width: 'auto'
            },

            '&.pe-menu--visible': {
                opacity: 1
            },

            '&.pe-menu--permanent': {
                position: 'relative',
                opacity: 1
            },

            ' .pe-menu__content': {
                width: '100%',
                'border-radius': config.border_radius + 'px'
            }

        }, '@media (max-width: ' + _config2.default.unit_screen_size_large + 'px)', {
            'max-width': config.max_size_small_screen * _config2.default.grid_unit_menu + 'px'
        })]

    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map