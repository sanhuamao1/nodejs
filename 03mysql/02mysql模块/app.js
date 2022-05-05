const mysql=require('mysql')

// 连接
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'homework' //指定数据库
})

//说明：这里测试的test表： id（PK+自增）——name——status

/*  // 01 更新数据：从test表中，找到id=2的数据，将名字改成何许人

    const sql=`update test set name='何许人' where id=2`
    db.query(sql,(err,result)=>{
        if(err){return console.log(err.message)}
        console.log(result.message)
    })
*/


/*  // 02 插入数据：?作为占位符，在db.query的第二个参数中，当需要传入的数据有多个，用数组的形式传递；如果是单个，可直接传递值

    const user={name:'旺仔小馒头'}
    const sqlStr=`insert into test(name) values(?)`
    db.query(sqlStr,[...Object.values(user)],(err,result)=>{
        if(err)return console.log(err.message)
        if(result.affectedRows===1){
            console.log('插入成功')
        }
    })
*/


/*  
    //02插入数据：第二种写法
    const user={name:'好运来'}
    const sqlStr=`insert into test set ?`
    db.query(sqlStr,user,(err,result)=>{
        if(err)return console.log(err.message)
        if(result.affectedRows===1){
            console.log('插入成功')
        }
    })
*/





// 更新语句
// const user={id:12,name:'宋小宝'}
// const sqlStr=`update test set name=? where id=?`
// db.query(sqlStr,[user.name,user.id],(err,result)=>{
//     if(err)return console.log(err.message)
//     if(result.affectedRows===1){
//         console.log('更新成功')
//     }
// })

// const user={id:12,name:'黄婉玉'}
// const sqlStr=`update test set ? where id=?`
// db.query(sqlStr,[user,user.id],(err,result)=>{
//     if(err)return console.log(err.message)
//     if(result.affectedRows===1){
//         console.log('更新成功')
//     }
// })

// 删除
// const sqlStr=`delete from test where id=?`
// // 有多个占位符时，用数组，否则可以传入单个
// db.query(sqlStr,1,(err,result)=>{
//     if(err)return console.log(err.message)
//     if(result.affectedRows===1){
//         console.log('删除成功')
//     }
// })

// 标记删除
// const sqlStr=`update test set status=? where id=?`
// // 有多个占位符时，用数组，否则可以传入单个
// db.query(sqlStr,[1,2],(err,result)=>{
//     if(err)return console.log(err.message)
//     if(result.affectedRows===1){
//         console.log('标记删除成功')
//     }
// })
