import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Busy() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      const now = Date.now()

      while (Date.now() < now + 5000) {
        //
        // console.log('busy' + Date.now())
      }
      console.log('done')
    }, 3000)
  }, [])

  return (
    <div className="busy">
      <button
        type="button"
        onClick={() => {
          setCount((pre) => pre + 1)
        }}
      >
        adddddd
      </button>
      {count}
    </div>
  )
}
