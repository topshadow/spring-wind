import {Stack} from './stack';
import * as assert from 'assert';

describe('Stack',()=>{
    it("Stack push",()=>{
             var stack = new Stack<string>();
             stack.push('string a');
            assert.equal(1,stack.size());
    })

    /**
     * 测试 利用stack 转换进制
     */
    it('Stack baseConvert',()=>{
        //  var renStack = new Stack(),
        //  rem,
        //  baseString = '0123456789ABCDEF';
        //  while(decN)

    })
    
})