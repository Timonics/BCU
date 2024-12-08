import React from "react";
import { Outlet } from "react-router-dom";
import DashBoardNav from "../Nav/DashBoardNav";
import DashHeader from "./DashHeader";
import { useMyContext } from "../../context/DataProvider";

const DashBoardLayout: React.FC = () => {
  const { darkMode } = useMyContext();
  return (
    <div className={`h-screen flex ${darkMode ? "bg-gray-950" : "home-background"}`}>
      <div className="w-1/5">
        <DashBoardNav />
      </div>
      <div className="w-full h-full">
        <DashHeader />
        <div className="flex w-full items-center justify-center h-[500px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
