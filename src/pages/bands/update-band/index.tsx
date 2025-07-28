import logo from '../../../assets/dashLogo.png';
import { NavLink, useNavigate } from 'react-router';

import { updateBandSteps } from '../../../constants/member_management_steps';

import { TbUser } from 'react-icons/tb';
import useStates from '../../../hooks/useStates';
import { useState } from 'react';
import UpdateLoader from '../../../components/loader/updateLoader';
import { BandDetails } from '../../../interfaces/bands';
import UpdateSelectedBand from './UpdateBand';
import { useBand } from '../../../hooks/useBand';

const UpdateBand = ({
  band,
  setUpdateBandIsOpen,
}: {
  band: BandDetails | null;
  setUpdateBandIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const { updateBand } = useBand();
  const [isLoading, setIsLoading] = useState(false);
  const { updateBandDetails, setUpdateBandsDetails } = useStates();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await updateBand(band!.id, updateBandDetails);
      navigate(`/bands?${band!.id}`, { state: { shouldRefresh: true } });
    } finally {
      setUpdateBandsDetails({});
      setUpdateBandIsOpen(false);
      setIsLoading(false);
    }
  };

  const updateBandStepsElements = updateBandSteps.map((step) => {
    const Icon = step.icon;
    return (
      <NavLink
        end
        to={''}
        className={({ isActive }) =>
          `py-2 px-4 text-sm text-[#1E1E1E] flex items-center gap-2 ${
            isActive && 'bg-[#009AF4]/20 font-bold text-[#009AF4]'
          }`
        }
      >
        <div className="p-1.5 rounded-md shadow-md bg-[#fafdff]">
          <Icon size={17} />
        </div>
        {step.step}
      </NavLink>
    );
  });
  return (
    <div className="absolute rounded-lg top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex w-[70%] h-[85%] shadow-xl shadow-blue-200">
      <div className="w-2/6 bg-[#d8e9f5] rounded-l-lg flex flex-col items-center gap-5 pt-4">
        <img src={logo} alt="yfg-logo" className="w-[100px] h-[100px]" />
        <p className="text-xs text-center font-bold pops">
          Youth Fellowship Band Update Data Form
        </p>
        <div className="flex flex-col gap-2 items-center mt-5">
          <div className="size-[80px] shadow-2xl rounded-full bg-black/10 flex items-center justify-center">
            <TbUser size={40} />
          </div>
          <p className="text-xl font-bold pops">
            {band ? `${band.name} ` : 'Band'}
          </p>
        </div>
        <div className="w-full flex flex-col py-4 gap-4">
          {updateBandStepsElements}
        </div>
      </div>
      <div className="w-4/6 rounded-r-lg bg-white flex flex-col overflow-y-auto p-4 gap-4">
        <button
          onClick={() => setUpdateBandIsOpen(false)}
          className="px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] cursor-pointer text-white font-semibold ml-auto"
        >
          Back
        </button>
        <div className="flex flex-col gap-5">
          <p className={`text-2xl pops font-bold`}>
            Update band information correctly
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <UpdateSelectedBand band={band!} />
        </div>
        <button
          className="px-4 py-2 pops text-xl rounded-lg cursor-pointer bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold mx-auto my-4"
          onClick={handleSubmit}
        >
          Update Band
        </button>
      </div>
      {isLoading && <UpdateLoader />}
    </div>
  );
};

export default UpdateBand;
