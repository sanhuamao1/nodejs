const Joi = require("joi")

const joierr=(err,req,res,next)=>{
    if(err instanceof Joi.ValidationError) return res.err(err)
    res.err(err)
}

module.exports=joierr