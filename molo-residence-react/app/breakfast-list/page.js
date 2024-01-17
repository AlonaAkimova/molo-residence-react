"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import GuestNumberParagraph from "@/components/TrackGuestNumber";
import BreakfastItem from "@/components/BreakfastItem";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";

export default function BreakfastList() {
  const [selectedBreakfast, setSelectedBreakfast] = useState([]);
  const [currentGuestNumber, setCurrentGuestNumber] = useState(1);
  const router = useRouter();
  const { setBreakfastOrderData, numberOfGuests, menuData } =
    useBreakfastOrder();
  useEffect(() => {
    setBreakfastOrderData({ numberOfGuests });
  }, [numberOfGuests]);
  useEffect(() => {
    setCurrentGuestNumber(1); // Reset guest number when numberOfGuests changes
  }, [numberOfGuests]);

  function handleBreakfastClick(breakfast) {
    setSelectedBreakfast(breakfast);
    setBreakfastOrderData({ selectedBreakfast: breakfast });

    switch (breakfast.name) {
      case "Breakfast as you like it":
        router.push("/breakfast-list/breakfast-as-you-like-it");
        break;
      case "Energy Breakfast":
        router.push("/breakfast-list/energy-breakfast");
        break;
      default:
        router.push("/drinks-menu");
        break;
    }
  }

  function renderBreakfasts() {
    return menuData.breakfasts.map((breakfasts) => (
      <BreakfastItem
        key={breakfasts.id}
        breakfast={breakfasts}
        onClick={handleBreakfastClick}
      />
    ));
  }

  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">
            Which breakfast do you prefer?
          </h1>
          {numberOfGuests > 1 && (
            <GuestNumberParagraph currentGuestNumber={currentGuestNumber} />
          )}

          <ul>{renderBreakfasts()}</ul>
        </div>
      </div>
    </>
  );
}
