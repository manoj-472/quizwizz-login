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

async function createQuiz(req,res,next){
    const name=req.body.name;
    var quizid=generateQid();
    const description=req.body.description || "";
    const questions_list=req.body.questions_list;
    const createdBy=req.body.user.userid;
    const nameExist=await Quiz.findOne({name:name});
    try{
    if(nameExist){
    const err=new Error();
    err.message="quiz name taken";
    err.status=400;
    throw err;
    }}catch(err){
        next(err);
    }
    var quizidExist=await Quiz.findOne({quizid:quizid});
    while(quizidExist){
        quizid=generateQid();
        console.log("generating quiz id again......")
        quizidExist=await Quiz.findOne({quizid:quizid});
    }

    try{
        let result=await Quiz.create({
            name,
            quizid,
            description,
            questions_list,
            createdBy
        })
    }catch(err){
        err.status=400;
        err.extraMessage="error while adding to database"
        return next(err);
    }
    return res.json({
        quizid:quizid,
        creator:req.body.user.name
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
