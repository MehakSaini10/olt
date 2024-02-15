import jwt from "jsonwebtoken";
import Student from "../model/studentModel.js";

const studentAuthCheck = async (req, res, next) => {
  // Retrieve the studentToken from the "Authorization" header
  const studentToken = req.headers.authorization;
console.log('studentToken');

  if (studentToken) {
    try {


      // Remove the "Bearer " prefix from the studentToken (if present)
      const tokenWithoutBearer = studentToken.replace("Bearer ", "");
      const key='abc123'
      
      // Verify the userToken
      const decoded = jwt.verify(tokenWithoutBearer, key);

      // Fetch user details and attach to the request
      req.student = await Student.findById(decoded.studentId).select('-password');

      next();


    } catch (error) {
      console.error(error);
      // Define the error as an object with a message property
      const customError = { message: 'Authentication failed' };
      res.status(401).json(customError);
    }
  } else {
    // Define the error as an object with a message property
    const customError = { message: 'No token provided' };
    res.status(401).json(customError);
  }
};

export default studentAuthCheck;
