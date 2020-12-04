// 二叉树层序遍历\ 广度优先
function levelOrder2(node) {
  if (node === null) return []
  let nodes = [node]
  const res = []
  while (nodes.length > 0) {
    const level = []
    nodes = nodes.reduce((pre, cur) => {
      level.push(cur.val)
      cur.left !== null && pre.push(cur.left)
      cur.right !== null && pre.push(cur.right)
      return pre
    }, [])
    res.push(level)
  }
  return res
}

function levelOrder(node) {
  const arr = []

  function helper(nodes) {
    const res = []
    const nextNodes = []
    nodes.forEach((element) => {
      if (element !== null) {
        res.push(element.val)
        element.left !== null && nextNodes.push(element.left)
        element.right !== null && nextNodes.push(element.right)
      }
    })
    res.length > 0 && arr.push(res)
    // 递归要考虑，终止条件
    nextNodes.length > 0 && helper(nextNodes)
  }

  helper([node])
  return arr
}

// 双管齐下
const levelOrder3 = function (root) {
  if (root == null) return []

  const helper = function (root, result, depth) {
    if (root == null) return
    if (result[depth] == null) {
      result[depth] = []
    }
    result[depth].push(root.val)
    helper(root.left, result, depth + 1)
    helper(root.right, result, depth + 1)
  }

  const result = []
  helper(root, result, 0)
  return result
}

// 二叉树深度遍历: 前序遍历、中序遍历、后序遍历
function deepOrder(node) {}
