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
app.use('/public',express.static('public'));//将文件设置成静态,就可以访问该文件夹下的图片或者文件了

/** 登录 */
app.get('/login', router.login);
/** 发布话题 */
app.post('/topic/publish', router.topicPublish);
/** 查询话题列表 */
app.get('/topic/queryList', router.topicList);
/** 查询话题详情 */
app.get('/topic/detail', router.topicDetail);
/** 发表吐槽 */
app.post('/topic/sendComment', router.topicSendComment);
/** 点赞 */
app.post('/topic/like', router.topicLike);
/** 用户是否对当前话题点过赞 */
app.post('/topic/isUserLike', router.topicIsUserLike);
/** 我吐槽过的话题 */
app.post('/topic/participate', router.topicParticipate);
/** 话题查询 */
app.get('/topic/search', router.topicSearch);
/** 查询评论列表 */
app.get('/comment/queryList', router.commentList);
/** 注册 */
app.get('/register', router.register);

/** 查询用户信息 */
app.post('/user/detail', router.userDetail);
/** 上传文件 */
app.post('/upload', router.uploadFile);



app.listen(3000, () => {
    console.log('node服务器监听3000端口成功');
})