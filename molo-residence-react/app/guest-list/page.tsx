"use client";
import React, { useState, FC } from "react";
import { useBreakfastOrderContext } from "@/store/BreakfastOrderProvider";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const GuestNumber: FC = () => {
  const { breakfastOrder, setBreakfastOrder } = useBreakfastOrderContext();
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleNextClick = () => {
    setBreakfastOrder((prevData) => ({
      ...prevData,
      selectedNumberOfGuests: numberOfGuests,
    }));
    router.push("/breakfast-list");
  };
  const handleDecrease = () => {
    setNumberOfGuests((prevGuests: number) => Math.max(prevGuests - 1, 1));
  };

  const handleIncrease = () => {
    setNumberOfGuests((prevGuests: number) => Math.min(prevGuests + 1, 6));
  };

  return (
    <>
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-neutral-950 font-bold mb-4">How many persons?</h1>
          <div className="flex items-center justify-center">
            <Button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ml-2 font-bold text-xl"
            >
              -
            </Button>
            <p className="text-neutral-950 font-bold">{numberOfGuests}</p>
            <Button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ml-2 font-bold text-xl"
            >
              +
            </Button>
          </div>
          <Button
            onClick={handleNextClick}
            className="mt-4 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-4 rounded cursor-pointer"
          >
            Go to breakfast menu
          </Button>
        </div>
      </div>
    </>
  );
};

export default GuestNumber;
