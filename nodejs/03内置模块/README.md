> 官网api合集：http://nodejs.cn/api/

- demo01：fs.readFile()
- demo02：fs.writeFile() 
- demo03：综合两者的字符串拼接
- demo04：path、fs综合案例——提取html文件的js、css部分
- demo05：http创建服务器，根据url返回对应内容
- demo06：http创建服务器，获取静态资源，综合path、fs模块

---

## 01 fs
http://nodejs.cn/api/fs.html
- `readFile()`：

    ```javascript
    // fs.readFile(路径,选项(可选),回调函数)
    const fs=require('fs')
    fs.readFile('./files/01test.txt','utf8',(err,data)=>{...}) //data为读取到的信息
    ```
- `writeFile()`
    ```javascript
    // fs.readFile(路径,写入的数据,选项(可选),回调函数)
    const fs=require('fs')
    fs.writeFile('./files/02test.txt','abcde','utf8',(err)=>{...})
    ```
    > 注意，如果对应文件夹没有该文件，会自动创建；而如果路径中的文件夹不存在，会报错。

## 02 path
http://nodejs.cn/api/path.html

- `__dirname`：当前文件所处目录
- `path.join()`：拼接路径
    ```javascript
    //path.join(路径1,路径2,...)
    const path=require('path')
    const pathstr=path.join(__dirname,'/files/01test.txt') 
    ```
    > 使用`./`、`../`时，执行js文件时，会用当前执行目录去动态拼接文件路径，容易出错
- `path.basename()`：获取文件部分
    ```javascript
    // path.basename(文件路径，扩展名)
    const path=require('path')

    const fpath='/a/b/index.html'
    const fullname=path.basename(fpath)            //index.html
    const nameWithExt=path.basename(fpath,'.html') //index 
    ```
- `path.extname()`：获取文件扩展名
    ```javascript
    const path=require('path')
    const fpath='/a/b/index.html'
    const extname=path.extname(fpath) //.html
    ```

## 03 http
http://nodejs.cn/api/http.html

服务器与普通电脑的区别在于安装了web服务器软件，如iss（asp），apache（php）。而在nodejs中不用安装，依靠nodejs提供的http模块即可。
每一个web服务器对应一个端口号，80端口号可以省略，其他都要加上。

```javascript
const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{...}) //监听请求事件
server.listen(8080)                   //监听8080端口 启动
```