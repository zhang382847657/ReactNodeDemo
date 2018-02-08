/**
 * Created by zhouxin on 2018/2/5.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./app/views/style/style.js');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 1111, //端口
        hot:true //热更新
    },
    module: {
        rules: [
            {
                test: /\.(svg)$/i,  //antd-mobile 要加上这个
                loader: 'svg-sprite-loader',
                include: [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. svg files of antd-mobile
                   // path.resolve(__dirname, '../src/'),  // folder of svg files in your project
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

                    // options: {
                    //     presets: [
                    //         "env", "react"
                    //     ]
                    // }
                    //此处用 .babelrc 替代  简写
                },
                exclude: /node_modules/
            },
            {test:/\.less$/,  //antd-mobile 要加上这个
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader",options:{modifyVars: theme}}
                    ]
            },
            { test: /\.css$/, //antd-mobile 要加上这个
                loader: 'style-loader!css-loader'
            }

        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
}

