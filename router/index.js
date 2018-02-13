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
        result:result == true ? "ok" : "failed"
    };

    if(result == true){
        json["data"] = data
    }else{
        json["msg"] = msg
    }

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
            db.query(`select * from user where phone=${phone} and password=${password}`,function (error2, results2, fields2) {

                console.log("results2 == ",results2);
                if (error2) throw error2;

                if(results2.length == 0){
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


/***
 * 查询所有话题
 * @param req
 * @param res
 */
exports.topicList = (req, res) => {

    console.log("请求参数 == ",req.query);
    let pageSize = req.query.pageSize;
    let pageNum = req.query.pageNum;

    db.query(`select * from topic limit ${pageNum*pageSize},${(pageNum+1)*pageSize} `,function (error, results, fields) {

        if (error) throw error;
        console.log("results == ",results);

        db.query(`select count(*) from topic`,function (error2, results2, fields2) {

            let fianlData = {
                dataList:results,
                totalCount:results2[0]["count(*)"]
            };
            let json = jsonData(true,fianlData);
            res.json(json);

        });

    })

}

/***
 * 查询话题详情
 * @param req
 * @param res
 */
exports.topicDetail = (req, res) => {

    console.log("请求参数 == ",req.query);
    let id = req.query.id;

    db.query(`select * from topic where id = ${id} `,function (error, results, fields) {

        if (error) throw error;
        console.log("results == ",results);

        let json = jsonData(true,results[0]);
        res.json(json);

    })


}


