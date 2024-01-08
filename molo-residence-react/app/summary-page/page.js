"use client";

import React, { useContext, useState, useEffect } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Button from "@/components/Button";
export default function Summary() {
  const { breakfastOrder } = useBreakfastOrder();
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const { selectedOption } = breakfastOrder;
    setSelectedOption(selectedOption || "");
  }, [breakfastOrder]);

  const renderSummary = () => {
    const {
      selectedBreakfast,
      selectedHotDrink,
      selectedColdDrink,
      numberOfGuests,
    } = breakfastOrder;

    function confirmOrder() {
      console.log("Order Confirmed");
    }
    const noOrderDetails = (
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Summary</h1>
        <p>No order details available.</p>
      </div>
    );

    const orderDetails = (
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Summary</h1>
        <p>
          Breakfast: {selectedBreakfast?.name}
          {selectedOption && ` (${selectedOption})`}
        </p>
        <p>Hot Drink: {selectedHotDrink}</p>
        <p>Cold Drink: {selectedColdDrink}</p>
        <p>Number of Guests: {numberOfGuests}</p>
        <Button onClick={confirmOrder}>Confirm order</Button>
      </div>
    );

    return (
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        {selectedBreakfast &&
        ((selectedBreakfast.name === "Fitness breakfast" &&
          !selectedHotDrink) ||
          (selectedBreakfast.name === "Sweet breakfast" &&
            !selectedColdDrink) ||
          numberOfGuests < 1)
          ? noOrderDetails
          : orderDetails}
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
