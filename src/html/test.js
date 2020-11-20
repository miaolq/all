const things = {}
for (var x = 0; x < 3; x++) {
  things['fun' + x] = function () {
    console.log(x)
  }
}

things.fun0()
things.fun1()
