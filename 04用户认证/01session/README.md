
## 文件说明
- app.js：服务器
- index.html：登录之后的后台页面
- login.html：登录页面

## 实战说明
1. 安装中间件express-session（[官方文档](https://www.npmjs.com/package/express-session)）
```bash
npm i express-session
```
2. 使用中间件
```javascript
const session=require('express-session')
app.use(
    session({
        secret: 'itheima',
        resave: false,
        saveUninitialized: true,
    })
)

```

## 概念解释
**cookie**：一般不超过4kb，不同域名下的cookie各自独立

**过程**：（1）客户端第一次请求服务器时，服务器通过响应头的形式，向客户端发送一个身份认证的Cookie，客户端会自动将Cookie保存在浏览器中。（2）当客户端浏览器每次请求服务器的时候，浏览器会自动将身份认证相关的Cookie，通过请求头的形式发送给服务器，服务器即可验明客户端的身份。

**注意**：由于Cookie是存储在浏览器中的，而且浏览器也提供了读写Cookie的APl，因此Cookie很容易被伪造，不具有安全性。因此不建议将隐私信息存到cookie上。所谓伪造，就是

---

**session**：通过session认证可以鉴别伪造的cookie
**过程**：（1）客户端发送用户信息给服务端，服务端验证通过后，将用户信息存储到服务器内存（session）中，同时生成对应的cookie字符串返回给用户（2）客户端再次发送请求时会把cookie一起发送给服务端，服务端从内存（session）检查是否有该数据，验证通过后再响应内容给客户端

