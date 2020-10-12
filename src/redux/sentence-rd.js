import { createSlice } from '@reduxjs/toolkit'
import service from '../service/back'

const sentenceSlice = createSlice({
  name: 'sentence',
  initialState: {
    list: [],
  },
  reducers: {
    search: (condition) => async (dispatch, gs) => {
      const res = await service.getSenlist(condition)
      if (res.code === 0) {
        dispatch(res.data.list)
        console.log(9991, res)
      }
    },
  },
})

export const { search } = sentenceSlice.actions

export default sentenceSlice
