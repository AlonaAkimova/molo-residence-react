"use client";
import React, { FC, useEffect } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import BreakfastItem from "@/components/BreakfastItem";
import {
  Breakfast,
  useBreakfastOrderContext,
} from "@/store/BreakfastOrderProvider";

interface BreakfastListProps {}

const BreakfastList: FC<BreakfastListProps> = () => {
  const router = useRouter();
  console.log("BreakfastList component rendered");
  const { setBreakfastOrder, breakfastOrder, menuData } =
    useBreakfastOrderContext();
  useEffect(() => {
    console.log(
      "Number of guests in Breakfast Page:",
      breakfastOrder.selectedNumberOfGuests
    );
  }, []);
  async function handleBreakfastClick(breakfast: Breakfast) {
    console.log("Clicked on Breakfast:", breakfast);
    setBreakfastOrder((prevOrder) => {
      const updatedOrder = {
        ...prevOrder,
        selectedBreakfast: breakfast,
      };
      console.log("Updated Breakfast Order:", updatedOrder);
      return updatedOrder;
    });

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
    return menuData && menuData.breakfasts
      ? menuData.breakfasts.map((breakfast) => (
          <BreakfastItem
            key={breakfast.id}
            breakfast={breakfast}
            onClick={handleBreakfastClick}
          />
        ))
      : null;
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
};

export default BreakfastList;
