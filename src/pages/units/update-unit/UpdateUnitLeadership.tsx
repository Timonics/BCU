import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MemberDetails } from '../../../interfaces/member';
import { useUnit } from '../../../hooks/useUnit';
import useStates from '../../../hooks/useStates';
import { useLoadingStore } from '../../../stores/loadingStore';
import Logo from '../../../components/logo';
import { UnitDetails } from '../../../interfaces/unit';
import { useNavigate } from 'react-router';

const UpdateUnitLeadership = ({
  unit,
  setUpdateUnitLeadershipIsOpen,
}: {
  unit: UnitDetails;
  setUpdateUnitLeadershipIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate()
  const { setIsLoading } = useLoadingStore();
  const { updateUnit } = useUnit();
  const [membersIsOpen, setMembersIsOpen] = useState(false);
  const [selectedUnitMember, setSelectedUnitMember] = useState('');
  const [unitMembers, setUnitMembers] = useState<MemberDetails[]>([]);
  const { fetchUnitMembersWithoutHead } = useUnit();
  const { updateUnitDetails, setUpdateUnitsDetails } = useStates();

  useEffect(() => {
    fetchUnitMembersWithoutHead(unit.id).then((unitMembersList) => {
      if (!unitMembersList?.length || !unitMembersList) setUnitMembers([]);
      else setUnitMembers(unitMembersList);
    });
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await updateUnit(unit!.id, updateUnitDetails);
      navigate(`/units?${unit.id}`, { state: { shouldRefresh: true } });
    } finally {
      setUpdateUnitsDetails({});
      setUpdateUnitLeadershipIsOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="absolute rounded-lg top-1/2 bg-white -translate-y-1/2 right-1/2 translate-x-1/2 w-[60%] h-[300px] shadow-xl shadow-blue-200 overflow-hidden">
        <div className="absolute -top-50 -right-50 opacity-5">
          <Logo size={700} width={800} />
        </div>
      </div>
      <div
        className="absolute rounded-lg top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex flex-col w-[60%] p-4"
        onClick={() => membersIsOpen && setMembersIsOpen(false)}
      >
        <button
          onClick={() => setUpdateUnitLeadershipIsOpen(false)}
          className="z-20 cursor-pointer w-fit ml-auto mt-2 mr-2 h-fit px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold"
        >
          Back
        </button>
        <div className="absolute top-2 left-2">
          <Logo size={50} />
        </div>{' '}
        <p className="pops text-xl font-semibold mt-10">
          Assign a new unit head
        </p>
        <div
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer mt-2"
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
            <ul className="absolute top-[50px] max-h-[150px] overflow-auto scroll left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl z-30">
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
        <button
          className="px-4 py-2 pops text-xl rounded-lg cursor-pointer bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold mx-auto my-4 z-20"
          onClick={handleSubmit}
        >
          Update Unit
        </button>
      </div>
    </>
  );
};

export default UpdateUnitLeadership;
