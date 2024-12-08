import React from "react";

const Analytics: React.FC = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="flex gap-5">
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
        <div className="w-1/4 h-[100px] rounded-xl shadow-xl bg-slate-500"></div>
      </div>
    </div>
  );
};

export default Analytics;
