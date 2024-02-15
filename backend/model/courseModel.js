// Course Schema

import mongoose from "mongoose";

const courseSchema=mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true,
        
    },
    description:{
type:String,
required:true
    },
    category:{
        type:String,
        required:true,
    }
   
  

},{timestamps:true})


const Course=mongoose.model('Course',courseSchema)

export default  Course
