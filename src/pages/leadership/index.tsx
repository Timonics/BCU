import React from "react";
import { LuPenLine } from "react-icons/lu";
import { Link } from "react-router";
import { leadershipData } from "../../utils/dummyDatas/leadershipData";

const LeaderShip: React.FC = () => {
  const leadershipDataElements = leadershipData.map((data) => (
    <div className="grid grid-cols-4 px-4 pb-4 items-center gap-5 text-xs font-medium text-black/75">
      <p>{data.title}</p>
      <p>{data.counts} - {data.title}</p>
      <p>{data.date_created}</p>
      <p>Action</p>
    </div>
  ));

  return (
    <div className="h-full flex items-center justify-center">
      <div className="section w-4/6">
        <div className="flex justify-between items-center p-4 border-b border-black/30 ">
          <p className="text-lg flex gap-3 items-center font-bold">
            Leadership
          </p>
          <Link
            to={""}
            className="flex items-center gap-2 text-sm border-2 border-[#009AF4] text-[#009AF4] px-6 py-2.5 rounded-lg"
          >
            <LuPenLine size={20} />
            <h3 className="text-sm font-semibold pops">Create Leadership</h3>
          </Link>
        </div>
        <div className="grid grid-cols-4 p-4 py-4 gap-5 items-center">
          <p className="text-black/90 text-[13px] font-bold pops">Title</p>
          <p className="text-black/90 text-[13px] font-bold pops">Counts</p>
          <p className="text-black/90 text-[13px] font-bold pops">
            Date Created
          </p>
          <p className="text-black/90 text-[13px] font-bold pops">Action</p>
        </div>
        <div className="flex flex-col gap-4 my-2">{leadershipDataElements}</div>
      </div>
    </div>
  );
};

export default LeaderShip;
