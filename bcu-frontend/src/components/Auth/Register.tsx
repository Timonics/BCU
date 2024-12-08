import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { RegisterData } from "../../interfaces/component-interfaces";

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="w-3/5 h-5/6 rounded-lg bg-slate-100 shadow-2xl p-6 flex justify-center items-center relative">
        <div className="absolute top-4 left-4">
          <img src={logo} alt="logo" className="w-[60px] h-[60px] p-1" />
        </div>
        <div className="h-full w-5/6 flex flex-col gap-5 items-center py-5">
          <div className="w-4/5 flex flex-col items-start gap-1">
            <h1 className="text-4xl font-semibold text-[#2da0ff] items-start">
              Create Account
            </h1>
            <h5 className="text-xs font-light text-center text-slate-500">
              Already have an account?{" "}
              <Link to="../login" className="font-bold text-sm text-[#2da0ff]">
                Log In
              </Link>
            </h5>
          </div>
          <div className="w-4/5 flex flex-col gap-3">
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
                className="p-2 rounded-md outline-none bg-slate-200 border-b-2 border-b-[#2da0ff]"
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
                className="p-2 rounded-md outline-none bg-slate-200 border-b-2 border-b-[#2da0ff]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword" className="text-xs font-medium">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                id="confirmPassword"
                type="password"
                onChange={handleChange}
                className="p-2 rounded-md outline-none bg-slate-200 border-b-2 border-b-[#2da0ff]"
              />
            </div>
            <div className="flex gap-3 ">
              <input
                name=""
                value=""
                type="checkbox"
                id="remember"
                className=" "
              />
              <label
                htmlFor="remember"
                className="text-[10px] font-light text-slate-500"
              >
                By clicking Sign up, You agree with our{" "}
                <span className="text-xs text-[#2da0ff] font-medium">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-xs text-[#2da0ff] font-medium">
                  Privacy Policy
                </span>
              </label>
            </div>
            <Link
              to="../email-verify"
              className="w-full text-center mt-4 bg-[#2da0ff] font-bold text-sm p-2.5 rounded-lg text-slate-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
