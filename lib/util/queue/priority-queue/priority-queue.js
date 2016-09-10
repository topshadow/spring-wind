"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var queue_1 = require('../queue');
var PriorityQueue = (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue() {
        _super.call(this);
        this.elements = [];
    }
    PriorityQueue.prototype.enqueue = function () {
    };
    return PriorityQueue;
}(queue_1.Queue));
exports.PriorityQueue = PriorityQueue;
var QueueElement = (function () {
    function QueueElement() {
    }
    return QueueElement;
}());
//# sourceMappingURL=priority-queue.js.map