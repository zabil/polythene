define([
    'polythene/polythene/polythene',
    'mithril'
], function(
    p,
    m
) {
    'use strict';

    var createView;

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        props = {
            class: ['', opts.class].join(' '),
            config: opts.config
        };

        content = [
            opts.content ? opts.content : null
        ];
        return m(tag, props, p.insertContent(content, opts));
    };

    return {
        controller: function() {
            return {
                view: m.prop()
            };
        },
        view: function(ctrl, opts) {
            opts = opts || {};
            var view = ctrl.view();
            if (!view || opts.refresh) {
                view = createView(ctrl, opts);
                ctrl.view(view);
            }
            return view;
        }
    };
});