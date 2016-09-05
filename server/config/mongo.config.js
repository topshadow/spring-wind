"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://123:123@ds023664.mlab.com:23664/topshadow', function (err, doc) {
    if (err) {
        throw err;
    }
    console.log('mongodb connect successfully',doc);
});
//# sourceMappingURL=mongo.config.js.map