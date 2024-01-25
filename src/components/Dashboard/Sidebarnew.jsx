import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ForumIcon from '@mui/icons-material/Forum';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebarnew.css'
import { Link } from 'react-router-dom';

const Sidebarnew = () => {
  return (
    <div className='sidebar'>

        <div className='home icon'>
            <HomeIcon />  <Link className='link' to={'/admin/home'}>Home</Link>
        </div>

        <div className='classes icon'>
            <SchoolIcon /> <Link className='link' to={'/admin/classes'}>Classes</Link>
        </div>

        <div className='teachers icon'>
            <GroupIcon /> <Link className='link' to={'/admin/teachers'}>Teachers</Link>
        </div>
        
        <div className='students icon'>
            <PersonIcon /> <Link className='link' to={'/admin/students'}>Students</Link>
        </div>

        <div className='notice icon'>
            <AnnouncementIcon /> <Link className='link' to={'/notice'}>Notice</Link>
        </div>

        <div className='message icon'>
            <EmailIcon /> <Link className='link' to={'/messages'}>Messages</Link>
        </div>

        <div className='feedback icon'>
            <ForumIcon /> <Link className='link' to={'/feedback'}>Feedback</Link>
        </div>

        <div className='profil icon'>
            <AccountCircleIcon /> <Link className='link' to={'/admin/profile'}>Profile</Link>
        </div>

        <div className='logout icon'>
            <LogoutIcon /> <Link className='link' to={'/admin/logout'}>Log out</Link>
        </div>
    </div>
  )
}

export default Sidebarnew