import {Queue} from '../queue';
export class PriorityQueue<T> extends Queue<T>{
    private elements: QueueElement<T>[];

    constructor() {
        super();
        this.elements = [];
    }
    enqueue(){
    
    }



}

class QueueElement<T>{

}