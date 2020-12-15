import { compose } from "@reduxjs/toolkit"

function doSth(args, middleWares) {
  let store = {}

  let dispatch = (action) => {
    console.log('dispatch ', action)
    return action
  }

  function applyMiddleware(middleWares) {
    function compose(...fns) {
      return fns.reduce((pre, cur) => (...args) => pre(cur(...args))) // args 不要漏掉
    }
  }

  applyMiddleware(middleWares)

  return {
    dispatch,
  }
}

// 


