import express from 'express';
import 'dotenv/config'; // necessary for env value be read...
import cookieParser from 'cookie-parser';

import * as config from './config.js'
import { homeRouter } from './routes/home.js';
import { authRouter } from './routes/auth.js'
import {Database} from './database.js';
import {verifyJWT} from './middleware/auth.js';
import multer from 'multer';



const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(config.DIST_DIR)); 
app.use(express.static(config.PUBLIC_PATH)); // webpack is not copying the static files into dist so manually...:

app.use(cookieParser());


// for parsing multipart/form-data
const upload = multer();
app.use(upload.array()); 


/* Routes: */
app.use('/', homeRouter);
app.use('/auth', authRouter);

app.use('/user-page', verifyJWT);


/* DB: */
const db = new Database();
db.connect();





app.listen(port, function () {
    console.log('App listening on port: ' + port);
});






// Checked: no need to cleanup and disconnect the db connection...
/* cleanup: */
// ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach((eventType) => {
//     process.on(eventType, () => {
        
//         db.disconnect();

//         if(eventType != 'exit') console.log('\nExiting because of: ' + eventType);  
//         process.exit();
//     });

// });



