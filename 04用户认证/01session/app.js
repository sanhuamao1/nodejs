
const express=require('express')
const app=express()

//解析请求体
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 静态资源
app.use(express.static('public'))

//使用session
/*讲个小插曲：
    上次跟着官网的推荐无脑加了个cookie: { secure: true }，
    发现无法获取session。
    原因在于，它要求使用https，
    而我使用的是http，所以为了安全考量它不会给我保存cookie
    于是发送完请求后我去查看了下cookie，确实没有保存！
    所以如果发送了没有带cookie的请求，服务端是无法从session中获取数据的
*/
const session=require('express-session')
app.use(
    session({
        secret: 'itheima',
        resave: false,
        saveUninitialized: true,
    })
)

// 1 向session中存数据
app.post('/api/login',(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    // 这里会交给数据库检查，判断有没有这个用户
    // 如果没有该用户，返回登陆失败；如果有，往下走


    // 将用户信息保存在session中
    req.session.user=req.body
    req.session.islogin = true
    console.log('denglu',req.session)
    res.send({status:0,msg:'登陆成功！'})
})

// 2 从session中获取数据
app.get('/api/getusername',(req,res)=>{
    console.log(req.session)
    if(!req.session.islogin){
        return res.send({status:1,msg:'不存在该用户！'})
    }
    res.send({status:0,msg:'获取成功',username:req.session.user.username})
})

// 3 清空session
app.post('/api/logout',(req,res)=>{
    req.session.destroy()
    res.send({
        status:0,
        msg:'已退出！'
    })
})

app.listen(8080,()=>{
    console.log('你的服务器运行在：http://localhost:8080')
})