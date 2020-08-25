module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境，会允许使用window等全局变量
    es2020: true, // 支持es2020支持的全局变量，如Set，Map。 也会自动支持es2020的语法
    // node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb/rules/react',
    // 'airbnb/rules/react-a11y',
    // 'airbnb', 见node_modules包含上面3个
    'airbnb/hooks', // 检测hook规范
    'prettier', // 禁用eslint规则中关于格式的部分
    'prettier/react', // 禁用eslint react插件中关于格式的部分 如：react/jsx-wrap-multilines
  ],
  // processor 处理器 Plugins may provide processors
  // parser:'' // 指定parser引擎
  // parser配置，eslint默认被检测的是es5语法
  parserOptions: {
    ecmaFeatures: {
      // globalReturn - allow return statements in the global scope
      // impliedStrict - enable global strict mode (if ecmaVersion is 5 or greater)
      jsx: true, // 支持jsx语法，不是指react。
    },
    ecmaVersion: 2020, // 支持es2020的语法
    sourceType: 'module', // 默认是‘script’
  },
  plugins: ['react'], // eslint-plugin-react
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-unused-expressions': 'off',
    camelcase: 'off',
    'no-underscore-dangle': 'off',
  },
  // ignorePattern ignorePath excludedFiles Unexpected top-level property "excludedFiles".
  // ignorePattern: ["/dist/*.js"],
  // excludedFiles: ["/dist/*.js"],
}
