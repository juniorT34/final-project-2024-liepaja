import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
import './LoginAdmin.css'

const LoginAdmin = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const login_url = '/admin/login'
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
        <header className='admin'>
            <h2 className='logo'>GLATS</h2>
        </header>
    {/* liepu logo */}
    <div className='liepaja-logo'>
        LIEPAJA UNIVERSITY
        <p>Administrator</p>
        
    </div>
    {/* input fields */}
    <form className='input-fields-wrapper' onSubmit={handleSubmit}>
        
        <div className='email'>
            <input type="email" name='email' placeholder='Email' onChange={e => setEmail(e.target.value) } value={email} required/>
            
        </div>

        <div className='password'>
            <input type="password" name='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
            <small className='error-msg'>{errMsg? errMsg: ""}</small>
        </div>

        <div className='register'>
            
            <button className='register-btn'>Log In</button>
            {success && navigate('/admin/home')}
        </div>

    </form>
    </div>
  )
}

export default LoginAdmin