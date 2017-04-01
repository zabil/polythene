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

var paddingH = function paddingH(h) {
    return {
        'padding-left': h + 'px',
        'padding-right': h + 'px'
    };
};

var paddingV = function paddingV(top, bottom) {
    return {
        'padding-top': top + 'px',
        'padding-bottom': (bottom || top) + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-list-tile': [_flex2.default.layout, {
            position: 'relative',
            overflow: 'hidden',

            '&.pe-list-tile--sticky': [_mixin2.default.sticky(2)],

            ' .pe-list-tile__primary, .pe-list-tile__secondary': [_flex2.default.layoutHorizontal, {
                ' a&': {
                    'text-decoration': 'none',
                    color: 'inherit',
                    border: 'none'
                }
            }],

            ' .pe-list-tile__primary': [_flex2.default.flex(), {
                position: 'relative',
                'z-index': 1, // in case a ripple is used (positioned absolute)

                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': [_flex2.default.flex(), paddingV(config.padding, config.padding + 1)]
            }],

            ' .pe-list-tile__secondary': {
                'text-align': 'right',
                'font-size': config.font_size_title + 'px',
                position: 'relative',
                'z-index': 1 },

            ' .pe-list-tile__content': [_flex2.default.layoutVertical, _flex2.default.selfCenter, paddingH(config.side_padding), {
                '&.pe-list-tile__content--front': [paddingV(config.padding - 5), {
                    width: config.front_item_width + 'px'
                }],

                ' small': {
                    'font-size': config.font_size_small + 'px'
                }
            }],

            ' .pe-list-tile__content--front + .pe-list-tile__content': {
                'padding-left': 0
            },

            ' .pe-list-tile__title': [_mixin2.default.ellipsis(1), {
                'font-size': config.font_size_title + 'px',
                'font-weight': _config2.default.font_weight_normal,
                'line-height': config.single_line_height + 'px'
            }],

            ' .pe-list-tile__subtitle': [_mixin2.default.ellipsis(config.subtitle_line_count, config.line_height_subtitle), {
                'font-size': config.font_size_subtitle + 'px',
                'line-height': config.line_height_subtitle + 'px',

                '&.pe-list-tile__subtitle--high': [_mixin2.default.ellipsis(config.high_subtitle_line_count, config.line_height_subtitle), {
                    'white-space': 'normal'
                }]
            }],

            '&.pe-list-tile--selected, &.pe-list-tile--disabled': {
                cursor: 'default'
            },

            '&.pe-list-tile--subtitle': {
                ' .pe-list-tile__content': [paddingV(config.has_subtitle_padding, config.has_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            '&.pe-list-tile--high-subtitle': {
                ' .pe-list-tile--high-subtitle .pe-list-tile__secondary': [_flex2.default.layoutHorizontal, _flex2.default.layoutStart],
                ' .pe-list-tile__content': [_flex2.default.selfStart, paddingV(config.has_high_subtitle_padding, config.has_high_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            // List header
            '&.pe-list__header': {
                height: config.single_height + 'px',

                ' .pe-list-tile__content': {
                    'padding-top': 0,
                    'padding-bottom': 0
                },
                ' .pe-list-tile__title': [_mixin2.default.ellipsis(1, config.single_height), {
                    'font-size': config.font_size_list_header + 'px',
                    'font-weight': _config2.default.font_weight_medium,
                    'line-height': config.single_height + 'px',
                    padding: 0
                }]
            },

            // Compact list

            ' .pe-list--compact &, &.pe-list-tile--compact': {
                '&:not(.pe-list__header)': {
                    ' .pe-list-tile__content': paddingV(config.compact_padding, config.compact_padding + 1)
                }
            },

            // Firefox only
            '@supports (-moz-appearance:none) and (display:contents)': {
                ' .pe-list-tile__primary, .pe-list-tile__content': {
                    overflow: 'hidden'
                }
            },

            // Menu

            '.pe-dialog .pe-menu__content &': {
                ' .pe-list-tile__title': _mixin2.default.ellipsis('none')
            },

            '.pe-menu__content &': {
                '&:not(.pe-list-tile--disabled)': {
                    cursor: 'default',

                    '&, .pe-list-tile__primary, .pe-list-tile__secondary': {
                        ' .pe-list-tile__title, .pe-list-tile__subtitle': [_mixin2.default.vendorize({
                            'user-select': 'none'
                        }, _config2.default.prefixes_user_select)]
                    }
                }
            },

            // Non-touch

            'html.pe-no-touch .pe-list--hoverable &, \
                html.pe-no-touch .pe-list--selectable &, \
                html.pe-no-touch &.pe-list-tile--hoverable, \
                html.pe-no-touch &.pe-list-tile--selectable': {
                '&:not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover': {
                    cursor: 'pointer'
                }
            }
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map