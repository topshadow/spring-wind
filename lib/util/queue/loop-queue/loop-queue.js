"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var queue_1 = require('../queue');
var LoopQueue = (function (_super) {
    __extends(LoopQueue, _super);
    function LoopQueue() {
        _super.call(this);
    }
    /**
     * 循环淘汰
     */
    LoopQueue.prototype.hotPotato = function (num) {
        var eliminated;
        while (_super.prototype.size.call(this) > 1) {
            for (var i = 0; i < num; i++) {
                _super.prototype.enqueue.call(this, _super.prototype.dequeue.call(this));
            }
            //本次轮回,淘汰的元素
            eliminated = _super.prototype.dequeue.call(this);
        }
        return this.dequeue();
    };
    return LoopQueue;
}(queue_1.Queue));
exports.LoopQueue = LoopQueue;
//# sourceMappingURL=loop-queue.js.map