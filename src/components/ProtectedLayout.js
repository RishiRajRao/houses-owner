import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedLayout = () => {
  const { authToken } = useAuth();
  return authToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedLayout;
