import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import moloLogo from "../../src/assets/molo-residence-logo.png";

const Header: FC = () => {
  return (
    <header>
      <Link href="/">
        <div className="flex justify-center items-start w-full bg-black">
          <div className="w-16 h-16 flex items-center justify-center">
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
