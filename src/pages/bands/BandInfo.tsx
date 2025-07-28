import React, { useEffect } from 'react';
import { TbPencil } from 'react-icons/tb';
import Button from '../../components/button';
import { useBand } from '../../hooks/useBand';
import { useBandStore } from '../../stores/bandStore';
import Loading from '../../components/loader';
import { useLoadingStore } from '../../stores/loadingStore';
import useStates from '../../hooks/useStates';
import { useLocation, useNavigate } from 'react-router';

type BandProps = {
  bandId: number | null;
};

const BandInfo: React.FC<BandProps> = ({ bandId }) => {
  const navigate = useNavigate();
  const { getBand } = useBand();
  const location = useLocation();
  const { selectedBand } = useBandStore();
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    if (location.state?.shouldRefresh) setIsLoading(true);
    getBand(bandId!);

    navigate(`${location.pathname}?${bandId}`, {
      state: { shouldRefresh: false },
    });
  }, [bandId, location.state?.shouldRefresh]);

  const { setUpdateBandIsOpen, setUpdateBandLeadershipIsOpen } = useStates();

  const foundingYear = new Date(selectedBand?.foundingDate!).getFullYear();
  const currentYear = new Date(Date.now()).getFullYear();
  const upcomingYear = new Date(Date.now()).getFullYear() + 1;
  const numberofYears = selectedBand?.foundingDate
    ? currentYear - foundingYear
    : 0;
  let nextAnniversaryArr =
    selectedBand && selectedBand?.foundingDate.split('-');
  nextAnniversaryArr !== null
    ? (nextAnniversaryArr[0] = upcomingYear.toString())
    : 'YYYY-MM-DD';

  const filteredBandLeaders = selectedBand?.members?.filter(
    (member) => member.leadershipPosition !== null,
  );

  const BandLeadershipElements =
    selectedBand && filteredBandLeaders?.length ? (
      filteredBandLeaders?.map((member) => (
        <div className="grid grid-cols-6 p-4 py-5 gap-5 items-center text-sm font-medium text-black/75">
          <p className='className="text-black/80 text-[12px] font-medium pops"'>
            {member.leadershipPosition?.type.charAt(0).toUpperCase() +
              member.leadershipPosition?.type.slice(1)!}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.firstName} {member.lastName}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.phoneNumber}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.maritalStatus}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.dateOfBirth}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.residentialState}
          </p>
        </div>
      ))
    ) : (
      <div className="h-[210px] flex justify-center items-center text-2xl font-bold pops">
        <p>Add Band Leadership to view</p>
      </div>
    );

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center p-4 px-6 border rounded-lg border-black/30 bg-[#F9FAFB]">
          <div className="flex flex-col gap-6 items-start">
            <p className="text-2xl font-bold">{selectedBand?.name}</p>
            <Button
              Icon={TbPencil}
              text="Edit Band"
              onClick={() => setUpdateBandIsOpen(true)}
            />
          </div>
          <div className="flex flex-col gap-6 items-start">
            <p className="text-[13px] text-[#344054] font-semibold">
              Years: {numberofYears} Years
            </p>
            <p className="text-[13px] text-[#344054] font-semibold">
              Next Anniversary: {nextAnniversaryArr?.join('-')}
            </p>
          </div>
        </div>
        <div className="border rounded-lg border-black/30 bg-[#F9FAFB]">
          <div className="flex items-center justify-between border-b border-black/30 p-4 py-6">
            <p className="text-xl font-bold flex gap-3 items-center">
              {selectedBand?.name} Leadership
            </p>
            <Button
              Icon={TbPencil}
              text="Edit Leadership"
              onClick={() => setUpdateBandLeadershipIsOpen(true)}
            />
          </div>
          <div className="">
            <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center border-b border-black/30 bg-black/5">
              <p className="text-black/90 text-[13px] font-bold pops">Title</p>
              <p className="text-black/90 text-[13px] font-bold pops">Name</p>
              <p className="text-black/90 text-[13px] font-bold pops">
                Mobile Number
              </p>
              <p className="text-black/90 text-[13px] font-bold pops">
                Marital Status
              </p>
              <p className="text-black/90 text-[13px] font-bold pops">
                Birthday
              </p>
              <p className="text-black/90 text-[13px] font-bold pops">
                Location
              </p>
            </div>
            {selectedBand !== null && (
              <div className="relative">
                {BandLeadershipElements}
                {isLoading && <Loading />}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BandInfo;
