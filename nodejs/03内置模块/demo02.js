const fs=require('fs')
fs.writeFile('./files/02test.txt','abcde','utf8',(err)=>{
    if(err){
        return console.log('文件写入失败：',err)
	}  
    console.log('写入成功')
})