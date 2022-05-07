const multer = require('multer') 
const path = require('path')
const stringRandom =require('string-random')

function fileFilter (req, file, cb) {
    let extname = path.extname(file.originalname) 
    let allow='.jpge|.png|.jpg'
    if(allow.includes(extname)){
        cb(null, true)
    }else{
        cb(new Error('仅支持'+allow+'文件格式'))
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
        let extname = path.extname(file.originalname)   //扩展名
        cb(null, stringRandom(24, { numbers: true })+ extname)
    }
})

const upload = multer({ 
    storage,
    fileFilter
 })

 module.exports=upload