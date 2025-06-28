import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { bands, units } from "../../../utils/listings";

const ChurchInfo: React.FC = () => {
  const [selectedBand, setSelectedBand] = useState<string | null>(null);
  const [bandIsOpen, setBandIsOpen] = useState<boolean>(false);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [unitIsOpen, setUnitIsOpen] = useState<boolean>(false);
  const [selectedCommittee, setSelectedCommittee] = useState<string | null>(
    null
  );
  const [committeeIsOpen, setCommitteeIsOpen] = useState<boolean>(false);
  const [selectedBaptismalStatus, setSelectedBaptismalStatus] = useState<
    string | null
  >(null);
  const [baptismalStatusIsOpen, setBaptismalStatusIsOpen] =
    useState<boolean>(false);
  const [selectedOrdinationRank, setSelectedOrdinationRank] = useState<
    string | null
  >(null);
  const [ordinationRankIsOpen, setOrdinationRankIsOpen] =
    useState<boolean>(false);

  return (
    <div className="grid grid-cols-2 gap-4 px-2">
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Present Band <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => {
            setBandIsOpen(!bandIsOpen);
            setUnitIsOpen(false);
            setCommitteeIsOpen(false);
            setBaptismalStatusIsOpen(false);
            setOrdinationRankIsOpen(false);
          }}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedBand ? selectedBand : "--Select Band--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {bandIsOpen && (
            <ul className="absolute top-[50px] z-20 left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {bands.map((band, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== bands.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedBand(band);
                  }}
                >
                  {band}
                </li>
              ))}
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
            setCommitteeIsOpen(false)
            setBaptismalStatusIsOpen(false);
            setOrdinationRankIsOpen(false);
          }}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedUnit ? selectedUnit : "--Select Unit(s)--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {unitIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl z-20">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedUnit(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Commitee <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => {
            setCommitteeIsOpen(!committeeIsOpen);
            setUnitIsOpen(false);
            setBandIsOpen(false);
            setBaptismalStatusIsOpen(false);
            setOrdinationRankIsOpen(false);
          }}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedCommittee ? selectedCommittee : "--Select Comittee(s)--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {committeeIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl z-20">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedCommittee(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
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
          onClick={() => setBaptismalStatusIsOpen(!baptismalStatusIsOpen)}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedBaptismalStatus ? selectedBaptismalStatus : "--Select Baptimal Status--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {baptismalStatusIsOpen && (
            <ul className="absolute top-[50px] z-20 left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedBaptismalStatus(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Ordination Rank <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => setUnitIsOpen(!unitIsOpen)}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedOrdinationRank ? selectedOrdinationRank : "--Select Ordination Rank(s)--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {ordinationRankIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedOrdinationRank(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
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
          onClick={() => setUnitIsOpen(!unitIsOpen)}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedUnit ? selectedUnit : "--Select Unit(s)--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {unitIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedUnit(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
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
          onClick={() => setUnitIsOpen(!unitIsOpen)}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedUnit ? selectedUnit : "--Select Unit(s)--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {unitIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedUnit(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
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
          onClick={() => setUnitIsOpen(!unitIsOpen)}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedUnit ? selectedUnit : "--Select Unit(s)--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {unitIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedUnit(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
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
          onClick={() => setUnitIsOpen(!unitIsOpen)}
        >
          <p className="text-xs font-medium text-[#101828]/65">
            {selectedUnit ? selectedUnit : "--Select Unit(s)--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {unitIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
              {units.map((unit, index) => (
                <li
                  className={`p-2 text-[13px] hover:bg-[#eeeaea86] text-[#404040] cursor-pointer ${
                    index !== units.length - 1 && "border-b border-[#97979786]"
                  }`}
                  onClick={() => {
                    setSelectedUnit(unit);
                  }}
                >
                  {unit}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChurchInfo;
