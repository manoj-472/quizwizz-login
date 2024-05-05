
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/QuizzesCreated.css'
import axios  from "axios"
import { useAuth } from '../contexts/auth'
import CreatedQuizCard from './CreatedQuizCard'
const QuizzesCreated = () => {
  const {user}=useAuth();
  //let user=getuserData;
  let userid=user.userid;
  const [quizzes,setQuizzes]=useState([]);
  const [quizfound,setQuizfound]=useState(true);
  
  useEffect(()=>{
  async function getQuizzes(){
    try{
        let response=await axios.get(`http://127.0.0.1:3000/quiz/created/${userid}`);
        setQuizzes(response.data.quizzes);
        console.log(response.data)
        console.log(response.data.quizzes);

      }catch(err){
        console.log(err.response.data);
        setQuizfound(false);

      }
    }
  getQuizzes();
  },[]);
  const deleteQuiz=async(quizid)=>{
    console.log(" in delte")
    console.log(quizid);
    console.log(user.userid)
    const data={
      userid:user.userid
    }
    try{
    let response=await axios.post(`http://127.0.0.1:3000/quiz/delete/${quizid}`,data);
    alert("Deleted Successfully")
    console.log(response.data)
    const newQuizList=quizzes.filter((quiz)=>quiz.quizid!==quizid)
    setQuizzes(newQuizList);
    
    }catch(err){
        console.log(err.response)
    }

    }
  
    let notEmpty=(quizzes.length!==0)
  

  
  
  
  
  return (
    <> 
    {(notEmpty)?(
    <div className="all-cards d-flex">
      
      {quizzes.map((quiz)=>(
      <CreatedQuizCard Quiz={quiz} key={quiz.quizid} deleteQuiz={deleteQuiz}/>)) }
      </div>
      ):(
        <div className="no-quiz-text">
          <p>NO QUIZ CREATED YET</p>
        </div>
      )
    }
    <Link to="/create">
            <div className="btn ">Create Quiz</div>
    </Link>
      
  </>
  )
}

export default QuizzesCreated