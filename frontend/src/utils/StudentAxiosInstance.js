import axios from "axios";


const studentAxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/student', 
    headers: {
      'Content-Type': 'application/json',
      
    },
  });
  // Apply the authcheck middleware to the Axios instance
  studentAxiosInstance.interceptors.request.use(
    async (config) => {
      const studentInfo = localStorage.getItem('studentInfo');


      const parsedStudentInfo=JSON.parse(studentInfo)

      const token=parsedStudentInfo.studentToken
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

  export default studentAxiosInstance;