1. webpack编译原理
- 初始化
- 编译
- 输出 
2. loder常见?写过?
- babel-loader vue-loader ts-loader style-loader less-loader;写过清除输出的loader
3. plugin常见?写过?
- 加注释的的plugin; compiler.hooks.emit,compilation.assets;apply
- html,eslint,mincss-extranal,css-minimizer image-minimizer terser ignore I18n dll
4. loader 和 plugin 区别
- loader进行简单翻译成webpack能识别的;编译前运行
- plugin功能强大,在webpack广播时,挂载自己要做的事调用webpack提供的api 代码压缩;编译期间一直运行
5. webpack 优化
- 更好的开发体验: sourcemap
- 更快的构建速度: 5  oneof include/exclude 内存 多进程 hotMoudleReplcement
- 更小的构建体积: 3 treeshake @babel/runtime 图片压缩
- 优化运行性能: 5 splitChunk preload/prefetch networkCache core.js pwa
6. vite 和 webpack
- 快速冷启动
- 使用esModule,只对请求的文件进行编译,效率高
- 真正的按需加载, 热模块更新
7. babel 过程
- parse 将code解析为ast 使用babylon
- 转换 transform 更新删除 使用babel-travesel
- 生成 gennerate 生成新的code 使用 babel-gennerate