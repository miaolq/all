function xier() {
  const arr = [9, 8, 7, 3, 4, 6, 5]
}

function generateArray() {
  const arr = []
  while (arr.length < 12) {
    arr.push(Math.ceil(Math.random() * 1000))
  }
  return arr
}

function isAsc(arr) {
  return arr.every((item, i) => {
    return i === arr.length - 1 ? true : item <= arr[i + 1]
  })
}

function selectionSort() {
  const arr = generateArray()
  const swap = (m, n) => {
    const holder = arr[m]
    arr[m] = arr[n]
    arr[n] = holder
  }
  const l = arr.length
  for (let i = 0; i < l - 1; ++i) {
    for (let j = i + 1; j < l; ++j) {
      if (arr[i] > arr[j]) {
        swap(i, j)
      }
    }
  }
  return arr
}

function insertionSort() {
  const arr = generateArray()
  debugger
  const swap = (m, n) => {
    const holder = arr[m]
    arr[m] = arr[n]
    arr[n] = holder
  }
  const l = arr.length
  for (let i = 1; i < l; ++i) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; --j) {
      swap(j, j - 1)
      //   if (arr[j] < arr[j - 1]) {
      //     swap(j, j - 1)
      //   } else {
      //     break
      //   }
    }
  }
  return arr
}

// console.log(isAsc([1, 2, 3, 5, 4]))
let loop = 50
while (loop > 0) {
  const res = insertionSort()
  //   const res = selectionSort()
  if (!isAsc(res)) {
    console.log('false', res)
    break
  }
  --loop
}
