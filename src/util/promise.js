function* a(p) {
  console.log(1, p)
  const p1 = yield 11
  console.log(2, p1)
  const p2 = yield 22
  console.log(3, p2)

  return 33
}

var g = a(1111)
console.log(g)
console.log(g.next())
console.log(g.next(222))
console.log(g.next(333))

// eslint-disable-next-line no-use-before-define
alwaysOnePromise.defaultReason = Symbol('新promise进入，此pormise被reject')
/**
 * 接收promise，返回promise，如果之前接收的promise仍在pending状态，reject之前的promise
 * 用来解决竞态问题，输入查询等
 * @param {*} pro 传入的promise
 * @param {*} rejectReason reject原因
 */
// function alwaysOnePromise(pro, rejectReason = alwaysOnePromise.defaultReason) {
//   if (alwaysOnePromise.current) {
//     alwaysOnePromise.rejectCurrent(rejectReason)
//   }

//   alwaysOnePromise.current = new Promise((resolve, reject) => {
//     alwaysOnePromise.rejectCurrent = reject

//     pro
//       .then(
//         (proRes) => resolve(proRes),
//         (proError) => reject(reject(proError))
//       )
//       .finally(() => {
//         alwaysOnePromise.current = null
//         alwaysOnePromise.rejectCurrent = null
//       })
//   })
//   return alwaysOnePromise.current
// }

alwaysOnePromiseGenerate.defaultReason = '新promise进入，此pormise被reject'
function alwaysOnePromiseGenerate(fn, rejectReason = alwaysOnePromiseGenerate.defaultReason) {
  let outReject
  return function (...rest) {
    if (outReject) {
      console.log(999, rejectReason)
      outReject(rejectReason)
      outReject = null
    }
    return Promise.race([
      fn(...rest),
      new Promise((resolve, reject) => {
        outReject = reject
      }),
    ])
  }
}
