import { configureStore } from '@reduxjs/toolkit'
import sentenceSlice from './sentence-rd'

export default configureStore({
  reducer: {
    sentence: sentenceSlice.reducer,
  },
})
