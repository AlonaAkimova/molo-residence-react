"use client";

import React, { useContext } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Button from "@/components/Button";
export default function Summary() {
  const { breakfastOrder } = useBreakfastOrder();
  const renderSummary = () => {
    const {
      selectedBreakfast,
      selectedHotDrink,
      selectedColdDrink,
      numberOfGuests,
    } = breakfastOrder;

    if (
      !selectedBreakfast ||
      (!selectedHotDrink && selectedBreakfast.name !== "Fitness breakfast") ||
      (!selectedColdDrink && selectedBreakfast.name !== "Sweet breakfast") ||
      numberOfGuests < 1
    ) {
      return (
        <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Summary</h1>
            <p>No order details available.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Summary</h1>
          <p>Selected Breakfast: {selectedBreakfast.name}</p>
          <p>Selected Hot Drink: {selectedHotDrink}</p>
          <p>Selected Cold Drink: {selectedColdDrink}</p>
          <p>Number of Guests: {numberOfGuests}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {renderSummary()}
    </>
  );
}
