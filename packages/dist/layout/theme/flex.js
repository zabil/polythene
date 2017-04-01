'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var layout = [{
    'display': '-webkit-box'
}, {
    'display': '-moz-box'
}, {
    'display': '-ms-flexbox',
    '-ms-flex-preferred-size': 'initial' // IE10
}, {
    'display': '-webkit-flex'
}, {
    'display': 'flex'
}];

var layoutInline = [layout, {
    'display': '-ms-inline-flexbox'
}, {
    'display': '-webkit-inline-flex'
}, {
    'display': 'inline-flex'
}];

var layoutHorizontal = [layout, {
    '-ms-flex-direction': 'row',
    '-webkit-flex-direction': 'row',
    'flex-direction': 'row'
}];

var layoutHorizontalReverse = [layout, {
    '-ms-flex-direction': 'row-reverse',
    '-webkit-flex-direction': 'row-reverse',
    'flex-direction': 'row-reverse'
}];

var layoutVertical = [layout, {
    '-ms-flex-direction': 'column',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column'
}];

var layoutVerticalReverse = [layout, {
    '-ms-flex-direction': 'column-reverse',
    '-webkit-flex-direction': 'column-reverse',
    'flex-direction': 'column-reverse'
}];

var layoutWrap = [layout, {
    '-ms-flex-wrap': 'wrap',
    '-webkit-flex-wrap': 'wrap',
    'flex-wrap': 'wrap'
}];

var layoutWrapReverse = [layout, {
    '-ms-flex-wrap': 'wrap-reverse',
    '-webkit-flex-wrap': 'wrap-reverse',
    'flex-wrap': 'wrap-reverse'
}];

var layoutStart = [layout, {
    '-ms-flex-align': 'start',
    '-webkit-align-items': 'flex-start',
    'align-items': 'flex-start'
}];

var layoutCenter = [layout, {
    '-ms-flex-align': 'center',
    '-webkit-align-items': 'center',
    'align-items': 'center'
}];

var layoutEnd = [layout, {
    '-ms-flex-align': 'end',
    '-webkit-align-items': 'flex-end',
    'align-items': 'flex-end'
}];

var layoutJustified = [layout, {
    '-ms-flex-line-pack': 'stretch', // IE10
    '-ms-flex-pack': 'justify',
    '-webkit-justify-content': 'space-between',
    'justify-content': 'space-between'
}];

var layoutStartJustified = [layout, {
    '-ms-flex-align': 'start', // IE10
    '-ms-flex-pack': 'start',
    '-webkit-justify-content': 'flex-start',
    'justify-content': 'flex-start'
}];

var layoutCenterJustified = [layout, {
    '-ms-flex-pack': 'center',
    '-webkit-justify-content': 'center',
    'justify-content': 'center'
}];

var layoutEndJustified = [layout, {
    '-ms-flex-pack': 'end',
    '-webkit-justify-content': 'flex-end',
    'justify-content': 'flex-end'
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
    '-ms-flex-pack': 'distribute',
    '-webkit-justify-content': 'space-around',
    'justify-content': 'space-around'
}];

var flex = function flex() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{
        '-webkit-box-flex': num
    }, {
        '-moz-box-flex': num
    }, {
        '-webkit-flex': num
    }, {
        '-ms-flex': num
    }, {
        'flex': num
    }, num === 1 ? {
        '-webkit-flex-basis': '0.000000001px'
    } : {}, num === 1 ? {
        'flex-basis': '0.000000001px'
    } : {}];
};

var flexAuto = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexAutoVertical = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexIndex = function flexIndex(index) {
    return {
        '-ms-flex': index,
        '-webkit-flex': index,
        'flex': index
    };
};

var flexGrow = function flexGrow(value) {
    return {
        '-webkit-flex-grow': value,
        'flex-grow': value
    };
};

var selfStart = {
    '-ms-flex-item-align': 'start', // IE10
    '-ms-align-self': 'flex-start',
    '-webkit-align-self': 'flex-start',
    'align-self': 'flex-start'
};

var selfCenter = {
    '-ms-flex-item-align': 'center', // IE10
    '-ms-align-self': 'center',
    '-webkit-align-self': 'center',
    'align-self': 'center'
};

var selfEnd = {
    '-ms-flex-item-align': 'end', // IE10
    '-ms-align-self': 'flex-end',
    '-webkit-align-self': 'flex-end',
    'align-self': 'flex-end'
};

var selfStretch = {
    '-ms-flex-item-align': 'stretch', // IE10
    '-ms-align-self': 'stretch',
    '-webkit-align-self': 'stretch',
    'align-self': 'stretch'
};

exports.default = {
    flex: flex,
    flexAuto: flexAuto,
    flexAutoVertical: flexAutoVertical,
    flexIndex: flexIndex,
    flexGrow: flexGrow,
    layout: layout,
    layoutAroundJustified: layoutAroundJustified,
    layoutCenter: layoutCenter,
    layoutCenterCenter: layoutCenterCenter,
    layoutCenterJustified: layoutCenterJustified,
    layoutEnd: layoutEnd,
    layoutEndJustified: layoutEndJustified,
    layoutHorizontal: layoutHorizontal,
    layoutHorizontalReverse: layoutHorizontalReverse,
    layoutInline: layoutInline,
    layoutJustified: layoutJustified,
    layoutStart: layoutStart,
    layoutStartJustified: layoutStartJustified,
    layoutVertical: layoutVertical,
    layoutVerticalReverse: layoutVerticalReverse,
    layoutWrap: layoutWrap,
    layoutWrapReverse: layoutWrapReverse,
    selfCenter: selfCenter,
    selfEnd: selfEnd,
    selfStart: selfStart,
    selfStretch: selfStretch
};
//# sourceMappingURL=flex.js.map