import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to='about'>click to go to about</Link>
      <div>
        <Link to='test'>click to go to test</Link>
      </div>
    </div>
  )
}

export default Home
