"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Arrays = (function (_super) {
    __extends(Arrays, _super);
    function Arrays() {
        _super.apply(this, arguments);
    }
    Arrays.prototype.remove = function () {
        console.log('more array remove');
    };
    return Arrays;
}(Array));
exports.Arrays = Arrays;
//# sourceMappingURL=arrays.js.map