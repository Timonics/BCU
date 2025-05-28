import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthLayout from "../layouts/AuthLayout.tsx";
import EmailVerified from "../pages/auth/EmailVerified.tsx";
import ForgotPassword from "../pages/auth/ForgotPassword.tsx";
import Login from "../pages/auth/Login.tsx";
import VerifyEmail from "../pages/auth/VerifyEmail.tsx";
import { ProtectedRoute, RedirectRoute } from "./ProtectedRoute.tsx";
import HomeLayout from "../layouts/HomeLayout.tsx";
import Dashboard from "../pages/dashboard/index.tsx";
import Members from "../pages/members/index.tsx";
import LeaderShip from "../pages/leadership/index.tsx";
import Bands from "../pages/bands";
import Units from "../pages/units/index.tsx";
import AddMember from "../pages/members/add-member/AddMember.tsx";
import Academics from "../pages/members/add-member/Academics.tsx";
import ChurchInfo from "../pages/members/add-member/ChurchInfo.tsx";
import PersonalInfo from "../pages/members/add-member/PersonalInfo.tsx";
import Summary from "../pages/members/add-member/Summary.tsx";
import ClassManagement from "../pages/class-management/index.tsx";
import Comittees from "../pages/comittees/index.tsx";
import StateProvider from "../contexts/StateProvider.tsx";

const router = createBrowserRouter(
  [
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
            {
              path: "members",
              element: <Members />,
              children: [
                {
                  path: "add-member",
                  element: <AddMember />,
                  children: [
                    { path: "", element: <PersonalInfo /> },
                    { path: "church-info", element: <ChurchInfo /> },
                    { path: "academics-info", element: <Academics /> },
                    { path: "summary", element: <Summary /> },
                  ],
                },
              ],
            },
            { path: "leadership", element: <LeaderShip /> },
            { path: "bands", element: <Bands /> },
            { path: "units", element: <Units /> },
            { path: "class-management", element: <ClassManagement /> },
            { path: "comittees", element: <Comittees /> },
          ],
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        stacked
        closeButton={false}
        closeOnClick
        pauseOnHover={true}
        hideProgressBar={true}
      />
    </StateProvider>
  </StrictMode>
);
