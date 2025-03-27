import React from "react";

import { Outlet, Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

export const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to={"/auth"} />;
};

export const RedirectRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to={"/"} /> : <Outlet />;
};