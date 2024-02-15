// Tutor Schema

import mongoose from "mongoose";

const tutorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    availableTime:{
        type:String,
        required:true
    },
    endingTime:{
        type:String,
        required:true
    },
    expertise:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:true
    },
   
  

},{timestamps:true})


const Tutor=mongoose.model('Tutor',tutorSchema)

export default Tutor
