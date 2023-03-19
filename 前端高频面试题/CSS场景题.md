# CSS场景题
1. 三栏布局
- position margin
- flex
-grid
2. 三角形/扇形
```
{
  width: 0;
  height: 0,
  border: 100px solid transtion;
  border-top-color: red;
}

{
  border-radius: 100px;
}
```

3. 自适应正方形
```
.quare{
  width: 10vw;
  height: 10vw;
}
.quare {
  width: 20%;
  height: 0;
  padding-top: 20%
  background-color: #bfa;
}
```
4. 单行/多行文本溢出
```
{
  overflow: hidden;
  text-overflow: essilaple;
  white-space: nowrap
}
{
  overflow: hidden;
  text-overflow: essilaple;
  display: -webkit-box;
  -webkit-box-orient: vertiacl;
  -webkit-line-clmp:3;
}
```

5. 1px问题
- 伪元素先放大,再缩小
- viewport 缩放