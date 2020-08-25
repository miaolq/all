# polyfill, 单元测试、CI、DI， 前端、后端错误监控， 埋点数据收集， github actions集成


测试： f2etest  wetest testin

todo : 提取react

todo: CommonsChunkPlugin的问题， 新splitChunkPlugin配置 runTimeChunk? https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching

tc39
question: 
需要在babel-loader中排除node_modules吗?

node_modules中代码量大， babel编译费时间。 一般node_modules都支持es5,应该排除掉node_modules。对于不支持es5的库，手动配置babel-loader去 编译。

在babel7中，使用babel.config.js配置文件，会自动排除node_modules   issue:https://github.com/babel/babel-loader/issues/171

https://github.com/obahareth/are-you-es5

前端缓存
postcss minify
用户浏览器版本、机型分析

todo: virtualbox ie ievms centos vnc-server  测试ie下兼容性
todo: children in react
todo: https://github.com/jamiebuilds/the-super-tiny-compiler

构建优化： babel-loader排除node_modules

1. prettier,新建.prettierrc.js
   prettier 有默认配置，建立配置文件覆盖。
   与 vscode 配合：安装 prettier 插件，会使用默认配置，vscode 里可以修改 prettier 的默认配置, 当有了.prettierrc 配置文件后， vscode 里的配置失效，已配置文件和默认 prettier 为准。
2. 安装 eslint,执行 eslint --init
3. 安装 eslint-config-prettier, 会配置 eslint 来忽略样式、格式方面的规则。Turns off all rules that are unnecessary or might conflict with Prettier.
   还支持覆盖其他 eslint 插件的规则如： "prettier/react"来覆盖 eslint-plugin-react
   If you extend a config which uses a plugin, it is recommended to add "prettier/that-plugin" (if available). For example, eslint-config-airbnb enables eslint-plugin-react rules, so "prettier/react" is needed:

   检测项目中 eslint 和 prettier 冲突的地方 npx eslint-config-prettier-check
   npx eslint --print-config index.js | npx eslint-config-prettier-check
   0: No problems found.
   1: Unexpected error.
   2: Conflicting rules found.

eslint-plugin-prettier 用于在 linter 里面跑 prettier，把 prettier 的配置当成了 linter。 现在不再推荐使用，直接执行 prettier --check .就好。大多数编辑器已支持

可以试试
prettier-eslint
prettier-tslint
prettier-stylelint

eslint-config-airbnb 不是 eslint-config-airbnb-base.

// plugin 中的全局变量
{
"plugins": ["example"],
"env": {
"example/custom": true
}
}
/_ global var1, var2 _/
/_ global var1:writable, var2:writable _/
{
"globals": {
"var1": "writable",
"var2": "readonly"
}
}

## eslint

### Configuring Plugins The eslint-plugin- prefix can be omitted from the plugin name. The same rule does apply to scoped packages:

When using rules, environments or configs defined by plugins, they must be referenced following the convention:

eslint-plugin-foo → foo/a-rule
@foo/eslint-plugin → @foo/a-config
@foo/eslint-plugin-bar → @foo/bar/a-environment

## 对某些文件采用覆盖

```js

{"overrides": [
{
"files": ["*-test.js","*.spec.js"],
"rules": {
"no-unused-expressions": "off"
}
}
]}
```

integration with vscode

build tools for webpack : eslint-loader 加入 webpack 构建

<!-- todo 写一个eslint 插件、配置分享 -->

## 关于 eslint 配置

1. 代码里，如 eslint-disable 等注释。 一般是一些 eslint rule
2. .eslintrc\* ，一般是 eslint rule，插件，解析配置，解析引擎， 包含文件等
3. 命令行里， 除了 eslintrc 中的，还包含 cache 配置等。cache 可减少下一次 eslint 执行时间。 fix
4. webpack eslint-loader 里 option 配置，包含 cache，fix 等

5. 安装 react,react-dom
6. 安装 webpack webpack-cli

pkg.json https://docs.npmjs.com/files/package.json
暂时用。eslintignore

## webpack

mode: development production none
webpack 默认支持转换 import export。 其他 es6 属性要 loader
对于图片、css 等，webpack 会把一切当作 bundle，生成依赖图谱。 gulp 可能只是复制图片到文件夹下。
css-loader style-loader
file-loader
需要引入 file-loader 后，css-loader 支持 url()

import data cvs-loader xml-loader

multi entry 多入口 多输出

html-webpack-plugin 自动生成 html // todo
补充 ： html-webpack-template

clean-webpack-plugin

manifest 清单。 webpack-manifest-plugin 导出清单插件

sourcemap https://blog.teamtreehouse.com/introduction-source-maps 浏览器支持 sourceMap,chrome 需要在 setting- sources 里面打开
两种方式提示浏览器存在 sourceMap
You indicate to the browser that a source map is available by adding a special comment to the bottom of your optimised file.
//# sourceMappingURL=/path/to/script.js.map

You can also specify a source map is available by sending the X-SourceMap HTTP header in the response for the compressed JavaScript file.
X-SourceMap: /path/to/script.js.map

devtool 设置 sourceMap // todo sourcemap 的选型

webpack's Watch Mode
webpack-dev-server "start": "webpack-dev-server --open",
webpack-dev-middleware 加 express

todo: Hot Module Replacement

code-splitting 代码分割： entry， splitchunkplugin, dynamic import

两个入口都引入 lodash 时，输出结果会都包含 lodash，重复了。
dependOn 属性 测试失败

SplitChunksPlugin
Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks.
mini-css-extract-plugin 分割 css

动态导入 import(). require.ensure() webpack 实现的 import()内部使用了 promise

https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655
The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module. For more information on the reason behind this, read webpack 4: import() and CommonJs

todo: htmlwebpack-plugin root

为什么 react 组件内一定要导入 React？
因为 jsx 编译成 React.createElement, 所以 react 需要在作用域内。 scope

## babel

babel 本身解析代码，并输出相同的代码，通过插件才能语法转换。presets 是插件的组合。
插件分为： transform ,syntax
babel-plugin-xxx
@org/babel-plugin-xx
功能：

1. 转换语法
2. polyfill

babel-loader 可转 es6 语法、jsx 文件。 设置 babel preset: env(es6) react(jsx)
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}

preset 预设
插件执行顺序：
Plugins run before Presets.
Plugin ordering is first to last.
Preset ordering is reversed (last to first).

plugin 和 preset 的 option 设置

babel 对语法的转换，在低版本浏览器要配合 polyfill 使用：
如 数组展开，需要Array支持Array.from
|Feature| Requirements|
|Async functions, Generators | regenerator runtime
|Array destructuring, For Of | Symbol, prototype[Symbol.iterator]
|Spread| Array.from

browserslist:
By default @babel/preset-env will use browserslist config sources unless either the targets or ignoreBrowserslistConfig options are set.


import return promise  所以可以与async函数一起用，需要插件

@babel/plugin-syntax-dynamic-import
 

 
It is possible to provide a dynamic expression to import() when you might need to import specific module based on a computed variable later.

 todo https://developer.mozilla.org/en-US/docs/Glossary/CORS

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-crossorigin

 

浏览器。 支持preload： 当前页需要使用，下载下来，不执行

prefetch：下一个navigation可能会使用，在浏览器空闲时间下载下来。

webpack也支持

 

Bundle Analysis    打包分析
 生成解析文件webpack --profile --json > stats.json    使用官方分析工具，等分析

 

lazy  loading

caching

 [name]。[contenthash]  .js

代码没变，contenthash变了：

原因：This is because webpack includes certain boilerplate, specifically the runtime and manifest, in the entry chunk.

解决：Extracting Boilerplate　

+     runtimeChunk: 'single',

Lets add optimization.splitChunks with cacheGroups with next params and build:
复制代码
optimization: {
      runtimeChunk: 'single',
+     splitChunks: {
+       cacheGroups: {
+         vendor: {
+           test: /[\\/]node_modules[\\/]/,
+           name: 'vendors',
+           chunks: 'all',
+         },
+       },
+     },
    },
复制代码
 

... we can see that all three have. This is because each module.id is incremented based on resolving order by default. Meaning when the order of resolving is changed, the IDs will be changed as well. So, to recap:

The main bundle changed because of its new content.
The vendor bundle changed because its module.id was changed.
And, the runtime bundle changed because it now contains a reference to a new module.
 

 

+     moduleIds: 'hashed',
 

发布library

webpack的环境变量 webpack --env.production --env.NODE_ENV=local 

webpack cli

在webpack配置里面访问webpack env 需要将module。exports指向函数

 chunk的概念： 最终输出的js文件，一个js一个chunk。 来源： entry、splitChunkPlugin、dynamic import

 todo: dev webpack配置文件分开

airnb 关闭jsx-a11y

react-router-dom 依赖了react-router

cross-env

hmr 原理 todo
开启hot： true 后 ，contenthash报错： Cannot use [chunkhash] or [contenthash] for chunk in '[name].[contenthash].js' (use [hash] instead)

run build 集成 分析工具 todo


npm i sass sass-loader --save-dev