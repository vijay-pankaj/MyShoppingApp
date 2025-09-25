import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.loginval.value);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
