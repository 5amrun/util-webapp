import path from 'path';
import {fileURLToPath} from 'url';
import winston from 'winston';



// The __dirname or __filename global variables are not available in ECMAScript module files.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DIST_DIR = path.join(__dirname, '../client/dist'); // __dirname ReferenceError: __dirname is not defined in ES module scope
export const INDEX_HTML = path.join(DIST_DIR, 'index.html');

export const PUBLIC_PATH = '../client/public';


/* DB */
export const mysqlParams = {
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASS, // env specific and hard coded...
    database: 'my_db'
}


/* logger */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

global.logger = logger;


