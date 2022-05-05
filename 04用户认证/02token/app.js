const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())

//1.定义密钥
const secretKey="mimayo~" 
//2.生成jwt
const enjwt=require('jsonwebtoken')
//3.还原jwt：会自动把解析出来的数据挂载到req.auth的属性上
const {expressjwt: jwt}=require('express-jwt')
app.use(
    jwt({
        secret:secretKey,
        algorithms: ["HS256"],
    }).unless({path:[/^\/api\//]})  //// 设置以/api/开头的不需要访问权限
)

// 1.认证加密
app.post('/api/login',(req,res)=>{
    const user=req.body
    let {username,password}=user

    // 01 当用户调用了登陆接口，需要对其用户信息进行验证
    if(username!=='admin'||password!=='123456'){
        return res.send({status:0,msg:'账号或密码错误'})
    }
    
    // 02 验证成功后对用户信息进行加密  （不建议携带密码）
    const tokenStr=enjwt.sign(
        {username},
        secretKey,
        {expiresIn:'10h'} //有效期，也可以把单位换成s（秒）以便进行token期限测试
    )

    // 03 返回加密后的token
    res.send({
        status:200,
        message:'登陆成功',
        token:tokenStr
    })
})

//2 验证用户
app.get('/admin/getInfo',(req,res)=>{
    // 通过req.auth可以获取到token解析后的信息
    if(req.auth){
        res.send({
            status:200,
            msg:'获取数据成功',
            data:req.auth
        })
    }else{
        res.send({
            status:200,
            msg:'没有权限！',
            data:req.auth
        })
    }
    
})

// 3 处理错误：解析token错误或过期（错误中间件写后面）
app.use((err,req,res,next)=>{
    if(err.name==='UnauthorizedError'){
        res.send({
            status:401,
            msg:'token已过期'
        })
    }
    res.send({
        status:500,
        msg:'请求错误'
    })
})

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})