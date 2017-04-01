"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var show = function show(ctrl, opts) {
    return {
        el: ctrl.containerEl,
        showDuration: opts.showDuration || .5,
        showDelay: opts.showDelay || 0,
        beforeShow: function beforeShow() {
            return ctrl.containerEl.style.opacity = 0;
        },
        show: function show() {
            return ctrl.containerEl.style.opacity = 1;
        }
    };
};

var hide = function hide(ctrl, opts) {
    return {
        el: ctrl.containerEl,
        hideDuration: opts.hideDuration || .5,
        hideDelay: opts.hideDelay || 0,
        hide: function hide() {
            return ctrl.containerEl.style.opacity = 0;
        }
    };
};

exports.default = {
    show: show,
    hide: hide
};
//# sourceMappingURL=transitions.js.map