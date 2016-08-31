import config from './web.config';
import * as express from 'express';
import * as bodyParser  from 'body-parser';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import * as compression from 'compression';
import {EmployeeRoute}  from './route/index';





export default  ()=> {
    let app = express();
  
   
   app.use(EmployeeRoute);
    
    

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
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    } 
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
 
    app.use(express.static(__dirname+'/www'));

    return app;
}

