import React from "react";
import dashLogo from "../../assets/dashLogo.png";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../../context/DataProvider";

import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { PiUsersFour } from "react-icons/pi";
import { FaNetworkWired } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const DashBoardNav: React.FC = () => {
  const { darkMode, setDarkMode } = useMyContext();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`py-2 flex flex-col gap-1 h-full ${
        darkMode && "text-slate-100"
      }`}
    >
      <img src={dashLogo} alt="logo" className="w-[50px] h-[50px] mx-2" />
      <div className="flex gap-3 mt-5 px-2 items-center justify-center">
        <div className="w-[40px] h-[40px] rounded-full bg-slate-500" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-sm">Oderinde Michael</h1>
          <p className="text-[10px]">Admin</p>
        </div>
      </div>
      <div
        className={`flex flex-col py-5 h-full ${darkMode} ? "text-slate-100" : "text-gray-950"}`}
      >
        <div className="flex flex-col gap-1">
          <NavLink
            end
            to=""
            className={({ isActive }) =>
              `flex items-center text-sm py-2 gap-2 ${
                isActive &&
                "bg-gradient-to-r from-sky-300 via-sky-200 to-[#E5EFFD]"
              } ${darkMode && isActive ? "text-gray-950 bg-gradient-to-r from-sky-400 via-sky-300 to-gray-950" : ""}`
            }
          >
            <div className="px-4 flex gap-2 text-[11px] font-semibold">
              <TbLayoutDashboard size={17} />
              Dashboard
            </div>
          </NavLink>
          <NavLink
            to="members"
            className={({ isActive }) =>
              `flex items-center text-sm py-2 gap-2 ${
                isActive &&
                "bg-gradient-to-r from-sky-300 via-sky-200 to-[#E5EFFD]"
              } ${darkMode && isActive ? "text-gray-950 bg-gradient-to-r from-sky-400 via-sky-300 to-gray-950" : ""}`
            }
          >
            <div className="px-4 flex gap-2 text-[11px] font-semibold">
              <FaRegUserCircle size={17} />
              Members
            </div>
          </NavLink>
          <NavLink
            to="bands"
            className={({ isActive }) =>
              `flex items-center text-sm py-2 gap-2 ${
                isActive &&
                "bg-gradient-to-r from-sky-300 via-sky-200 to-[#E5EFFD]"
              } ${darkMode && isActive ? "text-gray-950 bg-gradient-to-r from-sky-400 via-sky-300 to-gray-950" : ""}`
            }
          >
            <div className="px-4 flex gap-2 text-[11px] font-semibold">
              <PiUsersFour size={17} />
              Bands
            </div>
          </NavLink>
          <NavLink
            to="units"
            className={({ isActive }) =>
              `flex items-center text-sm py-2 gap-2 ${
                isActive &&
                "bg-gradient-to-r from-sky-300 via-sky-200 to-[#E5EFFD]"
              } ${darkMode && isActive ? "text-gray-950 bg-gradient-to-r from-sky-400 via-sky-300 to-gray-950" : ""}`
            }
          >
            <div className="px-4 flex gap-2 text-[11px] font-semibold">
              <FaNetworkWired size={17} />
              Units
            </div>
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `flex items-center text-sm py-2 gap-2 ${
                isActive &&
                "bg-gradient-to-r from-sky-300 via-sky-200 to-[#E5EFFD]"
              } ${darkMode && isActive ? "text-gray-950 bg-gradient-to-r from-sky-400 via-sky-300 to-gray-950" : ""}`
            }
          >
            <div className="px-4 flex gap-2 text-[11px] font-semibold">
              <IoSettingsOutline size={17} />
              Settings
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col h-full justify-end gap-1">
          <button className="flex items-center text-sm py-2 gap-2">
            <div className="px-4 flex gap-2 text-[11px] font-semibold">
              <TbLogout size={17} />
              Log out
            </div>
          </button>
          <div className="flex items-center text-sm py-2 gap-2 cursor-pointer">
            <div
              className="px-4 flex gap-2 text-[11px] font-semibold"
              onClick={handleDarkMode}
            >
              {darkMode ? <MdOutlineWbSunny size={17} /> : <FiMoon size={17} />}
              {darkMode ? <p>Light Mode</p> : <p>Dark Mode</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
