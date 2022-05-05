
## 实例
- demo01：全局中间件
- demo02：局部中间件
- demo03：错误级别中间件
- demo04：内置中间件，解析请求体

## 引入
中间件的作用就是对数据进行处理，从事件的开头到结尾，都可以使用中间件。中间件之间共享req，res。

中间件本质是一个函数。当回调函数（处理函数）中存在参数`next`，说明这是一个中间件函数，next是实现多个中间件连续调用的关键，表示把结果流转到下一个中间件或路由。

下面的处理函数就是一个局部中间件：
```javascript
app.get('/',(req,res,next)=>{
    next()
})
```

## 类别1
按作用范围可分为全局中间件和局部中间件。
- 全局中间件：任何请求都会触发该中间件函数，通过`app.use()`注册
- 局部中间件：不使用`app.use()`注册的中间件

## 类别2
- 应用级别
- 路由级别
- 错误级别
- express内置
- 第三方的中间件
- 自定义中间件

### 01 应用级别
通过`app.use()`或`app.get()`等挂载到app实例上的
### 02 路由级别
绑定到`express.Router()`实例上的中间件
### 03 错误级别
- 包含四个参数
- 可以捕获错误，防止项目崩溃。
- 需要在**后面**定义中间件，否则会出错
```javascript
app.use((err,req,res,next)=>{
    console.log('发生错误'+err.message)
    res.send('Error'+err.message)
})
```
### 04 express内置
- 不需要兼容，任何版本都可以使用
- 通过express实例的`use()`注册
- express内置了3个常用中间件
    1. `express.Router()`：创建路由对象，在上面挂载请求路由。
    2. `express.static()`：静态资源
    3. `express.json()`：解析JSON格式的请求体数据（4.16.0+才能用）
    4. `express.urlencoded()`：解析URL-encoded格式请求体数据（4.16.0+才能用）

```javascript
app.use(express.json())
app.use(express.urlencoded({extended:false}))
```
### 05 第三方中间件
```javascript
const parser=require('body-parser')
app.use(parser.urlencoded({extended:false}))
```
```bash
const cors=require('cors')
app.use(cors())
```
