// mysql connection
const config = require('./config');
const mysql = require('mysql');

const pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    port:(config.mysql.port)?config.mysql.port:'3306',
    password: config.mysql.password,
    database: config.mysql.database,
    multipleStatements:true
})

exports.getConnection = function(callback) {
    pool.getConnection(function(err, conn) {
      if(err) {
        return callback(err);
      }
      console.log('connected!')
      callback(err, conn);
    });
};
