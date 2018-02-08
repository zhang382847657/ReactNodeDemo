/**
 * Created by zhouxin on 2018/2/8.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '112233',
    database : 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {

    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});