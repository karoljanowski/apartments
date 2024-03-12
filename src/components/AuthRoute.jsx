import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/admin"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;
