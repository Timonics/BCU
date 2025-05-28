import React from "react";

import background from "../assets/background.jpg";
import logo from "../assets/logo.png";
import { Outlet } from "react-router";
import { useLoadingStore } from "../stores/loadingStore";
import Loading from "../components/loading";

const AuthLayout: React.FC = () => {
  const { isLoading } = useLoadingStore();

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
      <div className="relative bg-slate-100 rounded-xl w-3/5 p-6 z-20 shadow-2xl shadow-[#009AF4]/25">
        <img src={logo} alt="logo" className="size-14" />
        <Outlet />
        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export default AuthLayout;
