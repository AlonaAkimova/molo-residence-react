import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import moloLogo from "../src/molo-residence-logo.png";

const Header: FC = () => {
  return (
    <header>
      <Link href="/">
        <div className="flex justify-center items-start w-full bg-black">
          <div className="w-17 h-17 flex items-center justify-center">
            <Image
              src={moloLogo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
