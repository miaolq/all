import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const resourceSlice = createSlice({
  name: 'resource',
  initialState: {
    users: [],
  },
  reducers: {
    mergeResource(state, action) {
      const { payload } = action
      return { ...state, ...payload }
    },
    setResourceStatus(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { mergeResource, setResourceStatus } = resourceSlice.actions

export const getResource = (key) => async (dispatch, getState) => {
  const loadingKey = `${key}_loading`
  if (getState().resource[loadingKey]) {
    return
  }
  dispatch(setResourceStatus({ [loadingKey]: true }))
  const res = await fetch(
    `https://run.mocky.io/v3/64f827eb-e395-4f5b-b7c5-49a84cfe5935?key=${key}&mocky-delay=2000ms`
  ).then((resp) => resp.json())
  dispatch(mergeResource({ [key]: res.data }))
  dispatch(setResourceStatus({ [loadingKey]: false }))
}

export const useResource = (key) => {
  const loadingKey = `${key}_loading`
  const data = useSelector(
    (state) => {
      return { data: state.resource[key], dataLoading: state.resource[loadingKey] }
    },
    (prev, cur) => {
      return prev.data === cur.data && prev.dataLoading === cur.dataLoading
    }
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getResource('users'))
  }, [dispatch])
  return data
}

export default resourceSlice.reducer
