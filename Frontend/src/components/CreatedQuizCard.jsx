import axios from 'axios';
import React,{useState}from 'react'
import { useAuth } from '../contexts/auth';

const CreatedQuizCard = ({Quiz,deleteQuiz}) => {
    const {user}=useAuth();
    const [quiz,setQuiz]=useState(Quiz)

    const startQuiz=async(quizid)=>{
      try{
      let response=await axios.patch(`http://127.0.0.1:3000/quiz/start/${quizid}`);
      alert(response.data.message)
      }catch(err){
        console.log(err.response.data.message)
      }

    }
    const endQuiz=async(quizid)=>{
      try{
      let response=await axios.patch(`http://127.0.0.1:3000/quiz/end/${quizid}`);
      alert(response.data.message)
      }catch(err){
        console.log(err.response.data.message)
      }

    }

    
    
 
    return (
    <>
    
    <div className="card ">
        <br />
       <h4 className='quiz-name-tag'>{Quiz.name}</h4>
       <p><b>No of Participants:</b>{Quiz.participant_count}</p> 
       <p><b>No of Questions: </b>{Quiz.question_count}</p>
       
       {
       Quiz.isEnded?(
        <>
        <button>View Results </button>
        <button onClick={()=>startQuiz(Quiz.quizid)}> Continue Responses</button>
        </>
       ):(
        !Quiz.isStarted?(
            <button onClick={()=>startQuiz(Quiz.quizid)}>Start Quiz</button>
          ):(
            <button onClick={()=>endQuiz(Quiz.quizid)}>Stop Quiz</button>
          )
        )
       }
       <button onClick={()=>deleteQuiz(Quiz.quizid)} >Delete Quiz</button>


      </div>
    
    
    </>
  )
}

export default CreatedQuizCard