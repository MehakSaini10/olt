import Student from "../model/studentModel.js";
import generateToken from "../utils/generateToken.js"
import Course from "../model/courseModel.js"
import Application from "../model/ApplicationModel.js";
import Tutor from '../model/tutorModel.js'

//Register student
let Register=async(req,res)=>{
    try{
       const {name,email,phone,password}=req.body
      
       const userExists=await Student.findOne({email:email}) 
           
       if(userExists){
        return res.status(400).json({message:'user already exist'})
       }

       const passwordRegex=/.{6,}/;

       if(!password.match(passwordRegex)){
        return res.status(400).json({message:'Password must be 6 atleast 6 characters'})
       }

       const student=await Student.create({
        name,
        email,
        phone,
        password
       })

       if(student){
        return res.status(200).json({message:'student registration successfull'})
       }else{
        return res.status(401).json({message:'Invalid mail or password'})
       }


    }catch(error){
console.error(error)
 res.status(500).json({error:'An error occurred while processing your request.'})
    }
}


//For authnticate Student
const authStudent=async(req,res)=>{
    try{
console.log('authstudent');
const {email,password}=req.body
console.log(req.body);
const student=await Student.findOne({email:email})
if(student && (await student.matchPassword(password))){
    const studentToken=generateToken(student._id)
   res.status(200).json({studentToken,message:'Login successfull'})
}else{
    res.status(401).json({message:'Invalid email or password'})
}

    }catch(error){
     console.error(error)
     res.status(500).json({error:'An error occured while processing your request.'})
    }
}

let getCourseName=async(req,res)=>{
    try{
        let courseNames = await Course.find({}).select('courseName');
        console.log('courseNames');
        res.status(201).json({courseNames})
    }catch(error){
        res.status(500).json({error:'An error occured while processing your get courseName.'})

    }
}

const submitApplication=async(req,res)=>{
try{
    console.log(req.body,'this is post application');
    let {courseId,courseName}=req.body
    console.log(courseId,courseName,'this is post application');
  
    let submitApplication=await Application.create({
        courseId:courseId,
        course:courseName
        
    })
    res.status(201).json({message:'Application submitted successfully'})
    // [0] { courseName: 'Mca', courseId: '65cd10ee16e6f00a5766e356' } this is post application

}catch(error){
    res.status(500).json({error:'An error occured while processing your get courseName.'})

}
}


const displayCourses=async(req,res)=>{
    try{
        let Courses=await Course.find({})
        res.status(201).json({Courses})

    }catch(error){
        res.status(500).json({error:'An error occured while processing your get course details for student.'})

    }
}

const displayTutors=async(req,res)=>{
    try{
        let Tutors=await Tutor.find({})
        res.status(201).json({Tutors})

    }catch(error){
        res.status(500).json({error:'An error occured while processing your get Tutors details for student.'})

    }
}

export {
    Register,
    authStudent,
    getCourseName,
    submitApplication,
    displayCourses,
    displayTutors
}