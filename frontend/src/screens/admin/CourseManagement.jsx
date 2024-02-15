import React, { useEffect, useState } from 'react';
import { TEInput, TETextarea, TERipple } from "tw-elements-react";
import swal from 'sweetalert';
import axios from 'axios';

function CourseManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState({
        courseName: '',
        category: '',
        description: '',
        duration: ''
    });
    
    const [courses, setCourses] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);


    const openModal = (course) => {
        setSelectedCourse(course ? course : {
            courseName: '',
            category: '',
            description: '',
            duration: ''
        }); // Update selectedCourse state with the course object or empty strings if course is null
        setIsModalOpen(true);
        setIsEditMode(!!course); // Set edit mode if course is provided
    };
    
    


    const closeModal = () => {
        setSelectedCourse({
            courseName: '',
            category: '',
            description: '',
            duration: ''
        }); // Reset selectedCourse state with empty string values
        setIsModalOpen(false);
        setIsEditMode(false); // Reset edit mode
    };
    

    const handleEditCourse = async (e) => {
        e.preventDefault();
        try {
            console.log('update course is working now');

            const res = await axios.put(`http://localhost:5000/api/admin/updateCourse/${selectedCourse._id}`, selectedCourse);
            console.log('Course updated successfully:', res.data);
            loadCourses();
            closeModal();
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    const deleteCourse = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this course!",
            icon: "warning",
            buttons: ["Cancel", "Delete"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    await axios.delete(`http://localhost:5000/api/admin/deleteCourse/${id}`);
                    // After successfully deleting the course, fetch the updated list of courses
                    await loadCourses(); // Update the list of courses
                    swal("Poof! Your course has been deleted!", {
                        icon: "success",
                    });
                } catch (error) {
                    console.error('Error deleting course:', error);
                }
            } else {
                swal("Your course is safe!");
            }
        });
    };
    

    const loadCourses = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/getCourses');
            setCourses(res.data.courses);
        } catch (error) {
            console.error('Error loading courses:', error);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    const handleAddCourse = async () => {
        try {
            console.log('add course is working now');
            const res = await axios.post('http://localhost:5000/api/admin/addCourse', selectedCourse);
            console.log('Course added successfully:', res.data);
            loadCourses();
            closeModal();
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (isEditMode) {
            await handleEditCourse(e); // Pass the event to handleEditCourse
        } else {
            await handleAddCourse();
        }
        loadCourses(); // Reload courses after submission
        closeModal(); // Close modal after submission
    } catch (error) {
        console.error('Error:', error);
    }
};


    return (
        <div className='h-full min-h-screen' style={{ background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(86,97,100,1) 67%)" }}>
            <div className='w-full flex justify-between items-center pt-3'>
                <div className='w-full flex justify-center'>
                    <p className="text-3xl font-thin text-gray-900 dark:text-gray-600 ">Course Management</p>
                </div>
                <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => openModal(null)}
                >
                    Add Course
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="block max-w-lg w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 relative">
                        <button
                            className="absolute top-0 right-0 p-3 text-gray-600 hover:text-gray-900 focus:outline-none"
                            onClick={closeModal}
                        >
                            ❌
                        </button>
                        <form onSubmit={handleSubmit}>
                            <p>Course</p>
                            <TEInput
                                type="text"
                                label=""
                                className="mb-6 w-full"
                                value={selectedCourse.courseName || ''}
                                onChange={(e) => setSelectedCourse({ ...selectedCourse, courseName: e.target.value })}
                            />
                            <p>Category</p>
                            <TEInput
                                type="text"
                                label=""
                                className="mb-6 w-full"
                                value={selectedCourse.category || ''}
                                onChange={(e) => setSelectedCourse({ ...selectedCourse, category: e.target.value })}
                            />
                            <p>Description</p>
                            <div className="relative mb-6 w-full">
                                <TETextarea
                                    id="exampleFormControlTextarea13"
                                    label=""
                                    rows={3}
                                    value={selectedCourse.description || ''}
                                    onChange={(e) => setSelectedCourse({ ...selectedCourse, description: e.target.value })}
                                />
                            </div>
                            <p>Duration</p>
                            <TEInput
                                type="text"
                                label=""
                                className="mb-6 w-full"
                                value={selectedCourse.duration || ''}
                                onChange={(e) => setSelectedCourse({ ...selectedCourse, duration: e.target.value })}
                            />
                            <TERipple rippleColor="light" className="w-full">
                            <button
    type="submit"
    className="inline-block rounded w-full bg-primary px-6 bg-gray-900 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:text-white dark:bg-gray-800"
>
    {isEditMode ? 'Update' : 'Add'}
</button>
                            </TERipple>
                        </form>
                    </div>
                </div>
            )}

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 pl-20">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
                                Course
                            </th>
                            <th scope="col" className="px-8 py-4 bg-gray-50 dark:bg-gray-800">
                                Description
                            </th>
                            <th scope="col" className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
                                Duration
                            </th>
                            <th scope="col" className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
                                Category
                            </th>
                            <th scope="col" className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
                                Edit
                            </th>
                            <th scope="col" className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {courses.map((course) => (
    <tr key={course._id} className="border-b border-gray-200 dark:border-gray-700">
        <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            {course.courseName}
        </td>
        <td className="px-8 py-6 bg-gray-50 dark:bg-gray-800" style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {course.description}
        </td>
        <td className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
            {course.duration}
        </td>
        <td className="px-2 py-2 bg-gray-50 dark:bg-gray-800">
            {course.category}
        </td>
        <td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
            <button
                type="button"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
                onClick={() => openModal(course)}
            >
                Edit Course
            </button>
        </td>
        <td className="px-1 py-2 bg-gray-50 dark:bg-gray-800">
            <button
                type="button"
                onClick={() => deleteCourse(course._id)} // Use course._id instead of course.id
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
            >
                Delete
            </button>
        </td>
    </tr>
))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CourseManagement;
