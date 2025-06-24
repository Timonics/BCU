import React, { useState } from "react";

import dashLogo from "../../assets/dashLogo.png";
import {
  TbLayoutDashboard,
  TbLogout,
  TbSettings,
  TbUser,
} from "react-icons/tb";

import { NavLink } from "react-router";
import { navItems } from "../../utils/navItems";
import { useAuth } from "../../hooks/useAuth";

const Nav: React.FC = () => {
  const { logout } = useAuth();
  const [dropdownOpenedIndex, setDropdownOpenedIndex] = useState<number | null>(
    null
  );
  const navItemsElement = navItems.map((item, index) => {
    const Icon = item.icon;
    return (
      <div className="relative">
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            `flex items-center gap-3 p-2.5 pl-4 pops relative ${
              isActive
                ? "bg-[#009AF4]/30 text-[#009AF4] text-sm font-bold"
                : "text-[12px] font-semibold text-[#252b35] hover:bg-black/5"
            }`
          }
        >
          <Icon />
          {item.name}
        </NavLink>
      </div>
    );
  });

  return (
    <div
      className="flex flex-col bg-slate-100 h-full gap-5"
      onClick={() => {
        if (dropdownOpenedIndex || dropdownOpenedIndex === 0)
          setDropdownOpenedIndex(null);
      }}
    >
      <img src={dashLogo} className="size-10 mx-3 mt-3" />
      <div className="flex gap-3 items-center px-3 mb-1">
        <div className="bg-slate-400 flex items-center justify-center text-2xl size-[45px] rounded-full">
          <TbUser />
        </div>
        <div className="flex flex-col">
          <h1 className="xl:text-lg text-sm font-bold pops">
            Oderinde Michael
          </h1>
          <p className="xl:text-sm text-xs">Admin</p>
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-col gap-1 w-full">
          <NavLink
            end
            to={""}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2.5 pl-4 pops relative ${
                isActive
                  ? "bg-[#009AF4]/30 text-[#009AF4] text-sm font-bold"
                  : "text-[12px] font-semibold text-[#252b35] hover:bg-black/5"
              }`
            }
          >
            <TbLayoutDashboard />
            Dashboard
          </NavLink>
          <div className="flex flex-col gap-1 w-full">{navItemsElement}</div>
        </div>
        <div className="flex flex-col gap-1 w-full mb-4">
          <NavLink
            to={"settings"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2.5 pl-4 pops ${
                isActive
                  ? "bg-[#009AF4]/30 text-[#009AF4] text-sm font-bold"
                  : "text-[12px] font-semibold text-[#252b35] hover:bg-black/5"
              }`
            }
          >
            <TbSettings />
            Settings
          </NavLink>
          <button
            onClick={() => logout()}
            className={`flex items-center gap-3 p-2.5 pl-4 pops text-sm text-[12px] font-semibold text-[#252b35] hover:bg-black/5 cursor-pointer`}
          >
            <TbLogout />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
