import React from 'react';
import PersonalInfo from './PersonalInfo';
import ChurchInfo from './ChurchInfo';
import Academics from './Academics';
import { useMembership } from '../../../hooks/useMembership';
import useStates from '../../../hooks/useStates';

const Summary: React.FC = () => {
  const { addMember } = useMembership();
  const { addMemberDetails } = useStates();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">Personal Details</p>
        <PersonalInfo />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">Church Information</p>
        <ChurchInfo />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">Academic Qualifications</p>
        <Academics />
      </div>
      <button
        className="px-4 py-2 pops text-xl rounded-lg cursor-pointer bg-[#009AF4] text-white font-semibold mx-auto my-4"
        onClick={() => addMember(addMemberDetails)}
      >
        Submit
      </button>
    </div>
  );
};

export default Summary;
