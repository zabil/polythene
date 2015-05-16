define(function(require) {
    'use strict';

    var NAME = 'List',
        m = require('mithril'),
        list = require('polythene/list/list'),
        button = require('polythene/button/button'),
        listTile = require('polythene/list-tile/list-tile'),
        nav = require('nav'),
        github = require('github'),
        app,
        titleBlock,
        exampleTiles,
        titleLineText,
        infoLineText,
        exampleList,
        sortableList,
        content;

    require('polythene/font-roboto/font-roboto');
    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    titleLineText = 'Two-line item';
    infoLineText = 'Secondary text';

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('.p-block-header', args.title),
                args.info ? m('p', args.info) : null,
                args.content
            ]);
        }
    };

    exampleTiles = [
        m.component(listTile, {
            title: titleLineText,
            info: infoLineText
        }),
        m.component(listTile, {
            title: titleLineText,
            info: infoLineText
        }),
        m.component(listTile, {
            title: titleLineText,
            info: infoLineText
        })
    ];

    exampleList = function(opts) {
        opts = opts || {};
        return m.component(list, {
            class: [opts.class ? opts.class : null, 'demo-list'].join(' '),
            mode: opts.mode,
            hoverable: opts.hoverable,
            header: {
                title: 'Subheader',
                indent: opts.indent
            },
            tiles: [
                m.component(listTile, {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    }
                })
            ]
        });
    };

    sortableList = {
        controller: function() {
            var mode, now, items, pastRange;

            mode = m.prop('name');
            now = new Date();
            pastRange = 1000 * 3600 * 24 * 31 * 6;

            items = [{
                name: 'John',
                date: new Date(now - Math.random() * pastRange)
            }, {
                name: 'Edward',
                date: new Date(now - Math.random() * pastRange)
            }, {
                name: 'Atilla',
                date: new Date(now - Math.random() * pastRange)
            }, {
                name: 'Bernd',
                date: new Date(now - Math.random() * pastRange)
            }, {
                name: 'George',
                date: new Date(now - Math.random() * pastRange)
            }, {
                name: 'Cedric',
                date: new Date(now - Math.random() * pastRange)
            }];

            return {
                mode: mode,
                items: items
            };
        },
        view: function(ctrl) {
            var sortList, sortByName, sortByDate, sortedList;

            sortByName = function(a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            };

            sortByDate = function(a, b) {
                if (a.date < b.date) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                return 0;
            };

            sortList = function() {
                return ctrl.mode() === 'name' ? sortByName : sortByDate;
            };

            sortedList = ctrl.items.sort(sortList());

            return m('.demo-list.sortable-list',
                m('.controls[layout][horizontal]', 
                    m.component(button, {
                        label: 'Sort by name',
                        selected: ctrl.mode() === 'name',
                        events: {
                            onclick: function() {
                                ctrl.mode('name');
                            }
                        }
                    }),
                    m.component(button, {
                        label: 'Sort by date',
                        selected: ctrl.mode() === 'date',
                        events: {
                            onclick: function() {
                                ctrl.mode('date');
                            }
                        }
                    })
                ),
                m.component(list, {
                    tiles: sortedList.map(function(item) {
                        return m.component(listTile, {
                            title: item.name,
                            info: item.date.toLocaleDateString()
                        });
                    }),
                    hoverable: true,
                    mode: 'bordered'
                })
            );
        }
    };

    content = m('.demo-content', [

        m.component(titleBlock, {
            title: 'No subheader',
            content: m.component(list, {
                class: 'demo-list',
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Hoverable (not on touch device)',
            content: m.component(list, {
                class: 'demo-list',
                tiles: exampleTiles,
                hoverable: true
            })
        }),

        m.component(titleBlock, {
            title: 'Subheader',
            content: m.component(list, {
                class: 'demo-list',
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Avatars',
            content: m('div', [
                exampleList(),
                exampleList()
            ])
        }),

        m.component(titleBlock, {
            title: 'Avatars dark theme',
            content: m('.dark-theme', [
                exampleList({hoverable: true}),
                exampleList({hoverable: true})
            ])
        }),

        m.component(titleBlock, {
            title: 'Bordered list items',
            content: m.component(list, {
                class: 'demo-list',
                mode: 'bordered',
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Bordered list items with avatars',
            content: m('div', [
                exampleList({
                    mode: 'bordered'
                }),
                exampleList({
                    mode: 'bordered'
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'Indented borders and subheaders',
            content: m('div', [
                exampleList({
                    mode: 'bordered-indent',
                    indent: true
                }),
                exampleList({
                    mode: 'bordered-indent',
                    indent: true
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'Sorting a list',
            content: sortableList
        })

    ]);

    app = {};
    app.view = function() {
        return [
            nav(NAME, content),
            github
        ];
    };

    m.mount(document.body, app);
});