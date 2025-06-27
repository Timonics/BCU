import React, { useState } from "react";
import { bands, classes, genders, units } from "../../utils/listings";
import { MdKeyboardArrowDown } from "react-icons/md";
import MembersListing from "./MembersListing";
import { TbSearch } from "react-icons/tb";
import { Outlet } from "react-router";

const Members: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedBand, setSelectedBand] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [genderIsOpen, setGenderIsOpen] = useState<boolean>(false);
  const [bandIsOpen, setBandIsOpen] = useState<boolean>(false);
  const [unitIsOpen, setUnitIsOpen] = useState<boolean>(false);
  const [classIsOpen, setClassIsOpen] = useState<boolean>(false);
  const [filterIsSelected, setFilterIsSelected] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState({
    gender: "",
    band: "",
    unit: "",
    churchclass: "",
  });

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center gap-3 p-4 px-6"
        onClick={() => {
          if (genderIsOpen) setGenderIsOpen(false);
          if (bandIsOpen) setBandIsOpen(false);
          if (unitIsOpen) setUnitIsOpen(false);
          if (classIsOpen) setClassIsOpen(false);
        }}
      >
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">
            Search for a member
          </p>
          <div className="flex items-center gap-1 pl-2 w-[180px] xl:w-[200px] h-[40px] bg-[#F9FAFB] rounded-lg border-[1.5px] border-[#D0D5DD] pops">
            <TbSearch className="h-full w-[20px] text-sm text-black/30" />
            <input
              placeholder="Search"
              className="w-[150px] xl:w-[170px] h-[40px] outline-none placeholder:text-sm placeholder:font-medium"
              name="searchTerm"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">Gender</p>
          <div
            className="w-[135px] xl:w-[180px] h-[40px] rounded-lg bg-[#F9FAFB] border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
            onClick={() => setGenderIsOpen(!genderIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedGender ? selectedGender : "--select gender--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {genderIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg">
                {genders.map((gender, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                      index !== 1 && "border-b border-[#97979786]"
                    }`}
                    onClick={() => {
                      setSelectedGender(gender.name);
                      setFilterIsSelected(true);
                      setFilters((prevState) => ({
                        ...prevState,
                        gender: gender.name,
                      }));
                    }}
                  >
                    {gender.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">Bands</p>
          <div
            className="w-[135px] xl:w-[180px] h-[40px] rounded-lg bg-[#F9FAFB] border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
            onClick={() => setBandIsOpen(!bandIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedBand ? selectedBand : "--select band--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {bandIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg">
                {bands.map((band, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                      index !== 11 && "border-b border-[#97979786]"
                    }`}
                    onClick={() => {
                      setSelectedBand(band);
                      setFilterIsSelected(true);

                      setFilters((prevState) => ({
                        ...prevState,
                        band,
                      }));
                    }}
                  >
                    {band}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">Units</p>
          <div
            className="w-[135px] xl:w-[180px] h-[40px] rounded-lg bg-[#F9FAFB] border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
            onClick={() => setUnitIsOpen(!unitIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedUnit ? selectedUnit : "--select unit--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {unitIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg">
                {units.map((unit, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                      index !== 5 && "border-b border-[#979797]"
                    }`}
                    onClick={() => {
                      setSelectedUnit(unit);
                      setFilterIsSelected(true);

                      setFilters((prevState) => ({
                        ...prevState,
                        unit,
                      }));
                    }}
                  >
                    {unit}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[13px] text-[#344054] font-semibold">Class</p>
          <div
            className="w-[135px] xl:w-[180px] h-[40px] rounded-lg bg-[#F9FAFB] border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
            onClick={() => setClassIsOpen(!classIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedClass ? selectedClass : "--select class--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {classIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg">
                {classes.map((cl, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                      index !== 3 && "border-b border-[#979797]"
                    }`}
                    onClick={() => {
                      setSelectedClass(cl);
                      setFilterIsSelected(true);

                      setFilters((prevState) => ({
                        ...prevState,
                        cl,
                      }));
                    }}
                  >
                    {cl}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <MembersListing
          gender={filters.gender}
          band={filters.band}
          unit={filters.unit}
          churchclass={filters.churchclass}
          filterIsSelected={filterIsSelected}
          searchTerm={searchTerm}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Members;
