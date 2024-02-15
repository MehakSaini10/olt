// Student Schema

import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const studentSchema=mongoose.Schema({
    name:{
        type:String,
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
    },
    phone:{
        type:Number,
        default:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    // profileImage: {
    //     type: String, // You can store the image path or a unique identifier
    //     // default: 'default.jpg' // Default image for new users, change as needed
    // }

},{timestamps:true})


//Pre-save Hook
studentSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})

//Method to Match Password
studentSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

const Student=mongoose.model('Student',studentSchema)

export default Student
