import React from 'react'
import { useAuth } from '../contexts/auth'
const BasicInfo = () => {

const {user}=useAuth();

  return (
    <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.userid}</p>
    <p>No of Quizzes Particpated:4</p>
    <p>No of Quizzes Joined:4</p>
    </>
  )
}

export default BasicInfo