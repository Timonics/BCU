import React from "react";
import dashLogo from "../../assets/dashLogo.png";

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col px-5 pt-5 gap-5">
      <div className="flex">
        <div className="flex flex-col w-2/5 p-4 gap-3">
          <div className="flex items-center p-1 gap-3">
            <img src={dashLogo} alt="logo" className="w-[30px] h-[30px]" />
            <h1 className="text-2xl font-bold font-monte text-gray-950">
              Youth Fellowship, Ayo Ni O
            </h1>
          </div>
          <p className="text-sm font-light text-gray-950/75">
            To train, nurture and equip the youths for Godliness, Leadership and
            Exploits; till all come in the unity of Faith and of the Knowledge
            of the Son of God, unto a perfect man, unto the measure of the
            stature of the fullness of Christ.
          </p>
        </div>
        <div className="flex flex-col w-1/5 p-4 gap-3">
          <h1 className="text-2xl font-monte font-bold p-1 text-gray-950">Quick Links</h1>
          <ul className="flex flex-col text-sm gap-3 px-3 font-medium text-gray-950/75">
            <li>- Home</li>
            <li>- Who we are</li>
            <li>- Sermon</li>
            <li>- Give Online</li>
            <li>- Watch Online</li>
          </ul>
        </div>
        <div className="w-2/5 flex flex-col p-4 gap-3">
          <h1 className="text-2xl font-monte font-bold p-1 text-indigo-400">
            Newsletters & Bulletin
          </h1>
          <p className="text-sm text-gray-950/75 font-light">
            Sign up to receive regular updates for our programmes, services,
            announcements, devotionals, bulletins, etc.
          </p>
          <div className="flex rounded-lg w-full">
            <input
              type="text"
              name=""
              value={""}
              placeholder="Email Address"
              className="p-3 rounded-l-lg outline-none w-3/4 bg-slate-50"
            />
            <button className="rounded-r-lg p-3 bg-sky-500 font-bold text-slate-100 w-1/4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center m-5 text-indigo-400">
        <FaFacebook size={35} />
        <FaInstagram size={35} />
        <FaYoutube size={35} />
        <FaXTwitter size={35} />
      </div>
      <div className="text-xs text-indigo-950 flex items-center justify-center">
        © 2024 Youth Fellowship, Cherubim & Seraphim Movement Church Ayo NI O
      </div>
    </div>
  );
};

export default Footer;
