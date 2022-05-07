const express=require('express')
const app=express()


//** 顺序很重要


// 处理错误信息与正确信息的全局中间件
const {errmw,okmw}=require('./utils/msg')
app.use(errmw)
app.use(okmw)

// 配置：跨域
const cors=require('cors')
app.use(cors())

// 解析token
const dejwt=require('./utils/expressJwt')
app.use(dejwt())

// 配置：解析表单数据
app.use(express.urlencoded({extended:false}))

// 配置路由
const userRouter=require('./router/user')
const infoRouter=require('./router/info')
app.use('/api',userRouter)
app.use('/my',infoRouter)


// 捕获验证错误的中间件
const Joi = require("joi")
app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError') return res.err('身份认证失败！')
    if(err instanceof Joi.ValidationError) return res.err(err)
    res.err(err)
})

app.listen(3030,()=>{
    console.log('你的服务器运行在：http://localhost:3030')
})