import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
import './LoginStudent.css'

const Login = () => {


    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const login_url = '/student/login'
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await axios.post(login_url,
                JSON.stringify({email,password}),
            {
                headers: {'Content-Type': "application/json"},
                withCredentials: true
            })
            console.log(JSON.stringify(response?.data))
            setSuccess(true)
            // const user = response?.data?.user
            setEmail('')
            setPassword('')    
            setErrMsg("")
        }catch(err){
            if(err) {

                setErrMsg("Wrong email or password")
            }
            console.log(err)
        }
        setEmail('')
        setPassword('')
    }

  return (
    <div className='Wrapper'>
        {/* header */}
        <header className='header'>
            <h2 className='logo'>GLATS</h2>
            <div className='right-side'>
                <small className='member'>No Account yet?</small>
                <Link to={'/student/register'}><button>Register</button></Link>
            </div>
        </header>
    {/* liepu logo */}
    <div className='liepaja-logo'>
        LIEPAJA UNIVERSITY
        <p>Student</p>
        
    </div>
    {/* input fields */}
    <form className='input-fields-wrapper' onSubmit={handleSubmit}>
        
        <div className='email'>
            <input type="email" name='email' placeholder='Email' onChange={e => setEmail(e.target.value)} value={email}/>
        </div>

        <div className='password'>
            <input type="password" name='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
            <small className='error-msg'>{errMsg? errMsg: ""}</small>
        </div>

        <div className='register'>
            <button className='register-btn'>Log In</button>
            {success && navigate('/dashboard')}
        </div>

    </form>
    </div>
  )
}

export default Login