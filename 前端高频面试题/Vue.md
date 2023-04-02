# Vue 高频面试题

1.  Vue 响应式原理

- vue 创建组件实例时, 会把一个对象传给 data 通过 Object.defineProperty, 转化为对应的 getter 和 setter. 收集依赖, 对应的视图更新

2.  组件通信

- 父传子 props emit parent ref 兄弟 parent root vuex 跨层级 root vuex provide+inject

3.  双向绑定原理

- 数据更新对应视图更新, 视图值变化对应的数据也跟着变化
- v-mode 语法糖, 本质是:value + @input
- 不用处理复杂的事件代码, 提升开发效率, 代码结构清晰

4.  v-show 和 v-if

- 动态添加删除, 控制样式显隐
- v-if 惰, true 才加载
- v-if 动态切换性能 初始加载性能消耗

5.  computed 和 watch

- 有缓存, 不能处理异步

*

6.  nextTick

- vue 异步更新机制, 第一时间拿到更新后的 dom
- 数据一旦变化, vue 开启一个任务队列, 将此次任务全部变化都加入到队列中, 如果一个 watcher 触发多次, 只加入一次, 在队列尾部加入了 nextTick 回调函数, 保证在 dom 更新后, 执行回调
- 优先使用 Promise.then Moutionobserve setImaditate setTimeout

7.  内置指令

- 11 个

8.  MVC MVVM

-

9.  template 模版编译原理

- template 通过 comilertoFunction 转成 render 函数字符 过程:
- parse 成 ast 正则 1 普通值 2 表达式 3 文本
- 优化: 找到静态节点 做标记, 利好虚拟 dom
- 生成 render 函数字符 通过 new Function('render')

10. Vue3 性能优化

- v-for v-if 不同时使用
- v-for 使用 唯一 key
- 使用组件缓存
- 三方库按需引入
- 路由动态引入组件

11. 生命周期

12. vue.use 原理

- 注册全局配置, 注册全局引入

13. spa 和 ssr

- spa: 页面首次加载后, 后续不用刷新, 用户体验好; 真正的前后端分离, 减轻服务端压力; 首屏加载慢; seo
- ssr: 把前端渲染放到后端, 再把结果返回给前端; 生命同期不能使用; 引入库要特殊处理才能使用;

14. mixin 和 extends

- 组件通用的生命周期, data metheod 抽取成公共的进行利用;
- 单个组件进行扩展
- 都是调用 mergerOptions

15. keep-alive

- 保存组件状态
- 组件切掉触发 deactived, 加载时触发 actived, destored, beforeDestory 不会触发
- 内置组件, 去内存中查找

16. vuex

- 5 state getter moutation action module
- 唯一修改 moutation; action 异步修改通过 moutation

17. hash 和 history

- \#后面内容不会发送到服务器, 兼容性好, 通过监听 hashChange 实现跳转
- h5 新增 api, 能过 pushstate, replaceState 进行跳转, 刷新页面公出现 404, 需要服务器配置
- 在 vue 中 都是通过 popstate

18. route 和 router

- 本页面信息, 包含 path name fullpath query 参数
- 路由实例, 包括路由钩子函数, 路由跳转方法

19. vue-router 路由钩子

- 全局守卫 boforeEach beforeResolve afterEach
- 独享 beforeEnter
- 组件内 beforeRouteEach beforeRouteUpdate afterRouteEach

* 钩子执行顺序: [链接](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B)

20. 虚拟 dom

- js 对象,用 js 对象结构描述 dom
- 实现跨平台 nodejs uniapp
- 减少直接操作 dom,减少重绘回流次数,性能提升
- 将 vue 模版编译为 ast,优化,生成 render,render 函数生成虚拟 dom

21. diff 算法

- vue 中 diff 算法是 patch 算法,比较新旧 dom 进行真实 dom 更新
- vue1 每个属性对应一个 watcher,精准更新不用 diff,但无法承载较大应用;vue2 每个组件对应一个 watcher,通过 diff 对比前后差异,进行更新
- 深度优先,同层比较,两端开始
-

22. key 作用

- 提供唯一标识,更快的 diff
- 不要使用数组索引,导致隐藏 bug
- 判断两个节点是不是相同,有效的方式就是判断 key 和类型,不赋值就是 undefined,就会相等,进而更新

23. vue3 新特性

- api 层面: componsition api; sfc composition 语法糖;teleport 传送门;fragment 虚拟根标签;自定义渲染器;sfc css 变量
- 性能方面
- 更小: 更好的摇树优化
- 更快: 优化 diff,proxy 响应,patchflag block
- 更容易维护: ts 模块化
- 更容易扩展: 独立的响应式模块, 自定义渲染器

24. composition api 与 options api

- 函数式引用,更灵活,不用担心 this 问题
- 组合式, 代码过多,来加切换
- 官方快速问答[链接](https://cn.vuejs.org/guide/extras/composition-api-faq.html)
- Vue3 推荐使用组合,并不放弃 options,简单使用 op 复杂,强维护使用 com

25. proxy 与 defineProperty

- 数组要单独处理,数组和对象赋值监听不到,要用 set 方法,和 delete 方法,不能处理 map 和 set,初始化递归,性能消耗大
- 解决了上面问题,返回新的监听对象,初始化 惰性 性能好

26. reactive 与 ref

- 处理对象,通过 proxy,要 setup 语法里面,要.形式,解构失去响应式,借助 toRefs
- 简单类型,借助 reflampl 类通过内部 getter setter,也可能处理对象,本质调用 eactive
