/**
 * 节点结构：val,left,right
 * 深度优先： 前序中序后序
 * 广度优先（层序）
 */

const dfsPreOrder = (tree, res = []) => {
  if (!tree) {
    return res
  }
  res.push(tree.val)
  dfsPreOrder(tree.left, res)
  dfsPreOrder(tree.right, res)
  return res
}

// 迭代 前序  用stack或者queue来存储中间状态，queue的内容作为终止条件
const dfsPreOrder2 = (tree) => {
  if (!tree) return []
  const stack = [tree]
  const res = []
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return res
}

const dfsInOrder = (tree, res = []) => {
  if (!tree) return res
  dfsInOrder(tree.left, res)
  res.push(tree.val)
  dfsInOrder(tree.right, res)
  return res
}

const dfsPostOrder = (tree, res = []) => {
  if (!tree) return res
  dfsPostOrder(tree.left, res)
  dfsPostOrder(tree.right, res)
  res.push(tree.val)
  return res
}

// 迭代版本深度优先
const _dfsPreOrder = (tree, res = []) => {
  if (!tree) return res
  // while()
}

// 层序遍历 不保留层级
const levelOrder = (tree) => {
  if (!tree) return []
  const res = []
  const queue = [tree]
  while (queue.length) {
    const node = queue.shift()
    res.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return res
}

// 层序遍历 保留层级
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

// 层序遍历 保留层级
const levelOrder3 = (tree) => {
  if (!tree) return []
  const res = []
  let queue = [tree]
  let levelNodes = []
  let levelValues = []
  while (queue.length) {
    const node = queue.shift()
    levelValues.push(node.val)
    node.left && levelNodes.push(node.left)
    node.right && levelNodes.push(node.right)
    if (queue.length === 0) {
      res.push(levelValues)
      queue = levelNodes
      levelNodes = []
      levelValues = []
    }
  }
  return res
}

// 层序输出，深度优先访问， 递归实现
const helper = function (root, result, depth) {
  if (root == null) return
  if (result[depth] == null) {
    result[depth] = []
  }
  result[depth].push(root.val)
  helper(root.left, result, depth + 1)
  helper(root.right, result, depth + 1)
}

const levelOrder4 = function (root) {
  if (root == null) return []
  const result = []
  helper(root, result, 0)
  return result
}
