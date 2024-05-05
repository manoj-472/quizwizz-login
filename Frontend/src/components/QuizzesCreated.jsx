import React from 'react'
import './css/QuizzesCreated.css'
const QuizzesCreated = () => {
  const Quiz={
    name:"Rock",
    participant_count:10,
    question_count:5,
    isPublished:true,
    isStarted:true,
    isEnded:true
  }
  return (
    <>
    <div className="all-cards d-flex">
      <div className="card ">
        <br />
       <h4 className='quiz-name-tag'>{Quiz.name}</h4>
       <p><b>No of Participants:</b>{Quiz.participant_count}</p> 
       <p><b>No of Questions: </b>{Quiz.question_count}</p>
       
       {
       Quiz.isEnded?(
        <button >View Results </button>
       ):(
        !Quiz.isPublished?(
        <button >Publish Quiz</button>
       ):(
       !Quiz.isStarted?(
            <button >Start Quiz</button>
          ):(
            <button >Stop Quiz</button>
          )
          
       )
      )
       }
       <button >Delete Quiz</button>


      </div>
      <div className="card"></div>
      <div className="card"></div>


    </div>
    
    </>
  )
}

export default QuizzesCreated