import React from 'react'
import { Link } from 'react-router-dom'
import './RegisterTeacher.css'

const RegisterTeacher = () => {
  return (
    <div className='Wrapper'>
        {/* header */}
        <header className='header'>
            <h2 className='logo'>GLATS</h2>
            <div className='right-side'>
                <small className='member'>Already a Member?</small>
                <Link to={'/teacher/login'}><button>Log in</button></Link>
            </div>
        </header>
    {/* liepu logo */}
    <div className='liepaja-logo'>
        LIEPAJA UNIVERSITY
        <p>teacher</p>
        
    </div>
    {/* input fields */}
    <div className='input-fields-wrapper'>
        
        <div className='input-name'>
            <input type="text" className='firstname' placeholder='First name'/>
            <input type="text"className='lastname' placeholder='Last name'/>
        </div>
        
        <div className='email'>
            <input type="email" placeholder='Email'/>
        </div>

        <div className='faculty'>
            <select name="profession" id="">
                <option value="profession1">profession 1</option>
                <option value="profession2">profession 2</option>
                <option value="profession3">profession 3</option>
            </select>
        </div>

        <div className='faculty'>
            <select name="country" id="">
                <option value="france">france</option>
                <option value="latvia">latvia</option>
                <option value="germany">germany</option>
            </select>
        </div>

        <div className='password'>
            <input type="password" placeholder='password'/>
        </div>

        <div className='register'>
            <button className='register-btn'>Register</button>
        </div>

    </div>
    </div>
  )
}

export default RegisterTeacher