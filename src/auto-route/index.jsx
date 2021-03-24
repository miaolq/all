import React from 'react'
import { Route, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { paramCase } from 'change-case'
import { getNameExt } from '../util'

export default function Index() {
  const { isExact, path } = useRouteMatch()
  const list = []

  const data = require.context('.', false, /.+\.jsx?$/)

  data.keys().forEach((key) => {
    if (key === './index.jsx') return
    const { name } = getNameExt(key)
    const module = data(key)
    list.push({
      path: `${path}/${paramCase(name)}`,
      component: module.default,
      label: module.label,
    })
  })

  return (
    <>
      {isExact &&
        list.map((item) => (
          <div key={item.path}>
            <Link to={item.path}>{item.label || item.path}</Link>
          </div>
        ))}

      {list.map((item) => {
        return <Route key={item.path} path={item.path} component={item.component} />
      })}
    </>
  )
}
