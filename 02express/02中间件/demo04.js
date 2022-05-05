const express=require('express')
const app=express()

app.use(express.json()) //解析json格式请求体
app.use(express.urlencoded({extended:false})) //urlencoded格式请求体

//如果没有上面的解析，那么body是undefined或者null
app.post('/',(req,res)=>{
    res.send(req.body)
})

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})