import React from "react";
import { TbUser } from "react-icons/tb";
import { BsExclamationCircle } from "react-icons/bs";
import { membersData } from "../../utils/dummyDatas/membersData";

const PendingApprovals: React.FC = () => {
  const pendingApprovalsMembers = membersData.filter(member => member.status.toLowerCase() === "pending")

  const pendingApprovalsElements = pendingApprovalsMembers.map((member) => (
    <div className="grid grid-cols-9 items-center px-2 py-4 text-xs font-medium text-black/75">
      <p className="">00{member.id}</p>
      <div className="col-span-2 flex items-center gap-1">
        <div className="flex items-center justify-center size-8 rounded-full bg-slate-400">
          <TbUser size={13} />
        </div>
        {member.name}
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
    <div className="border-[1.42px] border-black/30 rounded-xl bg-[#cfeff78e]">
      <p className="border-b border-black/30 p-4 text-sm flex gap-3 items-center">
        <BsExclamationCircle size={20} className="text-[#009AF4]" /> Pending
        Approvals ({pendingApprovalsMembers.length})
      </p>
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
      <div>{pendingApprovalsElements}</div>
    </div>
  );
};

export default PendingApprovals;
