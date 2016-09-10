/// <reference path="../../../typings/index.d.ts" />

export class Stack<T>{
    private items: T[];

    constructor() {
        this.items = [];
    }
    push(item: T) {
        this.items.push(item);
    }

    peek():T{
        return this.items[this.items.length - 1];
    }

    pop():T {
        return this.items.pop();
    }

    size():number {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    clear() {
        this.items = [];
    }

    toString() {
        this.items.toString;
    }

}