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
    console.log("res===》", req);


    db.query("select * from user", function (error, results, fields) {
        if (error) throw error;
        let dataList = {};
        dataList.result = "ok";
        dataList.data = results[0];
        res.json(dataList)
        console.log('zhouxin=====>', results[0]);

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


