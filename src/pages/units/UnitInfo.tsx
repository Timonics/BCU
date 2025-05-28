import React, { useEffect } from "react";
import { TbPencil } from "react-icons/tb";
import Button from "../../components/button";
import { useUnit } from "../../hooks/useUnit";
import { useUnitStore } from "../../stores/unitStore";

type BandProps = {
  unitId?: string | null;
  unitName: string;
  unitYears: number;
  nextAnniversary: string;
};

const UnitInfo: React.FC<BandProps> = ({
  unitId,
  unitName,
  unitYears,
  nextAnniversary,
}) => {
  const { getUnit } = useUnit();
  const { selectedUnit } = useUnitStore();

  useEffect(() => {
    if (!unitId) return;
    getUnit(unitId);
  }, [unitId]);

  const unitsLeadershipElements =
    selectedUnit !== null && selectedUnit.leadership.length ? (
      selectedUnit?.leadership?.map((member) => (
        <div className="grid grid-cols-6 p-4 py-4 gap-5 text-[11px] items-center text-sm font-medium text-black/75">
          <p>{member.title}</p>
          <p>--</p>
          <p>--</p>
          <p>--</p>
          <p>--</p>
          <p>--</p>
        </div>
      ))
    ) : (
      <div className="h-[210px] flex justify-center items-center text-2xl font-bold pops">
        <p>Add Unit Leadership to view</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center p-4 px-6 border rounded-lg border-black/30 bg-[#F9FAFB]">
        <div className="flex flex-col gap-6 items-start">
          <p className="text-2xl font-bold">{unitName}</p>
          <Button Icon={TbPencil} text="Edit Unit" />
        </div>
        <div className="flex flex-col gap-6 items-start">
          <p className="text-[13px] text-[#344054] font-semibold">
            Years: {unitYears} Years
          </p>
          <p className="text-[13px] text-[#344054] font-semibold">
            Next Anniversary: {nextAnniversary}
          </p>
        </div>
      </div>
      <div className="border rounded-lg border-black/30 bg-[#F9FAFB]">
        <div className="flex items-center justify-between border-b border-black/30 p-4 py-6">
          <p className="text-xl font-bold flex gap-3 items-center">
            {unitName} Leadership
          </p>
          <Button Icon={TbPencil} text="Edit Leadership" />
        </div>
        <div className="p-4">
          <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center">
            <p className="text-black/90 text-[11px] font-bold pops">Title</p>
            <p className="text-black/90 text-[11px] font-bold pops">Name</p>
            <p className="text-black/90 text-[11px] font-bold pops">
              Mobile Number
            </p>
            <p className="text-black/90 text-[11px] font-bold pops">
              Marital Status
            </p>
            <p className="text-black/90 text-[11px] font-bold pops">Birthday</p>
            <p className="text-black/90 text-[11px] font-bold pops">Location</p>
          </div>
          <div>{unitsLeadershipElements}</div>
        </div>
      </div>
    </div>
  );
};

export default UnitInfo;
