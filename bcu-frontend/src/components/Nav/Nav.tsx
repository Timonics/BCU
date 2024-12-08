import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="flex relative justify-between items-center px-8 py-4 w-full">
      <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
      <div className="space-x-10 mr-5">
        <Link
          to="login"
          className="font-bold font-monte px-7 py-2 text-lg text-sky-500 transition ease-in-out duration-500 border-4 border-transparent hover:border-sky-500 rounded-lg hover:bg-gray-950"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Nav;
