import React from "react";

const AllUnitMembers: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center">
        <p className="text-black/90 text-[12px] font-bold pops">Unit ID</p>
        <p className="text-black/90 text-[12px] font-bold pops">Unit Name</p>
        <p className="text-black/90 text-[12px] font-bold pops">
          Founding Date
        </p>
        <p className="text-black/90 text-[12px] font-bold pops">Unit Head</p>
        <p className="text-black/90 text-[12px] font-bold pops">Total</p>
        <p className="text-black/90 text-[12px] font-bold pops">Action</p>
      </div>
      <div></div>
    </div>
  );
};

export default AllUnitMembers;
