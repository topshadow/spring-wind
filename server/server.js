"use strict";
/// <reference path="../typings/index.d.ts" />
var express_1 = require('./express');
var app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log("server is listening on:" + app.get('port'));
});
//# sourceMappingURL=server.js.map