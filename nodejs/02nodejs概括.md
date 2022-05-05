## 01 运行环境
浏览器与nodejs都是基于V8引擎的JavaScript运行环境。
- 浏览器环境提供了内置API：DOM，BOM，Ajax等
- nodejs环境提供了[内置API](http://nodejs.cn/api/)：fs，path，http等。

## 02 开发框架
基于nodejs平台的主流开发框架有：
- [express](https://www.expressjs.com.cn/)：web应用
- [electron](https://www.electronjs.org/docs/latest)：跨平台桌面应用
- [restify](http://restify.com/)：api接口项目

## 03 模块规范
nodejs遵循CommonJS模块化规范，核心思想是
- 通过`require`方法来同步地加载依赖的其他模块，
- 通过 `module.exports` 导出需要暴露的接口。

## 04 模块类别
- 内置模块：nodejs自带的
- 自定义模块：自己写，自己引用
- 第三方模块：从其他地方下载，如[npm包共享平台](https://www.npmjs.com/)
> 模块又称作包

## 05 如何运行
1. [安装nodejs](http://nodejs.cn/)
2. 通过`node`执行脚本
    ```bash
    node index.js
    ```

## 06 一些工具
- nvm：Node.js version manager，nodejs版本管理器
- npm：Node Package Manager，node.js 的包管理器（安装nodejs会随便安装）
- nrm：NPM registry manager，镜像源。官方源如果下载慢，可以使用这个
    ```bash
    npm install -g nrm
    nrm ls //显示全部镜像源
    nrm use cnpm //使用cnpm镜像源
    ```
- nodemon：当文件修改时，自动重启服务器
    ```bash
    npm install -g nodemon
    nodemon 文件
    ```