
## 引入
可以使用https://www.postman.com/辅助发送请求~如果用的是网页版，还需要安装postman agent才能模拟本地发送请求，这一步它会给我们指导的。嫌麻烦的话直接安装客户端版本就好！

另外，localhost的ip是127.0.0.1

## 01 创建服务器
```javascript
const express=require('express')
const app=express()
//...填充内容
app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})
```
## 02 GET&POST

```javascript
app.get('url',(req,res)=>{...})
app.post('url',(req,res)=>{
    res.send('请求成功')
})
```
- `res.send()`:将相应信息发给客户端


### 03 GET参数
查询参数：
```javascript
app.get('/',(req,res)=>{
    res.send(req.query)     
})
// 请求：http://localhost:8080/?username=lisa&age=23
// 响应：{"username": "lisa","age": "23"}
```
动态参数：
```javascript
app.get('/user/:id',(req,res)=>{
    res.send(req.params)        
})
// 请求：http://localhost:8080/user/2
// 响应：{id:2}
```

## 2.3 模块化
通常情况下，请求路由会非常多，为了便于维护，需要将其提取出来。会从上到下依次匹配。
router.js
```javascript
const express=require('express')
const router=express.Router()

//一些请求
router.get('/user/list',(req,res)=>{...})
router.post('/user/add',(req,res)=>{...})

module.exports=router
```
> 路由格式：`app.[method请求方法](path路径,handler处理函数)`。
而此时不再挂载到app上，而是挂载router对象上，故上面写成router

app.js
```javascript
const express=require('express')
const app=express()

//引用路由模块
const router=require('./router.js')
//使用中间件，并添加访问前缀/api，此为可选项
app.use('/api',router)

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})

/*此时的请求：
    http://localhost:8080/api/user/list
*/
```
- `express.Router()`：创建路由对象，在上面挂载请求路由。属于**中间件**，通过express实例的`use()`注册）


### 2.4 静态资源
假设有个文件目录
```
- public
    - index.html
- image
    - test.png
- app.js(当前文件)
```
只公开一个静态资源时：
```javascript
app.use(express.static('public'))
// 访问资源：http://localhost:8080/index.html
```
公开多个静态资源时：
```javascript
app.use('/public',express.static('public'))
app.use('/image',express.static('image'))
/*访问资源：
    http://localhost:8080/public/index.html
    http://localhost:8080/image/example.png
*/
```
- `express.static('文件名称')`：将文件夹对外开放。属于**中间件**，通过express实例的`use()`注册）
