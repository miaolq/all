import React from 'react'

const TestContext = React.createContext({ a: 'default' })
// default value only works when there's no Provider above the compnent in the tree
// toknow

export default TestContext
