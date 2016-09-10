import * as Express from 'express';

import con  from '../config/mysql.config';

import db  from '../model/user.model';

var EmployeeRoute = Express.Router();
/**
 * try parse Int
 */

interface User{

}

EmployeeRoute.all('/:action', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // console.log(req.params['action']);
    switch (req.params['action']) {
        case "sgin-up":
        doAction.signUp(req,res);
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
    },
    signUp(req:Express.Request,res:Express.Response){
        res.json({
            issuccess:true,
            data:{userid:req['body'].userid,passowrd:req['body'].password}
        })
    }

}

export {EmployeeRoute};
