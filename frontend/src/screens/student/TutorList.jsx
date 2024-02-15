import React, { useEffect, useState } from 'react';
import { CiTimer } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import axios from 'axios';

function TutorList() {

  const [tutors,setTutors]=useState(null)

  useEffect(()=>{
    const loadTutors=async()=>{
      try{
        console.log('tutor loadingggg');
let res=await axios.get('http://localhost:5000/api/student/displayTutors')
setTutors(res.data.Tutors)
console.log('Tutors details:', res.data);

      }catch(error){
        console.error('Error loading course details:', error);

      }
    }
    loadTutors()
  },[])
  // // Dummy tutor data
  // const tutors = [
  //   { id: 1, name: "Alec Jhonson", time: "1:00 pm to 2:00 pm", email: "contact@example.com", expertise: ["Bca", "Mern Stack", "Python"], rating: 5 },
  //   { id: 2, name: "John Doe", time: "3:00 pm to 4:00 pm", email: "john.doe@example.com", expertise: ["JavaScript", "React", "Node.js"], rating: 4 },
  //   { id: 3, name: "Jane Smith", time: "10:00 am to 11:00 am", email: "jane.smith@example.com", expertise: ["HTML", "CSS", "Bootstrap"], rating: 3 },
  //   { id: 3, name: "Jane Smith", time: "10:00 am to 11:00 am", email: "jane.smith@example.com", expertise: ["HTML", "CSS", "Bootstrap"], rating: 3 },
  //   { id: 3, name: "Jane Smith", time: "10:00 am to 11:00 am", email: "jane.smith@example.com", expertise: ["HTML", "CSS", "Bootstrap"], rating: 3 },
  // ];

  return (
    <div className='h-full min-h-screen flex justify-center flex-col ' style={{background:"linear-gradient(90deg, rgba(9,32,63,1) 0%, rgba(83,120,149,1) 67%)"}}>
      {tutors && tutors.map(tutor => (
        <div key={tutor.id} className="relative  w-full min-w-0 mb-6 mt-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
          <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
            <div className="flex flex-wrap mb-6 xl:flex-nowrap">
              <div className="mb-5 mr-5">
                <div className="relative inline-block shrink-0 rounded-2xl">
                  <img className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px] opacity-35" src={`/public/tutoricon3.jpg`} alt="image" />
                  <div className="group/tooltip relative">
                    <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block"> Status: Active </span>
                  </div>
                </div>
              </div>
              <div className="grow">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <a className="text-gray-400 hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1" href="javascript:void(0)"> {tutor.name} </a>
                    </div>
                    <div className="flex flex-wrap pr-2 mb-4 font-medium">
                      <a className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary" href="javascript:void(0)">
                        <CiTimer />
                        <span className='pl-2'>{tutor.availableTime} to {tutor.endingTime}</span>
                      </a>
                      <a className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary" href="javascript:void(0)">
                        <span className="mr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                          </svg>
                        </span> {tutor.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap my-auto">
                    <a href="javascript:void(0)" className="inline-block px-6 py-3 mr-3 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark text-white ">Expertise: {tutor.expertise} year </a>
                    <a href="javascript:void(0)" className="inline-block px-6 py-3 text-base font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ">Rating: 
                      <div className="flex items-center">
                        {[...Array(tutor.rating)].map((_, index) => (
                          <svg key={index} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                        ))}
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
  {tutor.course.split(',').map((course, index) => (
    <a key={index} href="javascript:void(0)" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-50 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal opacity-100">
      {course.trim()} {/* Use trim() to remove any leading or trailing whitespace */}
    </a>
  ))}
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

export default TutorList;
