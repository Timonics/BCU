import React, { ChangeEvent, useState } from 'react';
import useStates from '../../hooks/useStates';
import Loading from '../../components/loader';
import { useLoadingStore } from '../../stores/loadingStore';
import { useUnit } from '../../hooks/useUnit';

const CreateNewUnit: React.FC = () => {
  const { setIsCreateNewUnitOpen } = useStates();
  const { isLoading } = useLoadingStore();
  const { addUnit } = useUnit();

  const [createUnitData, setCreateUnitData] = useState({
    name: '',
    foundingDate: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCreateUnitData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="fixed w-[40%] overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl bg-white shadow-xl flex flex-col items-center gap-4">
      <button
        onClick={() => setIsCreateNewUnitOpen(false)}
        className="px-3 cursor-pointer py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold ml-auto"
      >
        Back
      </button>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold pops">Create Unit</h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Unit Name<span className="text-red-600">*</span>
          </p>
          <input
            className="member-input outline-none pl-2"
            name="name"
            value={createUnitData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Founding Date (YYYY-MM-DD)<span className="text-red-600">*</span>
          </p>
          <input
            className="member-input outline-none pl-2"
            name="foundingDate"
            value={createUnitData.foundingDate}
            onChange={handleChange}
          />
        </div>
        <button
          disabled={!createUnitData.name || !createUnitData.foundingDate}
          className="flex disabled:opacity-50 disabled:cursor-not-allowed justify-center ml-auto w-fit items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
          onClick={() => addUnit(createUnitData)}
        >
          <h3 className="text-sm font-semibold pops">Create</h3>
        </button>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default CreateNewUnit;
