function add(...rest) {
  function sum(arr) {
    return arr.reduce((pre, cur) => {
      return pre + cur
    }, 0)
  }

  return function (...other) {
    if (other.length === 0) {
      return sum(rest)
    }
    return add(...rest, ...other)
  }
}

// mdn :  bind就是返回新函数，包裹一个函数，设置this和参数。 不负责protype
Function.prototype._bind = function (thisArg, ...rest) {
  const self = this
  if (typeof self !== 'function') {
    throw new Error('Function.prototype._bind should called by a function')
  }
  return function (...other) {
    return self.call(thisArg, ...rest, ...other)
  }
}

const addBind = add._bind(null)

// console.log(addBind(1)(2, 3)())
// console.log(addBind())






