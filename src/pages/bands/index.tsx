import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import BandInfo from './BandInfo';
import { IoAddCircleOutline } from 'react-icons/io5';
import Button from '../../components/button';
import AllBandMembers from './AllBandMembers';
import useStates from '../../hooks/useStates';
import CreateNewBand from './CreateNewBand';
import { useBandStore } from '../../stores/bandStore';
import Loading from '../../components/loader';
import BandMembers from './BandMembers';
import { useLoadingStore } from '../../stores/loadingStore';
import { useBand } from '../../hooks/useBand';
import UpdateBand from './update-band';
import UpdateBandLeadership from './update-band/UpdateBandLeadership';
import UpdateMember from '../members/update-member';
import ViewMember from '../members/view-member';

const Bands: React.FC = () => {
  const location = useLocation();
  const { getAllBands } = useBand();
  const { isLoading, setIsLoading } = useLoadingStore();
  const {
    bands,
    selectedBandId,
    setSelectedBandId,
    selectedBand,
    bandMetadata,
  } = useBandStore();
  const {
    isCreateNewBandOpen,
    setIsCreateNewBandOpen,
    updateBandIsOpen,
    setUpdateBandIsOpen,
    updateBandLeadershipIsOpen,
    setUpdateBandLeadershipIsOpen,
    updateBandMemberIsOpen,
    setUpdateBandMemberIsOpen,
    selectedMember,
    viewBandMemberIsOpen,
    setViewBandMemberIsOpen
  } = useStates();
  const [activeBandName, setActiveBandName] = useState('');

  const queryPathId = location.search.split('?').at(-1);

  useEffect(() => {
    if (location.state?.shouldRefresh) setIsLoading(true);
    getAllBands();
  }, [location.state?.shouldRefresh]);

  const bandsElements = bands.map((band) => {
    return (
      <Link
        to={`?${band.id}`}
        onClick={() => {
          setActiveBandName(band.name);
          setSelectedBandId(band.id);
        }}
        className={`text-[13px] text-[#344054] font-semibold rounded-md ${
          band.id == Number(queryPathId)
            ? 'bg-[#009AF4]/30 hover:bg-[#009AF4]/30 text-[#009AF4] p-3 transition ease-in-out duration-150 scale-105'
            : 'hover:scale-90 hover:ease-in-out duration-150'
        }`}
      >
        {band.name}
      </Link>
    );
  });

  return (
    <section className="flex flex-col relative h-full">
      <div className="flex w-full gap-2 p-4">
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Bands</p>
          <p className="text-black/85 pops font-bold">
            {bandMetadata?.totalBands ?? 0}
          </p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Leaders</p>
          <p className="text-black/85 pops font-bold">
            {bandMetadata?.totalBandLeaders ?? 0}
          </p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Male Bands</p>
          <p className="text-black/85 pops font-bold">
            {bandMetadata?.totalMaleBands ?? 0}
          </p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Female Bands</p>
          <p className="text-black/85 pops font-bold">
            {bandMetadata?.totalFemaleBands ?? 0}
          </p>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        <div className="border-[1.42px] w-[230px] h-fit bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl">
          <p className="border-b-[1.5px] border-black/30 p-4 text-xl font-bold flex gap-3 items-center">
            Bands
          </p>
          <div className="flex flex-col p-4 gap-4 pops">
            {bands.length ? (
              <>
                <Link
                  to={''}
                  onClick={() => setActiveBandName('All Bands')}
                  className={`text-[13px] text-[#344054] font-semibold rounded-md ${
                    !location.search || activeBandName == 'All Bands'
                      ? 'bg-[#009AF4]/30 text-[#009AF4] p-3 transition ease-in-out duration-150 scale-105'
                      : 'hover:scale-90 hover:ease-in-out duration-150'
                  }`}
                >
                  All Bands
                </Link>
                {bandsElements}
              </>
            ) : (
              <div className=" h-[150px] relative flex items-center justify-center">
                {isLoading && <Loading />}
                <p className="pops font-bold">Add Bands</p>
              </div>
            )}
          </div>
        </div>
        {location.search && activeBandName !== 'All Bands' ? (
          <BandInfo bandId={selectedBandId! ?? Number(queryPathId!)} />
        ) : (
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl w-full">
            <AllBandMembers />
          </div>
        )}
      </div>
      {location.search && (
        <div className="px-4 mt-4">
          <div className="border-[1.5px] bg-[#F9FAFB] flex flex-col border-black/30 rounded-xl">
            <div className="flex items-center justify-between p-4 py-6 border-b border-black/30">
              <p className="text-lg font-bold flex gap-3 items-center">
                Members Listing ({selectedBand?.members?.length || 0})
              </p>
              <Button Icon={IoAddCircleOutline} text="Add Members" />
            </div>
            <div className="">
              <div className="grid grid-cols-9 p-4 border-b-[1.5px] border-black/30 bg-black/5">
                <p className="text-black/90 text-[13px] font-bold pops">ID</p>
                <p className="text-black/90 col-span-2 text-[13px] font-bold pops">
                  Full Name
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
              <BandMembers />
            </div>
          </div>
        </div>
      )}
      {isCreateNewBandOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-xs flex justify-center items-center border"
            onClick={() => setIsCreateNewBandOpen(false)}
          />
          <CreateNewBand />
        </>
      )}
      {updateBandIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setUpdateBandIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <UpdateBand
            band={selectedBand!}
            setUpdateBandIsOpen={setUpdateBandIsOpen}
          />
        </div>
      )}
      {updateBandLeadershipIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setUpdateBandLeadershipIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <UpdateBandLeadership
            band={selectedBand!}
            setUpdateBandLeadershipIsOpen={setUpdateBandLeadershipIsOpen}
          />
        </div>
      )}
      {updateBandMemberIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setUpdateBandMemberIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <UpdateMember
            member={selectedMember}
            setUpdateMemberIsOpen={setUpdateBandMemberIsOpen}
          />
        </div>
      )}
      {viewBandMemberIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setViewBandMemberIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <ViewMember
            member={selectedMember!}
            setViewMemberIsOpen={setViewBandMemberIsOpen}
          />
        </div>
      )}
    </section>
  );
};

export default Bands;
