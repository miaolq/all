import React, { useState } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { nanoid } from 'nanoid'

import './react-dnd.scss'

const apple = 'apple'

export default function DndWrap() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Boxes />
    </DndProvider>
  )
}

function Boxes() {
  const [goods1, setGoods1] = useState([1])
  const [goods2, setGoods2] = useState([5])
  const [collected1, dropRef1] = useDrop(() => {
    return {
      accept: apple, // props=>{}
      drop(item, monitor) {
        // good place to dispatch
        console.log('drop1', item, monitor)
        console.log(monitor.didDrop(), monitor.getDropResult())
        return { dropAt: 1 }
      },
      // hover(item, monitor) {
      //   console.log('hover', item, monitor.isOver({ shallow: true }))
      // },
      canDrop(item, monitor) {
        return item.id < 5
      },
      collect(monitor) {
        return {
          1: monitor.canDrop(),
        }
      },
    }
  })
  console.log(collected1)
  const [collected2, dropRef2] = useDrop(() => {
    return {
      accept: apple,
      options: {
        arePropsEqual(p1, p2) {
          console.log(11, p1, p2)
          return false
        },
      },
      drop(item, monitor) {
        // good place to dispatch
        console.log('drop2', item, monitor)
        console.log(monitor.didDrop(), monitor.getDropResult())
        return { dropAt: 2 }
      },
    }
  })
  console.log('dnd-wrap')

  return (
    <div>
      <div ref={dropRef1} className="box">
        {goods1.map((item) => (
          <Dnd key={item} data={item} />
        ))}
      </div>
      <div ref={dropRef2} className="box">
        {goods2.map((item) => (
          <Dnd key={item} data={item} />
        ))}
      </div>
    </div>
  )
}

function Dnd(props) {
  const a = useDrag(() => {
    return {
      type: apple,
      item: () => {
        return { id: props.data }
      },
      end(item, monitor) {
        // 拖动结束，dispatch action的好地方
      },
      options: {
        arePropsEqual(p1, p2) {
          console.log(22, p1, p2)
          return true
        },
      },
      previewOptions: { a: 1 },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        getInitialSourceClientOffset: monitor.getInitialSourceClientOffset(),
        getInitialClientOffset: monitor.getInitialClientOffset(),
        // getClientOffset: monitor.getClientOffset(),
        // getDifferenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
        // getSourceClientOffset: monitor.getSourceClientOffset(),
      }),
    }
  })

  const [collected, drag, dragPreview] = a
  console.log(`dnd  render${props.data}`, collected)

  return (
    <div className="drag-preview" ref={dragPreview}>
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div className="drag" role="Handle" ref={drag}>
        {props.data}
      </div>
    </div>
  )
}
