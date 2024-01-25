import React from 'react'
import "./LoginStaff.css"

const LoginStaff = () => {
  return (
    <div className='Wrapper'>
        {/* header */}
        <header className='staff'>
            <h2 className='logo'>GLATS</h2>
        </header>
    {/* liepu logo */}
    <div className='liepaja-logo'>
        LIEPAJA UNIVERSITY
        <p>School Staff</p>
        
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

export default LoginStaff