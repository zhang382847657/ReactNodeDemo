/**
 * Created by zhanglin on 2018/2/12.
 */
var fs = require('fs');
var db = require("../database/index");


/***
 * 登录
 * @param req
 * @param res
 */
exports.login = (req, res) => {
     console.log("zhouxin")
    db.query("select * from user", function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
    });

}

/***
 * 注册
 * @param req
 * @param res
 */
exports
function register(req, res) {

}


