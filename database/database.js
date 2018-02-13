/**
 * Created by zhanglin on 2018/2/12.
 */
var con = require("./index.js");

let database = function(){}


function query(sql,tag,callback,flag) {

    con.query(sql,function (error, results, fields) {

        if (error) throw error;


        /**
         * 最终返回的数据结构体
         * {
         *   result:'ok',
         *   data: {} || []
         * }
         */
        let json = {
            results:"ok"
        };


        if(flag == "search") {

            if(tag == "array"){
                json["data"] = results;
                if(results == undefined){
                    json["results"] = "failed";
                }
            }else if (tag == "object"){
                json["data"] = results[0];
                if(results == undefined){
                    json["results"] = "failed";
                }
            }

            callback(json);

        }else if(flag == "delete"){

        }else if(flag == "update"){

        }else if(flag == "add"){

        }


    })

}


/***
 * 查询
 * @param sql  SQL查询语句
 * @param tag  返回的是数组还是对象
 * @param callback  返回包装好的数据对象
 */
database.search = function (sql,tag,callback) {
    query(sql,tag,callback,"search")
}


/***
 * 删除
 * @param sql  SQL查询语句
 * @param tag  返回的是数组还是对象
 * @param callback  返回包装好的数据对象
 */
database.delete = function (sql,tag,callback) {
    query(sql,tag,callback,"delete")
}


/***
 * 更新
 * @param sql  SQL查询语句
 * @param tag  返回的是数组还是对象
 * @param callback  返回包装好的数据对象
 */
database.update = function (sql,tag,callback) {
    query(sql,tag,callback,"update")
}

/***
 * 添加
 * @param sql  SQL查询语句
 * @param tag  返回的是数组还是对象
 * @param callback  返回包装好的数据对象
 */
database.add = function (sql,tag,callback) {
    query(sql,tag,callback,"add")
}



module.exports = database;