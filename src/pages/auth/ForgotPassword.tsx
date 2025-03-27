import React from "react";
import { Link } from "react-router";

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4">
      <div className="size-20 shadow-2xl rounded-xl bg-slate-50"></div>
      <div className="flex flex-col gap-1 justify-center items-center mt-3">
        <h1 className="text-[26px] font-bold pops text-[#1E1E1E]">
          Forgotten Password?
        </h1>
        <p className="worksan text-[16px] opacity-55">
          No worries, we’ll send you reset instructions.
        </p>
        <div className="flex flex-col gap-1 w-full mt-10">
          <p className="worksan text-[14px] font-semibold text-[#282828]">
            Email Address
          </p>
          <input
            type="email"
            name="email"
            value={""}
            className="outline-none focus:border-[#009AF4] p-2 w-full rounded-lg border-[1.33px] border-black/30"
          />
        </div>
        <button className="pops font-bold text-slate-100 bg-[#009AF4] w-full p-3 mt-3 rounded-lg cursor-pointer">
          Done
        </button>
      </div>
      <Link to={"../"} className="text-sm font-semibold worksan opacity-70 mb-4 cursor-pointer">Back to Login</Link>
    </div>
  );
};

export default ForgotPassword;
