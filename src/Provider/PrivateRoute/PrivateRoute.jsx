/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContex } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContex);
  const location = useLocation();
  console.log(location);
  console.log(user);
  if (loader) {
    return (
      <span className="loading loading-ring loading-lg text-center"></span>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
