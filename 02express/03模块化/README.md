## 文件说明
- router.js：封装路由
- app.js：服务器

## 引入
通常情况下，请求(路由)会非常多，为了便于维护，需要进行模块化

## 模块化
1. 提取路由生成模块
2. 使用路由中间件——app.js


router.js
```javascript
const express=require('express')
const router=express.Router()

//挂载一些请求
router.get('/user/list',(req,res)=>{...})
router.post('/user/add',(req,res)=>{...})

module.exports=router
```

app.js
```javascript
const router=require('./router.js')
app.use('/api',router)      //使用中间件。可添加访问前缀/api，此为可选项

/*如果加了前缀，需要这样请求：
    http://localhost:8080/api/getlist
*/
```
