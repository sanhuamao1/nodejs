const express=require('express')
const router=express.Router()       //路由中间件

//在路由对象上挂载请求，会从上到下一次匹配
router.get('/getlist',(req,res)=>{
    res.send({
        status:200,
        msg:"请求成功",
        data:[
            {id:1,name:'张阿三'},
            {id:2,name:'李小四'},
        ]
    })
})

router.post('/adduser',(req,res)=>{
     res.send({
        msg:"添加成功",
        data:req.body
    })
})

module.exports=router
