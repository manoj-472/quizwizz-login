import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Buttonset.css'
import { useAuth } from '../contexts/auth'
import { useNavigate } from "react-router-dom";
const Buttonset = () => {
    const navigate = useNavigate();
    const [QuizId,setQuizId]=useState("")
    const [warningText,setWarningText]=useState("")
    const {isLoggedin}=useAuth();
    const handleInputChange=(e)=>{
        console.log(e.target.value)
        setWarningText("")
        setQuizId(e.target.value)
    }
    // useEffect(()=>{
    //     if(!QuizId){
            
    //     }
    // },[QuizId])

    const handleJoin=(e)=>{
        if(!isLoggedin){
            
            navigate("/login")}
        let isEmpty=!QuizId;
        console.log(`isEmpty:${isEmpty}`)
        if(isEmpty){
            (setWarningText("Please enter the Quiz ID"));
        }
        else{
        let isValidQuizid=true;
        isValidQuizid?navigate(`/quiz/${QuizId}`):setWarningText("Please enter valid Quiz ID");
        }
        
    }
       

    



  return (
   <div className="outer-div-buttons">
    <div className="buttons">
        <div className="item item1 mx-4">
            <Link to="/create">
            <div className="btn ">Create Quiz</div>
            </Link>
        </div>
        <div className="item item2 mx-4">
            <div className="input-div">
                <input type="text" value={QuizId} onChange={handleInputChange} maxLength={5}/>
                {/* //TODO: user should enter numbers only length must be 5 */}

            </div>
            <div className="btn" onClick={handleJoin}> Join</div>
            <p id="warning-text">{warningText}</p>
            
        </div>
        

    </div>
   </div> 
    
  )
}

export default Buttonset