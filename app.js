/**
 * Created by zhanglin on 2018/2/12.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./database/index.js');
var router = require('./router/index.js');
var cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

/** 登录 */
app.get('/login', router.login);
/** 查询话题列表 */
app.get('/topic/queryList', router.topicList);
/** 查询话题详情 */
app.get('/topic/detail', router.topicDetail);
/** 添加吐槽 */
app.post('/topic/sendComment', router.topicSendComment);
/** 查询评论列表 */
app.get('/comment/queryList', router.commentList);
/** 查询用户信息 */
app.post('/user/detail', router.userDetail);

app.listen(3000, () => {
    console.log('node服务器监听3000端口成功');
})