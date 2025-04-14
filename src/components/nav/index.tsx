import React, { useEffect, useState } from "react";

import dashLogo from "../../assets/dashLogo.png";
import {
  TbChevronDown,
  TbLayoutDashboard,
  TbLogout,
  TbSettings,
  TbUser,
} from "react-icons/tb";

import { NavLink } from "react-router";
import { navItems } from "../../utils/navItems";

const Nav: React.FC = () => {
  const [dropdownOpenedIndex, setDropdownOpenedIndex] = useState<number | null>(
    null
  );
  const [dashIsActive, setDashIsActive] = useState<boolean>(true);

  const navItemsElement = navItems.map((item, index) => {
    const isOpen = dropdownOpenedIndex === index;

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
                : "text-[12px] font-semibold text-[#252b35]"
            }`
          }
          onClick={() => {
            setDashIsActive(false);
          }}
        >
          {/* <div
            className={`absolute w-[6px] h-full right-0 rounded-l-lg bg-[#009AF4]`}
          /> */}
          <Icon />
          {item.name}
          <TbChevronDown
            className="ml-auto cursor-auto"
            onClick={(e) => {
              e.preventDefault();
              setDropdownOpenedIndex(isOpen ? null : index);
            }}
          />
        </NavLink>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-lg z-10">
            {item.dropdown.map((dropdownItem, index) => {
              return (
                <NavLink
                  key={index}
                  to={dropdownItem.link}
                  className={`flex items-center gap-3 p-2.5 pl-4`}
                  onClick={() => setDropdownOpenedIndex(null)}
                >
                  <p className="text-[12px] font-semibold">
                    {dropdownItem.name}
                  </p>
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="flex flex-col bg-slate-100 h-full gap-5">
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
                  : "text-[12px] font-semibold text-[#252b35]"
              }`
            }
            onClick={() => {
              setDashIsActive(true);
            }}
          >
            {/* {dashIsActive && (
              <div className="absolute w-[6px] h-full right-0 rounded-l-lg bg-[#009AF4]" />
            )} */}
            <TbLayoutDashboard />
            Dashboard
          </NavLink>
          <div className="flex flex-col gap-1 w-full">{navItemsElement}</div>
        </div>
        <div className="flex flex-col w-full">
          <NavLink
            to={"logout"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2.5 pl-4 pops ${
                isActive
                  ? "bg-[#009AF4]/30 text-[#009AF4] text-sm font-bold"
                  : "text-[12px] font-semibold "
              }`
            }
          >
            <TbLogout />
            Logout
          </NavLink>
          <NavLink
            to={"settings"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2.5 pl-4 pops ${
                isActive
                  ? "bg-[#009AF4]/30 text-[#009AF4] text-sm font-bold"
                  : "text-[12px] font-semibold "
              }`
            }
          >
            <TbSettings />
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
