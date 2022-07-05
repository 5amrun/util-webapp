import mysql from 'mysql2';
import {mysqlParams} from './config.js'; 



export class Database{
    constructor(){
        this.init();
    }

    init = () => {
        this.connection = mysql.createConnection(mysqlParams);
    }

    connect = () => {
        try{
            this.connection.connect();
            logger.log('info', 'DB connected...');
        }catch (e){
            logger.log('error', 'Could not connect to db...');
            console.log(e);
        }
        
    }

    disconnect = () => {
        this.connection.end();
        logger.log('info', 'DB disconnected...');
    }


    query = () => {
        this.connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });
    }
    
    

}






