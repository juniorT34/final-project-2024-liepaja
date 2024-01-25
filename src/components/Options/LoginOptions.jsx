import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./LoginOptions.css"






const LoginOptions = () => {
  
  return (
    <div className='Wrapper'>
      <h2 className='logo'>GLATS</h2>
      <p className='action'>Login as: </p>
      <div className='options'>
        <Link to={'/teacher/login'} ><button>Teacher</button></Link>
        <Link to={'/student/login'}><button>Student</button></Link>
        <Link to={'/school-staff/login'} ><button>School Staff</button></Link>
        <Link to={'/admin/login'} ><button>Admin</button></Link>
      </div>
    </div>
  )
}

export default LoginOptions