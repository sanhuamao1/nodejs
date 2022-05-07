// 参照：https://github.com/liulongbin1314/express-joi/blob/master/index.js
// 参考了文档后对前者进行了补充

const Joi = require('joi')
// 参数1：需要被验证的内容
// 参数2：选项
const expressJoi = function (schemas, options = { strict: false }) {
    
    // 01 非严格模式
    if (!options.strict) {
        // allowUnknown 允许提交未定义的参数项，默认值false
        // stripUnknown 过滤掉那些未定义的参数项，默认值false
        // 下面将改为允许提交未定义参数项，不过滤未定义参数项，并且把多余的配置项解构出来
        options = { allowUnknown: true, stripUnknown: true, ...options }
    }

    // strict是自己定义的，由于现在没什么作用了，且joi选项本身不包含该项，故删除掉
    delete options.strict

    // 02 express定义中间件
    // 分别对body、query、params的内容进行验证
    return function (req, res, next) {
        ['body', 'query', 'params'].forEach(key => {
            // 如果用户没有传入该数组中的项，跳过
            if (!schemas[key]) return

            // 用户传入了该数组中的项，那么对每一项里面的内容进行验证
            const schema = Joi.object(schemas[key])

            // 03 通过joi的validate()对传入的内容进行验证
            // 需要传入需要验证的内容和一些配置项，其返回值有value、error、warning 、artifacts 
            // error表示验证失败后返回的信息，value表示传进来的需要验证的内容
            const { error, value } = schema.validate(req[key], options)

            if (error) {
                throw error
            } else {
                req[key] = value
            }
        })
        // 校验通过
        next()
    }
}

module.exports = expressJoi