import React, { useState } from "react";
import { LuCloudDownload } from "react-icons/lu";
import { membersData } from "../../utils/dummyDatas/membersData";
import {
  TbArrowLeft,
  TbArrowRight,
  TbPlus,
  TbUser,
} from "react-icons/tb";
import { viewOptions } from "../../utils/viewOptions";
import { Link, useLocation } from "react-router";

const MembersListing: React.FC = () => {
  const location = useLocation();
  let memberPageIsActive: boolean = false;
  if (location.pathname === "/members") memberPageIsActive = true;

  //const [addMemberOpen, setAddMemberOpen] = useState<boolean>(false);
  const [filterSelected, setFilterSelected] = useState<string>("View all");

  const viewOptionsElement = viewOptions.map((option, index) => (
    <button
      key={index}
      className={`border-gray-950/50 py-1.5 px-2 ${
        index === 0 ? "rounded-l-lg border" : "border border-l-0"
      } ${index === 3 && "rounded-r-lg"} cursor-pointer ${
        filterSelected.toLowerCase() === option.type.toLowerCase() &&
        "bg-black/15"
      }`}
      onClick={() => setFilterSelected(option.type)}
    >
      {option.type}
    </button>
  ));

  const filteredMembers = membersData.filter(
    (member) => member.status === filterSelected
  );

  const membersElements = membersData.map((member) => (
    <div className="grid grid-cols-9 items-center px-2 py-4 text-xs font-medium text-black/75">
      <p className="">00{member.id}</p>
      <div className="col-span-2 flex items-center gap-1">
        <div className="flex items-center justify-center size-8 rounded-full bg-slate-400">
          <TbUser size={13} />
        </div>
        <p>{member.name}</p>
      </div>
      <p className="">{member.gender}</p>
      <p className="">{member.band}</p>
      <p className="">{member.unit}</p>
      <p className="">{member.class}</p>
      <p className="">{member.status}</p>
      <p className="">Action</p>
    </div>
  ));

  const filteredMembersElements = filteredMembers.map((member) => (
    <div className="grid grid-cols-9 items-center px-2 py-4 text-xs font-medium text-black/75">
      <p className="">00{member.id}</p>
      <div className="col-span-2 flex items-center gap-1">
        <div className="flex items-center justify-center size-8 rounded-full bg-slate-400">
          <TbUser size={13} />
        </div>
        <p>{member.name}</p>
      </div>
      <p className="">{member.gender}</p>
      <p className="">{member.band}</p>
      <p className="">{member.unit}</p>
      <p className="">{member.class}</p>
      <p className="">{member.status}</p>
      <p className="">Action</p>
    </div>
  ));

  return (
    <div className="section">
      <div className="flex justify-between items-center p-4 border-b border-black/30 ">
        <p className="text-base font-bold flex gap-3 items-center">Members Listing</p>
        {memberPageIsActive ? (
          <Link
            to={"add-member"}
            className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
            //onClick={() => setAddMemberOpen(true)}
          >
            <TbPlus className="border-[1.4px] p-[0.4px] font-bold rounded-full" />
            <h3 className="text-sm font-semibold pops">Add Member</h3>
          </Link>
        ) : (
          <div className="flex items-center gap-1 text-sm border-2 border-[#009AF4] text-[#009AF4] px-6 py-2.5 rounded-lg">
            <LuCloudDownload size={20} />
            <h3 className="text-sm font-semibold pops">Export report</h3>
          </div>
        )}
      </div>
      <div className=" flex items-center px-2 py-4 border-b border-black/30">
        <div className="flex text-xs">{viewOptionsElement}</div>
      </div>
      <div className="grid grid-cols-9 p-2 py-4">
        <p className="text-black/90 text-[13px] font-bold pops">Member ID</p>
        <p className="text-black/90 col-span-2 text-[13px] font-bold pops">
          Member Name
        </p>
        <p className="text-black/90 text-[13px] font-bold pops">Gender</p>
        <p className="text-black/90 text-[13px] font-bold pops">Band</p>
        <p className="text-black/90 text-[13px] font-bold pops">Unit</p>
        <p className="text-black/90 text-[13px] font-bold pops">Class</p>
        <p className="text-black/90 text-[13px] font-bold pops">Status</p>
        <p className="text-black/90 text-[13px] font-bold pops">Action</p>
      </div>
      <div>
        {filterSelected === "View all"
          ? membersElements
          : filteredMembersElements}
        <div className="p-4 flex justify-around items-center my-7">
          <button className="nav-btn">
            <TbArrowLeft size={20} />
            Previous
          </button>
          <div></div>
          <button className="nav-btn">
            Next
            <TbArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersListing;
