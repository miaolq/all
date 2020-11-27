'use strict'
const handler = {
  apply(target, thisArg, args) {
    console.log('applyyy', target, thisArg, args)
  },
  construct(target, args, newTarget) {
    console.log(args)
    return new target(...args)
  },
  defineProperty(target, key, descriptor) {
    // 拦截赋值语句，defineProperty,defineProperties
    console.log(target, key, descriptor)
    Object.defineProperty(target, key, { value: descriptor.value + 1 })
    return true
  },
  deleteProperty(target, key) {
    return true
  },
  get(target, key, receiver) {},
  getOwnPropertyDescriptor(target, key) {},
  getPrototypeOf(target) {},
  has(target, has) {},
  isExtensible(target) {},
  ownKeys(target) {},
  preventExtensions(target) {},
  set(target, key, value, reciver) {},
  setPrototypeOf(target, prototype) {},
}

const proxy = new Proxy(
  {
    a: 1,
    b() {
      console.log('b', this)
    },
  },
  handler
)

function originFunc(a) {
  console.log(111, this)
  this.a = a
}
const func = new Proxy(originFunc, handler)

// func.call({ a: 1 }, 1, 2)
// console.log(originFunc.constructor)
// console.log(new func(9))

// proxy.a = 2
Object.defineProperty(proxy, 'a', {
  value: 5,
})
// console.log(proxy, proxy.a)

const descriptor = {
  writable: false,
  value: 9,
}

const p = Object.defineProperty({}, 'p', Object.create(descriptor))
p.a = 1
// p.p = 2
console.log('pppp', p.p)

var o = {}
Object.defineProperty(o, 'a', {
  get() {
    return 1
  },
  configurable: false,
})
console.log(o.a) // logs 1
// delete o.a // Nothing happens
console.log(o.a) // logs 1

//////

function myclass() {}

// var value
// Object.defineProperty(myclass.prototype, 'x', {
//   get() {
//     console.log(88)
//     return value
//   },
//   set(x) {
//     console.log(999, x)
//     value = x
//   },
// })

const aaa = new myclass()
var bbb = new myclass()
aaa.x = 1
console.log('bbb', bbb.x) // 1
