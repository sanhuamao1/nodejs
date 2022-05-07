

const path=require('path')
const db=require('../db/index')
let artSql={
    add_article:'insert into e_articles set ?',
    delete_article:'update e_articles set is_deleted=1 where id=?',
    update_article:'update e_articles set ? where id=?',
}

// 添加文章
exports.addArticle=(req,res)=>{
    const file=req.file
    const articleInfo = {
        ...req.body,// 标题、内容、状态、所属的分类Id
        cover_img:'\/uploads'+'\/'+file.filename,// 文章封面在服务器端的存放路径
        publish_date: new Date(),// 文章发布时间
        author_id: req.auth.id,// 文章作者的Id  
    }
    db.query(artSql.add_article,articleInfo,(err,result)=>{
        if(err) return res.err(err)
        if(result.affectedRows !== 1) return res.err('发布文章失败！')
        res.ok('发布文章成功')
    })
}

exports.deleteArticle=(req,res)=>{
    db.query(artSql.delete_article,req.params.id,(err,result)=>{
        if(err) return res.err(err)
        if(result.affectedRows !== 1) return res.err('删除失败！')
        res.ok('删除成功！')
    })
}

exports.updateArticle=(req,res)=>{
    console.log(req.body)
    const file=req.file
    const articleInfo = {
        ...req.body,// 标题、内容、状态、所属的分类Id
        cover_img:'\/uploads'+'\/'+file.filename,// 文章封面在服务器端的存放路径
        publish_date: new Date(),// 文章发布时间
        author_id: req.auth.id,// 文章作者的Id  
    }
    db.query(artSql.update_article,[articleInfo,articleInfo.id],(err,result)=>{
        if(err) return res.err(err)
        if(result.affectedRows !== 1) return res.err('更新失败！')
        res.ok('更新成功！')
    })
}
