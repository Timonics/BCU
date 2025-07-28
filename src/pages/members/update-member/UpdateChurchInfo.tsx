import { ChangeEvent, useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation } from 'react-router';
import useStates from '../../../hooks/useStates';
import { useBand } from '../../../hooks/useBand';
import { useUnit } from '../../../hooks/useUnit';
import { useBandStore } from '../../../stores/bandStore';
import { useUnitStore } from '../../../stores/unitStore';
import { useLoadingStore } from '../../../stores/loadingStore';
import Loading from '../../../components/loader';
import { baptismalStatus } from '../../../constants/listings';
import { useMembershipStore } from '../../../stores/membershipStore';
import { MemberDetails } from '../../../interfaces/member';

const UpdateChurchInfo = ({ member }: { member: MemberDetails }) => {
  const location = useLocation();
  const pathName = location.pathname.split('/').at(-1);
  const { updateMemberDetails, setUpdateMembersDetails } = useStates();

  const { isLoading } = useLoadingStore();
  const {
    selectedBand,
    setSelectedBand,
    selectedUnit,
    setSelectedUnit,
    selectedBaptismalStatus,
    setSelectedBaptismalStatus,
  } = useMembershipStore();

  const { getAllBands } = useBand();
  const { getAllUnits } = useUnit();
  const { bands } = useBandStore();
  const { units } = useUnitStore();

  const [bandIsOpen, setBandIsOpen] = useState<boolean>(false);
  const [unitIsOpen, setUnitIsOpen] = useState<boolean>(false);
  const [baptismalStatusIsOpen, setBaptismalStatusIsOpen] =
    useState<boolean>(false);

  const [baptismalLocationIsActive, setBaptismalLocationIsActive] =
    useState<boolean>(false);
  const [nextOfKinFullNameIsActive, setNextOfKinFullNameIsActive] =
    useState<boolean>(false);
  const [nextOfKinRelationshipIsActive, setNextOfKinRelationshipIsActive] =
    useState<boolean>(false);
  const [nextOfKinPhoneNumberIsActive, setNextOfKinPhoneNumberIsActive] =
    useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateMembersDetails((prevState) => ({
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
      <p className="mt-4 col-span-full font-semibold text-lg">
        Church Information
      </p>
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
            {selectedBand
              ? selectedBand
              : `${member.band?.name ? `${member.band.name.charAt(0).toUpperCase() + member.band.name.slice(1)} - select band to change -` : 'Select member band'}`}
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
                      setUpdateMembersDetails((prevState) => ({
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
          Unit <span className="text-red-600">*</span>
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
            {selectedUnit
              ? selectedUnit
              : `${member.unit?.name ? `${member.unit.name.charAt(0).toUpperCase() + member.unit.name.slice(1)} - select band to change -` : 'Select member unit'}`}
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
                      setUpdateMembersDetails((prevState) => ({
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
              : `${baptismalStatus ? 'Already Baptised --Select updated baptimal status--' : 'Not yet Baptised --Select updated baptimal status--'}`}
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
                    setUpdateMembersDetails((prevState) => ({
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
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setBaptismalLocationIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${baptismalLocationIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.locationOfBaptism}
          </p>
          <input
            type="text"
            placeholder={`${member.locationOfBaptism} - Enter updated baptismal location to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${baptismalLocationIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="locationOfBaptism"
            value={updateMemberDetails.locationOfBaptism}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Next of Kin Full name(s) <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setNextOfKinFullNameIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${nextOfKinFullNameIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.nextOfKinFullName}
          </p>
          <input
            type="text"
            placeholder={`${member.nextOfKinFullName} - Enter updated next of kin full name to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${nextOfKinFullNameIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="nextOfKinFullName"
            value={updateMemberDetails?.nextOfKinFullName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Next of Kin Relationship <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setNextOfKinRelationshipIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${nextOfKinRelationshipIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.nextOfKinRelationship}
          </p>
          <input
            type="text"
            placeholder={`${member.nextOfKinRelationship} - Enter updated next of kin relationship to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${nextOfKinRelationshipIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="nextOfKinRelationship"
            value={updateMemberDetails?.nextOfKinRelationship}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Next of Kin Phone number <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input cursor-pointer font-medium text-[#101828]/65 relative"
          onClick={() => setNextOfKinPhoneNumberIsActive(true)}
        >
          <p
            className={`absolute w-full h-full bg-white rounded-md flex ${nextOfKinPhoneNumberIsActive ? 'z-0' : 'z-10'} items-center pl-2`}
          >
            {member.nextOfKinPhoneNumber}
          </p>
          <input
            type="text"
            placeholder={`${member.nextOfKinPhoneNumber} - Enter updated nextOfKinPhoneNumber to change`}
            className={`absolute focus:outline-1 pl-2 w-full h-full ${nextOfKinPhoneNumberIsActive ? 'z-20' : 'z-0'} bg-white rounded-md outline-[#009bf4b6]`}
            name="nextOfKinPhoneNumber"
            value={updateMemberDetails.nextOfKinPhoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateChurchInfo;
