import React from 'react'
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { nanoid } from 'nanoid'

import './react-dnd.scss'

export default function DndWrap() {
  console.log('dnd-wrap')
  return (
    <DndProvider backend={HTML5Backend}>
      <Dnd />
    </DndProvider>
  )
}

function Dnd() {
  console.log('dnd')
  const a = useDrag(() => {
    console.log('use drag')
    return {
      type: 'BOX',
      item: { id: nanoid() },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }
  })

  const [collected, drag, dragPreview] = a

  console.log(collected)

  return (
    <div  className="drag-preview" ref={dragPreview}>
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div className="drag" role="Handle" ref={drag} />
    </div>
  )
}
