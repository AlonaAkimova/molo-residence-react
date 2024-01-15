"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";

import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Button from "@/components/Button";
export default function Summary() {
  const { breakfastOrder, numberOfGuests } = useBreakfastOrder();

  useEffect(() => {
    console.log("Breakfast Order:", breakfastOrder);
  }, [breakfastOrder]);

  function renderSummary() {
    const {
      selectedBreakfast,
      selectedHotDrink,
      selectedColdDrink,
      numberOfGuests,
      selectedExtras,
      selectedOptions,
    } = breakfastOrder;

    function confirmOrder() {
      console.log(breakfastOrder, "Order Confirmed");
      // Send the summary to the database or perform any other actions
    }

    return (
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Summary</h1>
          {selectedBreakfast && (
            <>
              <p>Breakfast: {selectedBreakfast.name}</p>
              <p>Description: {selectedBreakfast.description}</p>
              {selectedExtras && <p>Selected Option: {selectedExtras}</p>}
              {selectedOptions.length > 0 && (
                <p>
                  Additional:{" "}
                  {selectedOptions
                    .map((option) => (option.name ? option.name : option))
                    .join(", ")}
                </p>
              )}
              {selectedHotDrink && <p>Hot Drink: {selectedHotDrink}</p>}
              {selectedColdDrink && <p>Cold Drink: {selectedColdDrink}</p>}
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
