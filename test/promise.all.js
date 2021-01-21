// let res = ''
// let pro
// let pro1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('errorrrr1')
//     // resolve(1)
//   }, 1000)
// })

// let pro2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(2)
//     reject('error2')
//   }, 500)
// })

// Promise.race([pro1, pro2])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log('error happened', err)
//   })

// const a = Promise.reject(1)
// const b = a.finally((res) => {
//   console.log('finally', res)
//   return 9
// })
// b.then((res) => console.log('then', res)).catch((err) => console.log('catch', err))
// console.log(a === b)

const a = new Promise((res, rej) => {
  setTimeout(() => {
    res(1)
  }, 1000)
})
const b = new Promise((res) => {
  res(a)
}).finally(() => {
  console.log('f1')
})

console.log(111, a === b)
b.then((res) => {
  console.log(res, res === a)
})
.finally(() => {
  console.log('f2')
})
