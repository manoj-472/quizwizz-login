const Quiz=require("../models/quiz");
const {generateQid}=require("../services/qidgenerator")


async function viewQuiz(req,res){
    let quizid = req.params.quizid;
    const quiz=await Quiz.findOne({quizid:quizid})
    if(!quiz)
    return res.status(404).json({msg: "No such quiz exists"})
    console.log(quiz)
    return res.json(quiz);


}

async function createQuiz(req,res){
    const name=req.body.name;
    var quizid=generateQid();
    const description=req.body.description || "";
    const questions_list=req.body.questions_list;
    const answers_list=req.body.answers_list;
    const createdBy=req.user.userid;
    const nameExist=await Quiz.findOne({name:name});
    if(nameExist)
    return res.status(400).json({msg:"quiz name taken"});
    var quizidExist=await Quiz.findOne({quizid:quizid});
    while(quizidExist){
        quizid=generateQid();
        quizidExist=await Quiz.findOne({quizid:quizid});
    }

    try{
        let result=await Quiz.create({
            name,
            quizid,
            description,
            questions_list,
            answers_list,
            createdBy
        })
    }catch(err){
        return res.json({
            msg:`error occurred ${err}`
        });
    }
    return res.json({
        quizid:quizid
    });


}

async function editQuiz(req,res){
     let quizid = req.params.quizid;
    const quiz=await Quiz.findOne({quizid:quizid})
    if(!quiz)
    return res.status(404).json({msg: "No such quiz exists"});
    if(req.user.userid===quiz.createdBy){
        return res.json({msg:"authenticated to do this job"})
    }
    else{
        return res.json({msg:"not authenticated to do this job"})
    }
    
}

async function deleteQuiz(req,res){
    let quizid = req.params.quizid;
    const quiz=await Quiz.findOne({quizid:quizid})
    if(!quiz)
    return res.status(404).json({msg: "No such quiz exists"});
    if(user.userid===quiz.createdBy){
        await Quiz.deleteOne({quizid:quizid});
        return res.json({msg:"deleted quiz successfully"})
    }
    else{
        return res.json({msg:"not authenticated to do this job"})
    }
    
}

async function publishQuiz(req,res){
    let quizid = req.params.quizid;
    const quiz=await Quiz.findOne({quizid:quizid})
    if(!quiz)
    return res.status(404).json({msg: "No such quiz exists"});
    if(user.userid!==quiz.createdBy){
        return res.json({msg:"You are not authorised"});
    }
    if(quiz.isPublished){
        return res.json({msg:"Quiz already Published"})
    }
    //todo:update quiz.ispubished to true
    

}

module.exports={
    createQuiz,
    editQuiz,
    deleteQuiz,
    viewQuiz,
    publishQuiz
}
