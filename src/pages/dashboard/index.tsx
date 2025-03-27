import React from "react";
import { pendingApprovalsMembers } from "../../dummyDatas/pendingApprovalsData";
import { TbUser } from "react-icons/tb";
import { BsExclamationCircle } from "react-icons/bs";

const Dashboard: React.FC = () => {
  const pendingApprovalsElements = pendingApprovalsMembers.map((member) => (
    <div
      key={member.id}
      className="flex text-xs font-medium items-center text-black/75"
    >
      <p className="pl-3 w-1/8 py-2">00{member.id}</p>
      <p className="w-[180px] py-2 flex items-center flex-nowrap overflow-x-hidden gap-2">
        <div className="flex items-center justify-center size-8 rounded-full bg-slate-400">
          <TbUser size={18} />
        </div>
        {member.name}
      </p>
      <p className="pl-3 w-1/8 py-2">{member.gender}</p>
      <p className="pl-3 w-1/8 py-2">{member.band}</p>
      <p className="pl-3 w-1/8 py-2">{member.unit}</p>
      <p className="pl-3 w-1/8 py-2">{member.class}</p>
      <p className="pl-3 w-1/8 py-2">{member.status}</p>
      <p className="pl-3 w-1/8 py-2">Action</p>
    </div>
  ));

  return (
    <div className="flex flex-col gap-13 p-4">
      <div className="flex flex-col items-center gap-2 pt-4">
        <div className="flex w-full gap-2">
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Members</p>
            <p className="text-black/85 pops font-bold">6451</p>
          </div>
        </div>
      </div>
      <div className="border-[1.42px] border-black/30 rounded-xl bg-[#abdaf47b]">
        <p className="border-b border-black/30 p-4 text-sm flex gap-3 items-center">
          <BsExclamationCircle size={20} className="text-[#009AF4]" /> Pending
          Approvals ({pendingApprovalsMembers.length})
        </p>
        <div className="flex py-4 pl-5 w-full justify-evenly">
          <p className="text-black/90  w-1/8 text-[13px] font-bold pops">
            Member ID
          </p>
          <p className="text-black/90  w-[180px] text-[13px] font-bold pops">
            Member Name
          </p>
          <p className="text-black/90  w-1/8 text-[13px] font-bold pops">
            Gender
          </p>
          <p className="text-black/90  w-1/8 text-[13px] font-bold pops">
            Band
          </p>
          <p className="text-black/90  w-1/8 text-[13px] font-bold pops">
            Unit
          </p>
          <p className="text-black/90  w-1/8 text-[13px] font-bold pops">
            Class
          </p>
          <p className="text-black/90  w-1/8 text-[13px] font-bold pops">
            Status
          </p>
          <p className="text-black/90  w-1/8 text-[13px] font-bold pops">
            Action
          </p>
        </div>
        <div className="flex flex-col w-full px-2">
          {pendingApprovalsElements}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
