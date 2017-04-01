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
    var inset_input_padding_v = (config.inset_height - config.line_height_input) / 2;
    var fullwidth_input_padding_v = (config.fullwidth_height - config.line_height_input) / 2;
    var fullwidth_input_indent = _config2.default.unit_indent - config.fullwidth_side_padding - _config2.default.grid_unit_icon_button;

    return [{
        '.pe-search': [_flex2.default.flex(), {
            position: 'relative', // necessary when a shadow is added

            ' .pe-textfield': [_flex2.default.flex(), {
                padding: 0,
                // prevent that neighboring icon button with ripple hides the cursor
                position: 'relative',
                'z-index': 1
            }],

            ' .pe-textfield__input-area': {
                padding: 0,

                '&:after': {
                    display: 'none'
                }
            },

            ' .pe-textfield__input, .pe-textfield__label': {
                'font-size': config.font_size_input + 'px',
                'line-height': config.line_height_input + 'px'
            },

            ' .pe-textfield__input': {
                // reset
                border: 'none'
            },

            ' .pe-textfield__label': {
                // reset
                top: 0,
                bottom: 0
            },

            ' .pe-search__content': _flex2.default.layoutHorizontal,

            ' .pe-search__content > *': _flex2.default.layoutVertical,

            ' .pe-button--icon': _flex2.default.selfCenter,

            '&.pe-search--inset': {
                'border-radius': config.inset_border_radius + 'px',
                padding: '0 ' + config.inset_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config.inset_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': inset_input_padding_v + 'px',
                    'padding-bottom': inset_input_padding_v + 'px',
                    'padding-left': config.inset_input_indent + 'px',
                    'padding-right': config.inset_input_right_padding + 'px'
                }
            },

            '&.pe-search--fullwidth': {
                'border-radius': config.fullwidth_border_radius + 'px',
                padding: '0 ' + config.fullwidth_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config.fullwidth_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': fullwidth_input_padding_v + 'px',
                    'padding-bottom': fullwidth_input_padding_v + 'px',
                    'padding-left': fullwidth_input_indent + 'px',
                    'padding-right': config.fullwidth_input_right_padding + 'px'
                }
            }
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map