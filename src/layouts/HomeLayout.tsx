import React from "react";
import Nav from "../components/nav";
import { Outlet, useLocation } from "react-router";
import { TbNotification } from "react-icons/tb";

const HomeLayout: React.FC = () => {
  const location = useLocation();

  //sets the header name based on the current path
  let headerName: string = "";
  if (location.pathname === "/") {
    headerName = "Dashboard";
  } else if (location.pathname === "/members") {
    headerName = "Members";
  } else if (location.pathname === "/leadership") {
    headerName = "Leadership";
  }

  return (
    <div className="h-screen flex">
      <div className="w-1/5">
        <Nav />
      </div>
      <div className="w-4/5">
        <div className="h-[64px] border-b-[1.42px] px-10 bg-[#F9FAFB] border-black/30 flex justify-between items-center">
          <p className="font-bold text-2xl pops">{headerName}</p>
          <TbNotification size={25}/>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
