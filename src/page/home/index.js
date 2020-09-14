import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function Home() {
  const [c, setC] = useState(1)
  return (
    <div className="home">
      home12
      <button className="link" type="button" onClick={() => setC(c + 1)}>
        add{c}
      </button>
      <Link to="/sentence">sentence</Link>
      <Link to="/form">form</Link>
    </div>
  )
}
