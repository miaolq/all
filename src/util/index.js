export const a = 1

export const filterKey = (obj) => {
  const res = {}

  Object.entries(obj).forEach(([key, value]) => {
    if (![undefined, null, ''].includes(value)) {
      res[key] = value
    }
  })

  return res
}

export const throttle = (fn, gap) => {
  let lastTime = 0
  return function (...res) {
    if (Date.now() - lastTime >= gap) {
      const data = fn.call(this, ...res)
      lastTime = Date.now()
      return data
    }
  }
}

export const debounce = (fn, delay) => {
  let timer = null
  return function (...rest) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      return fn(rest)
    }, delay)
  }
}

// export const extend = ()/*  */

function B() {
  return this
}

function A() {
  return this
}
A.prototype = new B()
