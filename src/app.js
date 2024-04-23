//servidor
const express = require('express');
const app=express();
app.set('port', 3000);

//json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//morgan
const morgan=require('morgan');
app.use(morgan('dev'));

//crear path para public
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser('secret-key'));

//passport + express-session
const passport= require('./config/passport')(app);

//config de vistas
app.set('views', path.join(__dirname, 'views'));
const hbs = require('./config/handlebars')(app); 
// const $ = require('jquery'); //Middleware: JQuery Aún no

//rutas
const rutas = require('./routes/index')(app);

//mysql
const mysql = require('mysql2');
const myConnection = require('express-myconnection');



//iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ' + app.get('port') + '.')
  });