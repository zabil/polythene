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
        '.pe-header-panel': {
            position: 'relative',
            overflow: 'hidden',
            height: '100%',

            '&.pe-header-panel--fit': _mixin2.default.fit(),

            ' .pe-header-panel__outer-container': [_mixin2.default.fit(), _flex2.default.layoutVertical],
            ' .pe-header-panel__main-container': [_flex2.default.flex(), {
                position: 'relative',
                'overflow-y': 'auto',
                'overflow-x': 'hidden',
                '-webkit-overflow-scrolling': 'touch'
            }],
            ' .pe-header-panel__header-container': {
                position: 'relative',

                ' .pe-toolbar': {
                    'z-index': 2
                },
                ' .pe-header-panel__drop-shadow': [_mixin2.default.vendorize({
                    transition: 'opacity 0.25s'
                }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
                    transform: 'translate3d(0,0,0)'
                }, _config2.default.prefixes_transform), _mixin2.default.vendorize({
                    'box-shadow': config.box_shadow
                }, _config2.default.prefixes_box_shadow), {
                    opacity: 0,
                    position: 'absolute',
                    top: 'auto',
                    left: 0,
                    right: 0,
                    height: config.box_shadow_height + 'px',
                    'z-index': 1
                }]
            },
            ' .pe-header-panel__outer-container.pe-header-panel--cascaded > .pe-header-panel__header-container > .pe-header-panel__drop-shadow': {
                'opacity': 1
            },
            '&:not(.pe-header-panel--fixed) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,

                ' .pe-header-panel__background-container': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                },
                ' .pe-toolbar__top-bar': {
                    'z-index': 1
                },
                ' .pe-toolbar__bottom-bar': {}
            },
            ':not(.pe-header-panel--fit):not(.pe-header-panel--fixed):not(.pe-header-panel--scroll) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': _config2.default.z_header_container
            },
            '.pe-header-panel--fit > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': _config2.default.z_fixed_header_container
            },
            ' .pe-header-panel__condensed-background': {
                opacity: 0
            },
            ' .pe-header-panel__header-background, .pe-header-panel__condensed-background': [_mixin2.default.vendorize({
                'background-size': 'cover'
            }, _config2.default.prefixes_background_size), {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            }],
            ' .pe-header-panel__media-dimmer': _mixin2.default.fit(),

            '&.pe-header-panel--standard': {
                ' .pe-header-panel__drop-shadow': {
                    opacity: 1
                }
            },
            '&.pe-header-panel--seamed': {
                ' .pe-header-panel__drop-shadow': {
                    display: 'none'
                }
            },
            '&.pe-header-panel--scroll': {
                ' .pe-header-panel__main-container': {
                    overflow: 'visible'
                },
                ' .pe-header-panel__outer-container': {
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    '-webkit-overflow-scrolling': 'touch'
                }
            },
            '&.pe-header-panel--cover': {
                ' .main-panel': {
                    position: 'static'
                },
                ' .pe-header-panel__main-container': _mixin2.default.fit(),
                ' .pe-header-panel__drop-shadow': {
                    position: 'static',
                    width: '100%'
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map