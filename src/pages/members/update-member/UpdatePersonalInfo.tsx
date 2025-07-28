import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { genders, marital_status } from '../../../constants/listings';
import { useLocation } from 'react-router';
import useStates from '../../../hooks/useStates';
import { MemberDetails } from '../../../interfaces/member';

const UpdatePersonalInfo = ({ member }: { member: MemberDetails }) => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);
  const [genderIsOpen, setGenderIsOpen] = useState<boolean>(false);
  const [maritalStatusIsOpen, setMaritalStatusIsOpen] =
    useState<boolean>(false);
  const { updateMemberDetails, setUpdateMembersDetails } = useStates();

  const [firstNameIsActive, setFirstNameIsActive] = useState<boolean>(false);
  const [lastNameIsActive, setLastNameIsActive] = useState<boolean>(false);
  const [otherNamesIsActive, setOtherNamesIsActive] = useState<boolean>(false);
  const [emailIsActive, setEmailIsActive] = useState<boolean>(false);
  const [phoneNumberIsActive, setPhoneNumberIsActive] =
    useState<boolean>(false);
  const [dateOfBirthIsActive, setDateOfBirthIsActive] =
    useState<boolean>(false);
  const [stateOfOriginIsActive, setStateOfOriginIsActive] =
    useState<boolean>(false);
  const [addressIsActive, setAddressIsActive] =
    useState<boolean>(false);
  const [countryIsActive, setCountryIsActive] = useState<boolean>(false);
  const [residentialStateIsActive, setResidentialStateIsActive] = useState<boolean>(false);
  const [cityIsActive, setCityIsActive] = useState<boolean>(false);
  const [lgaIsActive, setLGAIsActive] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateMembersDetails((prevState) => ({
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
      <p className="mt-4 col-span-full font-semibold text-lg">
        Personal Information
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Surname <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setFirstNameIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${firstNameIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.firstName}
          </p>
          <input
            placeholder={`${member.firstName} - Enter updated surname to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${firstNameIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="firstName"
            value={updateMemberDetails?.firstName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          First Name <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setLastNameIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${lastNameIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.lastName}
          </p>
          <input
            placeholder={`${member.lastName} - Enter updated first name to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${lastNameIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="lastName"
            value={updateMemberDetails?.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Other Names (optional)</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setOtherNamesIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${otherNamesIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.otherNames}
          </p>
          <input
            placeholder={`${member.otherNames} - Enter updated other names to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${otherNamesIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="otherNames"
            value={updateMemberDetails?.otherNames}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Email Address <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setEmailIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${emailIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.email}
          </p>
          <input
            placeholder={`${member.email} - Enter updated other names to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${emailIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="email"
            value={updateMemberDetails?.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Phone Number <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setPhoneNumberIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${phoneNumberIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.phoneNumber}
          </p>
          <input
            placeholder={`${member.phoneNumber} - Enter updated phone number to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${phoneNumberIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="phoneNumber"
            value={updateMemberDetails?.phoneNumber}
            onChange={handleChange}
          />
        </div>
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
            {updateMemberDetails.gender
              ? updateMemberDetails.gender.charAt(0).toUpperCase() +
                updateMemberDetails.gender.slice(1)
              : `${member.gender.charAt(0).toUpperCase() + member.gender.slice(1)} - select gender to change -`}
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
                    setUpdateMembersDetails((prevState) => ({
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
          Date of Birth (YYYY-MM-DD) <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setDateOfBirthIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${dateOfBirthIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.dateOfBirth}
          </p>
          <input
            placeholder={`${member.dateOfBirth} - Enter updated date of birth to change (YYYY-MM-DD)`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${dateOfBirthIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="dateOfBirth"
            value={updateMemberDetails?.dateOfBirth}
            onChange={handleChange}
          />
        </div>
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
            {updateMemberDetails.maritalStatus
              ? updateMemberDetails.maritalStatus.charAt(0).toUpperCase() +
                updateMemberDetails.maritalStatus.slice(1)
              : `${member.maritalStatus.charAt(0).toUpperCase() + member.maritalStatus.slice(1)} - select marital status to change -`}
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
                    setUpdateMembersDetails((prevState) => ({
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
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setStateOfOriginIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${stateOfOriginIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.stateOfOrigin}
          </p>
          <input
            placeholder={`${member.stateOfOrigin} - Enter updated state of origin to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${stateOfOriginIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="stateOfOrigin"
            value={updateMemberDetails?.stateOfOrigin}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col col-span-full gap-2">
        <p className="text-sm">
          Address <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setAddressIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${addressIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.address}
          </p>
          <input
            placeholder={`${member.address} - Enter updated address to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${addressIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="address"
            value={updateMemberDetails?.address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Country <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setCountryIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${countryIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.country}
          </p>
          <input
            placeholder={`${member.country} - Enter updated country to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${countryIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="country"
            value={updateMemberDetails?.country}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          State <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setResidentialStateIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${residentialStateIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.residentialState}
          </p>
          <input
            placeholder={`${member.residentialState} - Enter updated residential state to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${residentialStateIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="residentialState"
            value={updateMemberDetails?.residentialState}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          City <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setCityIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${cityIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.city}
          </p>
          <input
            placeholder={`${member.city} - Enter updated city to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${cityIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="city"
            value={updateMemberDetails?.city}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Local Government Area <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setLGAIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${lgaIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.localGovernmentArea}
          </p>
          <input
            placeholder={`${member.localGovernmentArea} - Enter updated local government area to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${lgaIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="localGovernmentArea"
            value={updateMemberDetails?.localGovernmentArea}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatePersonalInfo;
