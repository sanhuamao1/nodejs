
// 密码加密与比对
const bcrypt = require('bcryptjs') 

// 处理token
const jwt=require('jsonwebtoken')
const config = require('../config')

// 链接数据库
const db=require('../db/index')

//使用到的sql语句
let userSql={
    search:'select * from e_users where username=?', //查询用户是否存在
    insert:'insert into e_users set ?',             //向e_users表中插入新用户
}

// 01 注册
exports.regUser = (req, res) => {
    const userinfo=req.body
    db.query(userSql.search,userinfo.username,(err,result)=>{
        console.log(result)
        if(err)  return res.err(err)
        if(result.length>0){
            return res.err('用户名被占用')
        }
    })

    //数据库成功处理了
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    db.query(userSql.insert,userinfo,(err,result)=>{
        console.log(err)
        if(err) return res.err(err)
        if (result.affectedRows !== 1) {
            return res.err('注册用户失败，请稍后再试')
        }
        res.ok('注册成功')
    })
}


// 02 登陆
exports.login = (req, res) => {
    const userinfo=req.body
    db.query(userSql.search,userinfo.username,(err,result)=>{
        if(err) return res.err(err)
        if (result.length !== 1) return res.err('用户不存在')

        //核对密码
        const compareResult=bcrypt.compareSync(userinfo.password,result[0].password)
        if(!compareResult) return res.err('密码错误！')

        // 成功登陆--生成token
        // 剔除掉密码和图片信息
        const user = { ...result[0], password: '', user_pic: '' }
        const tokenStr=jwt.sign(user,config.jwtSecretKey,{
            expiresIn: config.expiresIn
        })
        res.ok('登陆成功',{
            token:"Bearer "+ tokenStr
        })
    })
}