import React from 'react';
import { Link, useLocation } from 'react-router';
import BandInfo from './BandInfo';
import { IoAddCircleOutline } from 'react-icons/io5';
import Button from '../../components/button';
import AllBandMembers from './AllBandMembers';
import useStates from '../../hooks/useStates';
import CreateNewBand from './CreateNewBand';
import { useBandStore } from '../../stores/bandStore';
import Loading from '../../components/loading';
import BandMembers from './BandMembers';
import { useLoadingStore } from '../../stores/loadingStore';

const Bands: React.FC = () => {
  const { isLoading } = useLoadingStore();
  const location = useLocation();
  const { bands, totalBands, selectedBandId, setSelectedBandId, selectedBand } =
    useBandStore();
  const { isCreateNewBandOpen, setIsCreateNewBandOpen } = useStates();

  let bandName: string;
  const queryPathName = location.search.split('?').at(-1);
  if (queryPathName?.includes('%20'))
    bandName = queryPathName.replaceAll('%20', ' ');
  else bandName = queryPathName!;

  const bandsElements = bands.map((band) => {
    return (
      <Link
        to={`?${band.name.replace(' ', '-')}`}
        onClick={() => setSelectedBandId(band.id.toString())}
        className={`text-[13px] text-[#344054] font-semibold ${
          band.name.replace(' ', '-') === bandName &&
          'bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-300 scale-105'
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
          <p className="text-black/85 pops font-bold">{totalBands}</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Leaders</p>
          <p className="text-black/85 pops font-bold">60</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Male Bands</p>
          <p className="text-black/85 pops font-bold">6</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Female Bands</p>
          <p className="text-black/85 pops font-bold">6</p>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        <div className="border-[1.42px] w-[230px] h-fit bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl">
          <p className="border-b border-black/30 p-4 text-xl font-bold flex gap-3 items-center">
            Bands
          </p>
          <div className="flex flex-col p-4 gap-4 pops">
            {bands.length ? (
              <>
                <Link
                  to={''}
                  className={`text-[13px] text-[#344054] font-semibold ${
                    !location.search &&
                    'bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-300 scale-105'
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
        {location.search ? (
          <BandInfo
            bandId={selectedBandId}
            bandName={bandName.replace('-', ' ')}
            bandYears={50}
            nextAnniversary="21/08/2025"
          />
        ) : (
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl w-full">
            <AllBandMembers />
          </div>
        )}
      </div>
      {location.search && (
        <div className="px-4 mt-4">
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl">
            <div className="flex items-center justify-between p-4 py-6 border-b border-black/30">
              <p className="text-lg font-bold flex gap-3 items-center">
                Members Listing ({selectedBand?.members?.length || 0})
              </p>
              <Button Icon={IoAddCircleOutline} text="Add Members" />
            </div>
            <div className="p-4">
              <div className="grid grid-cols-9 p-2 py-4">
                <p className="text-black/90 text-[10px] font-bold pops">ID</p>
                <p className="text-black/90 col-span-2 text-[10px] font-bold pops">
                  Full Name
                </p>
                <p className="text-black/90 text-[10px] font-bold pops">
                  Gender
                </p>
                <p className="text-black/90 text-[10px] font-bold pops">
                  Mobile Number
                </p>
                <p className="text-black/90 text-[10px] font-bold pops">
                  Birthday
                </p>
                <p className="text-black/90 text-[10px] font-bold pops">
                  Marital Status
                </p>
                <p className="text-black/90 text-[10px] font-bold pops">
                  Location
                </p>
                <p className="text-black/90 text-[10px] font-bold pops">
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
    </section>
  );
};

export default Bands;
