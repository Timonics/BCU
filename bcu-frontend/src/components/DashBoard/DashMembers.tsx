import React from "react";
import { LuSearch } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

import { useMyContext } from "../../context/DataProvider";

const DashMembers: React.FC = () => {
  const { darkMode } = useMyContext();
  const handleChange = () => {};
  return (
    <div
      className={`border-2 rounded-2xl border-sky-500/40 p-4 ${
        darkMode && "text-slate-100"
      }`}
    >
      <div className="flex items-center justify-between p-2">
        <h1 className="font-bold text-xl text-sky-500">Members</h1>
        <button className="text-xs flex gap-2 items-center rounded-md font-bold font-monte bg-sky-500 px-4 py-3">
          <FaPlus size={15} />
          Add Member
        </button>
      </div>
      <hr
        className={`${
          !darkMode ? "border-gray-950/50" : "border-slate-100/50"
        }`}
      />
      <div className=" flex justify-between items-center px-2 py-4">
        <div className="flex text-xs ">
          <button
            className={`border ${
              darkMode ? "border-slate-200/50" : "border-gray-950/50"
            } py-1.5 px-2 rounded-l-lg`}
          >
            View All
          </button>
          <button
            className={`border ${
              darkMode ? "border-slate-200/50" : "border-gray-950/50"
            } py-1.5 px-2`}
          >
            Approved
          </button>
          <button
            className={`border ${
              darkMode ? "border-slate-200/50" : "border-gray-950/50"
            } py-1.5 px-2`}
          >
            Disapproved
          </button>
          <button
            className={`border ${
              darkMode ? "border-slate-200/50" : "border-gray-950/50"
            } py-1.5 px-2 rounded-r-lg`}
          >
            Pending
          </button>
        </div>
        <div className="flex items-center gap-2">
          <LuSearch size={17} />
          <input
            name=""
            value=""
            placeholder="Search"
            onChange={handleChange}
            type="text"
            className="border-2 border-gray-500 p-1 rounded-lg bg-gray-300"
          />
          <div className="flex rounded-lg py-2 px-4 bg-slate-400 items-center text-xs gap-1 font-semibold">
            <IoFilterSharp size={15} />
            Filter
          </div>
        </div>
      </div>
      <hr
        className={`${
          !darkMode ? "border-gray-950/50" : "border-slate-100/50"
        }`}
      />
      <div className="flex justify-around text-sm px-2 py-4 font-semibold">
        <h3>Members ID</h3>
        <h3>Members Name</h3>
        <h3>Gender</h3>
        <h3>Band</h3>
        <h3>Unit</h3>
        <h3>Action</h3>
      </div>
    </div>
  );
};

export default DashMembers;
