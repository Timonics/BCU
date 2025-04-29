import React from "react";
import useStates from "../../hooks/useStates";

const CreateNewBand: React.FC = () => {
  const { setIsCreateNewBandOpen } = useStates();
  return (
    <div className="fixed w-[40%] h-[80%] overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl bg-white shadow-xl flex flex-col items-center gap-4">
      <button
        onClick={() => setIsCreateNewBandOpen(false)}
        className="px-3 cursor-pointer py-1.5 pops text-sm rounded-lg bg-[#009AF4] text-white font-semibold ml-auto"
      >
        Back
      </button>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold pops">Create Band</h2>
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-sm">
            Band ID <span className="text-red-600">*</span>
          </p>
          <input className="member-input outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Band Name<span className="text-red-600">*</span>
          </p>
          <input className="member-input outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Gender</p>
          <input className="member-input outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Founding Date <span className="text-red-600">*</span>
          </p>
          <input className="member-input outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Band Captain</p>
          <input className="member-input outline-none" />
        </div>
        <button
          className="flex justify-center ml-auto w-fit items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
          //onClick={() => setAddMemberOpen(true)}
        >
          <h3 className="text-sm font-semibold pops">Create</h3>
        </button>
      </div>
    </div>
  );
};

export default CreateNewBand;
