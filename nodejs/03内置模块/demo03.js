const fs=require('fs')
fs.readFile("./files/03test-resource.txt",'utf8',(err,data)=>{
    if(err){
        return console.log('读取失败')
    }
 
    //处理字符串
    let arr=data.split(' ')
    let newarr=arr.map(item=>item.replace('=','：'))
    const newstr=newarr.join('\r\n') //回车换行

    //写入字符串
    fs.writeFile('./files/03test-output.txt',newstr,(err)=>{
        if(err){
            return console.log('写入失败')
        }
        console.log('写入成功')
    })
})