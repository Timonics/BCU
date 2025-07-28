import { useEffect, useState } from 'react';
import { BandDetails } from '../../../interfaces/bands';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MemberDetails } from '../../../interfaces/member';
import { useBand } from '../../../hooks/useBand';
import useStates from '../../../hooks/useStates';
import { useLoadingStore } from '../../../stores/loadingStore';
import Logo from '../../../components/logo';
import { useNavigate } from 'react-router';

const UpdateBandLeadership = ({
  band,
  setUpdateBandLeadershipIsOpen,
}: {
  band: BandDetails;
  setUpdateBandLeadershipIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const { setIsLoading } = useLoadingStore();
  const { updateBand } = useBand();
  const [membersIsOpen, setMembersIsOpen] = useState(false);
  const [selectedBandMember, setSelectedBandMember] = useState('');
  const [bandMembers, setBandMembers] = useState<MemberDetails[]>([]);
  const { fetchBandMembersWithoutCaptain } = useBand();
  const { updateBandDetails, setUpdateBandsDetails } = useStates();

  useEffect(() => {
    fetchBandMembersWithoutCaptain(band.id).then((bandMembersList) => {
      if (!bandMembersList?.length || !bandMembersList) setBandMembers([]);
      else setBandMembers(bandMembersList);
    });
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await updateBand(band!.id, updateBandDetails);
      navigate(`/bands?${band.id}`, { state: { shouldRefresh: true } });
    } finally {
      setUpdateBandsDetails({});
      setUpdateBandLeadershipIsOpen(false);
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
          onClick={() => setUpdateBandLeadershipIsOpen(false)}
          className="z-20 cursor-pointer w-fit ml-auto mt-2 mr-2 h-fit px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold"
        >
          Back
        </button>
        <div className="absolute top-2 left-2">
          <Logo size={50} />
        </div>{' '}
        <p className="pops text-xl font-semibold mt-10">
          Assign a new band captain
        </p>
        <div
          className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer mt-2"
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
            <ul className="absolute top-[50px] max-h-[150px] overflow-auto scroll left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl z-30">
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
        <button
          className="px-4 py-2 pops text-xl rounded-lg cursor-pointer bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold mx-auto my-4 z-20"
          onClick={handleSubmit}
        >
          Update Band
        </button>
      </div>
    </>
  );
};

export default UpdateBandLeadership;
