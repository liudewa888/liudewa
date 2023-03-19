1. link 和 @import
- link除css 可以加载其它资源, @import只加载css
- @import会等页面加载完毕后,再加载 link 并行加载
- @import 存在兼容性问题
2. 伪元素 和 伪类
- 不会出现在源码中,::before ::after
- 效果添加选择器,不会产生新元素 :hover :last-child :nth-child
3. css选择器 优先级
- !important>内联样式(1000) > #id(100) > .class/:hover/a[ref='eee'](10) > 标签/伪元素(1) > 后代/子代/兄弟/通配符*(0) > 外部 >默认
4. flex布局
- flex-flow: flex-dirction flex-wrap(默认row nowrap)
- flex-basis 剩余空间是否要分 auto
- order 顺序
- align-items stretch baseline
- flex: 1 1 0%
5. position 属性
- static 没有定位
- inherit 继承父元素position
- sticky 粘性定位 最近滚动元素
6. 盒子模型
- IE: width= content+padding + border ;content: width = content
7. CSS3 新特性
- border-radius
- :not()
- text-shadow
- transform
- 动画
- 线性渐变(gradient)
8. 回流 和 重绘
- 回流: 重新布局 消耗性能, 窗口缩放,宽度改变, display:none,元素添加删除
- 背景颜色 ,字体颜色,透明度
9. css 预处理器(less,sass) 后处理器(postCss)
- less: 1. 可以嵌套,定义变量 2. 结构清晰 3. 浏览器语法差异处理
- postCss 添加浏览器私有性前辍, 兼容性处理
10. css 性能优化
- 压缩
- 少用@import
- 少用浮动
- 减少页面重排 重绘
- 样式与内容分离
- 抽取公共类
11. 媒体查询
- 给不同的媒体类型,定义不同的样式
- 不同型号的设备做响应适配
-\@media
12. css工程化
- 结构清晰,易于维护
- 模块化,实现复用
- less sass: 提供变量,函数计算,嵌套,代码片段extends
- postCss: 对浏览器私有属性加前辍,兼容性处理;可以使用未来css特性
13. 水平垂直居中

14. 响应式布局
- rem
- vw vh vmin vmax
- flex布局
- grid布局
- 媒体查询
- 容器查询
15. BFC
- 块级格式化上下文;BFC内部布局,不受外部影响;BFC区域不会与浮动发生重叠
- 导致: display: flex;float;overflow:hidden/auto/scroll;position:fixed/absolute
- 作用: margin重叠;父元素高度塌陷