/**
 * Created by zhanglin on 2018/2/12.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123qwe12'
});

connection.connect();

module.exports = connection;