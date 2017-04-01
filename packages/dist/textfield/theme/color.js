'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-textfield', {
        // border color
        color: config['color_' + tint + '_focus_border'], // override by specifying 'color'

        ' .pe-textfield__input-area': {
            color: 'inherit',

            '&:after': {
                'background-color': 'currentcolor'
            }
        },
        '&.pe-textfield--counter ': {
            ' .pe-textfield__input-area:after': {
                'background-color': config['color_' + tint + '_counter_ok_border']
            }
        },

        ' .pe-textfield__input': {
            color: config['color_' + tint + '_input_text'],
            'border-color': config['color_' + tint + '_input_bottom_border']
        },

        ' .pe-textfield__label': {
            color: config['color_' + tint + '_label_text']
        },

        '&.pe-textfield--disabled, &.pe-textfield--readonly': {
            ' .pe-textfield__input-area:after': {
                'background-color': 'transparent',
                'background-image': 'linear-gradient(to right, ' + config['color_' + tint + '_disabled_label_text'] + ' 20%, rgba(255, 255, 255, 0) 0%)'
            }
        },

        '&.pe-textfield--disabled': {
            ' .pe-textfield__input, .pe-textfield__label': {
                color: config['color_' + tint + '_disabled_label_text']
            }
        },

        '&.pe-textfield--readonly': {
            ' .pe-textfield__input, .pe-textfield__label': {
                color: config['color_' + tint + '_readonly_label_text']
            }
        },

        '&.pe-textfield--focused': {
            // note: not when textfield--dirty and not textfield--focused
            '&.pe-textfield--floating-label .pe-textfield__label': {
                color: config['color_' + tint + '_highlight_text']
            },

            '&.pe-textfield--required.pe-textfield--floating-label': {
                ' .pe-textfield__label:after': {
                    color: config['color_' + tint + '_required_symbol']
                }
            }
        },

        ' .pe-textfield__help, .pe-textfield__counter': {
            color: config['color_' + tint + '_help_text']
        },

        '&.pe-textfield--invalid:not(.pe-textfield--hide-validation)': {
            ' .pe-textfield__input': {
                'border-color': config['color_' + tint + '_input_error_border'],
                'box-shadow': 'none'
            },
            ' .pe-textfield__label': {
                color: config['color_' + tint + '_input_error_text']
            },
            ' .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help': {
                color: config['color_' + tint + '_input_error_text']
            },
            '&.pe-textfield--required .pe-textfield__label': {
                color: config['color_' + tint + '_input_error_text']
            },
            '&, &.pe-textfield--counter': {
                ' .pe-textfield__input-area:after': {
                    'background-color': config['color_' + tint + '_input_error_border']
                }
            }
        },

        ' .pe-textfield__input:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0px 1000px ' + config['color_' + tint + '_input_background'] + ' inset',
            color: config['color_' + tint + '_input_text'] + ' !important'
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', ' '),
        // has dark theme
        style(config, 'dark', '&')]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map