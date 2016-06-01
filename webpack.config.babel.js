const webpack = require("webpack"),
    path = require("path"),
    fs = require("fs");
//ExtractTextPlugin = require("extract-text-webpack-plugin");// 独立css

// 读取入口文件
const jsDir = fs.readdirSync('./js/scripts'), entryFiles = {};
jsDir.forEach((file) => {
    const fileList = file.split('.');
    entryFiles[fileList[0]] = __dirname + '/js/scripts/' + file;
});

module.exports = {
    //devtool: "source-map", // 便于调试
    entry: entryFiles,
    output: {
        publicPath: "../build/",
        path: path.join(__dirname, "build"),
        filename: "[name].js"
    },
    module: {
        preLoaders: [

        ],
        loaders: [
            //{
            //    test: /\.less$/,
            //    loader: ExtractTextPlugin.extract('style-loader',  "css-loader!less-loader")
            //},
            {test: /\.less$/,loader: "style-loader!css-loader!autoprefixer-loader!less-loader?sourceMap"},
            {test: /\.css$/,loader: "style-loader!css-loader!autoprefixer-loader"},
            {test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/, loader: 'file-loader?name=[hash].[ext]'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=8192&name=[hash].[ext]'},
            {test: /\.jsx?$/,exclude: /node_modules/, loader: 'babel?presets=es2015'}
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}), // 压缩
        new webpack.optimize.CommonsChunkPlugin('common.js'),//提取多个页面之间的公共模块
       // new webpack.BannerPlugin('test plugin!'),// 头部注释
        //new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            core: 'core'
        })

    ],
    resolve: {
        //查找module路径
        root: path.resolve(__dirname),
        //后缀名自动补全，即require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.less'],
        // 模块别名定义，方便后续直接引用别名
        alias: {
            'jquery': "../lib/jquery-2.2.4.min.js",
            'core': "../lib/core.js"
        }
    }
};
