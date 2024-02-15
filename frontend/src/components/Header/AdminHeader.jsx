import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";

function AdminHeader() {
  // const [openNav, setOpenNav] = useState(false);

  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for authentication status

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false); // Example: Reset authentication status
  };

  const navList = (
    <ul className="mt-8 mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
      
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/admin" className="text-black flex items-center">
          StudentsManagement
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/admin/tutorManagement" className="text-black flex items-center">
          TutorManagement
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/admin/courseManagement" className="text-black flex items-center">
          CourseManagement
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/admin/application" className="text-black flex items-center">
          ApplicationManagement
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" max-h-[768px]  ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="https://www.vhv.rs/dpng/d/493-4937342_education-icon-png-blue-clipart-png-download-transparent.png"
            className="mr-4 text-black cursor-pointer py-1.5 font-extrabold max-w-[100px]"
          >
            EduTrack
          </Typography>
          <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block ">{navList}</div>
          <div className="flex items-center gap-x-1">
         
          
          <button type="button" onClick={handleLogout} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>

          </div>
      
        </div>
        
        </div>
   
      </Navbar>
    </div>
  );
}

export default AdminHeader
