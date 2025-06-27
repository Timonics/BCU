import React from "react";

import { Outlet, Navigate } from "react-router";
import { useAuthStore } from "../stores/authStore";

export const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/auth"} />;
};

export const RedirectRoute: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <Navigate to={"/"} /> : <Outlet />;
};
