import {Queue} from '../queue';
export class PriorityQueue<T> {
    private items: QueueElement<T>[] = new Array<QueueElement<T>>();

    enqueue(element: T, priority: number): void {
        var queueElement = new QueueElement<T>(element, priority)
        if (this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    //最小优先队列,顺序是从小到大排列,最小的先出列
                    this.items.splice(i,0,queueElement);
                    added=true;
                    break;

                }
            }
            //如果没有添加,则证明是最大的优先值,附加到队列尾部
            if(!added){
                this.items.push();
            }
        }
    }

    isEmpty() {
        return this.items.length == 0;
    }

    dequeue(){
        this.items.unshift();
    }

}

class QueueElement<T>{
    element: T;
    priority: number;

    constructor(element: T, priority: number) {
        this.element = element;
        this.priority = priority;
    }
}