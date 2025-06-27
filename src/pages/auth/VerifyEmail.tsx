import React from "react";
import { useAuthStore } from "../../stores/authStore";

const VerifyEmail: React.FC = () => {
  const { verifyEmail, setIsAuthenticated } = useAuthStore();

  return (
    <div className="flex flex-col items-center justify-center gap-15">
      <div className="text-center">
        <h1 className="text-[32px] font-bold pops text-[#1E1E1E]">
          Verify Your Email
        </h1>
        <p className="worksan text-[16px] opacity-55">
          Enter code we sent to <span className="font-bold">{verifyEmail}</span>
        </p>
      </div>
      <div className="flex gap-5 w-full items-center justify-center">
        <input
          type="text"
          className="size-22 text-center rounded-xl border-[1.33px] focus:border-[#009AF4] border-black/30 outline-none text-xl"
        />
        <input
          type="text"
          className="size-22 text-center rounded-xl border-[1.33px] focus:border-[#009AF4] border-black/30 outline-none text-xl"
        />
        <input
          type="text"
          className="size-22 text-center rounded-xl border-[1.33px] focus:border-[#009AF4] border-black/30 outline-none text-xl"
        />
        <input
          type="text"
          className="size-22 text-center rounded-xl border-[1.33px] focus:border-[#009AF4] border-black/30 outline-none text-xl"
        />
        <input
          type="text"
          className="size-22 text-center rounded-xl border-[1.33px] focus:border-[#009AF4] border-black/30 outline-none text-xl"
        />
        <input
          type="text"
          className="size-22 text-center rounded-xl border-[1.33px] focus:border-[#009AF4] border-black/30 outline-none text-xl"
        />
      </div>
      <div className="flex flex-col w-2/4 gap-4 mb-4">
        <button className="pops font-bold text-slate-100 bg-[#009AF4] w-full p-3 mt-3 rounded-lg cursor-pointer">
          Verify Code
        </button>
        <button
          onClick={() => setIsAuthenticated(true)}
          className="worksan text-[16px] opacity-55 text-center cursor-pointer"
        >
          Resend Code
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
