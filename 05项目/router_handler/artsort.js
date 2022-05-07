

const db=require('../db/index')
let artSql={
    sort_list:'select * from e_articles_sorts',
    is_sort_exist:'select * from e_articles_sorts where name=? or alias=?',
    add_sort:'insert into e_articles_sorts set ?',
    delete_sort:'update e_articles_sorts set is_deleted=1 where id=?',//标记删除
    get_sort_detail:'select * from e_articles_sorts where id=?',
    update_sort:'update e_articles_sorts set ? where id=?',
}


// 获取文章类别
exports.getArtSort=(req,res)=>{
    db.query(artSql.sort_list,(err,result)=>{
        if(err) return res.err(err)
        res.ok('ok',{
            data:result
        })
    })
}


// 添加文章类别
exports.addSort=(req,res)=>{
    db.query(artSql.is_sort_exist,[req.body.name,req.body.alias],(err,result)=>{
        if(err) return res.err(err)
         // 分类名称 和 分类别名 都被占用
        if (result.length === 2) return res.err('分类名称与别名被占用，请更换后重试！')
        if (result.length === 1 && result[0].name === req.body.name && result[0].alias === req.body.alias) return res.err('分类名称与别名被占用，请更换后重试！')
        // 分类名称 或 分类别名 被占用
        if (result.length === 1 && result[0].name === req.body.name) return res.err('分类名称被占用，请更换后重试！')
        if (result.length === 1 && result[0].alias === req.body.alias) return res.err('分类别名被占用，请更换后重试！')
        db.query(artSql.add_sort,req.body,(err,result)=>{
            if(err) return res.err(err)
            if(result.affectedRows !== 1) return res.err('添加失败')
            res.ok('添加成功')
        })
    })
}


// 删除文章类别
exports.deleteSort=(req,res)=>{
    db.query(artSql.delete_sort,req.params.id,(err,result)=>{
        if(err) return res.err(err)
        if(result.affectedRows !== 1) return res.err('删除失败')
        res.ok('删除成功')
    })
}

exports.getSortById=(req,res)=>{
    db.query(artSql.get_sort_detail,req.params.id,(err,result)=>{
        if(err) return res.err(err)
        if(result.length !== 1) return res.err('获取失败')
        res.ok('ok',{
            data:result[0]
        })
    })
}


// 更新文章类别
exports.updateSort=(req,res)=>{
    db.query(artSql.is_sort_exist,[req.body.name,req.body.alias],(err,result)=>{
        if(err) return res.err(err)
        if(result.length!==0)return res.err('分类名称或别名被占用')
        db.query(artSql.update_sort,[req.body,req.body.id],(err,result)=>{
            if(err) return res.err(err)
            if(result.affectedRows !== 1) return res.err('更新失败')
            res.ok('更新成功')
        })
    })
}