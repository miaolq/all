// redux 中间件思想。
// applyMiddleWare原理： 把store作为闭包传给中间件，compose组合中间件生成一个函数（后面函数作为参数传给前面的函数，通过next调用后面的函数），传dispatch给组合后的函数

function createStore(reducer, init, middleWares) {
  let state = init

  let dispatch = (action) => {
    state = reducer(state, action)
  }

  function getState() {
    return state
  }

  function applyMiddleware() {
    middleWares = middleWares.map((m) => m({ dispatch, getState }))
    const composion = middleWares.reduce((pre, cur) => (...args) => pre(cur(...args)))
    return composion(dispatch)
  }

  if (middleWares.length) {
    dispatch = applyMiddleware()
  }

  return {
    dispatch,
    getState,
  }
}

// 要求 middleware中访问到 getState dispatch

const log1 = (store) => (next) => (action) => {
  console.log('log1')
  next(action)
  console.log(111, store.getState())
  console.log('log1 after')
}

const log2 = (store) => (next) => (action) => {
  console.log('log2')
  next(action)
  console.log(222, store.getState())
  console.log('log2 after')
}

const store = createStore(
  (state, action) => {
    return state + action
  },
  '0',
  [log1, log2]
)

store.dispatch(1)
store.dispatch(2)
