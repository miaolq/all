import { createSlice } from '@reduxjs/toolkit'
import service from '../service/back'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    account: '',
    avatar: '',
    tk: '',
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      const { payload } = action
      state = payload
    },
  },
})

export const { login } = userSlice.actions

export const loginT = (data) => async (dispatch, getState) => {
  const res = await service.login(data)
  if (res.code === 0) {
    // login是action的名字！！！
    dispatch(login(res.data))
  }
}

console.log(8889, login(77))

export default userSlice
