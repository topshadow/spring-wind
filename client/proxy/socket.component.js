"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require('../base');
var SocketComponent = (function (_super) {
    __extends(SocketComponent, _super);
    function SocketComponent() {
        _super.apply(this, arguments);
        this._socket_ = window['io']();
    }
    Object.defineProperty(SocketComponent.prototype, "socket", {
        get: function () {
            return this._socket_;
        },
        enumerable: true,
        configurable: true
    });
    return SocketComponent;
}(base_1.Base));
exports.SocketComponent = SocketComponent;
//# sourceMappingURL=socket.component.js.map