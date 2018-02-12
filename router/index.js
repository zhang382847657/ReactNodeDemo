/**
 * Created by zhanglin on 2018/2/12.
 */
var fs = require('fs');
var database = require('../database/index.js');


/***
 * 登录
 * @param req
 * @param res
 */
export function login(req,res){

    database.query("use database");
    database.query("select * from user", function(err, rs, fields){
        //处理数据
    });

}

/***
 * 注册
 * @param req
 * @param res
 */
export function register(req,res){

}
