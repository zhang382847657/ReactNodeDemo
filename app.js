/**
 * Created by zhanglin on 2018/2/12.
 */
var express = require('express');
var app = express();
var router = require('./router/index.js');
var database = require('./database/index.js');

app.get('/login', router.login);

app.listen(3000, () => {
    console.log('node服务器监听3000端口成功');
})