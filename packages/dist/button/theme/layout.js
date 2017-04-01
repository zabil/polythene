'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyles = function createStyles(config) {
    return [{
        '.pe-button--text': {
            display: 'inline-block',
            'min-width': config.min_width + 'px',
            margin: '0 ' + config.margin_h + 'px',
            padding: config.outer_padding_v + 'px 0',
            background: 'transparent',
            border: 'none',

            ' .pe-button__content': {
                'border-width': 0,
                padding: '0 ' + config.padding_h + 'px',
                'border-radius': config.border_radius + 'px'
            },

            ' .pe-button__label': {
                padding: config.padding_v + 'px 0',
                'font-size': config.font_size + 'px',
                'line-height': config.font_size + 'px',
                'font-weight': config.font_weight,
                'text-transform': config.text_transform,
                'white-space': 'pre'
            },

            '&.pe-button--borders': {
                ' .pe-button__wash, pe-button__focus, .pe-ripple': _mixin2.default.fit(-1),

                ' .pe-button__content': {
                    'border-style': 'solid',
                    'border-width': '1px'
                },
                ' .pe-button__label': {
                    padding: config.padding_v - 1 + 'px 0'
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map