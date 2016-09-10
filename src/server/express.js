"use strict";
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var compression = require('compression');
var index_1 = require('./route/index');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function () {
    var app = express();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    io.on('connection', function (socket) {
        console.log('one user login');
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
        socket.on('input', function (data) {
            console.log('input data:', data);
            socket.broadcast.emit('output', data);
        });
    });
    var staticPath = path.resolve(path.basename(__dirname), '..');
    console.info("\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668\u662F: " + staticPath);
    app.use(express.static(staticPath));
    app.use('user', index_1.EmployeeRoute);
    //跨域问题
    app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Credentials", true);
        res.header("X-Powered-By", ' 3.2.1');
        // res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
    //开发环境
    if (process.env.NODE_ENV === 'developement') {
        app.use(morgan('dev'));
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    }
    app.set('port', process.env.PORT || 3000);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    // app.use(express.static(__dirname + '/www'));
    return server;
};
//# sourceMappingURL=express.js.map