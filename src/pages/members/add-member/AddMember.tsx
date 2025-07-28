import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { addMemberSteps } from '../../../constants/member_management_steps';
import { useLoadingStore } from '../../../stores/loadingStore';
import Loading from '../../../components/loader';
import Logo from '../../../components/logo';

const AddMember: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);
  const { memberLoading } = useLoadingStore();

  const addMemberStepsElements = addMemberSteps.map((step) => {
    const Icon = step.icon;
    return (
      <NavLink
        end
        to={step.link}
        className={({ isActive }) =>
          `py-2 px-4 text-sm text-[#1E1E1E] flex items-center gap-2 ${
            isActive && 'bg-[#009AF4]/20 font-bold text-[#009AF4]'
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
      <Link
        className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
        to={'..'}
      />
      <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex w-[70%] h-[85%] shadow-xl">
        <div className="w-2/6 bg-[#d8e9f5] flex flex-col items-center gap-5 pt-4">
        <Logo />
          <p className="text-xs text-center font-bold pops">
            Youth Fellowship Membership Data Form
          </p>
          <div className="w-full mt-3 flex flex-col py-4 gap-4">
            {addMemberStepsElements}
          </div>
        </div>
        <div className="w-4/6 bg-white flex flex-col overflow-y-auto p-4 gap-4">
          <Link
            to={'..'}
            className="px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] cursor-pointer text-white font-semibold ml-auto"
          >
            Back
          </Link>
          <div className="flex flex-col gap-5">
            <p
              className={`${
                pathName === 'summary' ? 'text-3xl' : 'text-2xl'
              }  pops font-bold`}
            >
              {pathName === 'summary'
                ? 'Summary'
                : 'Fill in your information correctly'}
            </p>
            {<Outlet />}
          </div>
        </div>
        {memberLoading && <Loading />}
      </div>
    </>
  );
};

export default AddMember;
