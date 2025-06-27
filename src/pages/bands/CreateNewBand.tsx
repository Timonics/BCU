import React, { ChangeEvent, useState } from "react";
import useStates from "../../hooks/useStates";
import { AddBandDetails } from "../../interfaces/bands";
import { useBand } from "../../hooks/useBand";

const CreateNewBand: React.FC = () => {
  const { setIsCreateNewBandOpen } = useStates();
  const { addBand } = useBand();

  const [newBandData, setNewBandData] = useState<AddBandDetails>({
    name: "",
    gender: "",
    foundingDate: "",
    captain: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewBandData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="fixed w-[40%] 2xl:h-[%] overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl bg-white shadow-xl flex flex-col items-center gap-4">
      <button
        onClick={() => setIsCreateNewBandOpen(false)}
        className="px-3 cursor-pointer py-1.5 pops text-sm rounded-lg bg-[#009AF4] text-white font-semibold ml-auto"
      >
        Back
      </button>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold pops">Create Band</h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Band Name<span className="text-red-600">*</span>
          </p>
          <input
            className="member-input outline-none"
            name="name"
            value={newBandData.name}
            onChange={handleChange}
          />
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
          <input
            className="member-input outline-none"
            name="captain"
            value={newBandData.captain}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => addBand(newBandData)}
          className="flex justify-center ml-auto w-fit items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
        >
          <p className="text-sm font-semibold pops">Create</p>
        </button>
      </div>
    </div>
  );
};

export default CreateNewBand;
