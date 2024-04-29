const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        userid:{
            type:String,
            unique : true,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
        //TODO:add quizzes participated
    }
)
const User=mongoose.model('User',userSchema);
module.exports=User; 