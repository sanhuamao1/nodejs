nodejs遵循的是CommonJS模块规范
- demo01：时间格式化模块

---

## 01 加载模块
```javascript
const fs=require('file')         //内置模块
const custom=require('./custom') //自定义模块
const moment=require('moment')   //第三方模块,也称包
```

## 02 暴露模块
```javascript
module.exports.username='zs'
```
```javascript
mudule.exports={
    nickname:'ss',
    sayHi(){}
}
```
```javascript
const bodyparser=()=>{...}
module.exports=bodyparser
```
```javascript
exports.username='zs'
module.exports.gender='男'
//{username:'zs',gender:'男'}
```
> `moudle.exports`可简写为`exports`，但永远以`mudule.exports`指向的为准

## 03 包管理与文件说明
http://nodejs.cn/

- 初始化项目生成一个package.json，描述项目信息
    ```bash
    npm init
    npm i                   //安装package.json中的依赖包
    npm i 包名              //安装包(全局是后面加 -g)
    npm i 包名@指定版本 
    npm uninstall 包名      //卸载包(全局是后面加 -g)

    //开发时的依赖包
    npm i 包 -D
    npm i 包 -save-dev
    ```
- node_modules：存放已安装的包
- package-lock.json：记录每个包的下载信息

## 04 发布包
说明：
- 包必须以单独的目录单独存在
- 顶级目录必须包含package.json与入口文件
- keywords：指定搜索关键字
步骤：
1. https://www.npmjs.com/注册用户
2. 终端登陆`npm login`：填写用户名、密码、邮箱
3. 切换到包根目录
4. `npm publish`：发布
5. `npm unpublish 包名 —force`：删除已发布包，只能删除72小时以内的包