import m from 'mithril';
import button from 'polythene/button/button';

export default {
    view: () => {
        return m('.layout.vertical',
            m('p', 'This is page two'),
            m.component(button, {
                raised: true,
                label: 'Go to page one',
                events: {
                    onclick: () => {
                        m.route('/dialog/multi-route/one');
                    }
                }
            })
        );
    }
};