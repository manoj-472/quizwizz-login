const Exam=require("../models/exam")
const Quiz=require("../models/quiz")

async function getQuiz(req,res){
    const quizid=req.params.quizid;
    const userid=req.body.userid;
    const quiz= await Quiz.findOne({quizid:quizid})
    // console.log("in get quiz")
    // console.log(`hi${quiz}`)
    // console.log(quizid)
    // console.log("hello")
    //if quiz is completed or not published or quiz not uploaded
    if(!quiz )
    return res.status(404).json( {message:"No such quiz exists"})
    if(quiz.createdBy===userid)
    return res.status(401).json({message:"you are trying to access your own quiz"});
    if(quiz.isEnded)
    return res.status(400).json({message:"quiz completed"})
    if(!quiz.isStarted)
    return res.status(400).json({message:"quiz not accepting responses"})
    
    return res.json(quiz);


}
//*************************** *//
// if user submits,then
// update quizzes participated in user profile
//update quiz participants in quizdb
//update attempted count in result
//update scores in result
//*************************** *//
async function submitExam(res,req){
    const quizid=req.params.quizid;
    const quiz= await Quiz.findOne({quizid:quizid});
    //let userid=req.body.userid;


    
    

}
module.exports={
    getQuiz,
    submitExam
}