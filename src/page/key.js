import { divide } from 'lodash'
import React, { useState } from 'react'

export default function Key() {
  const [list, setList] = useState([
    { name: 1, label: 1 },
    { name: 2, label: 2 },
    { name: 3, label: 3 },
  ])
  const [Type, setType] = useState('div')

  return (
    <div>
      <button
        onClick={() => {
          // setType('p')
          setList(list.map((item) => (item.name === 2 ? { name: 2, label: 3 } : item)))
        }}
        type="button"
      >
        change
      </button>
      {list.map((item, i) => {
        return <Type key={item.name}>{item.label}</Type>
      })}
    </div>
  )
}
