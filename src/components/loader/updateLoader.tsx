import React from "react";
import { CgSpinner } from "react-icons/cg";

const UpdateLoader: React.FC = () => {
  return (
    <div className="absolute inset-0 backdrop-blur-xs rounded-xl flex justify-center items-center z-50">
      <CgSpinner size={35} color="#009AF4" className="animate-spin"/>
    </div>
  );
};

export default UpdateLoader;
