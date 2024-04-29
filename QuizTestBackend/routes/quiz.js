const express=require("express")
const router=express()
const  {createQuiz,editQuiz,deleteQuiz,viewQuiz,publishQuiz}=require("../controllers/quiz")
router.get("/",(req,res)=>{
    return res.json({
        msg:"in quiz router",
        user:req.user
    })
})

//TODO: create a middle to check authorization

//create quiz
router.post("/",createQuiz)

router.get("/:quizid",viewQuiz)

router.patch("/:quizid",editQuiz)

router.delete("/:quizid",deleteQuiz)

router.post("/:quizid",publishQuiz)

//outer.get("/rankings/:quizid",(req,res)=>{console.log("still need to implement")})

//router.post("/quiz/stop/:id",stopQuiz)

module.exports=router;