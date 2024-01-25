import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <div className='Wrapper'>
        {/* header */}
        <header className='header'>
            <h2 className='logo'>GLATS</h2>
            
            <div className='right-side'>
                
                <Link to={"/loginOptions"}><button className='login-btn btn1'>Login</button></Link>
                <Link to={"/registerOptions"}><button className='register-btn btn2'>Register</button></Link>
            </div>
        </header>
            <h2 className='title'>Guest Lecturer Attendance Tracking System</h2>
            <p className='welcome'>The guest lecturer attendance tracking system or GLATS
            is a website which is intended to create an efficient and user friendly system
            for tracking guest lecturer and student attendance.</p>
            <div className='right-side button'>
                
                <Link to={"/loginOptions"}><button className='login-btn'>Login</button></Link>
                <Link to={"/registerOptions"}><button className='register-btn'>Register</button></Link>
            </div>

    </div>
  )
}

export default Home