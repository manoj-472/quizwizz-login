const mongoose=require("mongoose")

const resultSchema=new mongoose.Schema(
    {
        quizid:{
            type:String,
            required:true
        },
        userid:{
            type:String,
            required:true
        },
        attempted_list:{

        },
        score:{
            type:Number,
            default:0
        },
        attempt_count:{
            type:Number,
            default:0
        }
    }
)

const Result=mongoose.model( "Result",resultSchema);
module.exports=Result;