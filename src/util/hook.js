import { useEffect, useRef, useCallback, useReducer } from 'react'

export const useMount = (func) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(func, [])
}

export const a = 1

// 输入： 通过dispatch输入树
// 输出每一层的节点，可选的节点，每一层的值，值改变的方法
// [{nodes:[],options:[],value:[]}]
export const useTree = () => {
  const types = {
    CHANGEVALUE: 'change-value',
    RESETTREE: 'reset-tree',
  }
  const keyNameRef = useRef()

  const flatTree = useCallback((tree, res = []) => {
    const lastTree = res[res.length - 1]
    const { pidKey, childKey } = keyNameRef.current
    if (lastTree) {
      // 放入子节点
      const { value } = lastTree
      const options = tree.filter((item) => value.includes(item[pidKey]))
      res.push({ nodes: [...tree], value: [], options })
    } else {
      // 放入根节点
      res.push({ nodes: [...tree], value: [], options: [...tree] })
    }

    const subNodes = tree.reduce((pre, cur) => {
      return [...pre, ...(cur[childKey] || [])]
    }, [])
    // 存在子节点,递归
    if (subNodes.length > 0) {
      return flatTree(subNodes, res)
    }
    // 返回
    return res
  }, [])

  const [data, dispatch] = useReducer((state, action) => {
    const { type, payload } = action
    // 更新某层节点
    if (type === types.CHANGEVALUE) {
      const { subNodes, value } = payload
      let res = []
      state.some((item) => {
        if (item !== subNodes) {
          res.push(item) // 此层节点不变
          return false
        }
        res.push({ ...item, value })
        return true
      })
      const nextNodes = state[state.indexOf(subNodes) + 1]
      // 后续节点：options、value需要重新计算
      res = flatTree(nextNodes.nodes, res)
      return res
    }
    // 重置所有节点
    if (type === types.RESETTREE) {
      const { tree, childKey, pidKey } = payload
      keyNameRef.current = { pidKey, childKey }
      return flatTree(tree)
    }
    return state
  }, [])

  const onChange = useCallback(
    (subNodes, newValue) => {
      dispatch({ type: types.CHANGEVALUE, payload: { subNodes, value: newValue } })
    },
    [types.CHANGEVALUE]
  )

  const setTree = useCallback(
    ({ tree, childKey, pidKey }) => {
      dispatch({ type: types.RESETTREE, payload: { tree, childKey, pidKey } })
    },
    [types.RESETTREE]
  )

  return { onChange, setTree, data }
}
