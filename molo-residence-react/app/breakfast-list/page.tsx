"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import BreakfastItem from "@/components/BreakfastItem";
import {
  Breakfast,
  useBreakfastOrderContext,
} from "@/store/BreakfastOrderProvider";

interface BreakfastListProps {}

const BreakfastList: FC<BreakfastListProps> = () => {
  const router = useRouter();
  const { setBreakfastOrder, loading, menuData } = useBreakfastOrderContext();

  async function handleBreakfastClick(breakfast: Breakfast) {
    setBreakfastOrder((prevOrder) => {
      const updatedOrder = {
        ...prevOrder,
        selectedBreakfast: breakfast,
      };
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
      <div className="bg-breakfast-background bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">
            Which breakfast do you prefer?
          </h1>
          {loading ? (
            <div className="text-xl font-bold mb-6">Loading...</div>
          ) : (
            <ul>{renderBreakfasts()}</ul>
          )}
        </div>
      </div>
    </>
  );
};

export default BreakfastList;
