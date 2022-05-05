const express=require('express')
const app=express()

//注册全局中间件，最后必须用next()，都在就卡在这里了
app.use((req,res,next)=>{
    const time=new Date()
    req.reachTime=time          //将时间挂载到req请求上
    next()
})

app.get('/',(req,res)=>{
    res.send(req.reachTime)     //获取到了！
})


app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})