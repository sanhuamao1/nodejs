const express=require('express')
const app=express()

// 定义中间件
const mw1=(req,res,next)=>{
    console.log('中间件1')
    next()
}
const mw2=(req,res,next)=>{
    console.log('中间件2')
    next()
}

// 放入中间件
app.get('/',mw1,(req,res)=>{
    res.send('hello')
})

// 放入多个中间件
app.get('/test1',mw1,mw2,(req,res)=>{
    res.send('hello')
})
app.get('/test2',[mw1,mw2],(req,res)=>{
    res.send('hello')
})

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})