import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast} from 'react-toastify'


function CourseApplication() {
let [courseNames,setCourseNames]=useState(null)
const [selectedCourse, setSelectedCourse] = useState(null); // State to hold the selected course object
useEffect(()=>{
    let loadCourseName=async()=>{
      try{
        console.log('loadcourseName');
        let res=await axios.get('http://localhost:5000/api/student/getCourseName')
        console.log('loadcours respoinseeeeeeee');
        console.log(res.data.courseNames,'res.data.courseNames');
          setCourseNames(res.data.courseNames)

      }catch(error){

      }

    }
    loadCourseName()
  },[])

  const handleStudentApplication = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        // Include the selected course name and ID in the request body
        courseName: selectedCourse.courseName,
        courseId: selectedCourse._id
      };
      const res = await axios.post('http://localhost:5000/api/student/postApplication', formData);
      toast.success(res.data.message || 'Application submitted successfully');
      setSelectedCourse(null);

    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const handleCourseSelection = (e) => {
    const selectedIndex = e.target.selectedIndex;
    console.log('selectedIndex',selectedIndex);
    setSelectedCourse(courseNames[selectedIndex - 1]); // Adjust index to account for disabled option
  };

  return (
<div className='h-full min-h-screen' style={{background:"linear-gradient(90deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 67%)"}}>
  <div className="relative flex flex-col justify-center items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <div className='bg-gray-900 flex justify-between w-full '>
      <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white bg-gray-900  py-4 px-4">
        APPLY FOR YOUR COURSE
      </h4>

      <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-white bg-gray-700 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
        </svg>
        <div className="ps-4 text-sm font-normal ">Application response will get once admin approved.</div>
      </div>
    </div>

    <form onSubmit={handleStudentApplication} className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96 mr-40 mt-20">
      <div className="flex flex-col gap-6 mb-1">
        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
          Your Name
        </h6>
        <div className="relative h-11 w-full min-w-[200px]">
          <input placeholder="name" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0  bg-white disabled:bg-blue-gray-50" required />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
          Your Email
        </h6>
        <div className="relative h-11 w-full min-w-[200px]">
          <input placeholder="name@mail.com" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 bg-white disabled:bg-blue-gray-50" required />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
          Select Course
        </h6>
        <div className="relative h-11 w-full min-w-[200px]">
        <select
          className="peer h-full w-full rounded-md  border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          defaultValue=""
          onChange={handleCourseSelection} // Update event handler
        >
          <option value="" disabled>🠋 Select a course</option>
          {courseNames && courseNames.map((course, index) => (
            <option key={course._id} className='text-gray-900' value={course.courseName}>{course.courseName}</option>
          ))}
        </select>


          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
      </div>

      <button className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"  type="submit">
        APPLY
      </button>
    </form>
  </div>
</div>

  )
}

export default CourseApplication
