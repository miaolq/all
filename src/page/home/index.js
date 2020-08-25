import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      home
      <Link to="/sentence">sentence</Link>
      <Link to="/form">form</Link>
    </div>
  )
}
