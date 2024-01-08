"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import SelectHotDrink from "@/components/SelectHotDrink";
import SelectColdDrink from "@/components/SelectHotDrink";
import { HOTDRINK_MENU } from "@/public/hotdrinks";
import { COLDDRINK_MENU } from "@/public/colddrinks";
import Button from "@/components/Button";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";

export default function DrinksMenu() {
  const [selectedHotDrink, setSelectedHotDrink] = useState("");
  const [selectedColdDrink, setSelectedColdDrink] = useState("");
  const { setBreakfastOrderData } = useBreakfastOrder();
  const router = useRouter();

  const handleHotDrinkChange = (event) => {
    setSelectedHotDrink(event.target.value);
  };

  const handleColdDrinkChange = (event) => {
    setSelectedColdDrink(event.target.value);
  };
  const handleNextClick = () => {
    setBreakfastOrderData({
      selectedHotDrink: selectedHotDrink,
      selectedColdDrink: selectedColdDrink,
    });
    router.push("/summary-page");
  };
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Choose a drink
          </h1>
          <div className="space-y-4">
            <SelectHotDrink
              options={HOTDRINK_MENU}
              value={selectedHotDrink}
              onChange={handleHotDrinkChange}
            />
            <SelectColdDrink
              options={COLDDRINK_MENU}
              value={selectedColdDrink}
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
