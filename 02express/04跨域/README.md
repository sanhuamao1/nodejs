## 文件说明
> 因为网上的教程不是用jquery封装的ajax就是用axios，于是我叛逆了一下采用了以下两种请求方式。
- test01.html：使用浏览器自带的fetch模拟客户端发送请求
- test02.html：使用浏览器自带的XMLHttpRequest模拟客户端发送请求（[post携带请求体参考文章](https://www.cnblogs.com/oxspirt/p/13096737.html)）
- app.js：服务器
> 可以在vscode里安装live serve扩展，帮助快速为html文件创建本地开发服务器

---
## 引入
浏览器为了安全，只接受同源的请求，所谓同源就是同协议，同域名，同端口

## CORS响应头
cross-origin resource sharing，跨域资源共享。

```js
//设置可接受的源，*表示都ok
res.setHesder('Access-Control-Allow-Origin','*')
//设置可接受的请求头
res.setHesder('Access-Control-Allow-Header','Content-Type,X-Custom-Header')
// 设置可接受的请求方法
res.setHesder('Access-Control-Allow-Methods','POST,GET,DELETE,HEAD')
```
> - cors默认情况下仅支持发送9个请求头：Accept、Accept-Language、>Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、>Content-Type（值仅限于text/plain、multipart/form-data、application/>x-www-form-urlencoded 三者之一）
> - cors默认情况下仅支持3个方法：get、post、head



## CORS包
它由一系列http响应头组成 如access-control-allow，有兼容性
```javascript
const cors=require('cors')
app.use(cors())
```

## CROS请求分类
### 01 简单请求
- `get、post、head`
- 请求头信息不得超过9种
- 发生1次请求


### 02 预检请求
- 请求为3个方法之外的，如delete
- 请求头重包含自定义字段
- 发送了`application/json`格式的数据
- 发生2次请求，option和真正的请求

在浏览器与服务器正式通信之前，浏览器会先发送`OPTION `请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为“预检请求”。
服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。





