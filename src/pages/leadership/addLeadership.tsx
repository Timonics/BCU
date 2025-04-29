import React from "react";

type LProps = {
  setShowCreateLeadership: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLeadership: React.FC<LProps> = ({ setShowCreateLeadership }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-2/5 p-4 rounded-xl bg-white shadow-xl">
      <button
        onClick={() => setShowCreateLeadership(false)}
        className="px-3 cursor-pointer py-1.5 pops text-sm rounded-lg bg-[#009AF4] text-white font-semibold ml-auto"
      >
        Back
      </button>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold pops">Create Leadership Title</h2>
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-sm">
            Leadership ID <span className="text-red-600">*</span>
          </p>
          <input className="member-input outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Leadership Title <span className="text-red-600">*</span>
          </p>
          <input className="member-input outline-none" />
        </div>
      </div>
      <button
        className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
        //onClick={() => setAddMemberOpen(true)}
      >
        <h3 className="text-sm font-semibold pops">Create</h3>
      </button>
    </div>
  );
};

export default AddLeadership;
