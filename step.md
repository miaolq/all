1. prettier,新建.prettierrc.js
   prettier 有默认配置，建立配置文件覆盖。
   与 vscode 配合：安装 prettier 插件，会使用默认配置，vscode 里可以修改 prettier 的默认配置, 当有了.prettierrc 配置文件后， vscode 里的配置失效，已配置文件和默认 prettier 为准。
2. 安装 eslint
3. 安装 eslint-config-prettier, 会配置 eslint 来忽略样式、格式方面的规则。Turns off all rules that are unnecessary or might conflict with Prettier.
   还支持覆盖其他 eslint 插件的规则如： "prettier/react"来覆盖 eslint-plugin-react
   If you extend a config which uses a plugin, it is recommended to add "prettier/that-plugin" (if available). For example, eslint-config-airbnb enables eslint-plugin-react rules, so "prettier/react" is needed:

   检测项目中eslint 和 prettier冲突的地方 npx eslint-config-prettier-check
