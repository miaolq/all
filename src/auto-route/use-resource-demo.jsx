import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useResource } from '../redux/resource.slice'

export default function D() {
  const { data, dataLoading } = useResource('users')

  return (
    <div>
      {data.length}
      {dataLoading + ''}
      <Child />
    </div>
  )
}

function Child() {
  const { data, dataLoading } = useResource('users')

  return (
    <div>
      child {data.length}
      {dataLoading + ''}
    </div>
  )
}
