import React from "react";
import { Routes,Route } from "react-router-dom";


//common Import
import NotFound from "../screens/NotFound.jsx";


///Student Import
import Register from "../screens/student/Register.jsx";
import Login from "../screens/student/Login.jsx";
import Home from "../screens/student/Home.jsx";
import Course from "../screens/student/Course.jsx";
import CourseApplication from "../screens/student/CourseApplication.jsx";
import TutorList from "../screens/student/TutorList.jsx";
import StudentPrivateRoute from "../components/privateRoute/studentPrivateRoute.jsx";


///Admin Import
import AdminLogin from "../screens/admin/Login.jsx";
import StudentManagement from "../screens/admin/StudentManagement.jsx";
import TutorManagement from "../screens/admin/TutorManagement.jsx";
import CourseManagement from "../screens/admin/CourseManagement.jsx";
import AdminPrivateRoute from "../components/privateRoute/adminPrivateRoute.jsx";
import ApplicationManagement from "../screens/admin/ApplicationManagement.jsx";


const Routers=()=>{
    return(
        <Routes>    
          {/* User Route */}
                 <Route path="/login" element={<Login/>} />
                 <Route path="/register" element={<Register/>} />
                 
                 {/* //due to some login error i stoped the private route */}
            <Route path="" element={<StudentPrivateRoute/>} >
            </Route>
                 <Route path="/home" element={<Home/>} />
                 <Route path="/course" element={<Course/>} />
                 <Route path="/application" element={<CourseApplication/>} />
                 <Route path="/tutor" element={<TutorList/>} />
           
            

            {/* Admin Route */}
                 <Route path="/admin/login" element={<AdminLogin/>} />
                 <Route path="/admin" element={<StudentManagement/>} />
                 <Route path="/admin/application" element={<ApplicationManagement/>} />
            <Route path="/admin" element={<AdminPrivateRoute/>} >
            </Route>
                 <Route path="/admin/courseManagement" element={<CourseManagement/>} />
                 <Route path="/admin/tutorManagement" element={<TutorManagement/>} />
         
            


                  {/* NotFound page for otherUrl */}
                 <Route path="*" element={<NotFound/>} />


        </Routes>
    )
}

export default Routers