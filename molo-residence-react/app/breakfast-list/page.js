"use client";
import React from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import GuestNumberParagraph from "@/components/TrackGuestNumber";
import BreakfastItem from "@/components/BreakfastItem";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";

export default function BreakfastList() {
  const router = useRouter();
  const { setBreakfastOrderData, menuData } = useBreakfastOrder();

  function handleBreakfastClick(breakfast) {
    console.log("Selected Breakfast:", breakfast);
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

          <ul>{renderBreakfasts()}</ul>
        </div>
      </div>
    </>
  );
}
