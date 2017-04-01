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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createStyles = function createStyles(config) {
    return [{
        '.pe-tabs': [_mixin2.default.vendorize({
            'user-select': 'none'
        }, _config2.default.prefixes_user_select), _mixin2.default.vendorize({
            transform: 'translate3d(0,0,0)'
        }, _config2.default.prefixes_transform), _defineProperty({
            '-webkit-overflow-scrolling': 'touch',

            '& ::-webkit-scrollbar': {
                'display': 'none'
            },

            '&.pe-tabs--menu': {
                // reset sizes to fit within a small space
                ' .pe-tabs__tab': {
                    height: config.menu_tab_height + 'px'
                },
                ' .pe-tabs__tab---icon': {
                    height: config.menu_tab_icon_label_height + 'px'
                },
                ' .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon': {
                    'min-width': 0,
                    height: config.menu_tab_icon_label_height + 'px',

                    ' .pe-button__content': {
                        padding: '0 ' + config.tab_menu_content_padding_v + 'px',
                        height: config.menu_tab_icon_label_height + 'px',

                        ' .pe-icon': {
                            'margin-bottom': 0
                        },
                        ' .pe-button__label': {
                            'font-size': '10px',
                            'line-height': '12px',
                            'text-transform': 'none'
                        }
                    }
                }
            },

            '&.pe-tabs--scrollable': {
                // hide scrollbar (this approach is required for Firefox)
                'max-height': config.tab_height + 'px',
                '-ms-overflow-style': 'none',

                ' .pe-tabs__scroll-button': {
                    // default hide, show with html.pe-no-touch
                    display: 'none'
                },

                ' .pe-tabs__row': {
                    'margin-bottom': -config.scrollbar_offset + 'px'
                }
            },

            ' .pe-no-touch &': {
                '&.pe-tabs--scrollable': {
                    'background-color': 'inherit'
                },

                ' .pe-tabs__scroll-button': {
                    position: 'absolute',
                    display: 'block',
                    top: 0,
                    'background-color': 'inherit',
                    'z-index': 3,

                    ' .pe-button__content': {
                        'border-radius': 0,
                        'background-color': 'inherit'
                    },
                    ' .pe-button__label': [_mixin2.default.vendorize({
                        'transition-property': 'opacity'
                    }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
                        'transition-duration': config.scroll_button_fade_duration + 's'
                    }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
                        'transition-timing-function': 'ease-out'
                    }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
                        'transition-delay': config.scroll_button_fade_delay + 's'
                    }, _config2.default.prefixes_transition), {
                        opacity: config.scroll_button_opacity
                    }]
                },
                '&.pe-tabs--start .pe-tabs__scroll-button--start': {
                    'pointer-events': 'none',
                    cursor: 'default',

                    ' .pe-button__label': {
                        opacity: 0
                    }
                },
                '&.pe-tabs--end .pe-tabs__scroll-button--end': {
                    'pointer-events': 'none',
                    cursor: 'default',

                    ' .pe-button__label': {
                        opacity: 0
                    }
                },

                ' .pe-tabs__scroll-button--start': {
                    left: 0
                },
                ' .pe-tabs__scroll-button--end': {
                    right: 0
                }
            },

            ' .pe-tabs__row': [_flex2.default.layoutHorizontal, _mixin2.default.vendorize({
                'user-select': 'none'
            }, _config2.default.prefixes_user_select), {
                position: 'relative',
                'white-space': 'nowrap',
                overflow: 'auto'
            }],

            ' .pe-tabs__row--centered': _flex2.default.layoutCenterJustified,

            ' .pe-tabs__scroll-button--offset': [_flex2.default.flex(), _flex2.default.flexIndex('none')],

            ' .pe-tabs__tab': [_flex2.default.flex(), _flex2.default.flexIndex('none'), _mixin2.default.vendorize({
                'user-select': 'none'
            }, _config2.default.prefixes_user_select), _mixin2.default.defaultTransition('color'), {
                margin: 0,
                'border-radius': 0,
                height: config.tab_height + 'px',
                padding: 0,
                color: 'inherit',
                'min-width': config.min_width + 'px', // for smaller screens, see also media query below
                // max-width: 264px, // set in theme js

                ' .pe-button__content': {
                    padding: '0 ' + config.tab_content_padding_v + 'px',
                    height: config.tab_height + 'px',
                    'line-height': _config2.default.line_height + 'em',

                    ' .pe-button__label, .pe-icon': {
                        'max-width': config.label_max_width + 'px', // or .pe-tabs width minus 56dp
                        'line-height': config.tab_label_line_height + 'px',
                        'max-height': 2 * config.tab_label_line_height + 'px',
                        overflow: 'hidden',
                        'white-space': 'normal'
                    },
                    ' .pe-button__label': [_mixin2.default.defaultTransition('opacity', config.animation_duration), {
                        margin: config.tab_label_vertical_offset + 'px 0 0 0',
                        padding: 0,
                        opacity: config.label_opacity
                    }],
                    ' .pe-icon': {
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    },
                    ' .pe-button__focus': {
                        display: 'none'
                    }
                },
                '&.pe-button--selected': {
                    ' .pe-button__content .pe-button__label': {
                        opacity: 1
                    }
                },
                '&.pe-tabs__tab---icon': {
                    '&, .pe-button__content': [{
                        height: config.tab_icon_label_height + 'px'
                    }, {
                        ' .pe-button__label, .pe-icon': {
                            margin: '0 auto'
                        }
                    }, {
                        ' .pe-icon': {
                            'margin-bottom': config.tab_icon_label_icon_spacing + 'px'
                        }
                    }]
                }
            }],

            ' .pe-tabs__tab-content': [_flex2.default.layoutCenterCenter, _flex2.default.layoutVertical, {
                height: 'inherit'
            }],

            '&.pe-tabs--autofit .pe-tabs__tab': [_flex2.default.flex(), {
                'max-width': 'none'
            }],

            '&.pe-tabs__active-selected': {
                ' .pe-tabs__tab.pe-button--selected': {
                    cursor: 'pointer',
                    'pointer-events': 'initial'
                }
            },

            ' .pe-tabs__indicator': [_mixin2.default.vendorize({
                'transform': 'translate3d(0,0,0)'
            }, _config2.default.prefixes_transform), _mixin2.default.vendorize({
                'transform-origin': 'left 50%'
            }, _config2.default.prefixes_transform), _mixin2.default.vendorize({
                'transition-property': 'all'
            }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
                'transition-timing-function': 'ease-out'
            }, _config2.default.prefixes_transition), {
                position: 'absolute',
                height: config.tab_indicator_height + 'px',
                bottom: 0,
                left: 0,
                'z-index': 3,
                width: '100%' // and transformed with js
                // background-color defined in implementation/theme css
            }],

            ' .pe-toolbar--tabs .pe-toolbar__bar &': [_mixin2.default.fit(), {
                width: 'auto',
                margin: 0,
                top: 'auto',

                ' .pe-tabs__row.pe-tabs__row--indent': {
                    margin: 0,
                    'padding-left': _config2.default.unit_indent + 'px',
                    overflow: 'auto'
                }
            }]

        }, '@media (min-width: ' + _config2.default.breakpoint_small_tablet_portrait + 'px)', {
            '&:not(.pe-tabs--small):not(.pe-tabs--menu) .pe-tabs__tab': {
                'min-width': config.medium_min_width + 'px'
            }
        })],

        // toolbar with tabs
        '.pe-toolbar--tabs .pe-toolbar__bar': {
            'background-color': 'inherit'
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map