import React, { useContext } from 'react'
import TestContext from './con'
import ContextChild from './context-child'

export default function Context() {
  return (
    <TestContext.Provider value={{}}>
      <div className="context">context wrapper</div>
      <ContextChild />
    </TestContext.Provider>
  )
}
