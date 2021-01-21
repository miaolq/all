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
https://www.bilibili.com/video/BV1WD4y1S7St?from=search&seid=12253040739975695387

隐式类型转换
实现flatten方法
列表diff https://zhuanlan.zhihu.com/p/20346379

Tcp协议怎么保证是可靠的。  ack

对接单点登录，单点登录不同域名怎么办？
公司发布流程！ CI CD

https://www.nowcoder.com/discuss/111688

36进制转换


# 职位要求
1、熟练掌握JavaScript，CSS，HTML，DOM、绘图、动画、协议、安全、网络、性能优化等前端技术，对主流前端框架（ React \ Vue \ Angular 等）至少一种有深入应用并深入理解其设计原理
2、熟悉MVC，MVVM，flux，redux等相关工程知识
3、熟悉W3C，ECMAScript，CommonJS，ES6等相关技术标准
4、具备移动端开发能力，能解决移动端兼容性问题及性能问题，熟悉主流移动浏览器的技术特点
5、熟练掌握 Grunt、Gulp、Webpack、FIS 其中任意一项构建工具的使用和配置
6、熟悉 Node.js Web 应用开发，有Node.js，koa，express项目开发经验
7、能对具体的产品进行性能优化，实现极致的页面加载、执行和渲染时间
8、参与过大型互联网产品的设计和研发工作，整体负责过一个线上系统的技术选型、规划与开发，能独立完成复杂前端系统或大型框架设计
9、注重产品质量，具有良好的代码风格、接口设计与程序架构
10、关注业界发展，对最新的前端技术有浓厚的兴趣及独特的见解，关注前端前沿技术研究，通过新技术服务团队和业务
11、优秀的团队合作能力，拥有良好的主动性与推动力，优秀的分析问题和解决问题的能力
12、至少拥有以下一种能力：
A.在理解前端开发流程的基础上，结合前端实际建立提升工作效率的工具。
B.在理解产品业务的基础上，提升产品的用户体验，通过技术驱动业务的发展，能有独立的产品想法


## loader,plugin 移除comments，每个函数加debugger
<!-- remove-debugger -->
proxy all function excute； 知道   寻找死循环， 监控






为什么node index.js执行完就退出了，不是loop吗。 服务器端是怎么不退出的

发布流程
印象深刻的地方：
1. 经验   
h5 版本更新， 旧数据缓存不兼容新版本问题。 数据版本，手动try catch.
2. 难点
小程序 wepy  taro 
小程序webComponent异步更新
搭建平台， 页面redux结构，  上下移动、父子移动、子之移动，  点击穿透
途虎，vue  java jsp  加载 js渲染

preloader

第 95 题：模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况 #148


# todo 
1. applescript  ， bash 
2. 效率。 同步
3. eslint html script