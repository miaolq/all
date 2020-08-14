1. prettier,新建.prettierrc.js
   prettier 有默认配置，建立配置文件覆盖。
   与 vscode 配合：安装 prettier 插件，会使用默认配置，vscode 里可以修改 prettier 的默认配置, 当有了.prettierrc 配置文件后， vscode 里的配置失效，已配置文件和默认 prettier 为准。
2. 安装 eslint
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
