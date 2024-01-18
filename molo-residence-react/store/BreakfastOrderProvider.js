"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  BREAKFAST_MENU,
  COLDDRINK_MENU,
  HOTDRINK_MENU,
} from "@/public/breakfasts";
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
    // Fetching data from the MenuComponent
    const fetchedMenuData = {
      breakfasts: BREAKFAST_MENU,
      colddrinks: COLDDRINK_MENU,
      hotdrinks: HOTDRINK_MENU,
    };

    setMenuData(fetchedMenuData);
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
