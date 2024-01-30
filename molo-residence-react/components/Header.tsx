import React, { FC } from "react";
import Image from "next/image";
import moloLogo from "../../src/assets/molo-residence-logo.png";

const Header: FC = () => {
  return (
    <div className="flex justify-center items-start w-full bg-black">
      <div className="w-17 h-17 flex items-center justify-center">
        <Image
          src={moloLogo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
