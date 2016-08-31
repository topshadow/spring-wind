/// <reference path="../typings/index.d.ts" />
import express from './express';
import mysql from './config/mysql.config';
var app = express();
app.set('port',process.env.PORT ||3000);


app.listen(app.get('port'),()=>{
  console.log(`server is listening on:${app.get('port')}`);
});