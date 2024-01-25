import React from 'react'
import { Link } from 'react-router-dom'
import './LoginTeacher.css'

const LoginTeacher = () => {
  return (
    <div className='Wrapper'>
        {/* header */}
        <header className='header'>
            <h2 className='logo'>GLATS</h2>
            <div className='right-side'>
                <small className='member'>No Account yet?</small>
                <Link to={'/teacher/register'}><button>Register</button></Link>
            </div>
        </header>
    {/* liepu logo */}
    <div className='liepaja-logo'>
        LIEPAJA UNIVERSITY
        <p>Teacher</p>
        
    </div>
    {/* input fields */}
    <div className='input-fields-wrapper'>
        
        <div className='email'>
            <input type="email" placeholder='Email'/>
            <small className='error-msg'>Error Message</small>
        </div>

        <div className='password'>
            <input type="password" placeholder='password'/>
            <small className='error-msg'>Error Message</small>
        </div>

        <div className='register'>
            <button className='register-btn'>Log In</button>
        </div>

    </div>
    </div>
  )
}

export default LoginTeacher