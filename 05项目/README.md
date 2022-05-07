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
4.头像

## 文章
1. [multer](https://www.npmjs.com/package/multer)：处理form-data
## 中间件
- 错误处理
- 正确处理
- 数据验证——路由的数据验证局部中间件
- 数据验证——全局捕获验证失败的中间件

## 错误记录
```
Error: Illegal arguments: string, undefined
不合法的参数：字符串 未定义
-------------
场景：
在重置密码的处理函数中
原本查询用户是否存在的语句是：select * from e_users where id=?'，目的是想获得用户的旧密码
但我突然想起老师说写*效率低，于是改成了username，
核查过，表的字段确实有username
后面我在终端执行了 select username from e_users where id=7，是有结果的。
然后往下一看，下一条更新密码的语句中用到了我上一条查询语句结果的密码，而我上一条语句没有去获取密码字段，于是报错了！
---------------
结论：
如果看到类报错，建议去核实一下传给sql语句的参数是否可以正常获取到
```
```
Cannot set headers after they are sent to the client
不能在响应客户端之后设置头部
---------------------------
场景：
为了方便，在写新的处理函数时，我直接copy别的处理函数，打算参考着写
结果！我写好了现在处理函数，之前copy过来的忘记删掉了！
于是呢，我的处理函数就存在多个res.send。
这个翻译怪怪的，于是我将这个错误理解为：
如果已经响应给了客户端，就不能重复响应（因为每次响应都会带着头部，即set headers？）
------------------
结论：
检查自己是否调用了多次res.send()，
检查是否有些res.send()忘记return了
```

## 路由设计思路
1. 在router挂载路由，写上简单的处理函数。到app.js中use路由，测试一下是否成功响应。
2. 在routerhandler定义对应的处理函数，并简单地返回ok，之后将其放在对应的router的处理函数中，再次测试一下是否能成功响应。
3. 定义验证，之后把验证应用到对应router的局部中间件中，试图模拟数据测试能否成功验证。
4. 对routerhandler的对应的处理函数进行详细编写，加入sql进行最后的测试。
