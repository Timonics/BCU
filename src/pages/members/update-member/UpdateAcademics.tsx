import { ChangeEvent, useState } from 'react';
import { useLocation } from 'react-router';
import useStates from '../../../hooks/useStates';
import { MemberDetails } from '../../../interfaces/member';

const UpdateAcademics = ({ member }: { member: MemberDetails }) => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);

  const { updateMemberDetails, setUpdateMembersDetails } = useStates();

  const [institutionNameIsActive, setInstitutionNameIsActive] =
    useState<boolean>(false);
  const [qualificationsIsActive, setQualificationsIsActive] =
    useState<boolean>(false);
  const [courseOfStudyIsActive, setCourseOfStudyIsActive] =
    useState<boolean>(false);
  const [startDateIsActive, setStartDateIsActive] = useState<boolean>(false);
  const [endDateIsActive, setEndDateIsActive] = useState<boolean>(false);
  const [
    professionalQualificationIsActive,
    setProfessionalQualificationIsActive,
  ] = useState<boolean>(false);
  const [vocationalQualificationIsActive, setVocationalQualificationIsActive] =
    useState<boolean>(false);
  const [placeOfWorkIsActive, setPlaceOfWorkIsActive] =
    useState<boolean>(false);
  const [officeAddressIsActive, setOfficeAddressIsActive] =
    useState<boolean>(false);
  const [countryIsActive, setCountryIsActive] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateMembersDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className={`grid ${pathName === 'summary' ? 'grid-cols-3' : 'grid-cols-2'} gap-4 px-2`}
    >
      <p className="mt-4 col-span-full font-semibold text-lg">Academics</p>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Institution Name</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setInstitutionNameIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${institutionNameIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.institutionName}
          </p>
          <input
            placeholder={`${member.institutionName} - Enter updated institution name to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${institutionNameIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="institutionName"
            value={updateMemberDetails?.institutionName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Qualifications</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setQualificationsIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${qualificationsIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.qualification}
          </p>
          <input
            placeholder={`${member.qualification} - Enter updated qualification to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${qualificationsIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="qualification"
            value={updateMemberDetails?.qualification}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Course of Study</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setCourseOfStudyIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${courseOfStudyIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.courseOfStudy}
          </p>
          <input
            placeholder={`${member.courseOfStudy} - Enter updated course of study to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${courseOfStudyIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="courseOfStudy"
            value={updateMemberDetails?.courseOfStudy}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Start Date</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setStartDateIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${startDateIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.startDate}
          </p>
          <input
            placeholder={`${member.startDate} - Enter updated start date to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${startDateIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="startDate"
            value={updateMemberDetails?.startDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">End Date</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setEndDateIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${endDateIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.endDate}
          </p>
          <input
            placeholder={`${member.endDate} - Enter updated end date to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${endDateIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="endDate"
            value={updateMemberDetails?.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Professional Qualifications</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setProfessionalQualificationIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${professionalQualificationIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.professionalQualifications}
          </p>
          <input
            placeholder={`${member.professionalQualifications} - Enter updated professional qualifications to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${professionalQualificationIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="professionalQualifications"
            value={updateMemberDetails?.professionalQualifications}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Vocational Qualifications</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setVocationalQualificationIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${vocationalQualificationIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.vocationalQualification}
          </p>
          <input
            placeholder={`${member.vocationalQualification} - Enter updated vocational qualification to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${vocationalQualificationIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="vocationalQualification"
            value={updateMemberDetails?.vocationalQualification}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Place of Work</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setPlaceOfWorkIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${placeOfWorkIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.placeOfWork}
          </p>
          <input
            placeholder={`${member.placeOfWork} - Enter updated place of work to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${placeOfWorkIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="placeOfWork"
            value={updateMemberDetails?.placeOfWork}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col col-span-full gap-2">
        <p className="text-sm">Office Address</p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setOfficeAddressIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${officeAddressIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.officeAddress}
          </p>
          <input
            placeholder={`${member.officeAddress} - Enter updated office address to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${officeAddressIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="officeAddress"
            value={updateMemberDetails?.officeAddress}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Country</p>
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
    </div>
  );
};

export default UpdateAcademics;
