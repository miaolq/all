// 循环前序
function loopPreorder(node) {
  if (!node) {
    return []
  }
  let res = []
  let stack = [node]
  while (stack.length) {
    let cur = stack.pop()
    res.push(cur.val)
    // 节点pop后就没了，左右都需要放进去
    // 先放右，左可以早点弹出来
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }
  return res
}

function preorderTraversal(node, res = []) {
  if (!node) return []
  res.push(node.val)
  preorderTraversal(node.left, res)
  preorderTraversal(node.right, res)
  return res
}

// 循环中序
function loopMid(node) {
  if (!node) return []
  let stack = [node]
  let res = []
  while (stack.length) {
    let cur = stack.pop()
    if (cur.right) {
      stack.push(cur.right)
    }

    if (cur.left) {
      stack.push({ val: cur.val })
      stack.push(cur.left)
    } else {
      res.push(cur.val)
    }
  }
  return res
}

const node = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3,
    },
  },
}

console.log(loopMid(node))
