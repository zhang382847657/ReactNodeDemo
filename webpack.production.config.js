/**
 * Created by zhouxin on 2018/2/5.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "bundle-[name]-[hash].js"
    },
    devtool: 'null', //注意修改了这里，这能大大压缩我们的打包代码
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(svg)$/i,  //antd-mobile 要加上这个
                loader: 'svg-sprite-loader',
                include: [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. svg files of antd-mobile
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",

                    options: {  //antd-mobile 要加上这个
                        plugins: [
                            ['import', { libraryName: 'antd-mobile', style: 'css' }],
                        ],
                        cacheDirectory: true,
                    }
                    
                },
                exclude: /node_modules/
            },
            {test:/\.less$/,  //antd-mobile 要加上这个
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            { test: /\.css$/, //antd-mobile 要加上这个
                loader: 'style-loader!css-loader'
            }]
    },
    plugins: [

        new ExtractTextPlugin("Greeter.css"),//CSS模块分离
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //这边是生成模板html和编译的JS
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),//这2个作为压缩JS
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })//这边是清除缓存数据

    ],
};

