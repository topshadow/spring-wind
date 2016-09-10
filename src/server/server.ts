/// <reference path="../../typings/index.d.ts" />
import express from './express';
import mysql from './config/mysql.config'; 
// import  * as io  from 'socket.io';

var app = express();


app.listen(process.env.PORT||3000,()=>{
  console.log(`server is listening on:3000`);
}); 