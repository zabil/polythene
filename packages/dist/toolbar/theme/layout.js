'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = require('../../layout/theme/flex');

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyles = function createStyles(config) {
    return [{
        '.pe-toolbar': [
        // use hardware-acceleration
        _mixin2.default.vendorize({
            transform: 'translate3d(0,0,0)'
        }, _config2.default.prefixes_transform), {
            display: 'block',
            position: 'relative',
            height: config.height_normal + 'px',
            'font-size': config.font_size + 'px',
            'line-height': config.line_height + 'em',
            'background-color': '#CFD8DC', // just a default color, will normally be overridden

            '&.pe-header--animated': _mixin2.default.defaultTransition('height', config.transition_duration, 'ease-in'),

            '&.pe-header--medium-tall': {
                height: config.height_medium_tall + 'px'
            },

            '&.pe-header--tall': {
                height: config.height_tall + 'px'
            },

            '&.pe-toolbar--narrow': {
                height: config.height_narrow + 'px',

                ' .pe-toolbar__bar': {
                    height: config.height_narrow + 'px',
                    padding: 0
                }
            },

            '&.pe-toolbar--narrow.pe-header--medium-tall': {
                height: config.height_narrow_medium_tall + 'px'
            },

            '&.pe-toolbar--narrow.pe-header--tall': {
                height: config.height_narrow_tall + 'px'
            },

            '&.pe-header--tall .pe-toolbar__bar--middle': _mixin2.default.vendorize({
                transform: 'translateY(100%)'
            }, _config2.default.prefixes_transform),

            ' .pe-toolbar__bar': [_flex2.default.layoutCenter, _flex2.default.layoutHorizontal, {
                '> *:not(.disabled)': {
                    // make elements (e.g. buttons) respond to mouse/touch events
                    'pointer-events': 'auto'
                }
            }, {
                '> :first-child': {
                    'margin-left': config.margin_side + 'px'
                }
            }, {
                '> :last-child': {
                    'margin-right': config.margin_side + 'px'
                }
            }, {
                ' .pe-button--icon + span, .pe-button--icon + .pe-title': {
                    'margin-left': config.indent - config.margin_side - _config2.default.grid_unit_icon_button + 'px'
                }
            }, {
                '> span, > .pe-title': [_mixin2.default.ellipsis(1, _config2.default.line_height, 'em'), _mixin2.default.vendorize({
                    'transform-origin': 'left 50%'
                }, _config2.default.prefixes_transform), {
                    'line-height': _config2.default.line_height + 'em',
                    'word-break': 'break-all'
                }]
            }, {
                '> span:first-child, .pe-toolbar__title--indent': [_mixin2.default.ellipsis(1, _config2.default.line_height, 'em'), {
                    'margin-left': config.indent + 'px'
                }]
            }, {
                width: '100%',
                position: 'absolute',
                height: config.height_normal + 'px',
                'pointer-events': 'none',

                ' .pe-fit': [_mixin2.default.fit(), {
                    width: 'auto',
                    margin: 0,

                    '.bottom': {
                        top: 'auto'
                    }
                }],
                ' .pe-header': _mixin2.default.ellipsis(1, _config2.default.line_height, 'em'),

                '&.pe-toolbar__bar--top': {
                    'z-index': 3
                },
                '&.pe-toolbar__bar--middle': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    'z-index': 2
                },
                '&.pe-toolbar__bar--bottom': {
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    left: 0,
                    'z-index': 1
                }
            }]
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map