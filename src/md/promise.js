const pending = 'pending'
const fulfilled = 'fulfilled'
const rejected = 'rejected'

function _Promise(fn) {
  const self = this
  if (!(self instanceof _Promise)) {
    throw new Error('xxx')
  }
  self.state = pending
  self.resolveCallbacks = []
  self.rejectCallbacks = []
  function resolve(value) {
    self.state = 'resolved'
    self.resolveCallbacks.forEach((item) => {
      item(value)
    })
  }
  function reject(err) {}
  fn(resolve.bind(self), reject.bind(self))
  return self
}

_Promise.prototype = Object.create({
  then(fn, fn2) {
    this.resolveCallbacks.push(fn)
    fn2 && this.rejectCallbacks.push(fn2)
    return new Promise(function(resolve,reject){
        
    })
  },
  catch(fn) {
    this.rejectCallbacks.push(fn)
    // return this
  },
})

new _Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(10)
  }, 1000)
})
  .then((res) => {
    console.log(res)
  })
  .then((res) => {
    console.log(res)
  })
//   .catch((err) => {
//     console.log(err)
//   })
