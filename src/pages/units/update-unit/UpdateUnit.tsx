import { ChangeEvent, useEffect, useState } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import useStates from '../../../hooks/useStates';
import { MemberDetails } from '../../../interfaces/member';
import { UnitDetails } from '../../../interfaces/unit';
import { useUnit } from '../../../hooks/useUnit';

const UpdateSelectedUnit = ({ unit }: { unit: UnitDetails }) => {
  const [membersIsOpen, setMembersIsOpen] = useState(false);
  const { fetchUnitMembersWithoutHead } = useUnit();

  const { updateUnitDetails, setUpdateUnitsDetails } = useStates();
  const [unitNameIsActive, setUnitNameIsActive] = useState(false);
  const [foundingDateIsActive, setFoundingDateIsActive] = useState(false);
  const [selectedUnitMember, setSelectedUnitMember] = useState('');
  const [unitMembers, setUnitMembers] = useState<MemberDetails[]>([]);

  useEffect(() => {
    fetchUnitMembersWithoutHead(unit.id).then((unitMembersList) => {
      if (!unitMembersList?.length || !unitMembersList) setUnitMembers([]);
      else setUnitMembers(unitMembersList);
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateUnitsDetails((prevState) => ({
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
          Unit Name<span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setUnitNameIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${unitNameIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {unit.name}
          </p>
          <input
            placeholder={`${unit.name} - Enter updated surname to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${unitNameIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="name"
            value={updateUnitDetails.name}
            onChange={handleChange}
          />
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
            {unit.foundingDate}
          </p>
          <input
            placeholder={`${unit.name} - Enter updated surname to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${foundingDateIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="foundingDate"
            value={updateUnitDetails.foundingDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <hr className="my-7 w-[90%]  opacity-30" />
      <div className="flex flex-col gap-2 w-full">
        <p className="pops text-xl font-semibold">Assign a new unit head</p>
        <div
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => setMembersIsOpen(!membersIsOpen)}
        >
          <p className="font-medium text-[#101828]/65">
            {selectedUnitMember
              ? selectedUnitMember.charAt(0).toUpperCase() +
                selectedUnitMember.slice(1)
              : '--select member to assign--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {membersIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl mb-4">
              {unitMembers.length ? (
                unitMembers.map((member, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer hover:bg-black/5 ${
                      index !== unitMembers.length - 1 &&
                      'border-b border-[#97979786]'
                    }`}
                    onClick={() => {
                      setUpdateUnitsDetails({ unitHeadId: member.id });
                      setSelectedUnitMember(
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

export default UpdateSelectedUnit;
