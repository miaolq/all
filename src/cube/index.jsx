import React, { useState } from 'react'
import { Button } from 'antd'
import CubeFrame from './cube-frame'

export default function MagicCube() {
  console.log(Button)
  debugger
  useState(1)
  return (
    <div>
      cube
      <CubeFrame />
    </div>
  )
}
