import React,{useEffect,useState} from 'react'
import './adminHomePage.css'
import '../Sidebar'
import '../Sidebarnew.jsx'
import '../Head.jsx'
import Head from '../Head.jsx'
import Sidebarnew from '../Sidebarnew.jsx'
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import axios from '../../../api/axios.js'
const log_url1 = "/users/courses"
const log_url2 = "/lecturer/infos"
const log_url3 = "student/infos"

const AdminHomePage = () => {

  const [courseCount,setCourseCount] = useState(0)
  const [teacherCount,setTeacherCount] = useState(0)
  const [studentCount,setStudentCount] = useState(0)

  useEffect(() =>{
    // request to students
    
      axios.get(log_url3).then(res =>{
        setStudentCount(res.data.message.length).catch(err => console.log(err))
      }) 
        
},[])

useEffect(() =>{
        // request to courses
      axios.get(log_url1).then(res =>{
        setCourseCount(res.data.message.length).catch(err => console.log(err))
      })
},[])

useEffect(() =>{
        // request to teachers
      axios.get(log_url2).then(res =>{
        setTeacherCount(res.data.message.length).catch(err => console.log(err))
      })
},[])



  
  
  
  return (
    <div>
      <Head />
      <div className='admin-home'>

        <Sidebarnew />
        
        <div className='main'>

          <div className='dash'>
            <div className="total-student total">
                <PersonIcon />
                <h4>Total Students</h4>
                <p>{studentCount}</p>
            </div>
            <div className="total-class total">
              <GroupIcon />
              <h4>Total Teachers</h4>
              <p>{teacherCount}</p>
            </div>
            <div className="total-teacher total">
              <SchoolIcon />
              <h4>Total Courses</h4>
              <p>{courseCount}</p>
            </div>
          </div>

          <div className='info'>No notices to show right now</div>
          
        </div>

      </div>
    </div>
  )
}

export default AdminHomePage