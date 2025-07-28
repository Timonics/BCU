import React, { useEffect, useState } from 'react';
import { useBandStore } from '../../stores/bandStore';
import Loading from '../../components/loader';
import { useLoadingStore } from '../../stores/loadingStore';
import { useBand } from '../../hooks/useBand';
import Pagination from '../../components/pagination';
import { useLocation, useNavigate } from 'react-router';
import { BandDetails } from '../../interfaces/bands';
import UpdateBand from './update-band';
import Action from '../../components/action';
import ViewBand from './view-band';

const AllBandMembers: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bands, bandMetadata } = useBandStore();
  const { getAllBands } = useBand();
  const { isLoading, setIsLoading } = useLoadingStore();

  const [updateBandIsOpen, setUpdateBandIsOpen] = useState<boolean>(false);
  const [viewBandIsOpen, setViewBandIsOpen] = useState<boolean>(false);
  const [selectBand, setSelectBand] = useState<BandDetails | null>(null);

  useEffect(() => {
    if (location.state?.shouldRefresh) setIsLoading(true);
    getAllBands();

    navigate(location.pathname, { state: { shouldRefresh: false } });
  }, [location.state?.shouldRefresh]);

  const bandsElements = bands.length ? (
    bands.map((band) => (
      <div className="grid grid-cols-7 p-4 py-4  items-center text-[11px] font-bold text-black/70">
        <p className="text-black/80 text-[12px] font-medium pops">{band.id}</p>
        <p className="text-black/80 text-[12px] font-medium pops">
          {band.name}
        </p>
        <p className="text-black/80 text-[12px] font-medium pops">
          {band.gender}
        </p>
        <p className="text-black/80 text-[12px] font-medium pops">
          {band.foundingDate}
        </p>
        <p className="text-black/80 text-[12px] font-medium pops">
          {band.bandCaptain?.firstName} {band.bandCaptain?.lastName}
        </p>
        <p className="text-black/80 text-[12px] font-medium pops">
          {band.members ? band.members.length : 0}
        </p>
        <Action
          onEdit={() => {
            setSelectBand(band);
            setUpdateBandIsOpen(true);
          }}
          onView={() => {
            setSelectBand(band);
            setViewBandIsOpen(true);
          }}
        />
      </div>
    ))
  ) : (
    <div className="h-[480px] flex items-center justify-center">
      <p className="pops font-bold text-3xl">Add Bands to view</p>
    </div>
  );

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-7 px-2 py-4 items-center rounded-t-lg border-b-[1.5px] border-black/20 bg-black/5">
          <p className="text-black/90 text-[12px] font-bold pops">Band ID</p>
          <p className="text-black/90 text-[12px] font-bold pops">Band Name</p>
          <p className="text-black/90 text-[12px] font-bold pops">Gender</p>
          <p className="text-black/90 text-[12px] font-bold pops">
            Founding Date
          </p>
          <p className="text-black/90 text-[12px] font-bold pops">
            Band Captain
          </p>
          <p className="text-black/90 text-[12px] font-bold pops">Total</p>
          <p className="text-black/90 text-[12px] font-bold pops">Action</p>
        </div>
        <div className="relative min-h-[480px]">
          {bandsElements}
          {isLoading && <Loading />}
        </div>
        <div>
          <Pagination
            currentPage={bandMetadata?.currentPage!}
            totalPages={bandMetadata?.totalPages!}
            onPageChange={(page: number = bandMetadata?.currentPage!) =>
              getAllBands(page)
            }
            hasNext={bandMetadata?.hasNext!}
            hasPrev={bandMetadata?.hasPrev!}
          />
        </div>
      </div>
      {updateBandIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setUpdateBandIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <UpdateBand
            band={selectBand!}
            setUpdateBandIsOpen={setUpdateBandIsOpen}
          />
        </div>
      )}
      {viewBandIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            onClick={() => setViewBandIsOpen(false)}
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
          />
          <ViewBand band={selectBand!} setViewBandIsOpen={setViewBandIsOpen} />
        </div>
      )}
    </>
  );
};

export default AllBandMembers;
