import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const VerifyEmail: React.FC = () => {
  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="w-4/6 h-3/4 rounded-lg bg-slate-100 shadow-2xl py-8 relative flex items-center justify-center">
        <div className="absolute top-4 left-4">
          <img src={logo} alt="logo" className="w-[60px] h-[60px] p-1" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-[#2da0ff]">
              Verify your Email
            </h1>
            <p className="text-xs font-light text-gray-800">
              Enter the code we sent to {"{email}"}
            </p>
          </div>
          <div className="flex gap-2 w-4/5 items-center justify-center">
            <input
              type="text"
              name=""
              value=""
              className="w-[100px] h-[100px] rounded-xl outline-[#2da0ff] bg-slate-100 border-slate-300 border-2"
            />
            <input
              type="text"
              name=""
              value=""
              className="w-[100px] h-[100px] rounded-xl outline-[#2da0ff] bg-slate-100 border-slate-300 border-2"
            />
            <input
              type="text"
              name=""
              value=""
              className="w-[100px] h-[100px] rounded-xl outline-[#2da0ff] bg-slate-100 border-slate-300 border-2"
            />
            <input
              type="text"
              name=""
              value=""
              className="w-[100px] h-[100px] rounded-xl outline-[#2da0ff] bg-slate-100 border-slate-300 border-2"
            />
            <input
              type="text"
              name=""
              value=""
              className="w-[100px] h-[100px] rounded-xl outline-[#2da0ff] bg-slate-100 border-slate-300 border-2"
            />
            <input
              type="text"
              name=""
              value=""
              className="w-[100px] h-[100px] rounded-xl outline-[#2da0ff] bg-slate-100 border-slate-300 border-2"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Link to="../email-verified" className="px-10 py-2 font-semibold text-sm bg-[#2da0ff] text-slate-100 rounded-lg">
              Verify Code
            </Link>
            <button className="font-medium text-slate-500/75 text-xs ">
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
