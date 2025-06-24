import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { genders } from "../../../utils/listings";

const PersonalInfo: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [genderIsOpen, setGenderIsOpen] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-2 gap-4 px-2">
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Surname <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          First Name <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Other Names (optional)</p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Email Address <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Phone Number <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Alternate Phone Number</p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Gender <span className="text-red-600">*</span>
        </p>
        <div
          className="member-input rounded-lg border-[1.5px] border-[#D0D5DD] flex items-center px-2 relative cursor-pointer"
          onClick={() => setGenderIsOpen(!genderIsOpen)}
        >
          <p className="text-xs font-medium text-[#101828]">
            {selectedGender ? selectedGender : "--select gender--"}
          </p>
          <MdKeyboardArrowDown className="absolute right-2" />
          {genderIsOpen && (
            <ul className="absolute top-[50px] left-0 w-full bg-white border-[1.5px] border-[#D0D5DD] rounded-lg shadow-xl">
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
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Date of Birth <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Marital Status <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          State of Origin <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col col-span-full gap-2">
        <p className="text-sm">
          Address 1 <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Country <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          State <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          City <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Local Government Area <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col col-span-full gap-2">
        <p className="text-sm">
          Address 2 <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Country <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          State <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          City <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Local Government Area <span className="text-red-600">*</span>
        </p>
        <input className="member-input" />
      </div>
    </div>
  );
};

export default PersonalInfo;
