"use strict";
var mysql_config_1 = require('../config/mysql.config');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    getEmployeeById: function (id, callback) {
        mysql_config_1.default.query("select * from employees where ID=" + id, function (err, rows) {
            if (err)
                throw err;
            callback(rows);
        });
    },
    getEmployees: function (callback) {
        mysql_config_1.default.query("select * from employees ", function (err, rows) {
            if (err)
                throw err;
            callback(rows);
        });
    }
};
//# sourceMappingURL=user.model.js.map