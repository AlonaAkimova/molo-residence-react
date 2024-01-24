"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  BREAKFAST_MENU,
  COLDDRINK_MENU,
  HOTDRINK_MENU,
} from "@/public/breakfasts";
import { getMenuFromLocalStorage } from "./breakfastMenuStorage";
export const BreakfastOrderContext = createContext({});

export function useBreakfastOrder() {
  return useContext(BreakfastOrderContext);
}

export const BreakfastOrderProvider = ({ children }) => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [menuData, setMenuData] = useState({
    breakfasts: BREAKFAST_MENU,
    colddrinks: COLDDRINK_MENU,
    hotdrinks: HOTDRINK_MENU,
  });
  const [breakfastOrder, setBreakfastOrder] = useState({
    selectedNumberOfGuests: "",
    selectedBreakfast: null,
    selectedHotDrink: "",
    selectedColdDrink: "",
    selectedExtras: "",
    selectedOptions: [],
    selectedRoomNumber: "",
    additionalComments: "",
    selectedDate: "",
    selectedTime: "",
  });

  const fetchMenuData = () => {
    try {
      const storedMenuData = getMenuFromLocalStorage();
      setMenuData(storedMenuData);
    } catch (error) {
      console.error("Error fetching menu data from local storage:", error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const setBreakfastOrderData = (data) => {
    setBreakfastOrder((prevOrder) => ({ ...prevOrder, ...data }));
  };

  const value = {
    numberOfGuests,
    setNumberOfGuests,
    breakfastOrder,
    setBreakfastOrderData,
    menuData,
  };

  return (
    <BreakfastOrderContext.Provider value={value}>
      {children}
    </BreakfastOrderContext.Provider>
  );
};

export const useBreakfastOrderContext = () => useContext(BreakfastOrderContext);
