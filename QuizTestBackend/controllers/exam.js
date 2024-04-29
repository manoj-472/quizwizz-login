const Exam=require("../models/exam")
const Quiz=require("../models/quiz")

async function getQuiz(res,req){
    const quizid=req.params.quizid;
    const quiz= await Quiz.findOne({quizid:quizid})
    //if quiz is completed or not published or quiz not uploaded
    if(!quiz  || !quiz.isPublished())
    return res.status(404).json( {msg:"No such quiz exists"})
    if(quiz.isEnded)
    return res.json({msg:"quiz completed"})
    if(!quiz.isStarted)
    return res.json({msg:"quiz not started"})
    return quiz;


}

async function submitExam(res,req){
    const quizid=req.params.quizid;
    const quiz= await Quiz.findOne({quizid:quizid})
    
    

}
module.exports={
    getQuiz,
    submitExam
}