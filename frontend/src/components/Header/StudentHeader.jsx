import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import {logout} from '../../slices/StudentSlices/studentAuthSlice.js'
import { useNavigate } from 'react-router-dom';



function StudentHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Example state for authentication status

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
    setIsLoggedIn(false); // Example: Reset authentication status
  };

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );

  //   return () => {
  //     window.removeEventListener("resize", () =>
  //       window.innerWidth >= 960 && setOpenNav(false)
  //     );
  //   };
  // }, []);

  const navList = (
    <ul className="mt-8 mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
      
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/course" className="text-black flex items-center">
          Course
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/tutor" className="text-black flex items-center">
          Tutors
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="application" className="text-black flex items-center">
          Application
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="txet-black flex items-center">
          Docs
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
           href='/home'
            className="mr-4 text-black cursor-pointer py-1.5 font-extrabold max-w-[100px]"
          >
            EduTrack
          </Typography>
          <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block pb-8">{navList}</div>
          <div className="flex items-center gap-x-1">
            {/* Conditionally render user name or Sign In button */}
            {isLoggedIn ? (
              <Typography
                as="div"
                className="text-black hidden lg:inline-block"
              >
                User Name
              </Typography>
            ) : (
              <>
              <a href='/login'>
                <Button
                  variant="text"
                  size="sm"
                  className="text-black hidden lg:inline-block"
                >
                <span>Log In</span>
                </Button>
                </a>
                <a href='/login'>
                <Button
                  variant="gradient"
                  size="sm"
                  className="text-black hidden lg:inline-block"
                >
                  <span>Sign up</span>
                </Button>
                </a>
              </>
            )}
            {/* Conditionally render Logout button */}
            {isLoggedIn && (
              <Button
                variant="text"
                size="sm"
                className="text-black hidden lg:inline-block"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
          {/* Your IconButton code */}
        </div>
          {/* Your IconButton code */}
        </div>
        {/* <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="text-red">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="text-red">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav> */}
      </Navbar>
    </div>
  );
}

export default StudentHeader;
