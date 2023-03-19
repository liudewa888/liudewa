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
- vue3中的使用

7. 模版字符串
- 使用简单,代码清晰,便于维护
- 实现: replace正则,eval,

8. ES6模块 和 CommonJS
- ES6: export import; 静态编译 值只读的;
- commonjs: require moudle.exports;引用 浅拷贝;
9. 原型 和原型链
- \__proto\__ 指向 构造函数的prototype
- 对象的原型指向构造函数的prototype,构造函数prototype的原型,继续向上指向它的构造函数的prototype,一直往上形成一条链
- 顶级指向Object.prototype ,再往上 指向null

10. 闭包
- 外部可以访问函数内部的作用域和变量
- 好处: 保证函数不引用,内部变量继续使用;内部变量在外部使用
- 坏处: 内存泄漏
11. Promise
- 异步的一种处理方式
- 解决之前回调地狱问题
- 三种状态
- 缺点: 不能中断;不能判断发生进行了多少;不主动捕获错误,错误不反应外部

12. async 和 await
- 语法糖
- 同步方式写异步代码
- 调试友好
- try-catch 方便捕获

13. 事件循环(EventLoop)
- 主线程;调用栈;任务队列
- 依次执行,先把同步代码,放到调用栈执行,碰到异步任务,把对应回调函数放到任务队列中,调用栈清空后,开始事件循环,先把微任务队列全部执行,再执行宏任务队列,队列都清空了停止循环.

14. 微任务 和 宏任务
- 微: promise moutionobserve process.nextTick
- 宏: 定时器 setImmediate

15. 对象继承方式
- 原型链继承
- 构造函数
- 组合继承
- 寄生组合