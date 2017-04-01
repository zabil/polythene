'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _multiple = require('../common/multiple');

var _multiple2 = _interopRequireDefault(_multiple);

var _dialogInstance = require('./dialog-instance');

var _dialogInstance2 = _interopRequireDefault(_dialogInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _multiple2.default)({
    instance: _dialogInstance2.default,
    defaultId: 'default_dialog',
    tag: '.pe-dialog__holder',
    noneTag: 'span.pe-dialog__placeholder',
    bodyShowClass: 'pe-dialog--open'
});
//# sourceMappingURL=dialog.js.map