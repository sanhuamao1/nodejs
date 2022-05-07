const express =require('express')   
const router=express.Router()

//处理函数
const infoHandler=require('../router_handler/info')

//验证
const expressJoi=require('../utils/expressJoi')
const {
    update_user_schema,
    update_password_schema,
    update_avatar_schema}=require('../schema/user')

router.get('/userinfo',infoHandler.userInfo)
router.post('/update/userinfo',expressJoi(update_user_schema),infoHandler.updateUserinfo)
router.post('/update/password',expressJoi(update_password_schema),infoHandler.updatePassword)
router.post('/update/avatar',expressJoi(update_avatar_schema),infoHandler.updateAvatar)

module.exports=router