import  express  from "express";

const router=express.Router()

import studentAuthCheck from '../middleware/authMiddleware.js'
import { Register,authStudent,getCourseName,submitApplication,displayCourses,displayTutors } from "../controller/studentController.js";


router.post('/register',Register);
router.post('/auth',authStudent)
router.get('/getCourseName',getCourseName)
router.post('/postApplication',submitApplication)
router.get('/displayCourses',displayCourses)
router.get('/displayTutors',displayTutors)


export default router


