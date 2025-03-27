import React from "react";

import background from "../assets/background.jpg";
import logo from "../assets/logo.png";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0">
        <img
          src={background}
          alt="background-image"
          className="w-full h-full object-cover object-center"
        />
        <div className="bg-black/65 absolute top-0 w-full h-full" />
      </div>
      <div className="bg-slate-100 rounded-xl w-3/5 p-6 z-20 shadow-2xl shadow-[#009AF4]/25">
        <img src={logo} alt="logo" className="size-14" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
