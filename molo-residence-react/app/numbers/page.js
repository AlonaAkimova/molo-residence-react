"use client";

import React from "react";
import Button from "../../pages/Button";
import { useRouter } from "next/navigation";

export default function Numbers() {
  const router = useRouter();

  const handleGoToBreakfastMenuClick = () => {
    router.push("/breakfast-list");
  };
  return (
    <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">How many persons?</h1>
        <div className="flex items-center justify-center">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 mr-2 font-bold text-xl">
            -
          </button>
          <p className="text-lg">1</p>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ml-2 font-bold text-xl">
            +
          </button>
        </div>
        <Button
          className="mt-4 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-4 rounded"
          onClick={handleGoToBreakfastMenuClick}
        >
          Go to breakfast menu
        </Button>
      </div>
    </div>
  );
}
