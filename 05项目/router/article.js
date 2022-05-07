const express=require('express')
const router=express.Router()
const expressJoi=require('../utils/expressJoi')
const upload=require('../utils/upload')



const {addArticle,deleteArticle,updateArticle} =require('../router_handler/article')
const {add_article_schema,id_required_schema,update_article_schema} =require('../schema/article')

// 添加文章
// upload.single():接受一个以 fieldname 命名的文件。这个文件的信息保存在 req.file。
router.post('/addarticle',upload.single('cover_img'),expressJoi(add_article_schema),addArticle)
router.get('/deletearticle/:id',expressJoi(id_required_schema),deleteArticle)
router.post('/updatearticle',upload.single('cover_img'),expressJoi(update_article_schema),updateArticle)



module.exports=router