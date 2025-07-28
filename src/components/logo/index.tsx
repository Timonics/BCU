import React from 'react';
import logo from '../../assets/dashLogo.png';

const Logo: React.FC<{
  width?: number;
  height?: number;
  size?: number;
}> = ({ width, height, size }) => {
  return (
    <img
      src={logo}
      alt="yfg-logo"
      className="w-[100px] h-[100px]"
      style={{
        height: `${height ? height : size ? size : ''}px`,
        width: `${width ? width : size ? size : ''}px`,
      }}
    />
  );
};

export default Logo;
