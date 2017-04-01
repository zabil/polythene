'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = require('../polythene/polythene');

var _polythene2 = _interopRequireDefault(_polythene);

var _transitionEvent = require('../common/transition-event');

var _transitionEvent2 = _interopRequireDefault(_transitionEvent);

require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitionEvent = (0, _transitionEvent2.default)();
var DEFAULT_START_OPACITY = 0.2;
var OPACITY_DECAY_VELOCITY = 0.35;

var CSS_CLASSES = {
    ripple: 'pe-ripple',
    waves: 'pe-ripple__waves',
    mask: 'pe-ripple__mask',
    constrained: 'pe-ripple--constrained',
    animated: 'pe-ripple__waves--animated'
};

var makeRipple = function makeRipple(e, ctrl) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var el = ctrl.ripple();
    var wavesEl = ctrl.waves();
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var rect = el.getBoundingClientRect();
    var x = _polythene2.default.isTouch && e.touches ? e.touches[0].pageX : e.clientX;
    var y = _polythene2.default.isTouch && e.touches ? e.touches[0].pageY : e.clientY;
    var mx = opts.center ? rect.left + rect.width / 2 : x;
    var my = opts.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var initialOpacity = opts.initialOpacity !== undefined ? opts.initialOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = opts.opacityDecayVelocity !== undefined ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var duration = 1 / opacityDecayVelocity * initialOpacity;
    var color = window.getComputedStyle(el).color;
    var onEnd = function onEnd(evt) {
        wavesEl.classList.remove(CSS_CLASSES.animated);
        wavesEl.removeEventListener(transitionEvent, onEnd, false);
        if (opts.end) {
            opts.end(evt);
        }
    };

    wavesEl.classList.remove(CSS_CLASSES.animated);
    var style = wavesEl.style;
    style.width = style.height = waveRadius + 'px';
    style.top = ry + 'px';
    style.left = rx + 'px';
    style['animation-duration'] = style['-webkit-animation-duration'] = style['-moz-animation-duration'] = style['-o-animation-duration'] = duration + 's';
    style.backgroundColor = color;
    style.opacity = initialOpacity;
    wavesEl.addEventListener(transitionEvent, onEnd, false);

    if (opts.start) {
        opts.start(e);
    }
    wavesEl.classList.add(CSS_CLASSES.animated);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (opts.disabled) {
        return (0, _mithril2.default)('');
    }
    var initRipple = function initRipple(el, inited, context) {
        if (inited) {
            return;
        }
        ctrl.ripple(el);
        var parent = el.parentElement;
        if (!opts.inactive) {
            var onClick = function onClick(e) {
                makeRipple(e, ctrl, opts);
            };
            var endType = _polythene2.default.isTouch ? 'click' : 'mouseup';
            parent.addEventListener(endType, onClick, false);
            context.onunload = function () {
                parent.removeEventListener(endType, onClick, false);
            };
        }
    };
    var initWaves = function initWaves(waves, inited) {
        if (inited) {
            return;
        }
        ctrl.waves(waves);
    };
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.ripple, opts.constrained !== false ? CSS_CLASSES.constrained : null, opts.class].join(' '),
        id: opts.id || '',
        config: initRipple
    };
    var content = (0, _mithril2.default)('div', {
        class: CSS_CLASSES.mask
    }, (0, _mithril2.default)('div', {
        class: CSS_CLASSES.waves,
        config: initWaves
    }));
    return (0, _mithril2.default)(tag, props, content);
};

var component = {
    controller: function controller() {
        return {
            ripple: _mithril2.default.prop(),
            waves: _mithril2.default.prop(),
            delegate: _mithril2.default.prop()
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=ripple.js.map