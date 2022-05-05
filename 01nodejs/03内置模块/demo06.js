const fs = require('fs')
const path=require('path')
const http=require('http')
const server=http.createServer()

server.on('request',(req,res)=>{
    const url=req.url
    let fpath=''
    if(url==='/'){
        fpath=path.join(__dirname,'./files/01test.txt') //默认获取的资源
    }else{
        fpath=path.join(__dirname,url)                  //其他
    }
    fs.readFile(fpath,(err,data)=>{
        res.end(data)
    })
})
server.listen('8082',()=>{
    console.log('服务器运行在:http://localhost:8082',)
})