import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import './RegisterStudent.css'

const Register = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email,setEmail] = useState('')
    const [faculty,setFaculty] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    // const [errMsg, setErrMsg] = useState('')
    const login_url = '/student/register'
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await axios.post(login_url,
                JSON.stringify({name,surname,email,password,faculty}),
            {
                headers: {'Content-Type': "application/json"},
                withCredentials: true
            })
            console.log(JSON.stringify(response?.data))
            setSuccess(true)
            // const user = response?.data?.user
            setName('')
            setSurname('')
            setEmail('')
            setPassword('')    
            // setErrMsg("")
        }catch(err){
            if(err) {

                // setErrMsg("Wrong email or password")
            }
            console.log(err)
        }

        setName('')
        setSurname('')
        setEmail('')
        setPassword('')
    }



  return (
    <div className='Wrapper'>
        {/* header */}
        <header className='header'>
            <h2 className='logo'><Link to={'/'}>GLATS</Link></h2>
            <div className='right-side'>
                <small className='member'>Already a Member?</small>
                <Link to={'/student/login'}><button>Log in</button></Link>
            </div>
        </header>
    {/* liepu logo */}
    <div className='liepaja-logo'>
        LIEPAJA UNIVERSITY
        <p>Student</p>
        
    </div>
    {/* input fields */}
    <form className='input-fields-wrapper' onSubmit={handleSubmit}>
        
        <div className='input-name'>
            <input type="text" name='name' className='name' placeholder='First name'
                onChange={e => setName(e.target.value)} value={name}
            />
            <input type="text" name='surname' className='surname' placeholder='Last name' 
            onChange={e => setSurname(e.target.value)} value={surname}/>
        </div>
        
        <div className='email'>
            <input type="email" name='email' placeholder='Email' 
            onChange={e => setEmail(e.target.value)} value={email}/>
        </div>

        <div className='faculty'>
            <select name="faculty" id="" onChange={e => setFaculty(e.target.value)} value={faculty}>
                <option value="faculty1">Information Technology</option>
                <option value="faculty2">Computer Science</option>
                <option value="faculty3">faculty 3</option>
            </select>
        </div>

        <div className='password'>
            <input type="password" name='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
        </div>

        <div className='register'>
            <button className='register-btn'>Register</button>
            {success && navigate('/student/login')}
        </div>

    </form>
    </div>
  )
}

export default Register