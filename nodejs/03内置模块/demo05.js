const http=require('http')
const server=http.createServer()    // 1.通过http模块创建一个服务器

server.on('request',(req,res)=>{    // 2.监听请求事件
    const url=req.url
    let content='<h1>404 NOT FOUND!</h1>'
    if(url=='/'||url=='/index.html'){
        content='<h1>首页</h1>'
    }else if(url=='/about.html'){
        content='<h1>关于</h1>'
    }
    res.setHeader('Content-Type','text/html;charset=utf-8') //使中文不乱麻
    res.end(content)
})

server.listen(8080,()=>{            // 3.启动服务器
    console.log('服务器运行在:http://localhost:8080')
})