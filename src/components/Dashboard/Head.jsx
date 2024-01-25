import React from 'react'
import { Link } from 'react-router-dom'
import './head.css'

const Head = () => {
  const user = "admin"
  return (
    <div className='head'>
        <h2><Link className='link1' to={'/'}>GLATS</Link></h2>
        <h4>{user} dashboard</h4>
        <div className='profile'>p</div>
    </div>
  )
}

export default Head