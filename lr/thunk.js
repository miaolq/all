// Thunk 函数，它是“传名调用”的一种实现策略，用来替换某个表达式。
// 将函数的参数改成函数，来实现执行时求值
// 在 JavaScript 语言中，Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
const fs = require('fs')
const co = require('co')

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error)
      resolve(data)
    })
  })
}

var gen = function* () {
  var f1 = yield readFile('./package.json')
  console.log(111)

  var f2 = yield readFile('../server.js')
  console.log(222)

//   console.log(f1.toString())
//   console.log(f2.toString())
}

co(gen).then((res) => {
  console.log(99)
})
