import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router';
import { AdminSignInData } from '../../interfaces/auth';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const { adminSignin } = useAuth();
  const [loginData, setLoginData] = useState<AdminSignInData>({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adminSignin({
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    });
  };

  return (
    <>
      <div className="px-4 flex flex-col items-center justify-center">
        <h1 className="text-[32px] font-bold pops text-[#1E1E1E]">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-3/4 gap-7">
          <div className="flex flex-col gap-1">
            <p className="worksan text-[14px] font-semibold text-[#282828]">
              Email Address
            </p>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
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
              value={loginData.password}
              onChange={handleChange}
              className="outline-none focus:border-[#009AF4] p-2 w-full rounded-lg border-[1.33px] border-black/30"
            />
            <Link
              to={'forgot-password'}
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
          <button
            disabled={!loginData.email || !loginData.password}
            type="submit"
            className="pops disabled:opacity-50 font-bold text-slate-100 bg-[#009AF4] w-full p-3 mb-4 rounded-lg cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
3;
