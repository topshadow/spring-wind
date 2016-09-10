"use strict";
var assert = require('assert');
var queue_1 = require('./queue');
describe('Queue', function () {
    it('Queue push test', function () {
        var queue = new queue_1.Queue();
        queue.enqueue('hello');
        assert.equal(1, queue.size());
    });
});
//# sourceMappingURL=queue.test.js.map