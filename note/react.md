# 栈式协调器

工作：找出将 vdom 同步到 UI 的最少操作，分为 mount、update。
之后，ReactDo 来执行这些操作

1. react 封装了复杂的部分：构建，渲染和管理 dom 树的生命周期
2. 两种 element： host component ， function/class component
3. ReactDOM.render() or setState(), React performs a reconciliation.
4. 栈式协调器的缺点（老的协调算法的缺点）：更新没有优先级，递归式不可中断导致页面掉帧
   中断 - 恢复 事件队列中的事件没法执行

Scripts，Render Tree ,Layout 和 Paint 这四个阶段的计算。
渲染进程：主线程（js,dom-cssom-renderTree-layerTree）,合成线程，光栅化线程，web work
为什么页面不能点击？ 主线程繁忙，不能执行点击事件
event loop // promise mutaionObserver; setTimeout
click?？？ fetch?

单元工作 beginWork performUnitOfWork completeUnitOfWork completeWork

The moment the time runs out, React pauses the current unit of work being performed, hands the control back to the main thread, and lets the browser render whatever is finished at that point.？？？？

fiber 遍历顺序： 左右根。 模拟遍历 fiber tree
type key props child sibling return pendingProps memoizedProps
pendingWorkPriority Alternate

## Fiber

1. 切分单元任务
2. 任务有优先级 ？
3. 中断，恢复工作
4. 重用先前完成的工作
5. 放弃不在需要的工作？

react16 和之前：在合成事件、生命周期的 setState 会做批处理，因为知道什么时候 event 结束。在原生事件、setTimeout 里不会批处理。

react 优化：

1. 频繁更新，或子组件很多的组件里加 shouldComponentUpdate React.memo;
2. 函数作为 props 时，this. 或者 useCallback。 useMemo
3. 列表加上 key
4. redux，结合 useSelect

为何 css 选择器从右向左解析？ 因为浏览器，是这样绑定 css 的，拿到 dom 节点，去 cssom 中找符合的选择器，已知 dom 节点，大多数选择器是不匹配的，直接比较最右的选择器更快。


mixin: 冲突 耦合性高
hoc： + 降低耦合。 - 组件嵌套深，无法访问组件内部state， ref（forWardRef）
hook： 优点：无需组件嵌套，组合方便，可以访问state、props    缺点：学习成本，比如setInterval中访问state坑之类的

react fiber:
1. react16 reconcile是通过递归来找出需要更新的操作，无法中断，当reconcile占用主线程时间长时，页面无法响应点击、输入等事件，造成卡顿。 fiberTree的结构，reconcile可以分片执行、响应更高优先级的输入等事件。
2. fiber 时两棵树，一颗是对应页面的树，一颗是更新中的树。

原型链：

a.__proto__ => A.prototype  {constrcutor, __proto__}  __proto__ => Object.prototype {constructor, __proto__ = null}

A.__proto__ => Function.prototype {constructor, __proto__} => Object.prototype 


React-Redux connect() 方法 ???
Redux action 异步数据处理 ???
二分查找
归并排序\ 快排  todo
深拷贝
url解析
实现Promise。all

https://wangyaxing.cn/blog/interview/%E9%9D%A2%E7%BB%8F/2020-%E9%9D%A2%E8%AF%95.html#_2020%E5%B9%B4%E4%B8%AD%E5%A4%A7%E5%8E%82%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93  todo


react key的作用： 1. 列表diff 2. If you want to “reset” some state when a prop changes, consider either making a component fully controlled or fully uncontrolled with a key instead.


社招前端