import React, { useEffect } from 'react';
import { useUnitStore } from '../../stores/unitStore';
import Loading from '../../components/loading';
import { useLoadingStore } from '../../stores/loadingStore';
import { useUnit } from '../../hooks/useUnit';
import { TbEdit, TbEye, TbTrash } from 'react-icons/tb';
import Pagination from '../../components/pagination';

const AllUnitMembers: React.FC = () => {
  const { units, unitMetadata } = useUnitStore();
  const { isLoading } = useLoadingStore();
  const { getAllUnits } = useUnit();

  useEffect(() => {
    getAllUnits();
  }, []);

  const unitsElements = units.length ? (
    units.map((unit) => (
      <div
        key={unit.id}
        className="grid grid-cols-6 p-4 py-4 gap-5 items-center text-[11px] font-bold text-black/70"
      >
        <p>{unit.id}</p>
        <p>{unit.name}</p>
        <p>{unit.foundingDate}</p>
        <p>{unit.unitHead ? unit.unitHead.firstName : '--'}</p>
        <p>{unit.members ? unit.members.length : 0}</p>
        <div className="p-1 bg-gray-100 w-fit rounded-full items-center justify-center flex">
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
        </div>
      </div>
    ))
  ) : (
    <div className="h-[480px] flex items-center justify-center">
      <p className="pops font-bold text-3xl">Add Units to view</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-6 px-2 py-4 gap-5 items-center rounded-t-lg border-b-[1.5px] border-black/20 bg-black/5">
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
      <div>
        <Pagination
          currentPage={unitMetadata?.currentPage!}
          totalPages={unitMetadata?.totalPages!}
          onPageChange={(page: number = unitMetadata?.currentPage!) =>
            getAllUnits(page)
          }
          hasNext={unitMetadata?.hasNext!}
          hasPrev={unitMetadata?.hasPrev!}
        />
      </div>
    </div>
  );
};

export default AllUnitMembers;
