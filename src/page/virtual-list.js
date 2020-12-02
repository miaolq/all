import React, { useState } from 'react'

function VirtualBox(props) {
  return <div>{props.children}</div>
}

export default function Vl() {
  const [num, setNum] = useState(() => {
    return Array(5000)
      .fill(1)
      .map((item, i) => i + 1)
  })

  console.log(num)

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      {num.map((item) => (
        <VirtualBox key={item}>
          <Item i={item} />
        </VirtualBox>
      ))}
    </div>
  )
}

function Item(props) {
  const [height, setHeight] = useState(Math.floor(Math.random() * 50) + 50)
  return (
    <div style={{ height, border: '1px solid #999' }}>
      <button
        type="button"
        onClick={() => {
          setHeight((pre) => pre + 20)
        }}
      >
        height + 20
      </button>
      <button
        type="button"
        onClick={() => {
          setHeight((pre) => pre - 20)
        }}
      >
        height - 20
      </button>
      <img
        style={{ borderRadius: '50%', width: 50, height: 50, animation: 'bounce 2s infinite' }}
        src={`${GOOD}/avatar/avatar2.jpg`}
      />
      <div>{props.i}</div>
    </div>
  )
}
