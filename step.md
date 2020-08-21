# polyfill, 单元测试、CI、DI， 前端、后端错误监控， 埋点数据收集
前端缓存
postcss  minify
用户浏览器版本、机型分析

todo:  virtualbox ie  ievms    centos vnc-server


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

build tools for webpack : eslint-loader 加入webpack构建

<!-- todo 写一个eslint 插件、配置分享 -->
## 关于eslint配置
1. 代码里，如eslint-disable等注释。 一般是一些eslint rule
2. .eslintrc* ，一般是eslint rule，插件，解析配置，解析引擎， 包含文件等
3. 命令行里， 除了eslintrc中的，还包含 cache配置等。cache可减少下一次eslint执行时间。  fix
4. webpack eslint-loader里 option配置，包含cache，fix等

4. 安装 react,react-dom
5. 安装webpack webpack-cli

pkg.json https://docs.npmjs.com/files/package.json
暂时用。eslintignore

## webpack
mode: development production none
webpack 默认支持转换import export。 其他es6属性要loader
对于图片、css等，webpack会把一切当作bundle，生成依赖图谱。 gulp可能只是复制图片到文件夹下。
css-loader style-loader
file-loader
需要引入file-loader后，css-loader 支持url()  

import data  cvs-loader xml-loader

multi entry  多入口 多输出

html-webpack-plugin  自动生成html   // todo
补充 ： html-webpack-template

 clean-webpack-plugin

 manifest 清单。   webpack-manifest-plugin 导出清单插件

sourcemap https://blog.teamtreehouse.com/introduction-source-maps  浏览器支持sourceMap,chrome需要在setting- sources 里面打开
两种方式提示浏览器存在sourceMap
You indicate to the browser that a source map is available by adding a special comment to the bottom of your optimised file.
//# sourceMappingURL=/path/to/script.js.map

You can also specify a source map is available by sending the X-SourceMap HTTP header in the response for the compressed JavaScript file.
X-SourceMap: /path/to/script.js.map

devtool 设置sourceMap   // todo sourcemap的选型


webpack's Watch Mode
webpack-dev-server          "start": "webpack-dev-server --open",
webpack-dev-middleware 加 express


todo:  Hot Module Replacement

code-splitting 代码分割： entry， splitchunkplugin, dynamic import

两个入口都引入lodash时，输出结果会都包含lodash，重复了。
dependOn属性  测试失败

SplitChunksPlugin
Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks.
mini-css-extract-plugin 分割css


动态导入 import().  require.ensure()     webpack实现的import()内部使用了promise

https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655
The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module. For more information on the reason behind this, read webpack 4: import() and CommonJs


