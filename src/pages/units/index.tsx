import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { IoAddCircleOutline } from 'react-icons/io5';
import Button from '../../components/button';
import useStates from '../../hooks/useStates';
import CreateNewUnit from './CreateNewUnit';
import UnitInfo from './UnitInfo';
import AllUnitMembers from './AllUnitMembers';
import { useUnitStore } from '../../stores/unitStore';
import Loading from '../../components/loader';
import UnitMembers from './UnitMembers';
import { useLoadingStore } from '../../stores/loadingStore';
import { useUnit } from '../../hooks/useUnit';
import UpdateUnit from './update-unit';
import UpdateMember from '../members/update-member';
import ViewMember from '../members/view-member';
import UpdateUnitLeadership from './update-unit/UpdateUnitLeadership';
import TransferUnitMember from './update-unit/TransferUnitMember';

const Units: React.FC = () => {
  const { isLoading, setIsLoading } = useLoadingStore();
  const {
    units,
    selectedUnitId,
    setSelectedUnitId,
    selectedUnit,
    unitMetadata,
  } = useUnitStore();
  const { getAllUnits } = useUnit();
  const location = useLocation();
  const {
    isCreateNewUnitOpen,
    setIsCreateNewUnitOpen,
    updateUnitIsOpen,
    setUpdateUnitIsOpen,
    updateUnitLeadershipIsOpen,
    setUpdateUnitLeadershipIsOpen,
    updateUnitMemberIsOpen,
    setUpdateUnitMemberIsOpen,
    viewUnitMemberIsOpen,
    setViewUnitMemberIsOpen,
    selectedMember,
  } = useStates();
  const [activeUnitName, setActiveUnitName] = useState('');

  const [transferUnitMemberIsOpen, setTransferUnitMemberIsOpen] =
    useState(false);

  const queryPathId = location.search.split('?').at(-1);

  useEffect(() => {
    if (location.state?.shouldRefresh) setIsLoading(true);
    getAllUnits();
  }, [location.state?.shouldRefresh]);

  const unitsElements = units.map((unit) => {
    return (
      <Link
        key={unit.id}
        to={`?${unit.id}`}
        onClick={() => {
          setActiveUnitName(unit.name);
          setSelectedUnitId(unit.id);
        }}
        className={`text-[13px]  rounded-md text-[#344054] font-semibold ${
          unit.id === Number(queryPathId)
            ? 'bg-[#009AF4]/30 hover:bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-150 scale-105'
            : 'hover:scale-90 hover:ease-in-out duration-150'
        }`}
      >
        {unit.name}
      </Link>
    );
  });

  return (
    <section className="flex flex-col relative h-full">
      <div className="flex w-full gap-2 p-4">
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Units</p>
          <p className="text-black/85 pops font-bold">
            {unitMetadata?.totalUnits ?? 0}
          </p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Leaders</p>
          <p className="text-black/85 pops font-bold">
            {unitMetadata?.totalUnitLeaders ?? 0}
          </p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Male</p>
          <p className="text-black/85 pops font-bold">6</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Female</p>
          <p className="text-black/85 pops font-bold">6</p>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        <div className="border-[1.42px] w-[230px] h-fit bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl">
          <p className="border-b border-black/30 p-4 text-xl font-bold flex gap-3 items-center">
            Units
          </p>
          <div className="flex flex-col p-4 gap-4 pops">
            {units.length ? (
              <>
                <Link
                  to={''}
                  className={`text-[13px] rounded-md text-[#344054] font-semibold ${
                    !location.search || activeUnitName == 'All Units'
                      ? 'bg-[#009AF4]/30 text-[#009AF4] p-3 transition ease-in-out duration-150 scale-105'
                      : 'hover:scale-90 hover:ease-in-out duration-150'
                  }`}
                >
                  All Units
                </Link>
                {unitsElements}
              </>
            ) : (
              <div className=" h-[150px] relative flex items-center justify-center">
                {isLoading && <Loading />}
                <p className="pops font-bold">Add Units</p>
              </div>
            )}
          </div>
        </div>
        {location.search && activeUnitName !== 'All Units' ? (
          <UnitInfo unitId={selectedUnitId ?? Number(queryPathId!)} />
        ) : (
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl w-full">
            <AllUnitMembers />
          </div>
        )}
      </div>
      {location.search && (
        <div className="px-4 mt-4">
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col border-black/30 rounded-xl">
            <div className="flex items-center justify-between p-4 py-6 border-b border-black/30">
              <p className="text-lg font-bold flex gap-3 items-center">
                Members Listing ({selectedUnit?.members?.length || 0})
              </p>
              <Button
                Icon={IoAddCircleOutline}
                text="Transfer Member"
                onClick={() => setTransferUnitMemberIsOpen(true)}
              />
            </div>
            <div className="">
              <div className="grid grid-cols-9 p-4 border-b-[1.5px] border-black/30 bg-black/5">
                <p className="text-black/90 text-[13px] font-bold pops">
                  Members ID
                </p>
                <p className="text-black/90 col-span-2 text-[13px] font-bold pops">
                  Member Name
                </p>
                <p className="text-black/90 text-[13px] font-bold pops">
                  Gender
                </p>

                <p className="text-black/90 text-[13px] font-bold pops">
                  Mobile Number
                </p>
                <p className="text-black/90 text-[13px] font-bold pops">
                  Birthday
                </p>
                <p className="text-black/90 text-[13px] font-bold pops">
                  Marital Status
                </p>
                <p className="text-black/90 text-[13px] font-bold pops">
                  Location
                </p>
                <p className="text-black/90 text-[13px] font-bold pops">
                  Action
                </p>
              </div>
              <UnitMembers />
            </div>
          </div>
        </div>
      )}
      {isCreateNewUnitOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-xs flex justify-center items-center border"
            onClick={() => setIsCreateNewUnitOpen(false)}
          />
          <CreateNewUnit />
        </>
      )}
      {updateUnitIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
            onClick={() => setUpdateUnitIsOpen(false)}
          />
          <UpdateUnit
            unit={selectedUnit!}
            setUpdateUnitIsOpen={setUpdateUnitIsOpen}
          />
        </div>
      )}
      {updateUnitLeadershipIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setUpdateUnitLeadershipIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <UpdateUnitLeadership
            unit={selectedUnit!}
            setUpdateUnitLeadershipIsOpen={setUpdateUnitLeadershipIsOpen}
          />
        </div>
      )}
      {updateUnitMemberIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setUpdateUnitMemberIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <UpdateMember
            member={selectedMember}
            setUpdateMemberIsOpen={setUpdateUnitMemberIsOpen}
          />
        </div>
      )}
      {viewUnitMemberIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setViewUnitMemberIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <ViewMember
            member={selectedMember!}
            setViewMemberIsOpen={setViewUnitMemberIsOpen}
          />
        </div>
      )}
      {transferUnitMemberIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setTransferUnitMemberIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <TransferUnitMember
            unit={selectedUnit!}
            setTransferUnitMemberIsOpen={setTransferUnitMemberIsOpen}
          />
        </div>
      )}
    </section>
  );
};

export default Units;
