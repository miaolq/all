import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: (state = { a: 1 }) => {
    return state
  },
})
