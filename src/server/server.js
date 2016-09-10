"use strict";
/// <reference path="../typings/index.d.ts" />
var express_1 = require('./express');
// import  * as io  from 'socket.io';
var app = express_1.default();
app.listen(process.env.PORT || 3000, function () {
    console.log("server is listening on:3000");
});
//# sourceMappingURL=server.js.map