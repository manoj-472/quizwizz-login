const express=require("express")
const app=express()
const {connectDB}=require("./connection")
const cookieParser=require("cookie-parser")
const authRouter=require("./routes/auth")
const quizRouter=require("./routes/quiz")
const examRouter=require("./routes/exam")
const {loginRestricted}=require("./middlewares/auth")
const cors=require("cors")
const errorMiddleware=require("./middlewares/errorMware")
// app.use((error,res,req,next)=>{
//     console.log("yes i am here");
//     // console.log(err);

// })
const PORT =3000
const MONGODBURL="mongodb://127.0.0.1:27017/quizwizzdb"

connectDB(MONGODBURL).then(()=>{
    console.log("connected to mongodb succesfully")
}).catch((err)=>{
    console.log(`not connected${err}`)
})


app.use(cors())
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use("/auth",authRouter)
app.use("/quiz",loginRestricted,quizRouter)
app.use("/exam",loginRestricted,examRouter)
app.use(errorMiddleware)


app.listen(PORT,()=>{console.log(`listening on http:/127.0.0.1:${PORT}`);})