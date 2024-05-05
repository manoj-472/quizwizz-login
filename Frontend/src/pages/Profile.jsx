import React from 'react'
import { useAuth } from '../contexts/auth'
import { NavLink,Link,Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import  './css/Profile.css'
const profile = () => {
  const {getUserData}=useAuth();
  
  const user1=getUserData();
  return (
    <>
    <Navbar/>
    <div className="main-box d-flex">
    <div className="side-navbar d-flex flex-column">
        <NavLink to='/profile'> <div className="navitem"><p>Profile</p></div></NavLink>
        <NavLink to='created-quizzes'> <div className="navitem"><p>Quizzes Created</p></div></NavLink>
        <NavLink to='joined-quizzes'> <div className="navitem"><p>Quizzes Participated</p></div></NavLink>
        <NavLink to='/logout'> <div className="navitem"><p>Log Out</p></div></NavLink>
    </div>
    <div className='outlet-div flex-grow-1'><Outlet /></div>
    </div>
    </>
  )
}

export default profile