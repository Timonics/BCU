import React from "react";
import { Link } from "react-router";

const Login: React.FC = () => {
  return (
    <div className="px-4 flex flex-col items-center justify-center">
      <h1 className="text-[32px] font-bold pops text-[#1E1E1E]">
        Welcome Back
      </h1>
      <div className="flex flex-col w-3/4 gap-7">
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
          <p className="worksan text-[14px] font-semibold text-[#282828]">
            Password
          </p>
          <input
            type="password"
            name="password"
            value={""}
            className="outline-none focus:border-[#009AF4] p-2 w-full rounded-lg border-[1.33px] border-black/30"
          />
          <Link
            to={"forgot-password"}
            className="text-end font-bold text-[#009AF4] text-[13px] cursor-pointer"
          >
            Forgot password?
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <input id="remember-me" type="checkbox" className="size-4" />
          <label
            htmlFor="remember-me"
            className="text-[#1E1E1E] font-light text-sm"
          >
            Remember Me
          </label>
        </div>
        <button className="pops font-bold text-slate-100 bg-[#009AF4] w-full p-3 mb-4 rounded-lg cursor-pointer">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
