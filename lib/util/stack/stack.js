/// <reference path="../../../typings/index.d.ts" />
"use strict";
var Stack = (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    Stack.prototype.toString = function () {
        this.items.toString;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map