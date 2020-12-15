import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  // var b = React.createElement(B, null, 'bbbb-children')

  const [count, setCount] = useState(222)
  const [count22, setCount22] = useState(22233)
  useCallback(() => {}, [])

  useEffect(() => {
    console.log(count)
  }, [count])

  const res = React.createElement(
    'div',
    {
      onClick: () => {
        debugger
        setCount((pre) => pre + 1)
      },
    },
    'app',
    count,
    count22
  )

  return res
}

// function B(props) {
//   const [count, setCount] = useState(1)

//   var res = React.createElement()

//   return (
//     <div>
//       <div onClick={()=>{}}>++++++</div>
//       <div>{props.children}</div>
//     </div>
//   )
// }

const a = React.createElement(App)
const container = document.getElementById('root')
ReactDOM.render(a, container)
