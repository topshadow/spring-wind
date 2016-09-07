"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://topshadow:shadow2016@ds023664.mlab.com:23664/topshadow', function (err, doc) {
    if (err) {
        throw err;
    }
    console.log(doc);
});
//# sourceMappingURL=mongo.config.js.map