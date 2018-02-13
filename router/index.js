/**
 * Created by zhanglin on 2018/2/12.
 */
var db = require("../database/index.js");

/***
 * 返回最终的JSON结构体
 * @param result  成功还是失败  true | false
 * @param data 数据
 * @param msg  错误消息
 * @return {}
 */
function jsonData(result,data,msg) {

    let json = {
        result:result
    };

    if(result == true){
        json["data"] = data
    }else{
        json["msg"] = msg
    }

    console.log("json == ",json);

    return json;

}


/***
 * 登录
 * @param req
 * @param res
 */
exports.login = (req, res) => {

    console.log("请求参数 == ",req.query);
    let phone = req.query.phone;
    let password = req.query.password;

    db.query(`select * from user where phone=${phone}`,function (error, results, fields) {

        if (error) throw error;

        console.log("results == ",results);


        if(results.length == 0){
            let json = jsonData(false,null,"当前用户不存在");
            res.json(json);
        }else{
            db.query(`select * from user where phone=${phone} and password=${password}`,function (error, results2, fields) {

                console.log("results2 == ",results2);
                if (error) throw error;

                if(results.length == 0){
                    let json = jsonData(false,null,"密码错误");
                    res.json(json);
                }else{
                    let json = jsonData(true,results2[0]);
                    res.json(json);
                }

            })
        }
    })


}

/***
 * 注册
 * @param req
 * @param res
 */
exports
function register(req, res) {

}


