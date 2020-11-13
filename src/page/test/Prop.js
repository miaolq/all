import React, { useState, useRef } from 'react'

// props每次渲染都不一样 immutable

let a

function Prop(props, two) {
  const [cc, setcc] = useState(1)
  console.log(99, two)

  const click = (e) => {
    const { dataset, aa } = e.target
    console.log(99, two)

    console.log(88, aa)
    // console.log(dataset.a, dataset.b, typeof dataset.b)
    // Object.keys(e.target).forEach((key) => {
    //   console.log(key, e.target[key])
    // })
  }

  //   ;(() => {
  //     const { dataset, aa } = null
  //   })()

  return (
    <div>
      {/* {(() => {
        const { dataset, aa } = null
      })()} */}
      <div>{props.a}</div>
      <div>
        cc {cc}{' '}
        <button
          ref={two}
          name={99}
          aa={88}
          data-a={{ a: 99 }}
          data-b={2}
          type="button"
          onClick={click}
        >
          ccccc
        </button>{' '}
      </div>
      <form
        onSubmit={(e) => {
          console.log('submit')
          e.preventDefault()
        }}
      >
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <select value="coconut" onChange={(e) => {}}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    </div>
  )
}

const PP = React.forwardRef(Prop)

export default function PropWrap() {
  const [c, setC] = useState(1)
  const d = useRef()
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setC((pre) => pre + 1)
        }}
      >
        add
      </button>
      <PP ref={d} a={c} />
    </div>
  )
}
