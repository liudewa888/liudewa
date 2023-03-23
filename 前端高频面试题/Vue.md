# Vue高频面试题
01. Vue响应式原理
* vue创建组件实例时, 会把一个对象传给data通过Object.defineProperty, 转化为对应的getter 和setter. 收集依赖, 对应的视图更新
02. 组件通信
* 父传子 props emit parent ref 兄弟 parent root vuex 跨层级 root vuex provide+inject
03. 双向绑定原理
* 数据更新对应视图更新, 视图值变化对应的数据也跟着变化
* v-mode语法糖, 本质是:value + @input
* 不用处理复杂的事件代码, 提升开发效率, 代码结构清晰
04. v-show 和 v-if
* 动态添加删除, 控制样式显隐
* v-if惰, true才加载
* v-if 动态切换性能 初始加载性能消耗
05. computed 和 watch
* 有缓存, 不能处理异步
- 
06. nextTick
* vue异步更新机制, 第一时间拿到更新后的dom
* 数据一旦变化, vue开启一个任务队列, 将此次任务全部变化都加入到队列中, 如果一个watcher触发多次, 只加入一次, 在队列尾部加入了nextTick回调函数, 保证在dom更新后, 执行回调
* 优先使用 Promise.then Moutionobserve setImaditate setTimeout
07. 内置指令
* 11个 
08. MVC MVVM
- 
09. template模版编译原理
* template 通过comilertoFunction 转成 render函数字符 过程:
* parse 成 ast 正则 1普通值 2表达式 3文本
* 优化: 找到静态节点 做标记, 利好虚拟dom
* 生成 render函数字符 通过 new Function('render')
10. Vue3 性能优化
* v-for v-if不同时使用
* v-for 使用 唯一key
* 使用组件缓存
* 三方库按需引入
* 路由动态引入组件
11. 生命周期

12. vue.use原理
* 注册全局配置, 注册全局引入
13. spa 和 ssr
* spa: 页面首次加载后, 后续不用刷新, 用户体验好; 真正的前后端分离, 减轻服务端压力; 首屏加载慢; seo
* ssr: 把前端渲染放到后端, 再把结果返回给前端; 生命同期不能使用; 引入库要特殊处理才能使用; 
14. mixin 和 extends
* 组件通用的生命周期, data metheod抽取成公共的进行利用; 
* 单个组件进行扩展
* 都是调用mergerOptions

15. keep-alive
* 保存组件状态
* 组件切掉触发deactived, 加载时触发actived, destored, beforeDestory不会触发
* 内置组件, 去内存中查找
16. vuex
* 5 state getter moutation action module
* 唯一修改 moutation; action异步修改通过moutation
17. hash 和 history
* \#后面内容不会发送到服务器, 兼容性好, 通过监听hashChange实现跳转
* h5新增api, 能过pushstate, replaceState进行跳转, 刷新页面公出现404, 需要服务器配置
* 在vue中 都是通过popstate
18. route 和 router
* 本页面信息, 包含path name fullpath query参数
* 路由实例, 包括路由钩子函数, 路由跳转方法
19. vue-router 路由钩子
* 全局守卫 boforeEach beforeResolve afterEach
* 独享 beforeEnter
* 组件内 beforeRouteEach beforeRouteUpdate afterRouteEach
- 钩子执行顺序: [链接](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B)
20. 虚拟dom
- js对象,用js对象结构描述dom
- 实现跨平台 nodejs uniapp
- 减少直接操作dom,减少重绘回流次数,性能提升
- 将vue模版编译为ast,优化,生成render,render函数生成虚拟dom
21. diff算法
- vue中diff算法是patch算法,比较新旧dom进行真实dom更新
- vue1每个属性对应一个watcher,精准更新不用diff,但无法承载较大应用;vue2每个组件对应一个watcher,通过diff对比前后差异,进行更新
- 深度优先,同层比较,两端开始
- 
22. key作用
- 提供唯一标识,更快的diff
- 不要使用数组索引,导致隐藏bug
- 判断两个节点是不是相同,有效的方式就是判断key和类型,不赋值就是undefined,就会相等,进而更新
23. vue3新特性
- api层面: componsition api; sfc composition 语法糖;teleport传送门;fragment 虚拟根标签;自定义渲染器;sfc css变量
- 性能方面
- 更小: 更好的摇树优化
- 更快: 优化diff,proxy响应,patchflag block
- 更容易维护: ts 模块化
- 更容易扩展: 独立的响应式模块, 自定义渲染器
24. composition api 与 options api
- 函数式引用,更灵活,不用担心this问题
- 组合式, 代码过多,来加切换
- 官方快速问答[链接](https://cn.vuejs.org/guide/extras/composition-api-faq.html)
- Vue3推荐使用组合,并不放弃options,简单使用op 复杂,强维护使用com
25. proxy 与 defineProperty
- 数组要单独处理,数组和对象赋值监听不到,要用set方法,和delete方法,不能处理map 和 set,初始化递归,性能消耗大
- 解决了上面问题,返回新的监听对象,初始化 惰性 性能好
26. reactive 与 ref
- 处理对象,通过proxy,要setup语法里面,要.形式,解构失去响应式,借助toRefs
- 简单类型,借助reflampl类通过内部getter setter,也可能处理对象,本质调用eactive
