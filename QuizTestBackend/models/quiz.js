const mongoose=require("mongoose")

const quizSchema=new mongoose.Schema(
    {
         quizid:{
            type: String,
            required:true,
            unique:true
        },
        name:{
            type: String,
            required:true,
            unique:true
        },
       

        description:{
            type: String
        },
        questions_list:[
            {
                question_number:{
                    type:Number
                },
                question:String,
                options:[],
                qtype: {
                    type: String,
                    enum: ['MCQ', 'SA','LA'],
                    default: 'MCQ'
                },
                answer:{
                    type:Number
                },
                mark:{
                    type:Number,
                    default:1
                }
                
                }
            
        ],
        //send marks also along with the answers if custom marks
        createdBy:{
            type:String,
            required:true
        },

        isPublished:{
            type:Boolean,
            default:false
        },
        isStarted:{
            type:Boolean,
            default:false
        },
        isEnded:{
            type:Boolean,
            default:false
        }
       //TODO: add participant list to the schema
       //TODO: add study material uri
       //TODO: multiple attempts
    }
)

const Quiz=mongoose.model( "Quiz",quizSchema);
module.exports=Quiz;