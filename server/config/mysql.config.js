"use strict";
var mysql = require('mysql');
var web_config_1 = require('../web.config');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mysql.createConnection({
    host: web_config_1.default.mysql.host,
    user: web_config_1.default.mysql.user,
    password: web_config_1.default.mysql.password,
    database: web_config_1.default.mysql.database
});
//# sourceMappingURL=mysql.config.js.map