"use client";
import React, { FC, useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import SelectHotDrink from "@/components/SelectHotDrink";
import SelectColdDrink from "@/components/SelectColdDrink";
import Button from "@/components/Button";
import { useBreakfastOrderContext } from "@/store/BreakfastOrderProvider";
const DrinksMenu: FC = () => {
  const { setBreakfastOrder, menuData, breakfastOrder } =
    useBreakfastOrderContext();
  const [selectedHotDrink, setSelectedHotDrink] = useState("");
  const [selectedColdDrink, setSelectedColdDrink] = useState("");
  const router = useRouter();

  const handleHotDrinkChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedHotDrink(e.target.value);
  };

  const handleColdDrinkChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedColdDrink(e.target.value);
  };
  const handleNextClick = () => {
    setBreakfastOrder((prevOrder) => ({
      ...prevOrder,
      selectedHotDrink: selectedHotDrink,
      selectedColdDrink: selectedColdDrink,
    }));
    router.push("/details");
  };
  useEffect(() => {
    console.log("Selected Breakfast:", breakfastOrder.selectedBreakfast);
    console.log("Selected Hot Drink:", breakfastOrder.selectedHotDrink);
    console.log("Selected Cold Drink:", breakfastOrder.selectedColdDrink);
  }, [breakfastOrder]);
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Something to drink?
          </h1>
          <div className="space-y-4">
            <SelectHotDrink
              options={menuData.hotdrinks}
              value={selectedHotDrink}
              onChange={handleHotDrinkChange}
            />
            <SelectColdDrink
              options={menuData.colddrinks}
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
};
export default DrinksMenu;
