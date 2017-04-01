'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = require('../../../layout/theme/flex');

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyles = function createStyles(config) {
    return [{
        '.pe-notification__holder': [_mixin2.default.fit(), _flex2.default.layoutCenterCenter, {
            'z-index': _config2.default.z_notification
        }],
        '.pe-notification': [_flex2.default.layoutCenter, {
            position: 'relative',

            padding: '0 ' + config.side_padding + 'px',
            margin: '0 auto',
            'border-radius': config.border_radius + 'px',

            ' .pe-notification__content': {
                width: '100%'
            },

            ' .pe-notification__title': {
                'padding': config.title_single_padding_v + 'px ' + config.title_padding_h + 'px',
                'font-size': config.font_size + 'px',
                'line-height': config.line_height + 'px'
            },

            ' .pe-notification__action': {
                ' .pe-button': {
                    margin: 0
                }
            },

            '&.pe-notification--horizontal': {
                ' .pe-notification__content': _flex2.default.layoutHorizontal,
                ' .pe-notification__title': _flex2.default.flex(),
                ' .pe-notification__title--multi-line': {
                    'padding-top': config.title_multi_padding_v + 'px',
                    'padding-bottom': config.title_multi_padding_v + 'px'
                },
                ' .pe-notification__action': _flex2.default.layoutCenter
            },
            '&.pe-notification--vertical': {
                ' .pe-notification__content': _flex2.default.layoutVertical,
                ' .pe-notification__title': {
                    'padding-bottom': '4px'
                },
                ' .pe-notification__title--multi-line': {
                    'padding-top': config.title_multi_padding_v + 'px'
                },
                ' .pe-notification__action': _flex2.default.layoutEndJustified
            }
        }],
        '.pe-notification--notification': {
            width: config.width + 'px',
            'min-height': config.minHeight + 'px'
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map