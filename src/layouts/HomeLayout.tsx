import React from "react";
import Nav from "../components/nav";
import { Outlet, useLocation } from "react-router";
import { TbNotification, TbPlus } from "react-icons/tb";
import useStates from "../hooks/useStates";

//refactoring needed...
const HomeLayout: React.FC = () => {
  const location = useLocation();
  const {
    setIsCreateNewBandOpen,
    setIsCreateNewUnitOpen,
    setIsCreateNewClassOpen,
  } = useStates();

  //sets the header name based on the current path
  let headerName: string = "";
  if (location.pathname === "/") {
    headerName = "Dashboard";
  } else if (location.pathname === "/members") {
    headerName = "Members";
  } else if (location.pathname === "/leadership") {
    headerName = "Leadership";
  } else if (location.pathname === "/bands") {
    headerName = "Bands";
  } else if (location.pathname === "/units") {
    headerName = "Units";
  } else if (location.pathname === "/class-management") {
    headerName = "Class Management";
  } else if (location.pathname === "/comittees") {
    headerName = "Comittees";
  }

  return (
    <div className="h-screen flex">
      <div className="w-1/5">
        <Nav />
      </div>
      <div className="w-4/5">
        <div className="h-[64px] border-b-[1.42px] px-10 bg-[#F9FAFB] border-black/30 flex justify-between items-center">
          <p className="font-bold text-2xl pops">{headerName}</p>
          {location.pathname === "/bands" ? (
            <button
              className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
              onClick={() => setIsCreateNewBandOpen(true)}
            >
              <TbPlus className="border-[1.4px] p-[0.4px] font-bold rounded-full" />
              <h3 className="text-sm font-semibold pops">Create New Band</h3>
            </button>
          ) : location.pathname === "/units" ? (
            <button
              className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
              onClick={() => setIsCreateNewUnitOpen(true)}
            >
              <TbPlus className="border-[1.4px] p-[0.4px] font-bold rounded-full" />
              <h3 className="text-sm font-semibold pops">Create New Unit</h3>
            </button>
          ) : location.pathname === "/class-management" ? (
            <button
              className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
              onClick={() => setIsCreateNewClassOpen(true)}
            >
              <TbPlus className="border-[1.4px] p-[0.4px] font-bold rounded-full" />
              <h3 className="text-sm font-semibold pops">Create New Class</h3>
            </button>
          ) : location.pathname === "/comittees" ? (
            <button
              className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
              onClick={() => setIsCreateNewClassOpen(true)}
            >
              <TbPlus className="border-[1.4px] p-[0.4px] font-bold rounded-full" />
              <h3 className="text-sm font-semibold pops">
                Create New Comittee
              </h3>
            </button>
          ) : (
            <TbNotification size={25} />
          )}
        </div>
        <div className="h-[calc(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
