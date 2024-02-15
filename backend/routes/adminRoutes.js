import express from "express";
const router=express.Router()
import { Login,getStudentInfo,UpdateStudentInfo,GetTutor,AddTutor,UpdateTutor,GetCourse,
    AddCourse,UpdateCourse, DeleteCourse,GetApplication,ApplicationReject,ApplicationAccept } from "../controller/adminController.js";


router.post('/login',Login)

router.get('/getStudentInfo',getStudentInfo)
router.get('/updateStudentInfo',UpdateStudentInfo)


router.get('/getTutor',GetTutor)
router.post('/addTutor',AddTutor)
router.put('/updateTutor/:id',UpdateTutor)

router.get('/getCourses',GetCourse)
router.post('/addCourse',AddCourse)
router.put('/updateCourse/:id',UpdateCourse)
router.delete('/deleteCourse/:id',DeleteCourse)

router.get('/getApplication',GetApplication)
router.post('/reject',ApplicationReject)
router.post('/accept',ApplicationAccept)
router.put('/updateStudent/:id',UpdateStudentInfo)





export default router