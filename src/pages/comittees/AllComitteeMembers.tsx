import React from "react";

const AllComitteeMembers: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center">
        <p className="text-black/90 text-[13px] font-bold pops">Class ID</p>
        <p className="text-black/90 text-[13px] font-bold pops">Class Name</p>
        <p className="text-black/90 text-[13px] font-bold pops">Total Male</p>
        <p className="text-black/90 text-[13px] font-bold pops">Total Female</p>
        <p className="text-black/90 text-[13px] font-bold pops">Total Members</p>
        <p className="text-black/90 text-[13px] font-bold pops">Action</p>
      </div>
      <div></div>
    </div>
  );
};

export default AllComitteeMembers;
