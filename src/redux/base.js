// immer   state.first.second[action.someId].fourth = action.someValue
// configStore 安装了 redux-thunk

// reducer里不应该有异步代码，也没必要
// store 不应该在组件内使用。 组件难以测试、复用。
// But, in a real Redux app, we're not allowed to import the store into other files, especially in our React components, because it makes that code harder to test and reuse.
// 此外，抽出异步代码，可以与其他store结合。
// In addition, we often need to write some async logic that we know will be used with some store, eventually, but we don't know which store.
// 总之： 解偶、最佳实践。

// https://redux.js.org/advanced/middleware
// 在函数前后执行 1. 手动  2. 封装一个函数  3. 替换原函数，monkeypatch 4.

// redux 中间件的实现方式，相比beforeMiddleware afterMiddleWare的优点： 前后可关联

function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('dispatching', action)
      let result = next(action)
      console.log('next state', store.getState())
      return result
    }
  }
}

function applyMiddleware(store, middlewares) {
  middlewares.forEach((m) => (store.dispatch = m(store)(store.dispatch)))
}

function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()
  let dispatch = store.dispatch
  middlewares.forEach((middleware) => (dispatch = middleware(store)(dispatch)))
  return Object.assign({}, store, { dispatch })
}

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    })
    throw err
  }
}

/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 */
const timeoutScheduler = (store) => (next) => (action) => {
  if (!action.meta || !action.meta.delay) {
    return next(action)
  }

  const timeoutId = setTimeout(() => next(action), action.meta.delay)

  return function cancel() {
    clearTimeout(timeoutId)
  }
}

/**
 * Schedules actions with { meta: { raf: true } } to be dispatched inside a rAF loop
 * frame.  Makes `dispatch` return a function to remove the action from the queue in
 * this case.
 */
const rafScheduler = (store) => (next) => {
  const queuedActions = []
  let frame = null

  function loop() {
    frame = null
    try {
      if (queuedActions.length) {
        next(queuedActions.shift())
      }
    } finally {
      maybeRaf()
    }
  }

  function maybeRaf() {
    if (queuedActions.length && !frame) {
      frame = requestAnimationFrame(loop)
    }
  }

  return (action) => {
    if (!action.meta || !action.meta.raf) {
      return next(action)
    }

    queuedActions.push(action)
    maybeRaf()

    return function cancel() {
      queuedActions = queuedActions.filter((a) => a !== action)
    }
  }
}

/**
 * Lets you dispatch promises in addition to actions.
 * If the promise is resolved, its result will be dispatched as an action.
 * The promise is returned from `dispatch` so the caller may handle rejection.
 */
const vanillaPromise = (store) => (next) => (action) => {
  if (typeof action.then !== 'function') {
    return next(action)
  }

  return Promise.resolve(action).then(store.dispatch)
}

/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
const readyStatePromise = (store) => (next) => (action) => {
  if (!action.promise) {
    return next(action)
  }

  function makeAction(ready, data) {
    const newAction = Object.assign({}, action, { ready }, data)
    delete newAction.promise
    return newAction
  }

  next(makeAction(false))
  return action.promise.then(
    (result) => next(makeAction(true, { result })),
    (error) => next(makeAction(true, { error }))
  )
}

/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)

// You can use all of them! (It doesn't mean you should.)
const todoApp = combineReducers(reducers)
const store = createStore(
  todoApp,
  applyMiddleware(
    rafScheduler,
    timeoutScheduler,
    thunk,
    vanillaPromise,
    readyStatePromise,
    logger,
    crashReporter
  )
)





const tool = require('@reduxjs/toolkit') // redux immer redux-thunk

const { createStore } = tool

const reducer = (state = {}, action) => {
  const { type, payload } = action
  if (type === 'a') {
    return { ...state, a: payload }
  }
  return state
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: 'a', payload: { a: 1 } })
