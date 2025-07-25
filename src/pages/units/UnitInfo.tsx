import React, { useEffect } from 'react';
import { TbPencil } from 'react-icons/tb';
import Button from '../../components/button';
import { useUnit } from '../../hooks/useUnit';
import { useUnitStore } from '../../stores/unitStore';
import Loading from '../../components/loading';
import { useLoadingStore } from '../../stores/loadingStore';

type BandProps = {
  unitId?: number | null;
};

const UnitInfo: React.FC<BandProps> = ({ unitId }) => {
  const { getUnit } = useUnit();
  const { selectedUnit } = useUnitStore();
  const { isLoading } = useLoadingStore();

  useEffect(() => {
    getUnit(unitId!);
  }, [unitId]);

  // const foundingYear = new Date(selectedUnit?.foundingDate!).getFullYear();
  // const currentYear = new Date(Date.now()).getFullYear();
  // const upcomingYear = new Date(Date.now()).getFullYear() + 1;
  // const numberofYears = selectedUnit?.foundingDate
  //   ? currentYear - foundingYear
  //   : 0;
  // let nextAnniversaryArr =
  //   selectedUnit && selectedUnit?.foundingDate.split('-');
  // nextAnniversaryArr !== null
  //   ? (nextAnniversaryArr[0] = upcomingYear.toString())
  //   : 'YYYY-MM-DD';

  const unitsLeadershipElements =
    selectedUnit && selectedUnit.unitHead ? (
      [selectedUnit.unitHead].map((member) => (
        <div className="grid grid-cols-6 p-4 py-4 gap-5 text-[11px] items-center text-sm font-medium text-black/75">
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.id}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.lastName} {member.firstName}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.phoneNumber}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.maritalStatus}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.dateOfBirth}
          </p>
          <p className="text-black/80 text-[12px] font-medium pops">
            {member.country}
          </p>
        </div>
      ))
    ) : (
      <div className="h-[210px] flex justify-center items-center text-2xl font-bold pops">
        <p>Add Unit head to view</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center p-4 px-6 border rounded-lg border-black/30 bg-[#F9FAFB]">
        <p className="text-2xl font-bold">{selectedUnit?.name}</p>
        <Button Icon={TbPencil} text="Edit Unit" />
      </div>
      <div className="border rounded-lg border-black/30 bg-[#F9FAFB]">
        <div className="flex items-center justify-between border-b border-black/30 p-4 py-6">
          <p className="text-xl font-bold flex gap-3 items-center">
            {selectedUnit?.name} Head
          </p>
          <Button Icon={TbPencil} text="Edit Leadership" />
        </div>
        <div className="">
          <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center border-b border-black/30 bg-black/5">
            <p className="text-black/90 text-[13px] font-bold pops">ID</p>
            <p className="text-black/90 text-[13px] font-bold pops">Name</p>
            <p className="text-black/90 text-[13px] font-bold pops">
              Mobile Number
            </p>
            <p className="text-black/90 text-[13px] font-bold pops">
              Marital Status
            </p>
            <p className="text-black/90 text-[13px] font-bold pops">Birthday</p>
            <p className="text-black/90 text-[13px] font-bold pops">Location</p>
          </div>
          {selectedUnit !== null && (
            <div className="relative">
              {unitsLeadershipElements}
              {isLoading && <Loading />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitInfo;
