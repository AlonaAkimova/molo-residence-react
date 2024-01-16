"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import { sendOrder } from "@/store";
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
      selectedDate,
      selectedTime,
      selectedRoomNumber,
      additionalComments,
    } = breakfastOrder;

    const confirmOrder = async () => {
      console.log(breakfastOrder, "Order Confirmed");

      const orderData = {
        breakfast: breakfastOrder.selectedBreakfast,
        extras: breakfastOrder.selectedExtras,
        options: breakfastOrder.selectedOptions,
        hotDrink: breakfastOrder.selectedHotDrink,
        coldDrink: breakfastOrder.selectedColdDrink,
        guests: numberOfGuests,
        timestamp: new Date(),
      };

      try {
        const docRef = await sendOrder(orderData);
        console.log("Order successfully sent to Firebase: ", docRef.id);
      } catch (error) {
        console.error("Error sending order to Firebase: ", error);
      }
    };

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
              <p>Room: {selectedRoomNumber}</p>
              <p>Comments: {additionalComments}</p>
              <p>Date: {selectedDate}</p>
              <p>Time: {selectedTime}</p>
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
