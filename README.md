# webpack
>安装依赖包

~~~bash
npm install
~~~

>读取入口文件

使用nodejs自带的fs模块，读取入口文件所在目录的所有需要打包的文件.
~~~javascript
const jsDir = fs.readdirSync('./js/scripts'), entryFiles = {};
~~~

遍历目录文件并写入entryFiles入口对象

~~~javascript
jsDir.forEach((file) => {
    const fileList = file.split('.');
    entryFiles[fileList[0]] = __dirname + '/js/scripts/' + file;
});
~~~