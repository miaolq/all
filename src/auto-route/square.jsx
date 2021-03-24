import React, { useState } from 'react'
import './square.scss'

export default function Square() {
  const [value, setValue] = useState('宽度高度随内容自动变的正方形')

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className="square">
        <div className="square-content">{value}</div>
        <div className="square-hidden">{value}</div>
      </div>
    </div>
  )
}

export const label = '宽度高度随内容自动变的正方形'
