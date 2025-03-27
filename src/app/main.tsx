import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import AuthLayout from "../layouts/AuthLayout.tsx";
import EmailVerified from "../pages/auth/EmailVerified.tsx";
import ForgotPassword from "../pages/auth/ForgotPassword.tsx";
import Login from "../pages/auth/Login.tsx";
import VerifyEmail from "../pages/auth/VerifyEmail.tsx";
import { ProtectedRoute, RedirectRoute } from "./ProtectedRoute.tsx";
import AuthProvider from "../contexts/AuthProvider.tsx";
import HomeLayout from "../layouts/HomeLayout.tsx";
import Dashboard from "../pages/dashboard/index.tsx";
import Members from "../pages/members/index.tsx";

const router = createBrowserRouter([
  {
    // Redirect to / if user is authenticated
    path: "auth",
    element: <RedirectRoute />,
    children: [
      {
        path: "",
        element: <AuthLayout />,
        children: [
          { path: "", element: <Login /> },
          { path: "forgot-password", element: <ForgotPassword /> },
          { path: "verify-email", element: <VerifyEmail /> },
          { path: "email-verified", element: <EmailVerified /> },
        ],
      },
    ],
  },
  {
    // Redirect to /auth if user is not authenticated
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <HomeLayout />,
        children: [
          { path: "", element: <Dashboard /> },
          { path: "members", element: <Members /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
