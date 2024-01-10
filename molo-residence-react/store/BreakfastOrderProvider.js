"use client";
import React, { createContext, useContext, useState } from "react";

export const BreakfastOrderContext = createContext({});

export function useBreakfastOrder() {
  return useContext(BreakfastOrderContext);
}

export const BreakfastOrderProvider = ({ children }) => {
  const [breakfastOrder, setBreakfastOrder] = useState({
    selectedBreakfast: null,
    selectedHotDrink: "",
    selectedColdDrink: "",
    selectedOption: "",
    selectedOptions: {},
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
};
export const useBreakfastOrderContext = () => useContext(BreakfastOrderContext);
