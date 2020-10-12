import { configureStore } from '@reduxjs/toolkit'
import sentenceSlice from './sentence-rd'
import userSlice from './user-rd'

export default configureStore({
  reducer: {
    sentence: sentenceSlice.reducer,
    user: userSlice.reducer,
  },
})
