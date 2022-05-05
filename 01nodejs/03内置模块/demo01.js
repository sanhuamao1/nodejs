const fs=require('fs')
fs.readFile('./files/01test.txt','utf8',(err,data)=>{
    if(err){
        return console.log('文件读取失败：',err)
    }  
    console.log('文件读取成功',data)
})