## 引入
开始之前先把依赖包安装一下：
```
npm i
```
或者(包含了两种认证方式涉及的中间件)
```
npm i express express-session jsonwebtoken express-jwt cors
```
## 认证方式
- **session**方式的用户认证适合**服务器端渲染**的web开发模式，该模式有利于SEO，常见于主要功能是展示而没有复杂的交互的网站。
- **token**方式的用户认证适合**前后端分离**的web开发模式，该模式不利于SEO，常见于交互强的后台管理系统。是**跨域**资源共享的解决方案。

## 文件说明
- **01session**：接口与页面同源
- **02token**：接口与页面不同源（可以使用vscode的扩展程序live serve快速给页面创建服务器）

