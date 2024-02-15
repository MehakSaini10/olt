// import { useState } from 'react'
import './App.css'
import Routers from './routes/Routes.jsx'
import StudentHeader from './components/Header/StudentHeader.jsx'
import StudentFooter from './components/Footer/StudentFooter.jsx'
import AdminHeader from './components/Header/AdminHeader.jsx'


function App() {

    // Check if the current route is for admin
  let admin=location.pathname.startsWith("/admin")

    // Check if the current route is for login or register
  let excludeFooter = location.pathname === "/login" || location.pathname === "/register";

 
  if(admin){
    return(
      <>
     
        <AdminHeader/>
    <Routers/>
     
      </>
    )
  }else {
    return(
      <>
    <div>

    {!excludeFooter && <StudentHeader/>}
    
        <Routers/>
        {/* Only render StudentFooter if the route is not /login or /register */}
        {!excludeFooter && <StudentFooter />}
        </div>
      </>
    )
  }


}

export default App
