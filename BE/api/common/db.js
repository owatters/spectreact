const logger = require('./logger');
var mysql = require('promise-mysql');

const ENV = process.env;
logger.debug(ENV);
const MYSQL_DB_HOST = ENV.MYSQL_DB_HOST || logger.error("MYSQL_DB_HOST not specified");
const MYSQL_DB_USER = ENV.MYSQL_DB_USER || logger.error("MYSQL_DB_USER not specified");
const MYSQL_DB_PASSWORD = ENV.MYSQL_DB_PASSWORD || logger.error("MYSQL_DB_PASSWORD not specified");
const MYSQL_DB_PORT = ENV.MYSQL_DB_PORT || logger.error("MYSQL_DB_PORT not specified");
const MYSQL_DB = ENV.MYSQL_DB || logger.error("MYSQL_DB not specified");
const MYSQL_POOL_LIMIT = ENV.MYSQL_POOL_LIMIT || logger.error("MYSQL_POOL_LIMIT  not specified");

try {
  pool = mysql.createPool({
    host: MYSQL_DB_HOST,
    user: MYSQL_DB_USER,
    password: MYSQL_DB_PASSWORD,
    database: MYSQL_DB,
    port: MYSQL_DB_PORT,
    connectionLimit: MYSQL_POOL_LIMIT
  })
  if (pool) {
    logger.debug("Pool created");
  }
} catch (error) {
  logger.error("Pool could not be created" + error)
}
module.exports = pool;