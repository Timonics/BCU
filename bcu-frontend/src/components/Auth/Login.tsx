import React, { useState } from "react";
import logo from "../../assets/logo.png";

import { LoginData } from "../../interfaces/component-interfaces";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="w-3/5 h-3/4 rounded-lg bg-slate-100 shadow-2xl p-4 flex flex-col justify-center items-center">
        <div className="w-full">
          <img src={logo} alt="logo" className="w-[60px] h-[60px] p-1" />
        </div>
        <div className="h-full w-4/5 flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-[#2da0ff]">
            Welcome Back
          </h1>
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs font-medium">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                id="email"
                type="email"
                onChange={handleChange}
                className="p-1.5 rounded-md outline-none bg-slate-200 border-b-2 border-b-[#2da0ff]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-xs font-medium">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                id="password"
                type="password"
                onChange={handleChange}
                className="p-1.5 rounded-md outline-none bg-slate-200 border-b-2 border-b-[#2da0ff]"
              />
              <h5 className="ml-auto text-[11px] font-semibold text-[#2da0ff]">
                Forgot password ?
              </h5>
            </div>
            <div className="flex gap-3 ">
              <input
                name=""
                value=""
                type="checkbox"
                id="remember"
                className=" "
              />
              <label htmlFor="remember" className="text-xs font-medium">
                Remember Me
              </label>
            </div>
            <Link
              to="../dashboard"
              className="w-full text-center bg-[#2da0ff] font-bold text-sm p-2.5 rounded-lg text-slate-100"
            >
              Login
            </Link>
          </div>
          <h1 className="text-xs font-light text-center text-slate-500">
            Don't have an account?{" "}
            <Link to="../register" className="font-bold text-sm text-[#2da0ff]">
              Sign Up
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
