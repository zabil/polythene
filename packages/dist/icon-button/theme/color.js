'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty({}, scope + '.pe-button.pe-button--icon', {
        color: config['color_' + tint + '_' + type + '_normal_text'],
        background: 'none',

        ' .pe-button__wash': {
            opacity: config['color_' + tint + '_wash_opacity']
        },

        '&.pe-button--focus, &.pe-button--selected': {
            ' .pe-button__focus': {
                opacity: config['color_' + tint + '_focus_opacity'],
                'background-color': 'currentcolor'
            }
        },

        '&.pe-button--disabled': {
            color: config['color_' + tint + '_' + type + '_disabled_text']
        },

        '&.pe-button--raised': {
            'background-color': config['color_' + tint + '_background'],

            ' .pe-button__content': {
                background: 'transparent'
            }
        }
    })];
};

var noTouch = function noTouch(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty({}, scope + '.pe-button.pe-button--icon:hover', tint === 'light' ? {
        ' .pe-button__wash': {
            'background-color': 'currentcolor'
        }
    } : {
        ' .pe-button__wash': {
            'background-color': config['color_' + tint + '_' + type + '_normal_text']
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light', 'flat'), {
        'html.pe-no-touch': [noTouch(config, 'light', 'flat', ' ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', 'flat', ' '),
        // has dark theme
        style(config, 'dark', 'flat', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config, 'dark', 'flat', ' ')]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map