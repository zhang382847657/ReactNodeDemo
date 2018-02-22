# ReactNodeDemo
一款吐槽的h5应用

## 技术支持
- 前端：`React`、`Express`、`React Router`
- 服务器端：`Node`
- 数据库： `MySQL`

## 运行步骤
1. `npm install`  ——下载依赖
2. `npm run build` ——编译js
3. `npm run server`  ——启动服务指向index.html
4. `node app.js` ——启动node服务，并连接数据库


## 项目目录结构

```
项目
    |__ app     //业务相关
        |__ util    //工具类
        |__ views   //视图类
        |__ index.tmpl.html //html模板
        |__ main.js //js入口
    |
    |__ build   //编译后的js文件
    |
    |__ database //数据库相关
        |__ index.js //连接mysql数据库
        |__ token.js //Toekn的生成、校验
    |    
    |__ node_modules 依赖
    |
    |__ router 路由
       |__ index.js 拿到url的数据请求并对数据库进行增删改查
    |
    |
    |__ app.js  
    |
    |__ package.json 
    |
    |__ webpack.config.js   webpack配置
    |
    |__ webpack.production.config.js    webpack生成环境配置
           

```