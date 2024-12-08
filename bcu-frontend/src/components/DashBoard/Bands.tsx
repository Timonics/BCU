import React from "react";
import { PiClockCountdownBold } from "react-icons/pi";

const Bands: React.FC = () => {
  return (
    <div className="h-full text-5xl flex flex-col gap-2 justify-center items-center font-extrabold text-sky-500">
      <PiClockCountdownBold size={80} />
      Coming Soon !!!
    </div>
  );
};

export default Bands;
