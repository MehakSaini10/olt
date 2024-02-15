import React, {useState, useEffect } from 'react';
import axios from 'axios';


function Course() {
let [courses,setCourses]=useState('')

  useEffect(() => {
    const loadCourseDetails = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/student/displayCourses');
        setCourses(res.data.Courses)
        
        console.log('Course details:', res.data);
      } catch (error) {
        console.error('Error loading course details:', error);
      }
    }
  
    loadCourseDetails();
  }, [])
  
  // Dummy course data
  // const courses = [
  //   { id: 1, title: "Bca", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", category: "Cs", duration: "3 years" },
  //   { id: 2, title: "Bsc", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", category: "Science", duration: "4 years" },
  //   { id: 3, title: "Bcom", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", category: "Commerce", duration: "3 years" },
  //   { id: 4, title: "BA", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", category: "Arts", duration: "3 years" }
  // ];

  return (
    <div className="h-full min-h-screen flex flex-wrap " style={{ background: "linear-gradient(90deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 67%)" }}>
      {courses && courses.map(course => (
        <div key={course.id} className="mx-4 my-4">
          <div className='' >
            <div className="max-w-md w-full lg:flex justify-center">
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('/public/course3.jpeg')` }} title="Course Image">
              </div>
              <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <div className="text-black font-bold text-xl mb-2 overflow-hidden" style={{ textOverflow: "ellipsis" }}>{course.courseName}</div>
            <p className="text-grey-darker text-base overflow-hidden" style={{ textOverflow: "ellipsis", maxHeight: "200px" }}>{course.description}</p>
          </div>
                <div className="flex items-center">
                  <div className="text-sm">
                 
                  
                    <p className="text-black leading-none">Category: {course.category}</p>
                    <p className="text-grey-dark">Duration: {course.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Course;
