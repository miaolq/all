const arr = [
  { name: 10, day: 10, three: 1 },
  { name: 9, day: 9, three: 1 },
  { name: 9, day: 7, three: 1 },
  { name: 9, day: 7, three: 4 },
  { name: 9, day: 7, three: 2 },
  { name: 9, day: 7, three: 3 },
  { name: 9, day: 8, three: 1 },
  { name: 8, day: 10, three: 1 },
]

function sort(a, b) {
  if (a - b < 0) return -1
  if (a - b === 0) return 0
  if (a - b > 0) return 1
}

function sortGenerator(factors) {
  return (a, b) => {
    let res = 0
    factors.some((cur) => {
      const [key, order] = Object.entries(cur)[0]
      const valA = a[key]
      const valB = b[key]
      if (sort(valA, valB) === 0) {
        // 按下一个因素排序
        return false
      }
      if (sort(valA, valB) < 0) {
        if (order === 'asc') {
          res = -1
        } else if (order === 'desc') {
          res = 1
        } else {
          throw new Error('unknown order')
        }
      }

      if (sort(valA, valB) > 0) {
        if (order === 'asc') {
          res = 1
        } else if (order === 'desc') {
          res = -1
        } else {
          throw new Error('unknown order')
        }
      }
      // 已排序
      return true
    })
    return res
  }
}

const factors = [{ name: 'asc' }, { day: 'desc' }, { three: 'asc' }]
console.log(arr.sort(sortGenerator(factors)))
