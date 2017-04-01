'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-toolbar',
    bar: 'pe-toolbar__bar',
    topBar: 'pe-toolbar__bar--top',
    middleBar: 'pe-toolbar__bar--middle',
    bottomBar: 'pe-toolbar__bar--bottom',
    animated: 'pe-header--animated',
    mediumTall: 'pe-header--medium-tall',
    tall: 'pe-header--tall'
};

var barWrapper = function barWrapper(className, content) {
    return (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.bar, className].join(' ')
    }, content);
};

var bar = function bar() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var bars = [];
    if (opts.content) {
        bars.push(barWrapper(CSS_CLASSES.topBar, opts.content));
    } else {
        if (opts.topBar) {
            bars.push(barWrapper(CSS_CLASSES.topBar, opts.topBar));
        }
        if (opts.middleBar) {
            bars.push(barWrapper(CSS_CLASSES.middleBar, opts.middleBar));
        }
        if (opts.bottomBar) {
            bars.push(barWrapper(CSS_CLASSES.bottomBar, opts.bottomBar));
        }
    }
    return bars;
};

var modeClasses = {
    'medium-tall': CSS_CLASSES.mediumTall,
    tall: CSS_CLASSES.tall
};

var classForMode = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return mode === 'standard' ? '' : modeClasses[mode];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.block, CSS_CLASSES.animated, classForMode(opts.mode), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = bar(opts);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=toolbar.js.map