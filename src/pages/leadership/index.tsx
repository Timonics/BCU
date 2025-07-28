import React, { useEffect, useState } from 'react';
import { LuPenLine } from 'react-icons/lu';
import AddLeadership from './addLeadership';
import { useLeadership } from '../../hooks/useLeadership';
import { useLeaderStore } from '../../stores/leadershipStore';
import { useLoadingStore } from '../../stores/loadingStore';
import Loading from '../../components/loader';
import { useLocation, useNavigate } from 'react-router';
import Action from '../../components/action';

const LeaderShip: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCreateLeadership, setShowCreateLeadership] =
    useState<boolean>(false);
  const { getAllLeadershipPosition } = useLeadership();
  const { leaderPositions } = useLeaderStore();
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    if (location.state?.shouldRefresh) setIsLoading(true);
    getAllLeadershipPosition();

    navigate(location.pathname, { state: { shouldRefresh: false } });
  }, [location.state?.shouldRefresh]);

  const leadershipDataElements = leaderPositions.map((data) => (
    <div className="grid grid-cols-4 px-4 pb-4 items-center gap-5 text-xs font-medium text-black/75">
      <p>{data?.type.charAt(0).toUpperCase() + data!.type.slice(1)}</p>
      <p>
        {data?.membersCount} - {data?.type}(s)
      </p>
      <p>{data?.appointedAt.slice(0, data.appointedAt.indexOf('T'))}</p>
      <Action />
    </div>
  ));

  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="section w-4/6">
        <div className="flex justify-between items-center p-4 border-b border-black/30 ">
          <p className="text-lg flex gap-3 items-center font-bold">
            Leadership
          </p>
          <button
            onClick={() => setShowCreateLeadership(true)}
            className="flex items-center gap-2 text-sm border-2 border-[#009AF4] text-[#009AF4] px-6 py-2.5 rounded-lg cursor-pointer"
          >
            <LuPenLine size={20} />
            <h3 className="text-sm font-semibold pops">Create Leadership</h3>
          </button>
        </div>
        <div className="grid grid-cols-4 p-4 py-4 border-b-[1.5px] bg-black/5 border-black/30 gap-5 items-center">
          <p className="text-black/90 text-[13px] font-bold pops">Title</p>
          <p className="text-black/90 text-[13px] font-bold pops">Counts</p>
          <p className="text-black/90 text-[13px] font-bold pops">
            Date Created
          </p>
          <p className="text-black/90 text-[13px] font-bold pops">Action</p>
        </div>
        <div
          className={`flex flex-col relative gap-4 my-2 ${!leaderPositions.length && 'h-60 items-center justify-center font-bold text-2xl'}`}
        >
          {leadershipDataElements}
          {!leaderPositions.length && 'Add Leadership positions to view'}
          {isLoading && <Loading />}
        </div>
      </div>
      {showCreateLeadership && (
        <>
          <div className="absolute inset-0 backdrop-blur-xl flex justify-center items-center">
            <AddLeadership setShowCreateLeadership={setShowCreateLeadership} />
          </div>
        </>
      )}
    </div>
  );
};

export default LeaderShip;
