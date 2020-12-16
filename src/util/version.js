var versions = ['1.45.0', '1.5.5', '1.5', '6', '3.3.3.3.3.3.3']
var sorted = ['1.5', '1.45.0', '3.3.3.3.3.3', '6']

function compare(a, b) {
  a = a.split('.')
  b = b.split('.')
  let i = 0
  while (true) {
    const aVal = a[i] || 0
    const bVal = b[i] || 0
    if (aVal !== bVal) {
      return aVal - bVal // 隐是转换
    }
    if (i === Math.max(a.length, b.length) - 1) {
      return 0
    }
    ++i
  }
}

console.log(versions.sort(compare))
