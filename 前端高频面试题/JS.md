1. instanceof 原理和实现
- 作用: 判断构造函数的prototype是否在对象的原型链上
- {
  function newInstanceof(left,right){
    let proto = Object.getPrototypeOf(left)
    while(true){
      if(!proto)return false;
      if(proto === right.prototype) return true;
      proto = Object.getPrototypeOf(proto)
    }
  }
}

2. 0.1 + 0.2 !== 0.3
- 二进制,精度问题,都是无限循环数
- Number.EPSILON 误差范围

3. var 和 let const 区别
- 声明提升,变量覆盖, 多次声明, 挂载全局
- 暂时性死区, const 必须初始值

4. 箭头函数
- 代码清晰
- 没有this arguments generoter
- 不能new

5. this 指向
- 上下文一个属性
- 
- 优先级: 构造>call,apply>对象>普通

6. Proxy
- 对对象进行自定义操作,返回一个代理后的对象

7. 模版字符串
- 使用简单,代码清晰,便于维护
- {

}

8. ES6模块 和 CommonJS

9. 原型 和原型链

10. 闭包

11. Promise

12. async 和 await

13. 事件循环(EventLoop)