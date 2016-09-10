"use strict";
var stack_1 = require('./stack');
var assert = require('assert');
describe('Stack', function () {
    it("Stack push", function () {
        var stack = new stack_1.Stack();
        stack.push('string a');
        assert.equal(1, stack.size());
    });
    /**
     * 测试 利用stack 转换进制
     */
    it('Stack baseConvert', function () {
        //  var renStack = new Stack(),
        //  rem,
        //  baseString = '0123456789ABCDEF';
        //  while(decN)
    });
});
//# sourceMappingURL=stack.test.js.map