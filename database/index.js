/**
 * MySQL 数据库连接
 * Created by zhanglin on 2018/2/12.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.2.36',
    user     : 'root',
    password: '123qwe12',
    database: 'sys'
});

connection.connect();


module.exports = connection;