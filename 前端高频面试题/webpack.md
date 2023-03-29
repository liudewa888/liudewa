1. webpack 编译原理

- 初始化: 启动构建,读取与合并配置参数,加载 plugin,实例化 Compiler
- 编译: 从 Entry 出发针对每个 moudle 串行调用对应的 loader 去翻译文件的内容,再找到 Module 依赖的 Moudle,递归地进行编译处理
- 输出:将编译后的 Moudle 组合成 chunk,将 chunk 转换为文件,输出到文件系统中

2. loder 常见?写过?

- babel-loader vue-loader ts-loader style-loader less-loader;写过清除输出的 loader

3. plugin 常见?写过?

- 加注释的的 plugin; compiler.hooks.emit,compilation.assets;apply
- html,eslint,mincss-extranal,css-minimizer image-minimizer terser ignore I18n dll

4. loader 和 plugin 区别

- loader 进行简单翻译成 webpack 能识别的;编译前运行
- plugin 功能强大,在 webpack 广播时,挂载自己要做的事调用 webpack 提供的 api 代码压缩;编译期间一直运行

5. webpack 优化

- 更好的开发体验: sourcemap
- 更快的构建速度: 5 oneof include/exclude 内存 多进程 hotMoudleReplcement
- 更小的构建体积: 3 treeshake @babel/runtime 图片压缩
- 优化运行性能: 5 splitChunk preload/prefetch networkCache core.js pwa

6. vite 和 webpack

- 快速冷启动
- 使用 esModule,只对请求的文件进行编译,效率高
- 真正的按需加载, 热模块更新

7. babel 过程

- parse 将 code 解析为 ast 使用 babylon
- 转换 transform 更新删除 使用 babel-travesel
- 生成 gennerate 生成新的 code 使用 babel-gennerate
