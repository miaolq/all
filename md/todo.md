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
