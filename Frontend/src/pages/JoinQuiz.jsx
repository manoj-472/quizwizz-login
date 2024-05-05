import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useAuth } from '../contexts/auth';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
const JoinQuiz = () => {
  //let [searchParams, setSearchParams] = useSearchParams();
//   let [isLoading,setIsLoading]=useState(true)
//   const [quiz,setQuiz]=useState()
//   const {quizid} = useParams();
//   const [isErr,setisError]=useState(false)
//   const {user}=useAuth();
//   const [errorText,setErrorText]=useState("default error text")
//   useEffect(()=>{
//     const fetchQuiz=async()=>{
//       console.log(quizid)
    
//     try{
//       let response=await axios.get(`http://localhost:3000/exam/${quizid}`);
//       console.log("after response")
//     console.log(response);
//     setQuiz(response.data)
//     setIsLoading(false)
//   }catch(err){
//     // setError(err.response.data.message)
//     console.log(err);
//     console.log("after catch response")
//     setisError(true)
//     setErrorText(err.response.data.message)
//     setIsLoading(false)
//   }
// }
// 


//   },[])
    const { state: { QuizData } } = useLocation();
    console.log(QuizData)
    

 
  return (
    
    <>
      {/* {isLoading?(<div> Loading... </div>):(
        isErr?(<p>{errorText}</p>):(
          
          <>
          <p> {quiz.quizid}</p>
            <p> {quiz.name}</p>
          
          </>
        )
      )
      
    }  */}
    <p>{QuizData.name}</p>
      
    
    
    
    
    
    </>

  )
}

export default JoinQuiz