"use client";

import React, { useContext } from "react";

import Header from "@/components/Header";
// import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import { GuestListContext } from "../../store/GuestListProvider";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function GuestNumber() {
  const { numberOfGuests, handleDecrease, handleIncrease } =
    useContext(GuestListContext);

  // const { breakfastOrder, setBreakfastOrderData } = useBreakfastOrder();

  const router = useRouter();

  const handleNextClick = () => {
    // setBreakfastOrderData({ numberOfGuests });
    router.push("/breakfast-list");
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
          <div
            onClick={handleNextClick}
            className="mt-4 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-4 rounded cursor-pointer"
          >
            Go to breakfast menu
          </div>
        </div>
      </div>
    </>
  );
}
