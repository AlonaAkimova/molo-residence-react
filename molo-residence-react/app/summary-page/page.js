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
              <p>
                <span className="font-semibold">Breakfast:</span>{" "}
                {selectedBreakfast.name}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {selectedBreakfast.description}
              </p>
              {selectedExtras && (
                <p>
                  <span className="font-semibold">Selected Option:</span>{" "}
                  {selectedExtras}
                </p>
              )}
              {selectedOptions.length > 0 && (
                <p>
                  <span className="font-semibold">Additional:</span>{" "}
                  {selectedOptions
                    .map((option) => (option.name ? option.name : option))
                    .join(", ")}
                </p>
              )}
              {selectedHotDrink && (
                <p>
                  <span className="font-semibold">Hot Drink:</span>{" "}
                  {selectedHotDrink}
                </p>
              )}
              {selectedColdDrink && (
                <p>
                  <span className="font-semibold">Cold Drink:</span>{" "}
                  {selectedColdDrink}
                </p>
              )}
              <p>
                <span className="font-semibold">Number of Guests:</span>{" "}
                {numberOfGuests}
              </p>
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
