import React from 'react'
import { Link } from 'react-router-dom'
import "./RegisterOptions.css"
const RegisterOptions = () => {
  return (
    <div className='Wrapper'>
      <h2 className='logo'>GLATS</h2>
      <p className='action'>Register as: </p>
      <div className='options'>
        <Link to={'/teacher/register'}><button>Teacher</button></Link>
        <Link to={'/student/register'}><button>Student</button></Link>
      </div>
    </div>
  )
}

export default RegisterOptions