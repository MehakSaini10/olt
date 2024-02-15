import axios from "axios";


const adminAxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/admin', 
    headers: {
      
      'Content-Type': 'application/json',
      withCredentials: true, // If needed for cross-origin requests
    },
  });
  


export default adminAxiosInstance