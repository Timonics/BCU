import React, { ChangeEvent, useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation } from 'react-router';
import useStates from '../../../hooks/useStates';
import { useBand } from '../../../hooks/useBand';
import { useUnit } from '../../../hooks/useUnit';
import { useBandStore } from '../../../stores/bandStore';
import { useUnitStore } from '../../../stores/unitStore';
import { useLoadingStore } from '../../../stores/loadingStore';
import Loading from '../../../components/loading';
import { baptismalStatus } from '../../../utils/listings';
import { useMembershipStore } from '../../../stores/membershipStore';

const ChurchInfo: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);

  const { isLoading } = useLoadingStore();
  const {
    selectedBand,
    setSelectedBand,
    selectedUnit,
    setSelectedUnit,
    selectedBaptismalStatus,
    setSelectedBaptismalStatus,
  } = useMembershipStore();

  const { addMemberDetails, setAddMembersDetails } = useStates();
  const { getAllBands } = useBand();
  const { getAllUnits } = useUnit();
  const { bands } = useBandStore();
  const { units } = useUnitStore();

  const [bandIsOpen, setBandIsOpen] = useState<boolean>(false);
  const [unitIsOpen, setUnitIsOpen] = useState<boolean>(false);
  const [baptismalStatusIsOpen, setBaptismalStatusIsOpen] =
    useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddMembersDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    getAllBands();
    getAllUnits();
  }, []);

  return (
    <div
      className={`grid ${pathName === 'summary' ? 'grid-cols-3' : 'grid-cols-2'} gap-4 px-2`}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Present Band <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => {
            setBandIsOpen(!bandIsOpen);
            setUnitIsOpen(false);
            setBaptismalStatusIsOpen(false);
          }}
        >
          <p className="font-medium text-[#101828]/65">
            {selectedBand ? selectedBand : '--Select Band--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {bandIsOpen && (
            <ul className="absolute top-[50px] z-20 max-h-30 overflow-auto left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {bands.length ? (
                bands.map((band, index) => (
                  <li
                    className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                      index !== bands.length - 1 &&
                      'border-b border-[#97979786]'
                    }`}
                    onClick={() => {
                      setSelectedBand(band.name);
                      setAddMembersDetails((prevState) => ({
                        ...prevState,
                        bandId: band.id,
                      }));
                    }}
                  >
                    {band.name}
                  </li>
                ))
              ) : (
                <div className="h-20 flex items-center justify-center">
                  <p className="pops font-bold">No Bands Found</p>
                </div>
              )}
              {isLoading && <Loading />}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Unit(s) <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => {
            setUnitIsOpen(!unitIsOpen);
            setBandIsOpen(false);
            setBaptismalStatusIsOpen(false);
          }}
        >
          <p className="font-medium text-[#101828]/65">
            {selectedUnit ? selectedUnit : '--Select Unit(s)--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {unitIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full max-h-30 overflow-auto bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl z-20">
              {units.length ? (
                units.map((unit, index) => (
                  <li
                    className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                      index !== units.length - 1 &&
                      'border-b border-[#97979786]'
                    }`}
                    onClick={() => {
                      setSelectedUnit(unit.name);
                      setAddMembersDetails((prevState) => ({
                        ...prevState,
                        unitId: unit.id,
                      }));
                    }}
                  >
                    {unit.name}
                  </li>
                ))
              ) : (
                <div className="h-20 flex items-center justify-center">
                  <p className="pops font-bold">No Units Found</p>
                </div>
              )}
              {isLoading && <Loading />}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Baptimal Status <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => {
            setBaptismalStatusIsOpen(!baptismalStatusIsOpen);
            setBandIsOpen(false);
            setUnitIsOpen(false);
          }}
        >
          <p className="font-medium text-[#101828]/65">
            {selectedBaptismalStatus
              ? selectedBaptismalStatus
              : '--Select Baptimal Status--'}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {baptismalStatusIsOpen && (
            <ul className="absolute top-[50px] z-20 left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {baptismalStatus.map((status, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && 'border-b border-[#97979786]'
                  }`}
                  onClick={() => {
                    setSelectedBaptismalStatus(status);
                    setAddMembersDetails((prevState) => ({
                      ...prevState,
                      baptismalStatus:
                        status === 'Already Baptised' ? true : false,
                    }));
                  }}
                >
                  {status}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Baptimal Location/Church <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2 relative"
          name="locationOfBaptism"
          value={addMemberDetails.locationOfBaptism}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Next of Kin Full name(s) <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2 relative"
          name="nextOfKinFullName"
          value={addMemberDetails?.nextOfKinFullName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Next of Kin Relationship <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2 relative"
          name="nextOfKinRelationship"
          value={addMemberDetails?.nextOfKinRelationship}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Next of Kin Phone number <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="member-input font-medium text-[#101828]/65 rounded-lg border-[1.5px] border-[#D0D5DD] focus:outline-1 focus:outline-[#009bf4b6] flex items-center px-2 relative"
          name="nextOfKinPhoneNumber"
          value={addMemberDetails.nextOfKinPhoneNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ChurchInfo;
