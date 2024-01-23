"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function GuestNumber() {
  const { setBreakfastOrderData } = useBreakfastOrder();
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleNextClick = () => {
    setBreakfastOrderData({ selectedNumberOfGuests: numberOfGuests });
    router.push("/breakfast-list");
  };

  const handleDecrease = () => {
    setNumberOfGuests((prevGuests) => prevGuests - 1);
  };

  const handleIncrease = () => {
    setNumberOfGuests((prevGuests) => prevGuests + 1);
  };
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">How many persons?</h1>
          <div className="flex items-center justify-center">
            <Button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ml-2 font-bold text-xl"
            >
              -
            </Button>
            <p className="text-lg">{numberOfGuests}</p>
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
}
