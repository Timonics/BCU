import React, { useEffect } from "react";
import { useBandStore } from "../../stores/bandStore";
import Loading from "../../components/loading";
import { useLoadingStore } from "../../stores/loadingStore";
import { useBand } from "../../hooks/useBand";

const AllBandMembers: React.FC = () => {
  const { bands } = useBandStore();
  const { getAllBands } = useBand();
  const { isLoading } = useLoadingStore();

  useEffect(() => {
    getAllBands();
  }, []);

  const bandsElements =
    bands.length !== 0 ? (
      bands.map((band) => (
        <div className="grid grid-cols-7 p-4 py-4 gap-5 items-center text-[11px] font-bold text-black/70">
          <p>{band.id}</p>
          <p>{band.name}</p>
          <p>{band.gender}</p>
          <p>{band.date.slice(0, 10)}</p>
          <p>{band.captain}</p>
          <p>{band.members ? band.members.length : 0}</p>
          <p></p>
        </div>
      ))
    ) : (
      <div className="h-[480px] flex items-center justify-center">
        <p className="pops font-bold text-3xl">Add Bands to view</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="grid grid-cols-7 p-4 py-4 gap-5 items-center">
        <p className="text-black/90 text-[11px] font-bold pops">Band ID</p>
        <p className="text-black/90 text-[11px] font-bold pops">Band Name</p>
        <p className="text-black/90 text-[11px] font-bold pops">Gender</p>
        <p className="text-black/90 text-[11px] font-bold pops">
          Founding Date
        </p>
        <p className="text-black/90 text-[11px] font-bold pops">Band Captain</p>
        <p className="text-black/90 text-[11px] font-bold pops">Total</p>
        <p className="text-black/90 text-[11px] font-bold pops">Action</p>
      </div>
      <div className="relative min-h-[480px]">
        {bandsElements}
        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export default AllBandMembers;
