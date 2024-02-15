import React, { useEffect, useState } from 'react';
import adminAxiosInstance from '../../utils/AdminAxiosInstance.js';
import axios from 'axios';

function StudentManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [studentInfo, setStudentInfo] = useState(null);
  const [error, setError] = useState(null);

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  const handleEditStudent = async () => {
    try {
      const res = await adminAxiosInstance.put(`/updateStudent/${selectedStudent._id}`, selectedStudent);
      closeModal(); // Close the modal after editing
      await loadStudent()
      // Handle success response if needed
    } catch (error) {
      setError(error.message || 'An error occurred while editing the student.');
    }
  };

  const loadStudent = async () => {
    try {
      const res = await adminAxiosInstance.get('/getStudentInfo');
      setStudentInfo(res.data.studentInfo);
    } catch (error) {
      setError(error.message || 'An error occurred while loading student data.');
    }
  };
  useEffect(() => {
   
    loadStudent();
  }, []);
  

  return (
    <div className='h-full min-h-screen' style={{ background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(86,97,100,1) 67%)" }}>
      <div className='w-full flex justify-center '>
        <p className="text-3xl font-thin text-gray-900 dark:text-gray-600">Student Management</p>
      </div>

      <div className='h-2/3 w-full pl-40 pr-40 pt-35 min-h-screen'>
        <ul role="list" className="divide-y divide-gray-100">
          {studentInfo && studentInfo.map(student => (
            <li key={student.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={`https://i.pravatar.cc/150?img=${student.id}`} alt=""/>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{student.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{student.email}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{student.phone}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end w-1/4">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => openModal(student)}
                >
                  Edit Student
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="block max-w-lg w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 relative">
            <button
              className="absolute top-0 right-0 p-3 text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={closeModal}
            >
              ❌
            </button>
            <form>
              <p>Name</p>
              <input
                type="text"
                value={selectedStudent.name}
                className="mb-6 w-full border border-gray-300 rounded-lg px-3 py-2"
                onChange={(e) => setSelectedStudent({ ...selectedStudent, name: e.target.value })}
              />
              <p>Email</p>
              <input
                type="email"
                value={selectedStudent.email}
                className="mb-6 w-full border border-gray-300 rounded-lg px-3 py-2"
                onChange={(e) => setSelectedStudent({ ...selectedStudent, email: e.target.value })}
              />
              <p>Phone</p>
              <input
                type="text"
                value={selectedStudent.phone}
                className="mb-6 w-full border border-gray-300 rounded-lg px-3 py-2"
                onChange={(e) => setSelectedStudent({ ...selectedStudent, phone: e.target.value })}
              />
              <button
                type="button"
                className="inline-block rounded w-full bg-primary px-6 bg-gray-900 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:text-white dark:bg-gray-800"
                onClick={handleEditStudent}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default StudentManagement;
