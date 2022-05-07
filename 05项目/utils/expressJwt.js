const config = require('../config')
const {expressjwt: jwt}=require('express-jwt')

const dejwt=()=>{
    return jwt({
        secret:config.jwtSecretKey,
        algorithms: ["HS256"],
    }).unless({path:[/^\/api\//]}) //设置以/api/开头的不需要访问权限
}

module.exports=dejwt