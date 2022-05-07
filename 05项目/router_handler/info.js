const db=require('../db/index')
const bcrypt = require('bcryptjs') //对比密码

let infoSql={
    get_user:'select id, username, nickname, email, user_pic from e_users where id=?',
    update_user:'update e_users set ? where id=?',
    search:'select username,password from e_users where id=?',//判断该用户是否存在
    update_password:'update e_users set password=? where id=? ',
    update_avatar:'update e_users set user_pic=? where id=?'
}

// 获取用户信息
exports.userInfo=(req,res)=>{
    db.query(infoSql.get_user,req.auth.id,(err,result)=>{
        if(err)return res.err(err)
        if(result.length!==1)return res.err('获取用户信息失败')
        res.ok('获取成功',{
            data:result[0]
        })
    })
}

// 更新用户信息
exports.updateUserinfo=(req,res)=>{
    db.query(infoSql.update_user,[req.body,req.body.id],(err,result)=>{
        if(err)return res.err(err)
        if(result.affectedRows !== 1) return res.err('修改用户信息失败')
        return res.ok('更新成功')
    })
}

// 登录后，重置密码
exports.updatePassword=(req,res)=>{
    //需要查询一下用户以前的密码
    db.query(infoSql.search,req.auth.id,(err,result)=>{
        if(err) return res.err(err)
        if(result.length!==1) return res.err('用户不存在')

        //对比传过来的旧密码和数据库的密码
        const comparePassword=bcrypt.compareSync(req.body.oldPwd,result[0].password)
        if(!comparePassword) return res.err('原密码错误')
        // 对新密码进行加密
        const newPwd=bcrypt.hashSync(req.body.newPwd,10)
        db.query(infoSql.update_password,[newPwd,req.auth.id],(err,result)=>{
            if(err) return res.err(err)
            console.log(result)
            if(result.affectedRows!==1) return res.err('重置密码失败')
            res.ok('更新成功')
        })
    })
}

// 更新头像
exports.updateAvatar=(req,res)=>{
    db.query(infoSql.update_avatar,[req.body.avatar,req.auth.id],(err,result)=>{
        if(err) return res.err(err)
        if(result.affectedRows !== 1) return res.err('更新头像失败')
        res.ok('头像上传成功')
    })
}