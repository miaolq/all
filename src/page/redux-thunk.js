import React, { useEffect } from 'react'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const store = createStore((state = [], action) => {
  if (action.type === 'add') {
    return state.concat(action.data)
  }
  return state
}, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState())
})

export default function () {
  useEffect(() => {
    store.dispatch({ type: 'add', data: 1 })
    store.dispatch({ type: 'add', data: 2 })
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: 'add', data: 3 })
      }, 1000)
    })
    // setTimeout(() => {
    //   store.dispatch({ type: 'add', data: 3 })
    // }, 2000)
  }, [])
  return <div>thunk</div>
}
