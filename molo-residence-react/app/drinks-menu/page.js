"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import SelectHotDrink from "@/components/SelectHotDrink";
import SelectColdDrink from "@/components/SelectHotDrink";
import Button from "@/components/Button";
import GuestNumberParagraph from "@/components/TrackGuestNumber";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
export default function DrinksMenu() {
  const { setBreakfastOrderData, numberOfGuests, menuData } =
    useBreakfastOrder();
  const [currentGuestNumber, setCurrentGuestNumber] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setCurrentGuestNumber(1);
  }, [numberOfGuests]);

  const handleHotDrinkChange = (e) => {
    setBreakfastOrderData({ selectedHotDrink: e.target.value });
  };

  const handleColdDrinkChange = (e) => {
    setBreakfastOrderData({ selectedColdDrink: e.target.value });
  };
  const handleNextClick = () => {
    router.push("/details");
  };
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Something to drink?
          </h1>
          {numberOfGuests > 1 && (
            <GuestNumberParagraph currentGuestNumber={currentGuestNumber} />
          )}
          <div className="space-y-4">
            <SelectHotDrink
              options={menuData.hotdrinks}
              value=""
              onChange={handleHotDrinkChange}
            />
            <SelectColdDrink
              options={menuData.colddrinks}
              value=""
              onChange={handleColdDrinkChange}
            />
            <div className="flex justify-center">
              <Button onClick={handleNextClick}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
