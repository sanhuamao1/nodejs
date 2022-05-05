const express=require('express')
const app=express()
const router=require('./router.js')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',router) 

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})