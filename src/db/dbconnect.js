const mysql = require('mysql2');
const{ parametersdb }= require('./keys')
const pool = mysql.createPool(parametersdb).promise();

pool.getConnection((err, connection)=>{

    if(err){
        if(err.code== 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexión a a la base de datos se cerró.');
        }
        if(err.code=='ER_CON_COUNT_ERROR'){
            console.error('La base de datos tiene muchas conexiones.');
        }
        if(err.code=='ECONNREFUSED'){
            console.error('La conexión a la base de datos fue rechazada.');
        }        
    }
    if(connection) connection.release();

    console.log('¡Éxito! La base de datos se conectó.');

    return;
});

//Pasar de callbacks a promesas
const { promisify} = require('util'); 
promisify(pool.query);

module.exports=pool;