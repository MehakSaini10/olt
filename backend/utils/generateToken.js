import jwt from "jsonwebtoken";

const generateToken = (res, studentId) => {
  const key = 'abc123';
  const token = jwt.sign({ studentId }, key, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;

// res.cookie("jwt", token, {
//   httpOnly: true,
//   secure: process.env.NODE_ENV !== "development",
//   sameSite: "strict",
//   maxAge: 30 * 24 * 60 * 60 * 1000,
// });