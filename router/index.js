/**
 *
 * Created by zhanglin on 2018/2/12.
 */


var db = require("../database/index.js");
var token = require("../database/token.js");

const ErrorType = { //错误类型
    NoLogin:{
        code: 202,  //错误码
        msg: "未登录"  //错误信息
    },
    LoginExpires:{
        code: 203,
        msg: "登录过期"
    },
    AccountExist:{
        code: 204,
        msg: "账号已经存在"
    },
    AccountNoExist:{
        code: 205,
        msg: "当前用户不存在"
    },
    PasswordError:{
        code: 206,
        msg: "密码错误"
    }

};

/***
 * 返回最终的JSON结构体
 * @param result  成功还是失败  true | false
 * @param data 数据
 * @param msg  错误消息
 * @param rescode 错误状态码
 * @return {}
 */
function jsonData(result,data,msg,rescode) {

    let json = {
        result:result == true ? "ok" : "failed"
    };

    if(result == true){
        json["data"] = data;
        json["msg"] = msg;
    }else{
        json["msg"] = msg;
        json["rescode"] = rescode;
    }

    return json;

}

/***
 * 检查Token
 * @param req
 * @param res
 * @return bool 是否成功
 */
function checkToken(req, res) {
    let tokenString = req.get("Authorization"); //拿到token

    if(tokenString == null || tokenString == "" || typeof tokenString == "undefined"){
        let json = jsonData(false,null,ErrorType.NoLogin.msg,ErrorType.NoLogin.code);
        res.json(json);
        return false;
    }

    if(token.checkToken(tokenString)) { //校验token是否过期
        let json = jsonData(false,null,ErrorType.LoginExpires.msg,ErrorType.LoginExpires.code);
        res.json(json);
        return false;
    }else{
        return true;
    }
}

/***
 * 通过解析token，拿到用户信息
 * @param req
 * @return 用户信息  id、手机号、密码、等等
 */
function getUserInfo(req) {
    let tokenString = req.get("Authorization"); //拿到token
    var resDecode = token.decodeToken(tokenString); //拿到payload对象
    return resDecode.payload.data;
}

/**
 * 注册
 * */
exports.register = (req, res) => {
    let phone = req.query.phone;
    console.log("phone==>",phone)
    let password = req.query.password;
    db.query(`select count(1) from user where phone = ${phone}`, function (error, results, fields) {
        if (error) throw error;
        if (results[0]["count(1)"] > 0) {
            let json = jsonData(false, null, ErrorType.AccountExist.msg, ErrorType.AccountExist.code);
            res.json(json);
        } else {
            db.query(`insert into user (phone,password,createTime) values ("${phone}","${password}",now())`, function (error, results, fields) {
                if (error) throw error;
                let data = {
                    phone:phone
                }
                let json = jsonData(true,data);
                res.json(json);
            })
        }

    })


}


exports.posttheme = (req, res) => {
    let title = req.query.title;
    let content = req.query.content;
    db.query(`insert into topic (title,content,createTime) values ("${title}","${content}",now())`,function(error, results, fields){
        if(error) throw  error;
        let json = jsonData(true,results);
        res.json(json);

    })

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

    /** 先查询当前手机号是否存在 */
    db.query(`select * from user where phone=${phone}`,function (error, results, fields) {

        if (error) throw error;
        console.log("results == ",results);


        if(results.length == 0){

            let json = jsonData(false,null,ErrorType.AccountNoExist.msg,ErrorType.AccountNoExist.code);
            res.json(json);

        }else{

            /** 再查密码输入的是否正确 */
            db.query(`select id,phone,abstract,createTime,password from user where phone=${phone} and password=${password}`,function (error2, results2, fields2) {

                console.log("results2 == ",results2);
                if (error2) throw error2;

                if(results2.length == 0){
                    let json = jsonData(false,null,ErrorType.PasswordError.msg,ErrorType.PasswordError.code);
                    res.json(json);
                }else{

                    let tokenString = token.createToken(results2[0],2); //生成token
                    console.log("tokenString == ",tokenString);

                    /** 生成TOEKN，并更新token字段到当前用户 */
                    db.query(`update user set token = '${tokenString}' where phone=${phone}`,function (error3, results3, fields3) {

                        console.log("results3 == ",results3);
                        if (error3) throw error3;

                        let finalData = {
                            user: results2[0],
                            token: tokenString
                        } ;
                        let json = jsonData(true,finalData);
                        res.json(json);

                    })


                }

            })
        }
    })


};



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

};

/***
 * 查询话题详情
 * @param req
 * @param res
 */
exports.topicDetail = (req, res) => {

    console.log("请求参数 == ",req.query);
    let id = req.query.id;

    let sql = `select *, (select count(*) from topic_like where topicId = ${id}) as  likeNum, (select count(*) from comment where topicId = ${id}) as commentNum from topic where id = ${id}`

    db.query(sql,function (error, results, fields) {

        if (error) throw error;
        console.log("results == ",results);

        let json = jsonData(true,results[0]);
        res.json(json);

    })


};

/***
 * 发表吐槽
 * @param req
 * @param res
 */
exports.topicSendComment = (req, res) => {

    console.log("请求参数 == ",req.body);

    let topicId = req.body.topicId;
    let content = req.body.content;

    if(checkToken(req,res)){ //先检查token

        let userId = getUserInfo(req).id; //拿到用户Id
        db.query(`insert into comment (content, createTime, topicId, userId) values ('${content}', now(), ${topicId}, ${userId}) `,function (error, results, fields) {

            if (error) throw error;
            console.log("results == ",results);

            let json = jsonData(true,{});
            res.json(json);

        })
    }

};


/***
 * 点赞  如果已经点过赞，则取消点赞
 * @param req
 * @param res
 */
exports.topicLike = (req, res) => {

    console.log("请求参数 == ",req.body);

    let id = req.body.id;

    if(checkToken(req,res)){ //先检查token

        let userId = getUserInfo(req).id; //拿到用户Id

        db.query(`select * from topic_like where topicId = ${id} and userId = ${userId}`,function (error, results, fields) {

            if (error) throw error;
            console.log("results == ",results);

            if(results.length > 0 ){


                db.query(`delete from topic_like where topicId = ${id} and userId = ${userId} `,function (error, results2, fields) {

                    if (error) throw error;
                    console.log("删除结果 == ",results2);

                    let json = jsonData(true,{});
                    res.json(json);

                })

            }else {
                db.query(`insert into topic_like values (${id}, ${userId}) `,function (error, results2, fields) {

                    if (error) throw error;
                    console.log("添加结果 == ",results2);

                    let json = jsonData(true,{});
                    res.json(json);

                })
            }



        });


    }

};


/***
 * 用户是否对当前话题点过赞
 * @param req
 * @param res
 */
exports.topicIsUserLike = (req, res) => {

    console.log("请求参数 == ",req.body);

    let id = req.body.id;

    if(checkToken(req,res)){ //先检查token

        let userId = getUserInfo(req).id; //拿到用户Id

        db.query(`select * from topic_like where topicId = ${id} and userId = ${userId}`,function (error, results, fields) {

            if (error) throw error;
            console.log("results == ",results);

            let json = jsonData(true,results.length > 0 ? true : false);
            res.json(json);


        });

    }

};

/***
 * 查询评论列表
 * @param req
 * @param res
 */
exports.commentList = (req, res) => {

    console.log("请求参数 == ",req.query);
    let id = req.query.id;
    let pageSize = req.query.pageSize;
    let pageNum = req.query.pageNum;

    db.query(`select * from comment where topicId = ${id} limit ${pageNum*pageSize},${(pageNum+1)*pageSize} `,function (error, results, fields) {

        if (error) throw error;
        console.log("results == ",results);

        db.query(`select count(*) from comment where topicId = ${id}`,function (error2, results2, fields2) {

            let fianlData = {
                dataList:results,
                totalCount:results2[0]["count(*)"]
            };
            let json = jsonData(true,fianlData);
            res.json(json);

        });
    })


};


/***
 * 查询用户信息
 * @param req
 * @param res
 */
exports.userDetail = (req, res) => {

    console.log("请求参数 == ",req.body);

    let phone = req.body.phone;

    if(checkToken(req,res)){ //先检查token

        db.query(`select phone,createTime,abstract from user where phone = ${phone}`,function (error, results, fields) {

            if (error) throw error;
            console.log("results == ",results);

            let json = jsonData(true,results[0]);
            res.json(json);

        })
    }

};


