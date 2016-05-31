var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');//提取多个页面之间的公共模块
var ExtractTextPlugin = require("extract-text-webpack-plugin");//独立css
module.exports = {
   entry: "./entry.js",
   output: {
     path: "dist/js",
     filename: "[name].bundle.js"
   },
   module: {
     loaders: [
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')}
     ]
   },
   plugins: [
     commonsPlugin,
     new webpack.BannerPlugin('this is a test to test plugin!')
     new ExtractTextPlugin("styles.css")
   ],
   resolve: {
        //查找module的话从这里开始查找
        root: {fallback: path.resolve(__dirname, "")}, //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {}
    }
}
