"use strict";
var Express = require('express');
var user_model_1 = require('../model/user.model');
var EmployeeRoute = Express.Router();
exports.EmployeeRoute = EmployeeRoute;
/**
 * try parse Int
 */
EmployeeRoute.all('/:action', function (req, res, next) {
    // console.log(req.params['action']);
    switch (req.params['action']) {
        case "sgin-up":
            doAction.signUp(req, res);
        case "employees":
            doAction.employees(req, res);
            break;
        case "employee":
            doAction.employee(req, res);
            break;
        default:
            doAction.error(req, res);
            break;
    }
});
var doAction = {
    employee: function (req, res) {
        var id = req.query.id;
        if (!id) {
            doAction.error(req, res, 'id is not defined');
        }
        else {
            id = +id;
            console.log(id);
            user_model_1.default.getEmployeeById(id, function (employee) { res.json(employee); });
        }
    },
    employees: function (req, res) {
        user_model_1.default.getEmployees(function (employees) { res.json(employees); });
    },
    error: function (req, res, errorMsg) {
        res.json({
            issuccess: false,
            errorMsg: errorMsg ? errorMsg : 'not found right action '
        });
    },
    signUp: function (req, res) {
        res.json({
            issuccess: true,
            data: { userid: req.body.userid, passowrd: req.body.password }
        });
    }
};
//# sourceMappingURL=user.route.js.map