import * as assert from 'assert';
import {Queue} from './queue';

describe('Queue',()=>{
    it('Queue push test',()=>{
           var queue = new Queue<String>();
        //    queue.enqueue('hello');
           assert.equal(1,queue.size());
    })
}) 