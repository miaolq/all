鲁 yewei
陈馨
肖月
吴星
邵滨滨
肖丹
一班的

数学、物理老师、英语老师、语文 对我挺好的。。。。

回顾年轻时候，令我清醒

小时候胆小，长大了麻木。 不，改变自己

## react 的 render 是深度优先遍历

fiber 之后： 被浏览器打断时，只挂载了一些节点，不好看

如果有下一个就先输出下一个的意思！！！
二叉树中序非递归遍历
合并多个有序数组

memory cache ; disk cache

1. 移动魔方、小程序、h5、PC 管理系统

垃圾回收： 栈，堆

内存泄漏：

0. 全局对象
1. 移除 dom 前不需要删除 evenListener，除了很老的浏览器，都会自己处理
2. setInterval, eventListener 引用的闭包

条件断点
在异常时断点
store as a global variable
Blackbox
https://juejin.cn/post/6844903877532205064#heading-8
https://blog.bitsrc.io/debugging-javascript-like-a-pro-a2e0f6c53c2e

笔记： tag 搜索、内容搜索

渲染进程： 主线程、worker 线程、合成线程（将图层分块）、栅格化线程池（生成位图）

layer-tree 分层渲染： https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context

首屏 https://juejin.cn/post/6844903891159498759
错误监控 https://juejin.cn/post/6844903751271055374#heading-24

协程

plugin: https://www.digitalocean.com/community/tutorials/js-create-custom-webpack-plugin

webpack 模块执行一遍会缓存，当时找到这个模块，重新执行了一下。。。。
打包大小

// todo
0.1 + 0.2  
1 8 23
1 11 52
max number = Math.pow(2, 52)
符号位，指数位，尾数位
定长，不定点
为什么是指数位。11 位，留给尾数位多点来保持精度更精确
https://stackoverflow.com/questions/55316037/why-did-ieee754-choose-11-exponent-bits-for-double-aka-binary64
https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/

const onCompositionStart = () => {
start.current = true;
};

const onCompositionEnd = e => {
start.current = false;
\_onChange(e.target.value);
};

/$(http)/
^
$

- 0+

* 1+
  ？ 0/1
  {num} num
  {num,} num+
  . 除换行的任意单个字符
  () \1 \2 \$1
  x|y
  [xyz][^xyz]

/^https?:\/\/[\w\/]\$/

函数内部： if for 里面的 var 也会声明提升到函数顶部

Promise.finally 接受一个函数,函数不接受参数，在 fulfiiled 或者 reject 后执行

todo 难点：

1. iterator
2. genrator
3. async 原理 实现
4. promise 实现
5. 浏览器从输入 url 到。。。
6. 快排序
7. valueof tostring 影视类型转换

git 发布前 基于master 新建 release 分支 ，  预合并 master
https://code-maven.com/git-check-for-conflicts-before-merge
git merge --no-commit --no-ff BRANCH-TO-MERGE
echo \$?
git merge --abort




# 小程序

身体评估
抽奖，饮食问卷
血压糖记录

构建完成后 执行 脚本 拷贝
app.wxss拷贝
文件夹名不要冲突
全局变量不要冲突







# 错误监控
webpack-sentry-plugin
history库pushState ,vivo某个版本手机window.location.hrerf获取的值还是首页的链接.   history库里面的url改变了
# 埋点
ilog
pv uv.   api
matches  matchSelector

document.readyStateChange loading  interactive  complete
Domcontentloaded


url： 封装pushState.  监听popState
hashChange.  


context 原理  // todo



applyMiddleWare原理： 把store作为闭包传给中间件，compose组合中间件生成一个函数（后面函数作为参数传给前面的函数，通过next调用后面的函数），传dispatch给组合后的函数






mount: constructor  static-getDerivedStatefromProps  render   didmount
update: getDerivedStatefromProps shouldComponentUpdate render getSnapshotbeforeUodate didupdate
unmounting: willunmount
didcatch