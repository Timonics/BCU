import React from "react";
import { units } from "../../utils/listings";
import { Link, useLocation } from "react-router";
import { IoAddCircleOutline } from "react-icons/io5";
import Button from "../../components/button";
import useStates from "../../hooks/useStates";
import CreateNewUnit from "./CreateNewUnit";
import UnitInfo from "./UnitInfo";
import AllUnitMembers from "./AllUnitMembers";

const Units: React.FC = () => {
  const location = useLocation();
  const { isCreateNewUnitOpen, setIsCreateNewUnitOpen } = useStates();

  let unitName: string;
  const queryPathName = location.search.split("?").at(-1);
  if (queryPathName?.includes("%20"))
    unitName = queryPathName.replaceAll("%20", " ");
  else unitName = queryPathName!;

  const bandsElements = units.map((unit) => {
    return (
      <Link
        to={`?${unit.trim()}`}
        className={`text-[13px] text-[#344054] font-semibold ${
          unit === unitName &&
          "bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-300 scale-105"
        }`}
      >
        {unit}
      </Link>
    );
  });
  return (
    <section className="flex flex-col relative h-full">
      <div className="flex w-full gap-2 p-4">
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Units</p>
          <p className="text-black/85 pops font-bold">12</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Leaders</p>
          <p className="text-black/85 pops font-bold">60</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Male</p>
          <p className="text-black/85 pops font-bold">6</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Female</p>
          <p className="text-black/85 pops font-bold">6</p>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        <div className="border-[1.42px] w-[230px] h-fit bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl">
          <p className="border-b border-black/30 p-4 text-xl font-bold flex gap-3 items-center">
            Units
          </p>
          <div className="flex flex-col p-4 gap-4 pops">
            <Link
              to={""}
              className={`text-[13px] text-[#344054] font-semibold ${
                !location.search &&
                "bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-300 scale-105"
              }`}
            >
              All Units
            </Link>
            {bandsElements}
          </div>
        </div>
        {location.search ? (
          <UnitInfo
            unitName={unitName}
            unitYears={50}
            nextAnniversary="21/08/2025"
          />
        ) : (
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl w-full">
            <AllUnitMembers />
          </div>
        )}
      </div>
      {location.search && (
        <div className="px-4">
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl">
            <div className="flex items-center justify-between p-4 py-6 border-b border-black/30">
              <p className="text-lg font-bold flex gap-3 items-center">
                Members List
              </p>
              <Button Icon={IoAddCircleOutline} text="Transfer Member" />
            </div>
            <div className="p-4">
              <div className="grid grid-cols-7 p-2 py-4">
                <p className="text-black/90 text-[11px] font-bold pops">
                  Members ID
                </p>
                <p className="text-black/90 col-span-2 text-[11px] font-bold pops">
                  Member Name
                </p>
                <p className="text-black/90 text-[11px] font-bold pops">
                  Mobile Number
                </p>

                <p className="text-black/90 text-[11px] font-bold pops">
                  Marital Status
                </p>
                <p className="text-black/90 text-[11px] font-bold pops">
                  Location
                </p>
                <p className="text-black/90 text-[11px] font-bold pops">
                  Action
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCreateNewUnitOpen && (
        <>
          <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center border" onClick={() => setIsCreateNewUnitOpen(false)}/>
          <CreateNewUnit />
        </>
      )}
    </section>
  );
};

export default Units;
