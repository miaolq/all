import React from 'react'
import { Route } from 'react-router'
import { paramCase } from 'change-case'
import { getNameExt } from '../util'

export default function Index() {
  const list = []
  const data = require.context('.', true, /.+\.jsx?$/)
  data.keys().forEach((key) => {
    const { name } = getNameExt(key)
    list.push({ path: paramCase(name), component: data(key).default })
  })

  return (
    <>
      {list.map((item) => {
        return <Route key={item.path} path={`/ar/${item.path}`} component={item.component} />
      })}
    </>
  )
}
