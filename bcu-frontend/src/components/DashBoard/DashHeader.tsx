import React from "react";
import { IoNotifications } from "react-icons/io5";
import { LuCloudDownload } from "react-icons/lu";

const DashHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-500 via-blue-300 to-indigo-500">
        Dashboard
      </h1>
      <div className="flex gap-7 items-center text-sky-500">
        <IoNotifications size={30} />
        <div className=" flex items-center gap-1 text-sm border-2 border-sky-500 px-4 py-2 rounded-lg">
          <LuCloudDownload size={20} />
          <h3 className="text-sm font-semibold">Export report</h3>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
