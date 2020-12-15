// export const a = 1

// export const filterKey = (obj) => {
//   const res = {}

//   Object.entries(obj).forEach(([key, value]) => {
//     if (![undefined, null, ''].includes(value)) {
//       res[key] = value
//     }
//   })

//   return res
// }
var a = 'HG[3|B[10|AC]]F'
var b = 'HGBACACBACACBACACF'

function s(str) {
  var stack = []
  var res = ''
  for (let i = 0; i < a.length; ++i) {
    if (str[i] === '[') {
      stack.push(str[i])
      continue
    }
    if (str[i] === ']') {
      let sub = ''
      let repeate = ''
      let popV
      let slash = false
      while (popV !== '[') {
        popV = stack.pop()
        if (popV === '|') {
          slash = true
          continue
        }
        if (!slash) {
          sub = popV + sub
        } else if (popV !== '[') {
          repeate = popV + repeate
        }
      }
      if (stack.length) {
        stack.push(sub.repeat(+repeate))
      } else {
        res += sub.repeat(+repeate)
      }
    } else if (stack.length > 0) {
      stack.push(str[i])
    } else {
      res += str[i]
    }
  }
  return res
}
// function test(str) {
//   const alp = [];
//   let temp = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "[" && str[i] !== "]") {
//       alp.push(str[i]);
//     } else if (str[i] === "]") {
//       while (alp[alp.length - 1] !== "|") {
//         temp.push(alp.pop());
//       }
//       alp.pop(); //将符号|去掉
//       const time = Number(alp.pop());//拿到数字
//       temp = temp.reverse().join("").repeat(time);
//       alp.push(temp);
//       temp = [];
//     }
//   }
//   const res = alp.join("");
//   return res;
// }

// console.log(s(a))

function trim(str) {
  return str.replace(/(^\s+)|(\s+$)/g, '')
}

console.log('bb' + trim('  ssa aa   ') + 'ccc')

var arr = [1, 2, [3, 4, [5, { a: 1 }, [6]]]]

function flat(arr) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...flat(cur)]
    }
    return [...pre, cur]
  }, [])
}

// undefined null bool number string Symbol BigInt ; Object
// Date regex Bom ... 不考虑
function deepClone(obj){
  if(['undefined','boolean','number','string','symbol','bigint'].includes(typeof obj)||obj===null){
    return obj
  }
  // array
  if(Array.isArray(obj)){
    return obj.map(item=>deepClone(item))
  }
  // 
}

console.log(flat(arr))
