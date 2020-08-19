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

4. 安装 react,react-dom
