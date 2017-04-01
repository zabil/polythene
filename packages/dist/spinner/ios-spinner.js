'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

require('./theme/ios/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-spinner--ios'
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blades = [];
        for (var i = 0; i < 12; i = i + 1) {
            blades.push((0, _mithril2.default)('div'));
        }
        opts.content = blades;
        opts.class = [CSS_CLASSES.block, opts.class].join(' ');
        return (0, _mithril2.default)(_spinner2.default, opts);
    }
};

exports.default = component;
//# sourceMappingURL=ios-spinner.js.map