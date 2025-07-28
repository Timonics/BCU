import Logo from '../../../components/logo';
import { UnitDetails } from '../../../interfaces/unit';

const ViewUnit = ({
  unit,
  setViewUnitIsOpen,
}: {
  unit: UnitDetails;
  setViewUnitIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute overflow-hidden rounded-lg top-1/2 bg-white -translate-y-1/2 right-1/2 translate-x-1/2 flex flex-col w-[60%] h-fit shadow-xl shadow-blue-200">
      <div className="absolute top-2 -right-50 opacity-5">
        <Logo size={700} width={800} />
      </div>
      <button
        onClick={() => setViewUnitIsOpen(false)}
        className="z-20 cursor-pointer w-fit ml-auto mt-4 mr-4 h-fit px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold"
      >
        Back
      </button>
      <div className="absolute top-2 left-2">
        <Logo size={50} />
      </div>
      <div className="w-full overflow-auto flex flex-col p-4 z-20">
        <div className="mt-4 overflow-auto flex flex-col p-4 gap-2">
          <p className="text-5xl font-bold">{unit.name}</p>
          <div className="p-2 space-y-6 overflow-auto scroll">
            <div className="flex flex-col gap-2 p-2 rounded-lg bg-blue-50/50">
              <h2 className="text-3xl font-semibold underline underline-offset-3">
                Unit Information
              </h2>
              <div className="flex flex-col gap-1 overflow-auto">
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Unit Name(s): </p>
                  <p className="text-xl pops">{unit.name}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Unit Founding Date: </p>
                  <p className="text-xl pops">{unit.foundingDate}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Unit Head: </p>
                  <p className="text-xl pops">
                    {unit.unitHead
                      ? `${unit.unitHead?.firstName} ${unit.unitHead?.otherNames ?? ''} ${unit.unitHead?.lastName}`
                      : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Total Members Count: </p>
                  <p className="text-xl pops">{unit.members?.length ?? '----'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUnit;
