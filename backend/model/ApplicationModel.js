// Application Schema

import mongoose from "mongoose";

const applicationSchema=mongoose.Schema({

    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
            },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    },
    course:{
type:String,

    },
 
status:{
    type:Boolean,
    default:null
}
   
  

},{timestamps:true})


const Application=mongoose.model('Application',applicationSchema)

export default  Application
