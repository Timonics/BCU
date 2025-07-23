import React, { ChangeEvent, useState } from 'react';
import useStates from '../../hooks/useStates';
import { AddBandDetails } from '../../interfaces/bands';
import { useBand } from '../../hooks/useBand';
import { genders } from '../../constants/listings';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLoadingStore } from '../../stores/loadingStore';
import Loading from '../../components/loading';

const CreateNewBand: React.FC = () => {
  const { setIsCreateNewBandOpen } = useStates();
  const [genderIsOpen, setGenderIsOpen] = useState(false);
  const { addBand } = useBand();
  const { isLoading } = useLoadingStore();

  const [newBandData, setNewBandData] = useState<AddBandDetails>({
    name: '',
    gender: '',
    foundingDate: '',
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
            className="member-input outline-none pl-2"
            name="name"
            value={newBandData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Gender<span className="text-red-600">*</span>
          </p>
          <div
            className="member-input pl-2 font-medium text-[#101828]/65 focus:outline-1 focus:outline-[#009bf4b6] rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
            onClick={() => setGenderIsOpen(!genderIsOpen)}
          >
            <p className="tfont-medium text-[#101828]/65">
              {newBandData.gender
                ? newBandData.gender.charAt(0).toUpperCase() +
                  newBandData.gender.slice(1)
                : '--select gender--'}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {genderIsOpen && (
              <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
                {genders.map((gender, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                      index !== 1 && 'border-b border-[#97979786]'
                    }`}
                    onClick={() => {
                      setNewBandData((prevState) => ({
                        ...prevState,
                        gender: gender.name.toLowerCase(),
                      }));
                    }}
                  >
                    {gender.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Founding Date <span className="text-red-600">*</span>
          </p>
          <input
            className="member-input outline-none pl-2"
            name="foundingDate"
            value={newBandData.foundingDate}
            onChange={handleChange}
          />
        </div>
        <button
          disabled={
            !newBandData.name ||
            !newBandData.gender ||
            !newBandData.foundingDate
          }
          onClick={() => addBand(newBandData)}
          className="flex disabled:opacity-50 disabled:cursor-not-allowed justify-center ml-auto w-fit items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
        >
          <p className="text-sm font-semibold pops">Create</p>
        </button>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default CreateNewBand;
