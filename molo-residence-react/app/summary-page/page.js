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

  function renderSummary() {
    const {
      selectedBreakfast,
      selectedHotDrink,
      selectedColdDrink,
      numberOfGuests,
      selectedOptions,
    } = breakfastOrder;

    function confirmOrder() {
      console.log("Order Confirmed");
    }

    return (
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Summary</h1>
          {selectedBreakfast && (
            <>
              <p>
                Breakfast: {selectedBreakfast.name}
                {selectedOption && ` (${selectedOption})`}
              </p>

              {selectedBreakfast.options &&
                selectedOptions[selectedBreakfast.id] && (
                  <p>
                    {selectedBreakfast.options
                      .filter(
                        (option) =>
                          option.id === selectedOptions[selectedBreakfast.id]
                      )
                      .map((selectedOption) => selectedOption.name)}
                  </p>
                )}
              <p>Hot Drink: {selectedHotDrink}</p>
              <p>Cold Drink: {selectedColdDrink}</p>
              <p>Number of Guests: {numberOfGuests}</p>
              <Button onClick={confirmOrder}>Confirm order</Button>
            </>
          )}
          {!selectedBreakfast && <p>No order details available.</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      {renderSummary()}
    </>
  );
}
