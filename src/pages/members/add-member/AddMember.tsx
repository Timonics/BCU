import React from "react";
import logo from "../../../assets/dashLogo.png";
import { Link, NavLink, Outlet } from "react-router";
import { addMemberSteps } from "../../../utils/addMemberSteps";

const AddMember: React.FC = () => {
  const addMemberStepsElements = addMemberSteps.map((step) => {
    const Icon = step.icon;
    return (
      <NavLink
        end
        to={step.link}
        className={({ isActive }) =>
          `py-2 px-4 text-sm text-[#1E1E1E] flex items-center gap-2 ${
            isActive && "bg-[#009AF4]/20 font-bold text-[#009AF4]"
          }`
        }
      >
        <div className="p-1.5 rounded-md shadow-md bg-[#fafdff]">
          <Icon size={17} />
        </div>
        {step.step}
      </NavLink>
    );
  });
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full backdrop-blur-sm" />
      <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex w-[70%] h-[85%] shadow-xl">
        <div className="w-2/6 bg-[#d8e9f5] flex flex-col items-center gap-5 pt-4">
          <img src={logo} alt="yfg-logo" className="w-[123px] h-[115px]" />
          <p className="text-xs text-center font-bold pops">
            Youth Fellowship Membership Data Form
          </p>
          <div className="w-full mt-3 flex flex-col py-4 gap-4">
            {addMemberStepsElements}
          </div>
        </div>
        <div className="w-4/6 bg-white flex flex-col overflow-y-auto p-4 gap-4">
          <Link
            to={".."}
            className="px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] text-white font-semibold ml-auto"
          >
            Back
          </Link>
          <div className="flex flex-col gap-5">
            <p className="text-2xl pops font-bold">
              Fill in your information correctly
            </p>
            {<Outlet />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember;
