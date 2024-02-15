import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import { TEInput, TERipple } from "tw-elements-react";

function TutorManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null); // State to store the selected tutor for editing
    const [newTutorData, setNewTutorData] = useState({
        name: '',
        email: '',
        courseOrSkills: '',
        availableTime: '',
        endingTime: '',
        experience: '',
        rating: '',
    });
    const [isEditMode, setIsEditMode] = useState(false); // New state to track edit mode


    // Define the tutors array with dummy data
    const [tutors, setTutors] = useState(null);
    // { id: 1, name: 'John Doe', email: 'john.doe@example.com', courseOrSkills: 'React', availableTime: '09:00', endingTime: '12:00', experience: '3 years', rating: 4 },
    // { id: 2, name: 'Jane Smith', emnail: 'jane.smith@example.com', courseOrSkills: 'JavaScript', availableTime: '10:00', endingTime: '14:00', experience: '5 years', rating: 5 },
    // // Add more dummy tutor objects as needed

 
    const openModal = (tutor) => {
        setSelectedTutor(tutor);
        setIsModalOpen(true);
        setIsEditMode(!!tutor); // Set edit mode if tutor is provided
        if (tutor) {
            setNewTutorData({ ...tutor }); // Populate form data with tutor details for editing
        } else {
            // Reset form data if adding a new tutor
            setNewTutorData({
                name: '',
                email: '',
                courseOrSkills: '',
                availableTime: '',
                endingTime: '',
                experience: '',
                rating: '',
            });
        }
    };
    

    const closeModal = () => {
        setSelectedTutor(null);
        setIsModalOpen(false);
        setIsEditMode(false); // Reset edit mode when closing the modal
    };

    useEffect(()=>{
     async  function loadTutor(){
        try{
            console.log('tutor get ');
            let res=await axios.get('http://localhost:5000/api/admin/getTutor')
            console.log('got response from loadtutor');
            setTutors(res.data.tutors)

        }catch(error){
            console.error('Error loading tutors:', error);

        }
     }
     loadTutor()
    },[newTutorData, isEditMode ])

    const handleAddTutor = async (e) => {
        e.preventDefault();
        try {
            console.log('add tutor function');
            // Send a POST request to your backend API with the new tutor data
            const res = await axios.post('http://localhost:5000/api/admin/addTutor', newTutorData);
            console.log('Tutor added successfully:', res.data);
            // Optionally, you can update the UI or show a success message
            // Reset the form data and close the modal
            setNewTutorData({
                name: '',
                email: '',
                courseOrSkills: '',
                availableTime: '',
                endingTime: '',
                experience: '',
                rating: '',
            });
            closeModal();
        } catch (error) {
            console.error('Error adding tutor:', error);
            // Optionally, you can show an error message to the user
        }
    };

    const handleEditTutor = async (e) => {
        e.preventDefault();
        try {
            console.log('edit tutor function');
            if (!selectedTutor) {
                throw new Error("No tutor selected for editing.");
            }
            // Send a PUT request to your backend API with the updated tutor data
            const res = await axios.put(`http://localhost:5000/api/admin/updateTutor/${selectedTutor.id}`, newTutorData);
            console.log('Tutor updated successfully:', res.data);
            // Optionally, you can update the UI or show a success message
            closeModal();
        } catch (error) {
            console.error('Error updating tutor:', error);
            // Optionally, you can show an error message to the user
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTutorData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditMode) {
            await handleEditTutor();
        } else {
            await handleAddTutor();
        }
        loadTutor();
    };

    return (
        <div className='h-full min-h-screen' style={{ background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(86,97,100,1) 67%)" }}>

            <div className="relative  shadow-md sm:rounded-lg">
                <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    <div className='w-full flex justify-center'>

                        <p className="text-3xl font-thin text-gray-900 dark:text-gray-600" >Tutor Management</p>
                    </div>

                    <label htmlFor="table-search" className="sr-only">Search</label>


                    <div className="relative pr-4 ">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                    <div className=''>
                    <button type="button" onClick={() => openModal(null)} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Tutor</button>                        {/* Modal */}
                        {/* Modal for adding and editing tutor */}
                        {isModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="block max-w-lg w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 relative">
            <button
                className="absolute top-0 right-0 p-3 text-gray-900 hover:text-gray-900 focus:outline-none"
                onClick={closeModal}
            >❌
                {/* Close button */}
            </button>
            <form>
                {/* Name input */}
                <p>Name</p>
                <TEInput
                    type="text"
                    name="name"
                    value={newTutorData.name}
                    onChange={handleChange}
                    className="mb-6 w-full"
                />
                {/* Email input */}
                <p>Email</p>
                <TEInput
                    type="email"
                    name="email"
                    value={newTutorData.email}
                    onChange={handleChange}
                    className="mb-6 w-full"
                />
                {/* Course or Skills input */}
                <p>Course or Skills</p>
                <TEInput
                    type="text"
                    name="courseOrSkills"
                    value={newTutorData.course}
                    onChange={handleChange}
                    className="mb-6 w-full"
                />
                {/* Available time input */}
                <p>Available time</p>
                <TEInput
                    type="time"
                    name="availableTime"
                    value={newTutorData.availableTime}
                    onChange={handleChange}
                    className="mb-6 w-full"
                />
                {/* Ending time input */}
                <p>Ending time</p>
                <TEInput
                    type="time"
                    name="endingTime"
                    value={newTutorData.endingTime}
                    onChange={handleChange}
                    className="mb-6 w-full"
                />
                {/* Experience input */}
                <p>Experience</p>
                <TEInput
                    type="text"
                    name="experience"
                    value={newTutorData.expertise}
                    onChange={handleChange}
                    className="mb-6 w-full"
                />
                {/* Rating input */}
                <p>Rating</p>
                <TEInput
                    type="number"
                    min={1}
                    max={5}
                    name="rating"
                    value={newTutorData.rating}
                    onChange={handleChange}
                    className="mb-6 w-full"
                />
                {/* Submit button */}
                <button
                    type="button"
                    onClick={selectedTutor ? handleEditTutor : handleAddTutor}
                    className="inline-block rounded w-full bg-primary px-6 bg-gray-900 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:text-white dark:bg-gray-800"
                >
                    {selectedTutor ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    </div>
)}

                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-6">
                Name
            </th>
         
            <th scope="col" className="px-6 py-6">
                Course/Skills
            </th>
            <th scope="col" className="px-6 py-6">
                Available Time
            </th>
            <th scope="col" className="px-6 py-6">
                Ending Time
            </th>
            <th scope="col" className="px-6 py-6">
                Experience
            </th>
            <th scope="col" className="px-6 py-6">
                Rating
            </th>
            <th scope="col" className="px-6 py-6">
                Edit
            </th>
        </tr>
    </thead>
    <tbody>
        {tutors && tutors.map((tutor) => (
            <tr key={tutor.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full" src="/public/tutoricon3.jpg" alt="Tutor image" />
                        <div className="ml-4">
                            <div className="text-base font-semibold">{tutor.name}</div>
                            <div className="text-sm text-gray-500">{tutor.email}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-6 whitespace-nowrap">
                    {tutor.course}
                </td>
                <td className="px-6 py-6 whitespace-nowrap">
                    {tutor.availableTime}
                </td>
                <td className="px-6 py-6 whitespace-nowrap">
                    {tutor.endingTime}
                </td>
                <td className="px-6 py-6 whitespace-nowrap">
                    {tutor.expertise} year
                </td>
                <td className="px-6 py-6 whitespace-nowrap">
                {[...Array(tutor.rating)].map((_, index) => (
                          <svg key={index} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                        ))}
                </td>
                <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg px-4 py-2"
                        onClick={() => openModal(tutor)} // Pass the tutor data to the openModal function
                    >
                        Edit
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

            </div>

        </div>
    )
}

export default TutorManagement;
