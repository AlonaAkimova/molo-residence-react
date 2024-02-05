"use client";
import React from "react";
import Image from "next/image";

const SharedImage: React.FC = () => {
  return (
    <div className="shared-image">
      <Image
        priority
        width={100}
        height={100}
        src="/assets/breakfast-background.jpg"
        alt="Shared Background"
      />
    </div>
  );
};

export default SharedImage;
