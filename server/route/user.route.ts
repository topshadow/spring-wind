import * as Express from 'express';
var mysql = require('promise-mysql');
import con  from '../config/mysql.config';

import db  from '../model/user.model';

var EmployeeRoute = Express.Router();
/**
 * try parse Int
 */

EmployeeRoute.all('/:action', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // console.log(req.params['action']);
    switch (req.params['action']) {
        case "employees":
            doAction.employees(req, res);
            break;
        case "employee":
            doAction.employee(req, res);
            break;
        default:
            doAction.error(req,res);

            break;
    }
});

var doAction = {
    employee: (req: Express.Request, res: Express.Response) => {

        var id = req.query.id;
        if (!id) {
            doAction.error(req,res,'id is not defined');
        } else {
            id=+id;
            console.log(id);
            db.getEmployeeById(id, (employee) => { res.json(employee); });
        }
    },
    employees: (req: Express.Request, res: Express.Response) => {
        db.getEmployees(employees => { res.json(employees) });
    },
    error(req:Express.Request,res:Express.Response,errorMsg?:any){
        res.json({
            issuccess:false,
            errorMsg:errorMsg?errorMsg:'not found right action '
        })
    }

}

export {EmployeeRoute};
