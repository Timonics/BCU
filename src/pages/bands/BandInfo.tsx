import React, { useEffect } from "react";
import { TbPencil } from "react-icons/tb";
import Button from "../../components/button";
import { useBand } from "../../hooks/useBand";
import { useBandStore } from "../../stores/bandStore";
import Loading from "../../components/loading";
import { useLoadingStore } from "../../stores/loadingStore";

type BandProps = {
  bandId: string | null;
  bandName: string;
  bandYears: number;
  nextAnniversary: string;
};

const BandInfo: React.FC<BandProps> = ({
  bandId,
  bandName,
  bandYears,
  nextAnniversary,
}) => {
  const { getBand } = useBand();
  const { selectedBand } = useBandStore();
  const { isLoading } = useLoadingStore();

  useEffect(() => {
    if (!bandId) return;
    getBand(bandId);
  }, [bandId]);

  // const BandLeadershipElements =
  //   selectedBand !== null && selectedBand.leadership.length ? (
  //     selectedBand?.leadership?.map((member) => (
  //       <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center text-sm font-medium text-black/75">
  //         <p>{member.title}</p>
  //         <p>--</p>
  //         <p>--</p>
  //         <p>--</p>
  //         <p>--</p>
  //         <p>--</p>
  //       </div>
  //     ))
  //   ) : (
  //     <div className="h-[210px] flex justify-center items-center text-2xl font-bold pops">
  //       <p>Add Band Leadership to view</p>
  //     </div>
  //   );

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center p-4 px-6 border rounded-lg border-black/30 bg-[#F9FAFB]">
        <div className="flex flex-col gap-6 items-start">
          <p className="text-2xl font-bold">{bandName}</p>
          <Button Icon={TbPencil} text="Edit Band" />
        </div>
        <div className="flex flex-col gap-6 items-start">
          <p className="text-[13px] text-[#344054] font-semibold">
            Years: {bandYears} Years
          </p>
          <p className="text-[13px] text-[#344054] font-semibold">
            Next Anniversary: {nextAnniversary}
          </p>
        </div>
      </div>
      <div className="border rounded-lg border-black/30 bg-[#F9FAFB]">
        <div className="flex items-center justify-between border-b border-black/30 p-4 py-6">
          <p className="text-xl font-bold flex gap-3 items-center">
            {bandName} Leadership
          </p>
          <Button Icon={TbPencil} text="Edit Leadership" />
        </div>
        <div className="p-4">
          <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center">
            <p className="text-black/90 text-[11px] font-bold pops">Title</p>
            <p className="text-black/90 text-[11px] font-bold pops">Name</p>
            <p className="text-black/90 text-[11px] font-bold pops">
              Mobile Number
            </p>
            <p className="text-black/90 text-[11px] font-bold pops">
              Marital Status
            </p>
            <p className="text-black/90 text-[11px] font-bold pops">Birthday</p>
            <p className="text-black/90 text-[11px] font-bold pops">Location</p>
          </div>
          {selectedBand !== null && (
            <div className="relative">
              {/* {BandLeadershipElements} */}
              {/* {isLoading && <Loading />} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BandInfo;
