建议 babel.config.json, 项目相关配置，而不是文件相关。 相对于 js 文件，利于缓存

babel 7.4.0 后 不建议使用 @babel/polyfill
相当于： import "core-js/stable";
import "regenerator-runtime/runtime";
