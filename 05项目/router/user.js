const express =require('express')   
const router=express.Router()
const userHandler=require('../router_handler/user')

// 导入验证对象规则
const {user_schema} =require('../schema/user')
// 实现数据验证的局部中间件
const expressJoi=require('../utils/expressJoi')


// 注册新用户
router.post('/reguser',expressJoi(user_schema),userHandler.regUser)

// 登陆
router.post('/login',expressJoi(user_schema),userHandler.login)

module.exports=router