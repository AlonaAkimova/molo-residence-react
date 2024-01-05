"use client";
import React, { createContext, useContext, useState } from "react";

export const BreakfastOrderContext = createContext();

export function useBreakfastOrder() {
  return useContext(BreakfastOrderContext);
}

export default function BreakfastOrderProvider({ children }) {
  const [breakfastOrder, setBreakfastOrder] = useState({
    selectedBreakfast: null,
    selectedHotDrink: "",
    selectedColdDrink: "",
    numberOfGuests: 1,
  });

  function setBreakfastOrderData(data) {
    setBreakfastOrder((prevOrder) => ({ ...prevOrder, ...data }));
  }

  return (
    <BreakfastOrderContext.Provider
      value={{ breakfastOrder, setBreakfastOrderData }}
    >
      {children}
    </BreakfastOrderContext.Provider>
  );
}
