## 算法

## 操作系统 进程、线程

## 网络 tcp\http 分层

## react\router\redux\ webpack

## js

## css 布局 和模型

## 项目经验 难点

## 浏览器。 事件循环

1. https
   https://developers.google.com/search/docs/advanced/security/https?visit_id=637407470463919785-3524201858&rd=1
2. http 头部，保持链接，长链接，跨域 csrf ，xss, 跨域资源共享， cookie，单点登录。 http2
3. 进程，线程，通信
4. 树遍历，合并乱序区间，动态规划
5. 缓存，cdn 原理
6. node node 多进程，线程
7. 一个收集积分的需求，和蚂蚁森林有点像
8. wepy 和 taro 生成的代码合并，脚本，冲突解决。小程序子组件渲染逻辑。
9. 登录、缓存逻辑混乱
10. 魔方、h5\小程序、管理系统

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ
计算机网络 xiexiren

deepClone https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript?rq=1


js的加载、执行，阻塞dom树解析
css 页面性能https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3/

prefetch
async
defer
preload

```js
// 递归模版
function recursion(level,params){
   // 递归终止条件
   if(level> MAX){
      process_result 
      return 
   }
   // 当前层处理逻辑
   process(level,params)
   // 进入下一层
   recursion（level+1,params) 
   //  如有需要，进行清理
}

```

## 如何写递归代码
1. 不要进行人肉递归
2. 找最近重复子问题，抽象出重复性，规律
3. 数学归纳法

()
(()) 1  ()()
((()))  
()(())
(())()
(()())
()()()