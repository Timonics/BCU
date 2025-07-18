import React, { useEffect } from "react";
import { useUnitStore } from "../../stores/unitStore";
import Loading from "../../components/loading";
import { useLoadingStore } from "../../stores/loadingStore";
import { useUnit } from "../../hooks/useUnit";
import { TbEdit, TbEye, TbTrash } from "react-icons/tb";

const AllUnitMembers: React.FC = () => {
  const { units } = useUnitStore();
  const { isLoading } = useLoadingStore();
  const { getAllUnits } = useUnit();

  useEffect(() => {
    getAllUnits();
  }, []);

  const unitsElements =
    units.length !== 0 ? (
      units.map((unit) => (
        <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center text-[11px] font-bold text-black/70">
          <p>{unit.id}</p>
          <p>{unit.name}</p>
          <p>{unit.foundingDate}</p>
          <p>{unit.unitHead.firstName}</p>
          <p>{unit.members ? unit.members.length : 0}</p>
          <p className="p-1 bg-gray-100 w-fit rounded-full items-center justify-center flex">
            <button className="hover:bg-gray-200 p-1.5 rounded-full cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 text-gray-600">
              <TbEdit size={20} />
            </button>
            <hr />
            <div className="hover:bg-gray-200 p-1.5 rounded-full  cursor-pointer transition ease-in-out duration-300 hover:text-purple-800 text-gray-600">
              <TbEye size={20} />
            </div>
            <button className="hover:bg-gray-200 p-1.5 rounded-full  cursor-pointer transition ease-in-out duration-300 hover:text-red-500 text-gray-600">
              <TbTrash size={20} />
            </button>
          </p>
        </div>
      ))
    ) : (
      <div className="h-[480px] flex items-center justify-center">
        <p className="pops font-bold text-3xl">Add Units to view</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center">
        <p className="text-black/90 text-[12px] font-bold pops">Unit ID</p>
        <p className="text-black/90 text-[12px] font-bold pops">Unit Name</p>
        <p className="text-black/90 text-[12px] font-bold pops">
          Founding Date
        </p>
        <p className="text-black/90 text-[12px] font-bold pops">Unit Head</p>
        <p className="text-black/90 text-[12px] font-bold pops">Total</p>
        <p className="text-black/90 text-[12px] font-bold pops">Action</p>
      </div>
      <div className="relative min-h-[480px]">
        {unitsElements}
        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export default AllUnitMembers;
