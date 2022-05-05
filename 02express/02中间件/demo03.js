const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    throw new Error('服务器内部发送错误')
})

//捕获项目异常错误，防止项目奔溃
// 放在后面，因为在最后面，所以不用再使用next流传了
app.use((err,req,res,next)=>{
    res.send('Error'+err.message)
})

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})