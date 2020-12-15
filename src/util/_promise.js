function a() {
  Promise.all([
    new Promise((res, rej) => {
      setTimeout(() => {
        // rej('error')
        res(88)
      }, 100)
    }),
    new Promise((res, rej) => {
      setTimeout(() => {
        res('yes')
      }, 1000)
    }),
  ])
    .then((res) => {
      console.log(99, res)
    })
    .catch((err) => {
      console.error(err)
    })
}

a()
