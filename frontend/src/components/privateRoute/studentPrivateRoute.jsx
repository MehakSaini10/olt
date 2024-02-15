import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const StudentPrivateRoute = () => {
  const { studentInfo } = useSelector((state) => state.auth);
  return studentInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default StudentPrivateRoute;
