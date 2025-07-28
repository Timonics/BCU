import { NavLink, useLocation } from 'react-router';

import { updateMemberSteps } from '../../../constants/member_management_steps';

import { MemberDetails } from '../../../interfaces/member';
import { TbUser } from 'react-icons/tb';
import UpdatePersonalInfo from './UpdatePersonalInfo';
import UpdateChurchInfo from './UpdateChurchInfo';
import UpdateAcademics from './UpdateAcademics';
import useStates from '../../../hooks/useStates';
import { useMembership } from '../../../hooks/useMembership';
import { useState } from 'react';
import UpdateLoader from '../../../components/loader/updateLoader';
import Logo from '../../../components/logo';

const UpdateMember = ({
  member,
  setUpdateMemberIsOpen,
}: {
  member: MemberDetails | null;
  setUpdateMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);

  const { updateMember } = useMembership();
  const { updateMemberDetails, setUpdateMembersDetails } = useStates();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await updateMember(member!.id, updateMemberDetails);
    } finally {
      setUpdateMembersDetails({});
      setUpdateMemberIsOpen(false);
      setIsLoading(false);
    }
  };

  const updateMemberStepsElements = updateMemberSteps.map((step) => {
    const Icon = step.icon;
    return (
      <NavLink
        end
        to={''}
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
      <div className="absolute rounded-lg top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex w-[70%] h-[85%] shadow-xl shadow-blue-200">
        <div className="w-2/6 rounded-l-lg bg-[#d8e9f5] flex flex-col items-center gap-5 pt-4">
          <Logo />
          <p className="text-xs text-center font-bold pops">
            Youth Fellowship Membership Update Data Form
          </p>
          <div className="flex flex-col gap-2 items-center mt-2">
            <div className="size-[80px] shadow-2xl rounded-full bg-black/10 flex items-center justify-center">
              <TbUser size={40} />
            </div>
            <p className="text-xl font-bold pops">
              {member ? `${member.firstName} ${member.lastName} ` : 'User'}
            </p>
          </div>
          <div className="w-full flex flex-col py-4 gap-4">
            {updateMemberStepsElements}
          </div>
        </div>
        <div className="w-4/6 scroll rounded-r-lg bg-white flex flex-col overflow-y-auto p-4 gap-4">
          <button
            onClick={() => setUpdateMemberIsOpen(false)}
            className="px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] cursor-pointer text-white font-semibold ml-auto"
          >
            Back
          </button>
          <div className="flex flex-col gap-5">
            <p
              className={`${
                pathName === 'summary' ? 'text-3xl' : 'text-2xl'
              }  pops font-bold`}
            >
              {pathName === 'summary'
                ? 'Summary'
                : 'Update member information correctly'}
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <UpdatePersonalInfo member={member!} />
            <UpdateChurchInfo member={member!} />
            <UpdateAcademics member={member!} />
          </div>
          <button
            className="px-4 py-2 pops text-xl rounded-lg cursor-pointer bg-[#009AF4] text-white font-semibold mx-auto my-4"
            onClick={handleSubmit}
          >
            Update member
          </button>
        </div>
      </div>
      {isLoading && <UpdateLoader />}
    </>
  );
};

export default UpdateMember;
