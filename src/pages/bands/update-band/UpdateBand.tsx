import { ChangeEvent, useEffect, useState } from 'react';

import { BandDetails } from '../../../interfaces/bands';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { genders } from '../../../constants/listings';
import useStates from '../../../hooks/useStates';
import { useBand } from '../../../hooks/useBand';
import { MemberDetails } from '../../../interfaces/member';

const UpdateSelectedBand = ({ band }: { band: BandDetails }) => {
  const [genderIsOpen, setGenderIsOpen] = useState(false);
  const [membersIsOpen, setMembersIsOpen] = useState(false);
  const { fetchBandMembersWithoutCaptain } = useBand();

  const { updateBandDetails, setUpdateBandsDetails } = useStates();
  const [bandNameIsActive, setBandNameIsActive] = useState(false);
  const [foundingDateIsActive, setFoundingDateIsActive] = useState(false);
  const [selectedBandMember, setSelectedBandMember] = useState('');
  const [bandMembers, setBandMembers] = useState<MemberDetails[]>([]);

  useEffect(() => {
    fetchBandMembersWithoutCaptain(band.id).then((bandMembersList) => {
      if (!bandMembersList?.length || !bandMembersList) setBandMembers([]);
      else setBandMembers(bandMembersList);
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateBandsDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="w-full flex flex-col gap-4 items-center"
      onClick={() => membersIsOpen && setMembersIsOpen(false)}
    >
      <div className="flex flex-col gap-2 mt-4 w-full">
        <p className="text-sm">
          Band Name<span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setBandNameIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${bandNameIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {band.name}
          </p>
          <input
            placeholder={`${band.name} - Enter updated surname to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${bandNameIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="name"
            value={updateBandDetails.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm">
          Gender<span className="text-red-600">*</span>
        </p>
        <div
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => setGenderIsOpen(!genderIsOpen)}
        >
          <p className="tfont-medium text-[#101828]/65">
            {updateBandDetails.gender
              ? updateBandDetails.gender.charAt(0).toUpperCase() +
                updateBandDetails.gender.slice(1)
              : '--select bands gender--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {genderIsOpen && (
            <ul className="absolute top-[50px] z-40 left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {genders.map((gender, index) => (
                <li
                  className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                    index !== 1 && 'border-b border-[#97979786]'
                  }`}
                  onClick={() => {
                    setUpdateBandsDetails((prevState) => ({
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
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm">
          Founding Date (YYYY-MM-DD) <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setFoundingDateIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${foundingDateIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {band.foundingDate}
          </p>
          <input
            placeholder={`${band.name} - Enter updated surname to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${foundingDateIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="foundingDate"
            value={updateBandDetails.foundingDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <hr className="my-7 w-[90%] opacity-30" />
      <div className="flex flex-col gap-2 w-full">
        <p className="pops text-xl font-semibold">Assign a new band captain</p>
        <div
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => setMembersIsOpen(!membersIsOpen)}
        >
          <p className="font-medium text-[#101828]/65">
            {selectedBandMember
              ? selectedBandMember.charAt(0).toUpperCase() +
                selectedBandMember.slice(1)
              : '--select member to assign--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {membersIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {bandMembers.length ? (
                bandMembers.map((member, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer hover:bg-black/5 ${
                      index !== bandMembers.length - 1 &&
                      'border-b border-[#97979786]'
                    }`}
                    onClick={() => {
                      setUpdateBandsDetails({ bandCaptainId: member.id });
                      setSelectedBandMember(
                        `${member.firstName} ${member.lastName}`,
                      );
                      setMembersIsOpen(false);
                    }}
                  >
                    {member.firstName} {member.lastName}
                  </li>
                ))
              ) : (
                <div className="h-[150px] flex justify-center items-center text-2xl font-bold pops">
                  <p>No Members Found</p>
                </div>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateSelectedBand;
