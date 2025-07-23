import React, { useState } from "react";
import { TbPencil, TbSearch } from "react-icons/tb";
import Button from "../../components/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { genders, classes, units } from "../../constants/listings";

type BandProps = {
  classesName: string;
  classesYears: number;
  nextAnniversary: string;
};

const ClassInfo: React.FC<BandProps> = ({
  classesName,
  classesYears,
  nextAnniversary,
}) => {
  // Dummy data for leadership members
  /* const classLeadershipElements = leadershipMembers.map((member) => (
    <div className="grid grid-cols-6 p-4 py-4 gap-5 items-center text-sm font-medium text-black/75">
      <p>{member.title}</p>
      <p>{member.name}</p>
      <p>{member.mobile_number}</p>
      <p>{member.marital_status}</p>
      <p>{member.birthday}</p>
      <p>{member.location}</p>
    </div>
  )); */

  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedBatchYear, setSelectedBatchYear] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [genderIsOpen, setGenderIsOpen] = useState<boolean>(false);
  const [batchYearsIsOpen, setBatchYearIsOpen] = useState<boolean>(false);
  const [classIsOpen, setClassIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full gap-2 py-4">
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Members</p>
          <p className="text-black/85 pops font-bold">289</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Male</p>
          <p className="text-black/85 pops font-bold">117</p>
        </div>
        <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
          <p className="text-xs text-black/75">Total Female</p>
          <p className="text-black/85 pops font-bold">172</p>
        </div>
      </div>

      <div
        className="flex items-center gap-3 py-4"
        onClick={() => {
          if (genderIsOpen) setGenderIsOpen(false);
          if (batchYearsIsOpen) setBatchYearIsOpen(false);
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
          <p className="text-[13px] text-[#344054] font-semibold">Batch Year</p>
          <div
            className="w-[135px] xl:w-[180px] h-[40px] rounded-lg bg-[#F9FAFB] border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
            onClick={() => setBatchYearIsOpen(!batchYearsIsOpen)}
          >
            <p className="text-xs font-medium text-[#101828]">
              {selectedBatchYear ? selectedBatchYear : "--select batch year--"}
            </p>
            <MdKeyboardArrowDown className="absolute right-2" />
            {batchYearsIsOpen && (
              <ul className="absolute top-[40px] left-0 w-full bg-white rounded-lg">
                {units.map((unit, index) => (
                  <li
                    className={`p-2 text-[13px] text-[#404040] cursor-pointer ${
                      index !== 5 && "border-b border-[#979797]"
                    }`}
                    onClick={() => {
                      setSelectedBatchYear(unit);
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

      <div className="flex justify-between items-center p-4 px-6 border rounded-lg border-black/30 bg-[#F9FAFB]">
        <div className="flex flex-col gap-6 items-start">
          <p className="text-2xl font-bold">{classesName}</p>
          <Button Icon={TbPencil} text="Edit Class" />
        </div>
        <div className="flex flex-col gap-6 items-start">
          <p className="text-[13px] text-[#344054] font-semibold">
            Years: {classesYears} Years
          </p>
          <p className="text-[13px] text-[#344054] font-semibold">
            Next Anniversary: {nextAnniversary}
          </p>
        </div>
      </div>
      <div className="border rounded-lg border-black/30 bg-[#F9FAFB]">
        <div className="flex items-center justify-between border-b border-black/30 p-4 py-6">
          <p className="text-xl font-bold flex gap-3 items-center">
            {classesName} Members List
          </p>
          <Button Icon={TbPencil} text="Edit Leadership" />
        </div>
        <div className="p-4">
          <div className="grid grid-cols-7 p-4 py-4 gap-5 items-center">
            <p className="text-black/90 text-xs font-bold pops">Members ID</p>
            <p className="text-black/90 col-span-2 text-xs font-bold pops">
              Members Name
            </p>
            <p className="text-black/90 text-xs font-bold pops">
              Mobile Number
            </p>
            <p className="text-black/90 text-xs font-bold pops">Batch Year</p>
            <p className="text-black/90 text-xs font-bold pops">Gender</p>
            <p className="text-black/90 text-xs font-bold pops">Action</p>
          </div>
          <div>{}</div>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
