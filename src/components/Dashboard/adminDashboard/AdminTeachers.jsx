import React, { useState,useEffect } from 'react'
import Head from '../Head'
import Sidebarnew from '../Sidebarnew'
import './adminClasses.css'
import axios from '../../../api/axios'
import './adminTeachers.css'

const login_url = '/lecturer/infos'

const AdminTeachers = () => {

    const [teachers, setTeachers] = useState([])
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
          setTeachers(response?.data?.message)
        }
        
    }catch(err){
      console.log(err)
    }
}
        fetchData()
    },[])



  return (
    <div>
      <Head />
      <div className='admin-class'>
        <Sidebarnew />
         <div className="classes">
          <h2 className='title'>All teachers : </h2>
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
                            <th>country</th>
                            
                        </tr>
                    </thead>
                    {teachers.map((teacher) =>(
                        <tbody>
                        <tr className='line'>
                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.surname}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.country}</td>
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

export default AdminTeachers