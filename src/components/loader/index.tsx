import React from "react";
import { CgSpinner } from "react-icons/cg";

const Loading: React.FC = () => {
  return (
    <div className="absolute inset-0 backdrop-blur-xs rounded-xl w-full h-full flex justify-center items-center">
      <CgSpinner size={35} color="#009AF4" className="animate-spin"/>
    </div>
  );
};

export default Loading;
