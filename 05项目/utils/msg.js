const errmw=(req,res,next)=>{
    res.err=function(err,status=500){
        res.send({
            status,
            msg:err instanceof Error?err.message:err
        })
    }
    next()
}

const okmw=(req,res,next)=>{
    res.ok=function(msg='ok',data,status=200){
        res.send({
            status,
            msg,
            ...data
        })
    }
    next()
}
module.exports={
    errmw,
    okmw
}