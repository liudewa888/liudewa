1. H5 新增语义化标签
- header nav main article section aside footer

2. script 标签 defer 和 async 
- 都不阻塞页面解析
- defer js下载和页面解析同时进行，等到页面全部解析完毕（domcomtentload），才会执行js，
- async 异步执行，js下载和执行和页面解析并行，多个js不能保证执行顺序

3. Web Worker
- 独立于主线程之外的线程
- 检测浏览器是否支持，new一个Worker实例，通过postMessage通信
- 用于数据计算，大型音频视频处理，消耗主线程性能的都放到Web Worker里面中

4. H5 新增
- 储存 loacalstroage 和 sessioStroage
- 元素选择器 document.querySelectElement 和 all
- drag drop
- audio 和 video
- input 类型 email address
- FormData 对象
- Web Worker
- Canvas