/**
 * Created by zhanglin on 2018/2/12.
 */
var db = require("../database/database.js");


/***
 * 登录
 * @param req
 * @param res
 */
exports.login = (req, res) => {

    db.search("select * from user where id=1","object",(result)=>{
        console.log("result == ",result);
        res.json(result)
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


