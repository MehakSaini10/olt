import jwt from "jsonwebtoken";

const generateToken = (res, adminId) => {
  const key = 'abcd123';
  const token = jwt.sign({ adminId }, key, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;