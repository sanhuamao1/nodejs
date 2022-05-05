const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send(req.query)    
})
app.get('/user/:id',(req,res)=>{
    res.send(req.params)        
})

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})