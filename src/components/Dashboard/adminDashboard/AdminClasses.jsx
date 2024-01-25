import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Head from '../Head'
import Sidebarnew from '../Sidebarnew'
import './adminClasses.css'
import axios from '../../../api/axios'
import './adminStudents.css'
import { useMyContext } from '../../../api/context'

const login_url = '/users/courses'

const AdminClasses = () => {
  const navigate = useNavigate()

    const [courses, setStudents] = useState([])
    const [teaching,setTeaching] = useState([])
    const user = useMyContext()
    console.log(user)

useEffect(() =>{
  
  const fetchData = async() =>{
    try{
  
      const response = await axios.get(login_url,
        {
            headers: {'Content-Type': "application/json"},
            withCredentials: true
        })
        if(response.status = 200){
  
          // console.log(response.data.message[0].id)
          setStudents(response?.data?.message)
        }
        
    }catch(err){
      console.log(err)
    }
}


        fetchData()
        
    },[])

useEffect(() =>{
  const fetch = async() =>{
    try{
  
      const response = await axios.get('/users/teaching',
        {
            headers: {'Content-Type': "application/json"},
            withCredentials: true
        })
        if(response.status = 200){
  
          console.log(response.data.message)
          setTeaching(response?.data?.message)
        }
        
    }catch(err){
      console.log(err)
    }
  }
  fetch()
},[])

const handleEdit = (e) =>{
  navigate('/user/edit/:id')
}

const handleDelete = (e) =>{
  navigate('/user/delete/:id')
}


  return (
    <div>
      <Head />
      <div className='admin-class'>
        <Sidebarnew />
         <div className="classes">
          <h2 className='title'>All courses : </h2>
          <div className="all-courses">
          <div className="courses">

            <div className='heading'>
                
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Teacher</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    {courses.map((course) =>(
                        <tbody>
                        <tr className='line' key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            { teaching && teaching.map((teach) =>(

                              <td>{teach.name} {teach.surname}</td>
                            ))}
                            <button className='btn edit' id='edit' onClick={handleEdit}>Edit</button>
                            <button className='btn delete' id='delete' onClick={handleDelete}>Delete</button>
                        </tr>
                    </tbody>
                    ))}

                    
                </table>
            
                
                  
            </div>

            </div>

            
          
          </div>
          </div>
        </div>
      </div>
  )
}

export default AdminClasses