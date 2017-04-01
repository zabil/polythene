'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var borderStyle = function borderStyle(config) {
    return _mixin2.default.hairline('border-bottom'), {
        'border-style': 'none none solid none',
        'border-width': config.border_width_bordered + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-list': {
            padding: config.padding + 'px 0',

            '&.pe-list--header': {
                'padding-top': 0
            },

            '&.pe-list--compact': {
                padding: config.padding_compact + 'px 0'
            },

            '& + &': [_mixin2.default.hairline('border-top'), {
                'border-style': 'solid none none none',
                'border-width': config.border_width_stacked + 'px'
            }],

            '&.pe-list--borders': {
                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        '&': borderStyle(config)
                    }
                }
            },

            '&.pe-list--borders-indented': {
                'border-top': 'none',

                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        ' .pe-list-tile__content:not(.pe-list-tile__content--front)': borderStyle(config)
                    }
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map