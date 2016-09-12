"use strict";
var PriorityQueue = (function () {
    function PriorityQueue() {
        this.items = new Array();
    }
    PriorityQueue.prototype.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {
            this.items.push(queueElement);
        }
        else {
            var added = false;
            for (var i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    //最小优先队列,顺序是从小到大排列,最小的先出列
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            //如果没有添加,则证明是最大的优先值,附加到队列尾部
            if (!added) {
                this.items.push();
            }
        }
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    PriorityQueue.prototype.dequeue = function () {
        this.items.unshift();
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
var QueueElement = (function () {
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    return QueueElement;
}());
//# sourceMappingURL=priority-queue.js.map