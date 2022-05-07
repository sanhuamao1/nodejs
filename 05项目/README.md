## 配置
- cors跨域
- 解析请求体
- router模块——路由处理函数模块
- mysql模块+db文件夹:创建数据库的连接对象

## user模块
注册
1. 检测表单数据是否为空
2. 检测用户名是否被占用
3. 对密码进行加密处理后再保存：[bcryptjs](https://www.npmjs.com/package/bcryptjs) 
4. 插入新用户
5. 验证
    - [joi](https://joi.dev/api/?v=17.6.0)：定义验证规则，把每个模块的数据验证对象放入schema中
    - expressjoi：实现验证，传入schema进行验证
登陆
1. 判断是否存在该用户
2. 验证密码
3. 生成token
    - jsonwebtoken：生成token
    - express-jwt：解析token

## info模块
1.获取用户信息
2.更新用户信息
3.重置密码
 
## 中间件
- 错误处理
- 正确处理
- 数据验证——路由的数据验证局部中间件
- 数据验证——全局捕获验证失败的中间件