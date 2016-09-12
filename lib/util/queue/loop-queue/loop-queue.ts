import {Queue} from '../queue';
export class LoopQueue <T> extends Queue<T>{
    constructor(){super()}
/**
 * 循环淘汰
 */
    hotPotato(num){
        var eliminated ;
        while(super.size()>1){
            for(var i=0;i<num;i++){
                super.enqueue(super.dequeue());

            }
            //本次轮回,淘汰的元素
            eliminated = super.dequeue();
        }
        return this.dequeue();
    }
}