import React from "react";
import logo from "../../../assets/logo.png";
import checkmark from "../../../assets/check-mark.png"
import { Link } from "react-router-dom";


const VerifySuccessMsg: React.FC = () => {
  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="w-4/6 h-3/4 rounded-lg bg-slate-100 shadow-2xl py-8 flex flex-col gap-12 justify-center items-center relative">
        <div className="absolute top-4 left-4">
          <img src={logo} alt="logo" className="w-[60px] h-[60px] p-1" />
        </div>
        <div className="flex flex-col gap-3 items-center">
        <img src={checkmark} alt="checkmark" className="w-[100px] h-[100px]" />
        <h1 className="text-4xl font-bold text-[#2da0ff]">Email Verified</h1>
        <p className="text-xs text-gray-950 ">Hi <span className="text-sm font-bold">{"{name}"}</span>, we have successfully verified your email.</p>
        </div>
        <Link  to="../dashboard" className="font-semibold text-sm rounded-md shadow-lg px-6 py-2 bg-[#2da0ff] text-slate-100 ">Done</Link>
      </div>
    </div>
  );
};

export default VerifySuccessMsg;
