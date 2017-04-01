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

var tabletStyle = function tabletStyle(config) {
    return {
        'min-width': config.tablet_min_width + 'px',
        'max-width': config.tablet_max_width + 'px',
        'border-bottom-left-radius': 0,
        'border-bottom-right-radius': 0,
        'border-top-left-radius': _config2.default.unit_block_border_radius + 'px',
        'border-top-right-radius': _config2.default.unit_block_border_radius + 'px',

        '&.pe-notification--horizontal': {
            ' .pe-notification__title': {
                'padding-right': '30px'
            }
        }
    };
};

var createStyles = function createStyles(config) {
    return [_defineProperty({}, '@media (min-width: ' + _config2.default.breakpoint_small_handset_landscape + 'px)', {
        '.pe-notification--snackbar': tabletStyle(config)
    })];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map