"use strict";
var Base = (function () {
    function Base() {
    }
    Object.defineProperty(Base.prototype, "history", {
        get: function () {
            return window['history'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "$", {
        get: function () {
            return window['$'];
        },
        enumerable: true,
        configurable: true
    });
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map