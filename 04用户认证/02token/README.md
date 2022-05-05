
## 过程
- 客户端收到服务器返回的JWT之后，通常会将它储存在localStorage 或 sessionStorage中。
- 此后，客户端每次与服务器通信，都要带上这个JWT的字符串，从而进行身份认证。推荐的做法是把JWT放在HTTP请求头的Authorization字段中，格式如下：
```
Authorization:Bearer <token>
```

## 实战
1. 安装一下两个中间件
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)：用户信息通过它生成jwt字符串
- [express-jwt](https://www.npmjs.com/package/express-jwt)：将jwt还原成json对象
2. 使用错误拦截中间件
3. 在客户端中，将获取到的token传递出去。（这里是通过查询参数传递）