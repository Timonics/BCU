import React, { ChangeEvent } from 'react';
import { useLocation } from 'react-router';
import useStates from '../../../hooks/useStates';

const Academics: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);

  const { addMemberDetails, setAddMembersDetails } = useStates();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddMembersDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className={`grid ${pathName === 'summary' ? 'grid-cols-3' : 'grid-cols-2'} gap-4 px-2`}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm">Institution Name</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="institutionName"
          value={addMemberDetails?.institutionName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Qualifications</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="qualification"
          value={addMemberDetails?.qualification}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Course of Study</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="courseOfStudy"
          value={addMemberDetails?.courseOfStudy}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Start Date</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="startDate"
          value={addMemberDetails?.startDate}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">End Date</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="endDate"
          value={addMemberDetails?.endDate}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Professional Qualifications</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="professionalQualifications"
          value={addMemberDetails?.professionalQualifications}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Vocational Qualifications</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="vocationalQualification"
          value={addMemberDetails?.vocationalQualification}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Place of Work</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="placeOfWork"
          value={addMemberDetails?.placeOfWork}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col col-span-full gap-2">
        <p className="text-sm">Office Address</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="officeAddress"
          value={addMemberDetails?.officeAddress}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">State</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65  rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="stateOfOrigin"
          value={addMemberDetails?.stateOfOrigin}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">LGA</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="localGovernmentArea"
          value={addMemberDetails?.localGovernmentArea}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Country</p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65  rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2"
          name="country"
          value={addMemberDetails?.country}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Academics;
