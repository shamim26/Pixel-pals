import React, { useContext, useState } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-48">
        <CircularProgress color="success" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
