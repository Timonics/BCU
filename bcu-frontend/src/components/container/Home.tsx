import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

import homeBackground from "../../assets/home-background.jpg";
//import Socials from "../Socials/Socials";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col relative my-scrollbar">
      <div className="absolute h-screen w-full -z-10">
        <img
          src={homeBackground}
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="absolute h-full w-full inset-0 bg-black/75 " />
      </div>
      <div className="h-screen">
        <div className="px-2 h-1/6 w-full flex items-center">
          <Nav />
        </div>
        <div className="h-5/6 justify-start flex items-center">
          <Hero />
        </div>
      </div>
      {isOpen && <div className="flex justify-between py-5 px-12 bg-neutral-400">
        <h1 className="font-monte">
          <span className="text-indigo-600 font-bold">ONLINE SERVICE: </span>
          WE'RE LIVE ON SUNDAYS AT 8:45AM
        </h1>
        <button className="text-sm underline text-gray-700" onClick={handleToggle}>Close</button>
      </div>}
      {/* <div className="h-[320px] flex justify-center items-center">
        <Socials />
      </div> */}
      <div className="p-2 items-center justify-center flex pt-5 bg-sky-100">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
