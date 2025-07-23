import React, { useState } from 'react';
import { leadershipType } from '../../constants/leadershipTypes';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLeadership } from '../../hooks/useLeadership';
import Loading from '../../components/loading';
import { useLoadingStore } from '../../stores/loadingStore';

type LProps = {
  setShowCreateLeadership: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLeadership: React.FC<LProps> = ({ setShowCreateLeadership }) => {
  const { addLeadershipPosition } = useLeadership();
  const { isLoading } = useLoadingStore();
  const [leaderTypeIsOpen, setLeaderTypeIsOpen] = useState(false);
  const [addLeaderData, setAddLeaderData] = useState({
    type: '',
  });

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-2/5 p-4 rounded-xl bg-white shadow-xl">
      <button
        onClick={() => setShowCreateLeadership(false)}
        className="px-3 cursor-pointer py-1.5 pops text-sm rounded-lg bg-[#009AF4] text-white font-semibold ml-auto"
      >
        Back
      </button>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold pops">Create Leadership Title</h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Leadership Title <span className="text-red-600">*</span>
          </p>
          <div
            className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
            onClick={() => setLeaderTypeIsOpen(!leaderTypeIsOpen)}
          >
            <p className="tfont-medium text-[#101828]/65">
              {addLeaderData.type
                ? addLeaderData.type
                : '--select leadership type--'}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {leaderTypeIsOpen && (
              <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
                {leadershipType.map((leader, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                      index !== leadershipType.length - 1 &&
                      'border-b border-[#97979786]'
                    }`}
                    onClick={() =>
                      setAddLeaderData({ type: leader.name.toLowerCase() })
                    }
                  >
                    {leader.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <button
        disabled={!addLeaderData}
        className="flex items-center disabled:opacity-50 disabled:cursor-not-allowed gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
        onClick={() => {
          addLeadershipPosition(addLeaderData);
        }}
      >
        <h3 className="text-sm font-semibold pops">Create</h3>
      </button>
      {isLoading && <Loading />}
    </div>
  );
};

export default AddLeadership;
