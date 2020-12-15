const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

function stepOne(filename) {
  // 读入文件
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module', // ES Module
  })
  const dependencies = {}
  console.log(ast)
  //遍历AST抽象语法树
  traverse(ast, {
    //获取通过import引入的模块
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename)
      const newFile = './' + path.join(dirname, node.source.value)
      //保存所依赖的模块
      dependencies[node.source.value] = newFile
    },
  })
  //通过@babel/core进行代码的转换
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env'],
  })
  return {
    filename, //该文件名
    dependencies, //该文件所依赖的模块集合(键值对存储)
    code, //转换后的代码
  }
}

function stepTwo(entry) {
  const entryModule = stepOne(entry)
  //这个数组是核心，虽然现在只有一个元素，往后看你就会明白
  const graphArray = [entryModule]
  for (let i = 0; i < graphArray.length; i++) {
    const item = graphArray[i]
    const { dependencies } = item //拿到文件所依赖的模块集合(键值对存储)
    for (let j in dependencies) {
      graphArray.push(stepOne(dependencies[j])) //敲黑板！关键代码，目的是将入口模块及其所有相关的模块放入数组
    }
  }
  //接下来生成图谱
  const graph = {}
  graphArray.forEach((item) => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code,
    }
  })
  console.log(graph)
  return graph
}

function step3(entry) {
  const graph = JSON.stringify(stepTwo(entry))
  const s = `
  (function(graph) {
      //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
      function require(module) {
          //localRequire的本质是拿到依赖包的exports变量
          function localRequire(relativePath) {
              return require(graph[module].dependencies[relativePath]);
          }
          var exports = {};
          (function(require, exports, code) {
              eval(code);
          })(localRequire, exports, graph[module].code);
          return exports;//函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁
      }
      require('${entry}')
  })(${graph})`
  return s
}

console.log(step3('./step/webpack/index.js'))
