- 像 Modal，图片浏览，只需要一个实例
- hook 的问题，当业务变复杂，依赖增多，可能写出 bug
- 自动导入当前目录下同名 scss 文件
- 组件属性搜索

- webpack 无需导入来使用全局常量、工具函数，采用 ProvidePlugin， 但是没有提示，采用 code snippet 方便导入， 项目级别的 code snippet
- https://zhuanlan.zhihu.com/p/50335551
- 利用同步的 setState

- all 分支和 clean 分支
- all-in-one one

- intersectionobserver https://github.com/w3c/IntersectionObserver/issues"
- resize-observer-polyfill
- tmp 目录每次重启清空
- rss
- postion sticky 和 https://github.com/wilddeer/stickyfill
- 知乎收藏搜索

1. 业务 kt 需求
2. 开发人员回去设计详细方案，各种状态流转
3. 再次开会讨论方案实施，阶段排期

# code 约定

- 业务逻辑正常 0
- 业务逻辑错误， 代码错误等， 通用提示 大于 20000
- 每个接口特殊处理的 code 10001 10002 等

- eslint 可以检测出 import/cycle
- form 表单 trim
- https://zh-hans.reactjs.org/docs/strict-mode.html react 开发模式 render 两次 https://github.com/facebook/react/issues/17786 ？？？？

- 利用同步的 setState

- 魔方： 容器组件需要定制，和使用方不一致。1. 容器组件可能没有高度 2. 需要使用拖拽的方式加入子组件

- 手写 throttle debounce
- 常用 hook useinterval
  function useInterval(callback, delay) {
  const savedCallback = useRef();

// 保存新回调
useEffect(() => {
savedCallback.current = callback;
});

// 建立 interval
useEffect(() => {
function tick() {
savedCallback.current();
}
if (delay !== null) { // 可暂停
let id = setInterval(tick, delay);
return () => clearInterval(id);
}
}, [delay]);
}

- requestPayment-api 轮训订单状态
- 小程序 支付，测评，游标尺。 日期 多选 单选 输入 返回修改 。 兼容，合并
  shell 脚本，拷贝和删除文件，
  api 的兼容，将 callback 形式转为 promise
  老项目使用 wx.fetch，wx.fetch 内部做了 token 过期重新登录等逻辑，所以 xinxiangku
  function promisify(func, params) {
  return new Promise((resolve, reject) => {
  func({
  ...params,
  success: (res) => resolve({ ok: true, data: res }),
  fail: () => reject({ ok: false })
  })
  })
  }

- marquee html
- ruler 组件

运营系统

- 通过 promise.race 的方式 解决输入查询的竞态问题
- redux 结合 自定义的 useResource Hook 解决多个组件使用同个公共资源，请求多次的问题
- routes()解决了路由过多，字符串拼接方式，后续修改容易遗漏的问题
- LoadingBtn，Modal.confirm 防止连续点击
- scss resource
