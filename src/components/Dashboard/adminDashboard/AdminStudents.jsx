import React, { useState,useEffect } from 'react'
import Head from '../Head'
import Sidebarnew from '../Sidebarnew'
import './adminClasses.css'
import axios from '../../../api/axios'
import './adminStudents.css'
import { useMyContext } from '../../../api/context'
import { useNavigate } from 'react-router-dom'



const login_url = '/student/infos'

const AdminStudents = () => {
  
  const navigate = useNavigate()
    const user = useMyContext()
    console.log(user)
    const [students, setStudents] = useState([])

    useEffect(() =>{
  
  const fetchData = async() =>{
    try{
  
      const response = await axios.get(login_url,
        {
            headers: {'Content-Type': "application/json"},
            withCredentials: true
        })
        if(response.status = 200){
  
          console.log(response.data.message[0].id)
          setStudents(response?.data?.message)
        }
        
    }catch(err){
      console.log(err)
    }
}
        fetchData()
    },[])

    const handleEdit = (e) =>{
      navigate(`/${user[1]}/:id`)
    }
    
    const handleDelete = (e) =>{
      navigate(`/${user[1]}/:id`)
    }



  return (
    <div>
      <Head />
      <div className='admin-class'>
        <Sidebarnew />
         <div className="classes">
          <h2 className='title'>All students : </h2>
          <div className="all-courses">
          <div className="courses">

            <div className='heading'>
                
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>surname</th>
                            <th>email</th>
                            <th>faculty</th>
                            
                        </tr>
                    </thead>
                    {students.map((student) =>(
                        <tbody>
                        <tr className='line'>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.email}</td>
                            <td>{student.faculty}</td>
                            <button className='btn edit' id='edit'>Edit</button>
                            <button className='btn delete' id='delete'>Delete</button>
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

export default AdminStudents