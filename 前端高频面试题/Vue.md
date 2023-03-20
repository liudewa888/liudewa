# Vue高频面试题
1. Vue响应式原理
- vue创建组件实例时,会把一个对象传给data通过Object.defineProperty,转化为对应的getter 和setter.收集依赖,对应的视图更新
2. 组件通信
- 父传子 props emit parent ref 兄弟 parent root vuex 跨层级 root vuex provide+inject
3. 双向绑定原理
- 数据更新对应视图更新,视图值变化对应的数据也跟着变化
- v-mode语法糖,本质是:value + @input
- 不用处理复杂的事件代码,提升开发效率,代码结构清晰
4. v-show 和 v-if
- 动态添加删除, 控制样式显隐
- v-if惰,true才加载
- v-if 动态切换性能 初始加载性能消耗
5. computed 和 watch
- 有缓存,不能处理异步
- 
6. nextTick
- vue异步更新机制,第一时间拿到更新后的dom
- 数据一旦变化,vue开启一个任务队列,将此次任务全部变化都加入到队列中,如果一个watcher触发多次,只加入一次,在队列尾部加入了nextTick回调函数,保证在dom更新后,执行回调
- 优先使用 Promise.then Moutionobserve setImaditate setTimeout
7. 内置指令
- 11个 
8. MVC MVVM
- 