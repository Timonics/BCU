import React, { useEffect, useState } from 'react';
import { useUnitStore } from '../../stores/unitStore';
import Loading from '../../components/loader';
import { useLoadingStore } from '../../stores/loadingStore';
import { useUnit } from '../../hooks/useUnit';
import Pagination from '../../components/pagination';
import { useLocation, useNavigate } from 'react-router';
import { UnitDetails } from '../../interfaces/unit';
import UpdateUnit from './update-unit';
import Action from '../../components/action';
import ViewUnit from './view-unit';

const AllUnitMembers: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { units, unitMetadata } = useUnitStore();
  const { isLoading, setIsLoading } = useLoadingStore();
  const { getAllUnits } = useUnit();

  const [updateUnitIsOpen, setUpdateUnitIsOpen] = useState<boolean>(false);
  const [viewUnitIsOpen, setViewUnitIsOpen] = useState<boolean>(false);

  const [selectUnit, setSelectUnit] = useState<UnitDetails | null>(null);

  useEffect(() => {
    if (location.state?.shouldRefresh) setIsLoading(true);
    getAllUnits();

    navigate(location.pathname, { state: { shouldRefresh: false } });
  }, [location.state?.shouldRefresh]);

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
        <Action
          onEdit={() => {
            setSelectUnit(unit);
            setUpdateUnitIsOpen(true);
          }}
          onView={() => {
            setSelectUnit(unit);
            setViewUnitIsOpen(true);
          }}
        />
      </div>
    ))
  ) : (
    <div className="h-[480px] flex items-center justify-center">
      <p className="pops font-bold text-3xl">Add Units to view</p>
    </div>
  );

  return (
    <>
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
      {updateUnitIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
            onClick={() => setUpdateUnitIsOpen(false)}
          />
          <UpdateUnit
            unit={selectUnit!}
            setUpdateUnitIsOpen={setUpdateUnitIsOpen}
          />
        </div>
      )}
      {viewUnitIsOpen && (
        <div className="fixed top-[64px] right-0 w-[80%] h-[calc(100vh-64px)]">
          <div
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm"
            onClick={() => setViewUnitIsOpen(false)}
          />
          <ViewUnit unit={selectUnit!} setViewUnitIsOpen={setViewUnitIsOpen} />
        </div>
      )}
    </>
  );
};

export default AllUnitMembers;
