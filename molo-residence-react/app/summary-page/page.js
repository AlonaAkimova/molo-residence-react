"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import db from "@/store";
import Button from "@/components/Button";
import { addDoc, collection } from "firebase/firestore";
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
      const orderData = {
        breakfast: selectedBreakfast,
        extras: selectedExtras,
        options: selectedOptions,
        hotDrink: selectedHotDrink,
        coldDrink: selectedColdDrink,
        guests: numberOfGuests,
        timestamp: new Date(),
      };

      addDoc(collection(db, "breakfast"), orderData)
        .then((docRef) => {
          console.log("Order successfuly sent to Firebase: ", docRef.id);
        })
        .catch((err) => {
          console.log("Error sending order to Firebase: ", err);
        });
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
