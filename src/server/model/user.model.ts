import * as con from 'mysql';
import conn from '../config/mysql.config';

interface Employee {
    ID: number;
    name: string;
    age: number;
}


export default {
    getEmployeeById: (id: number, callback: (employee: Employee) => void) => {
        conn.query(`select * from employees where ID=${id}`, (err, rows) => {
            if (err) throw err;
            callback(rows);
        });
    },
    getEmployees: (callback: (employee: Employee[]) => void) => {
        conn.query(`select * from employees `, (err, rows) => {
            if (err) throw err;
            callback(rows);
        })
    }
}