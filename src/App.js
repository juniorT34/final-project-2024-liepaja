import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginOptions from './components/Options/LoginOptions';
import RegisterOptions from './components/Options/RegisterOptions';
import Home from './components/Home/Home';
// student
import Login from './components/student/LoginStudent';
import Register from './components/student/RegisterStudent';
// admin
import LoginAdmin from './components/admin/LoginAdmin';
import AdminHomePage from './components/Dashboard/adminDashboard/AdminHomePage';
import AdminClasses from './components/Dashboard/adminDashboard/AdminClasses';
import AdminTeachers from './components/Dashboard/adminDashboard/AdminTeachers';
import AdminStudents from './components/Dashboard/adminDashboard/AdminStudents';

// staff login
import LoginStaff from './components/school staff/LoginStaff';
// teacher
import LoginTeacher from './components/teacher/LoginTeacher';
import RegisterTeacher from './components/teacher/RegisterTeacher';
import Dashboard from './components/Dashboard/Dashboard'

// other
import Notice from './components/Dashboard/Notice';
import Messages from './components/Dashboard/Messages';
import Feedback from './components/Dashboard/Feedback';
import { MyProvider } from './api/context';

function App() {
  return (
    <Router>
          <MyProvider>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* options to login */}
          <Route path="/loginOptions" element={<LoginOptions />} />

          {/* student login and registration routes */}
          <Route path="/student/login" element={<Login />} />
          <Route path="/student/register" element={<Register />} />

          {/* admin login route */}
          <Route path='/admin/login' element={<LoginAdmin />}/>
          <Route path='/admin/home' element={<AdminHomePage />}/>
          <Route path='/admin/classes' element={<AdminClasses />}/>
          <Route path='/admin/teachers' element={<AdminTeachers />}/>
          <Route path='/admin/students' element={<AdminStudents />}/>
          {/* school staff login route */}
          <Route path='/school-staff/login' element={<LoginStaff />}/>

          {/* options to register */}
          <Route path="/registerOptions" element={<RegisterOptions />} />

          {/* teacher login and registration routes */}
          <Route path='/teacher/login' element={<LoginTeacher />}/>
          <Route path='/teacher/register' element={<RegisterTeacher />}/>
          {/* Dashboard */}
          <Route path='/dashboard' element={<Dashboard />}/>
          {/* other */}
          <Route path='/Notice' element={<Notice />}/>
          <Route path='/messages' element={<Messages />}/>
          <Route path='/feedback' element={<Feedback />}/>
        </Routes>
      </div>
    </MyProvider>
    </Router>

      );
}

export default App;
