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

