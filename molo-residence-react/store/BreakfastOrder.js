"use client";
import React, { createContext, useContext, useState } from "react";

export const BreakfastOrderContext = useContext();
export const useBreakfastOrder = () => {
  return useContext(BreakfastOrderContext);
};
export default function BreakfastOrderProvider({ children }) {
  const [breakfastOrder, setBreakfastOrder] = useState({
    selectedBreakfast: null,
    selectedHotDrink: "",
    selectedColdDrink: "",
    numberOfGuests: 1,
  });
  const setBreakfastOrderData = (data) => {
    setBreakfastOrder({ ...breakfastOrder, ...data });
  };

  return (
    <BreakfastOrderProvider value={{ breakfastOrder, setBreakfastOrderData }}>
      {children}
    </BreakfastOrderProvider>
  );
}
