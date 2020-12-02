new Promise((res, rej) => {
  rej(new Error('rej'))
})
  .catch((err) => {
    console.log('err1', err)
    throw new Error('ddd')
    return 2
  })
  .catch((err) => {
    console.log('err2', err)
    return 3
  })
  .then((res) => {
    console.log('res', res)
  })
