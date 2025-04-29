import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  Icon: IconType;
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ Icon, text }) => {
  return (
    <button className="flex items-center gap-1 text-sm border-2 border-[#009AF4] text-[#009AF4] px-6 py-2.5 rounded-lg">
      {<Icon size={20} />}
      <h3 className="text-sm font-semibold pops">{text}</h3>
    </button>
  );
};

export default Button;
