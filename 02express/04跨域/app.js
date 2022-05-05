const express=require('express')
const app=express()

app.use(express.json())

//使用跨域第三方中间件
const cors=require('cors')
app.use(cors())

app.get('/api/get',(req,res)=>{
    res.send({
        status:200,
        msg:"get成功",
        data:req.query
    })
})

app.post('/api/post',(req,res)=>{
    res.send({
        status:200,
        msg:"post成功",
        data:req.body
    })
})

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})