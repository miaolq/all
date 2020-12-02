import React, { useContext } from 'react'
import TestContext from './con'

export default function ContextChild() {
  const testValue = useContext(TestContext)
  return <div>{testValue.a}</div>
}
