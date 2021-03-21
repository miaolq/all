import { configureStore } from '@reduxjs/toolkit'
import resource from './resource.slice'

export default configureStore({
  reducer: {
    resource,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware()
  // },
})
