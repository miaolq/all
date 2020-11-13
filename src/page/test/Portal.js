import React, { useEffect, useRef, useState, Profiler } from 'react'
import ReactDOM from 'react-dom'
import Rs from 'react-dom/server'

function Portal(props) {
  const ref = useRef(document.createElement('div'))

  useEffect(() => {
    const el = ref.current
    document.body.appendChild(el)
    while (true) {}
    return () => {
      document.body.removeChild(el)
    }
  }, [])

  console.log(6666666, props.children)
  React.Children.map(props.children, (item) => {
    console.log(7777778, item)
  })

  return ReactDOM.createPortal(
    <>
      <div>1</div>
      {props.children}
      <div>2</div>
    </>,
    ref.current
  )
}

// function A(){
//   return <div>1</div>
// }

// function B(){
//   return
// }

export default function PWrap() {
  const [show, setShow] = useState(false)

  const a = '"<script>alert(1)</script>"'

  const p = (
    <Profiler
      id="pro"
      onRender={(...o) => {
        console.log(o)
      }}
    >
      <div
        onClick={() => {
          console.log('Portal parent click')
        }}
      >
        <div
          onCopy={(e, c) => {
            console.log('copy', e, c)
          }}
        >
          {a}
        </div>

        {(() => {
          console.log(a)
        })()}
        <button
          onClick={() => {
            setShow((pre) => !pre)
          }}
          type="button"
        >
          toggle
        </button>
        {show && (
          <Portal>
            <div>1</div>
            <div>2</div>
          </Portal>
        )}
      </div>
    </Profiler>
  )

  // console.log(9899, Rs.renderToString(p))
  // ReactDOM.hydrate(p,document.body,())

  return p
}
