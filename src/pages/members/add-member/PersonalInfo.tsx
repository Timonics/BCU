import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { genders, marital_status } from '../../../constants/listings';
import { useLocation } from 'react-router';
import useStates from '../../../hooks/useStates';

const PersonalInfo: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);
  const [genderIsOpen, setGenderIsOpen] = useState<boolean>(false);
  const [maritalStatusIsOpen, setMaritalStatusIsOpen] =
    useState<boolean>(false);
  const { addMemberDetails, setAddMembersDetails } = useStates();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddMembersDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className={`grid ${
        pathName === 'summary' ? 'grid-cols-3' : 'grid-cols-2'
      } gap-4 px-2`}
      onClick={() => {
        genderIsOpen && setGenderIsOpen(false);
        maritalStatusIsOpen && setMaritalStatusIsOpen(false);
      }}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Surname <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="firstName"
          value={addMemberDetails?.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          First Name <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="lastName"
          value={addMemberDetails?.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Other Names (optional)</p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="otherNames"
          value={addMemberDetails?.otherNames}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Email Address <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="email"
          value={addMemberDetails?.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Phone Number <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="phoneNumber"
          value={addMemberDetails?.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Gender <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => {
            setGenderIsOpen(!genderIsOpen);
            setMaritalStatusIsOpen(false);
          }}
        >
          <p className="tfont-medium text-[#101828]/65">
            {addMemberDetails.gender
              ? addMemberDetails.gender.charAt(0).toUpperCase() +
                addMemberDetails.gender.slice(1)
              : '--select gender--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {genderIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full z-20 bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {genders.map((gender, index) => (
                <li
                  key={gender.name}
                  className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                    index !== 1 && 'border-b border-[#97979786]'
                  }`}
                  onClick={() => {
                    setAddMembersDetails((prevState) => ({
                      ...prevState,
                      gender: gender.name.toLowerCase(),
                    }));
                  }}
                >
                  {gender.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Date of Birth <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="dateOfBirth"
          value={addMemberDetails?.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Marital Status <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => {
            setMaritalStatusIsOpen(!maritalStatusIsOpen);
            setGenderIsOpen(false);
          }}
        >
          <p className="tfont-medium text-[#101828]/65">
            {addMemberDetails.maritalStatus
              ? addMemberDetails.maritalStatus.charAt(0).toUpperCase() +
                addMemberDetails.maritalStatus.slice(1)
              : '--select marital status--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {maritalStatusIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {marital_status.map((status, index) => (
                <li
                  key={status.name}
                  className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                    index !== 1 && 'border-b border-[#97979786]'
                  }`}
                  onClick={() => {
                    setAddMembersDetails((prevState) => ({
                      ...prevState,
                      maritalStatus: status.name.toLowerCase(),
                    }));
                  }}
                >
                  {status.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          State of Origin <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="stateOfOrigin"
          value={addMemberDetails?.stateOfOrigin}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col col-span-full gap-2">
        <p className="text-sm">
          Address <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="address"
          value={addMemberDetails?.address}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Country <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="country"
          value={addMemberDetails?.country}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          State <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="residentialState"
          value={addMemberDetails?.residentialState}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          City <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="city"
          value={addMemberDetails?.city}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Local Government Area <span className="text-red-600">*</span>
        </p>
        <input
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6]"
          name="localGovernmentArea"
          value={addMemberDetails?.localGovernmentArea}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
