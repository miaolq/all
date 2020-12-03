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

js,css load
js,css 执行，解析
阻塞，解析 dom

清除浮动
margin 折叠
float
bfc
animate
transition
flex
居中

## cache-control

1. max-page
2. no-cache 浏览器可以缓存，需要发请求
3. no-store 浏览器不可以缓存
4. public cdn 和浏览器都可以缓存
5. pirvate 只可以被客户端缓存

## ETag Expires

how context work. rerender?

https://www.imperva.com/learn/performance/cdn-caching/

分层、合成
分块

平移、旋转、缩放、阴影或者 Alpha 渐变。
能直接在合成线程中实现的是整个图层的几何变换，透明度变换，阴影等，这些变换都不会影响到图层的内容
合成线程来处理 CSS 特效或者动画

图层树-绘制（指令列表）-光栅化（生成多张图片）-合成（合成线程）
主线程卡住了，但是 CSS 动画依然能执行的原因。

优化页面性能？

# 加载

cdn 缓存
http1 的话，域名分片。 或者直接用 http2
打包： 压缩 js,css,图片。 动态 import 实现代码分割
如果 JavaScript 代码没有 DOM 或者 CSSOM 的操作， async, defer

# 展现，交互

dom 操作
命令式的，容易频繁触发重排，重绘。
要实现 mvvm 方式的编程，就需要虚拟 dom 来与我们的数据映射。
虚拟 dom 可以帮我们封装 dom 操作，来避免写出低性能的 dom 操作，如批量修改列表等

react 下：
复杂的组件用 memo
动画方面使用 css
减少重拍重回
批量操作
避免强制同步布局。 为了避免强制同步布局，在修改 DOM 之前查询相关值

xss: react 替换了
csrf: cross origin/ cookie samesite / reffer,origin / csrf token

webpack loader,plugin 实践

状态管理：redux 通常是一个树形 store，所以需要 selector。 为什么要树形结构呢，直接多个 context，每个 context 提供一种资源，更原子性的方式。

公司： 快手，字节，

this: new, bind , arrow function , call, apply
bind: 生成一个绑定 this 和参数的函数。绑定的 this 对 new 无效。箭头函数的 this，不会被 bind 改变。 绑定 primitive 回转换层对象。
bind 之后 bind，apply,call 无效。

箭头函数用 new 会报错， proxy 代理构造函数不能用箭头函数。

?.

## descriptor

默认： get set value 是 undefined
configurable enumerable writable 是 false !!!
descriptor 原型链上的这些属性也会影响！！！
var descriptor = Object.create(null); // 没有继承的属性
Object.defineProperty(obj, 'key', descriptor);
严格模式下，对 writable false 的 key 写入 会报错； 对 configurable false 的属性删除会报错

configurable 特性表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的

get set 不能与 writable value 同时使用

如果访问者的属性是被继承的，它的 get 和 set 方法会在子对象的属性被访问或者修改时被调用
不像访问者属性，值属性始终在对象自身上设置，而不是一个原型。然而，如果一个不可写的属性被继承，它仍然可以防止修改对象的属性。

1. get set

Object.getPrototypeOf() // 获取原型对象，替代**proto**
Object.getOwnPropertyDescriptor()

#
Reflect.ownKeys
Object.getOwnPropertyNames + Object.getOwnPropertySymbols
Objeect.keys :only enumerable. getOwnPropertyDescriptor()

There is a little difference. Object.getOwnPropertyNames(a) returns all own properties of the object a. Object.keys(a) returns all enumerable own properties. It means that if you define your object properties without making some of them enumerable: false these two methods will give you the same result.

The difference between Object.keys() and Object.getOwnPropertyNames() is that Object.keys() will invoke [[GetOwnProperty]] on the object, and only add the property to the result list if the returned property descriptor is enumerable. Since the object doesn't have a such a property, [[GetOwnProperty]] will return undefined and the property (name) is ignored.

You can overwrite/implement [[GetOwnProperty]] in the proxy by implementing getOwnPropertyDescriptor:



## history库 和 react-router
1. 改变url： pushState replaceState
2. 监听返回事件： popstate
3. 监听后，通过react的context，传递给route组件，route根据path渲染。 Router就是context的provider


react 长列表


toString()  valueOf()


mobx 依赖收集，  react hooks也是依赖收集？