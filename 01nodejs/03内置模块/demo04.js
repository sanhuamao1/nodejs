const fs=require('fs')
const path=require('path')
const regStyle=/<style>[\s\S]*<\/style>/    //空白与非空白 匹配多次
const regScript=/<script>[\s\S]*<\/script>/ 

//处理css
function resolveCSS(htmlStr){
    const cssArr=regStyle.exec(htmlStr) //所有匹配到的数组
    const newCss=cssArr[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./files/04test/index.css'),newCss,(err)=>{
        if(err)return console.log('写入失败',err)
    })
}

// 处理JS
function resolveJS(htmlStr){
    const jsArr=regScript.exec(htmlStr) //所有匹配到的数组
    const newjs=jsArr[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./files/04test/index.js'),newjs,(err)=>{
        if(err)return console.log('写入失败',err)
    })
}

// 处理html
function resolveHtml(htmlStr){
    const newHTML=htmlStr
        .replace(regStyle,'<link ref="stylesheet" href="./index.css"/>')
        .replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'./files/04test/index.html'),newHTML,(err)=>{
        if(err)return console.log('写入失败')
    })
}


fs.readFile(path.join(__dirname,'./files/04test/resource.html'),'utf8',(err,data)=>{
    resolveCSS(data)
    resolveJS(data)
    resolveHtml(data)
    console.log('成功分解')
})