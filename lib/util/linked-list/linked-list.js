"use strict";
/// <reference path="../../../typings/index.d.ts" />
/**
 * 链表
 * 擅长插入，移动元素
 */
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
    }
    /**
     * 向队列尾部插入元素
     */
    LinkedList.prototype.append = function (element) {
        var node = new Node(element);
        if (this.head === null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    /**
     * @param {number} position 插入的位置
     * @param {T} element 插入的元素
     * @return {boolean} 插入操作是否成功
     */
    LinkedList.prototype.insert = function (position, element) {
        // 检查越界
        if (position >= 0 && position < this.length) {
            var node = new Node(element), current = this.head, previous, index = 0;
            if (position === 0) {
                node.next = current = this.head; //等价
                this.head = node;
            }
            else {
                /**
                 * 列表的迭代方式,链表默认只能从头部向尾部迭代,当前链表向前面移动一位
                 */
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
            }
            length++;
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @description 删除并返回指定元素
     */
    LinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    /**
     * @description  移除指定位置的元素
     * @param {number} position 删除元素的位置
     * @return {boolean} 是否删除成功
     */
    LinkedList.prototype.removeAt = function (position) {
        if (position >= 0 && position < this.length) {
            var current = this.head;
            var previous, index = 0;
            if (position === 0) {
                this.head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        }
        return null;
    };
    /**
     * @param {T} element 查找的元素
     * @description 查找元素在链表中的位置,若不存在则返回-1
     * @return 元素在数组中的位置
     */
    LinkedList.prototype.indexOf = function (element) {
        var index = 0, current, index = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return index;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    };
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.toString = function () {
        var current = this.head, str = "";
        while (current) {
            str += current.toString();
            current = current.next;
        }
        return str;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var Node = (function () {
    function Node(element) {
        this.element;
        this.next = null;
    }
    return Node;
}());
//# sourceMappingURL=linked-list.js.map