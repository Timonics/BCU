import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-8 px-10 mb-20">
      <div className="text-5xl font-bold gradient-text bg-gradient-to-r from-blue-500 via-blue-300 to-indigo-500 ">
        Anointed for <span className="text-7xl">Excellence</span>
      </div>
      <div className="flex justify-center">
        <Link
          to="register"
          className="ml-3 px-12 py-3 text-gray-950 font-black rounded-lg bg-sky-400 shadow-xl transition ease-in-out duration-500 hover:scale-110 hover:bg-indigo-400 hover:text-slate-900 font-monte"
        >
          BECOME A MEMBER TODAY
        </Link>
      </div>
    </div>
  );
};

export default Hero;
