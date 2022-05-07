const joi = require("joi");

const username=joi
    .string()
    .alphanum()
    .min(1)
    .max(10)
    .required()
const password=joi
    .string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required()
// - [\S](6,12)：6-12位非空字符

const id=joi
    .number()
    .integer()
    .min(1)
    .required()
const nickname=joi
    .string()
    .required()
const email=joi
    .string()
    .email()
    .required()

const avatar=joi
    .string()
    .dataUri()
    .required()



// 导出验证规则对象
// 需要验证body数据里面的username和password
exports.user_schema={
    body:{
        username,
        password
    }
}

exports.update_user_schema={
    body:{
        id,
        nickname,
        email,
    }
}

exports.update_password_schema={
    body:{
        id,
        // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
        // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
        // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
        oldPwd:password,
        newPwd:joi.not(joi.ref('oldPwd')).concat(password),
    }
}

exports.update_avatar_schema={
    body:{
        avatar
    }
}

