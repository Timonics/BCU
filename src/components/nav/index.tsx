import React, { useState } from "react";

import dashLogo from "../../assets/dashLogo.png";
import {
  TbChevronDown,
  TbLayoutDashboard,
  TbLogout,
  TbSettings,
  TbUser,
  TbUsers,
  TbUsersGroup,
} from "react-icons/tb";
import { LuBoxes, LuCrown, LuLayers } from "react-icons/lu";
import { PiNotebookBold } from "react-icons/pi";
import { NavLink } from "react-router";

const Nav: React.FC = () => {
  //Not Finished Yet....
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);

  const toggleDropdown = (itemIndex: number) => {};

  const navItems = [
    {
      name: "Members",
      icon: <TbUsers />,
      link: "members",
      dropdown: [
        {
          name: "Add Member",
          link: "/add-member",
        },
        {
          name: "Members List",
          link: "/members-list",
        },
      ],
    },
    {
      name: "Leadership",
      icon: <LuCrown />,
      link: "leadership",
      dropdown: [
        {
          name: "Leadership Title",
          link: "/add-leadership",
        },
        {
          name: "All Assigned Leaders",
          link: "/assigned-leaders",
        },
      ],
    },
    {
      name: "Bands",
      icon: <LuBoxes />,
      link: "bands",
      dropdown: [
        {
          name: "Create Band",
          link: "/create-band",
        },
        {
          name: "Band List",
          link: "/bands-list",
        },
      ],
    },
    {
      name: "Units",
      icon: <LuLayers />,
      link: "units",
      dropdown: [
        {
          name: "Create Unit",
          link: "/create-unit",
        },
        {
          name: "Unit List",
          link: "/units-list",
        },
      ],
    },
    {
      name: "Class Management",
      icon: <PiNotebookBold />,
      link: "class-management",
      dropdown: [
        {
          name: "Add New Class",
          link: "/add-class",
        },
        {
          name: "Baptismal",
          link: "/baptismal",
        },
        {
          name: "ETS",
          link: "/ets",
        },
        {
          name: "Pre-Youth",
          link: "/pre-youth",
        },
      ],
    },
    {
      name: "Comittees",
      icon: <TbUsersGroup />,
      link: "",
      dropdown: [
        {
          name: "Add New Committee",
          link: "/add-committee",
        },
      ],
    },
  ];

  const navItemsElement = navItems.map((item, index) => {
    return (
      <NavLink
        key={index}
        to={item.link}
        className={`flex items-center gap-3 p-2.5 relative`}
      >
        {item.icon}
        <p className="text-[12px] font-semibold pops">{item.name}</p>
        <TbChevronDown className="ml-auto cursor-auto" onClick={() => {}} />
        {dropdownOpened && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-lg z-10">
            {item.dropdown.map((dropdownItem, index) => {
              return (
                <NavLink
                  key={index}
                  to={dropdownItem.link}
                  className={`flex items-center gap-3 p-2.5`}
                >
                  <p className="text-[12px] font-semibold">
                    {dropdownItem.name}
                  </p>
                </NavLink>
              );
            })}
          </div>
        )}
      </NavLink>
    );
  });

  return (
    <div className="flex flex-col bg-slate-100 h-full gap-5 p-3">
      <img src={dashLogo} className="size-10" />
      <div className="flex gap-3 items-center">
        <div className="bg-slate-400 flex items-center justify-center text-2xl size-[45px] rounded-full">
          <TbUser />
        </div>
        <div className="flex flex-col">
          <h1 className="xl:text-lg text-sm font-bold pops">Oderinde Michael</h1>
          <p className="xl:text-sm text-xs">Admin</p>
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-col gap-1 w-full">
          <NavLink to={""} className={`flex items-center gap-3 p-2.5`}>
            <TbLayoutDashboard />
            <p className="text-[12px] font-semibold pops">Dashboard</p>
          </NavLink>
          <div className="flex flex-col gap-1 w-full">{navItemsElement}</div>
        </div>
        <div className="flex flex-col w-full">
          <NavLink to={""} className={`flex items-center gap-3 p-2.5`}>
            <TbLogout />
            <p className="text-[12px] font-semibold pops">Logout</p>
          </NavLink>
          <NavLink to={""} className={`flex items-center gap-3 p-2.5`}>
            <TbSettings />
            <p className="text-[12px] font-semibold pops">Settings</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
