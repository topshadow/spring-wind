/// <reference path="../../../typings/index.d.ts" />
export class Queue<T> {
    private items:T[];

    constructor(){
        this.items=[];
    }

    enqueue(element){
            this.items.push(element);
    }

    dequeue():T{
        return this.items.shift();
    }

    front():T{
        return this.items[0];
    }

    isEmpty():boolean{
        return this.items.length == 0;
    }

    clear(){
        this.items=[];
    }
    size():number{
        return this.items.length;
    }

    toString():string{
        return this.items.toString();
    }
    
}