import React from "react";

const AllBandMembers: React.FC = () => {
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
      <div></div>
    </div>
  );
};

export default AllBandMembers;
