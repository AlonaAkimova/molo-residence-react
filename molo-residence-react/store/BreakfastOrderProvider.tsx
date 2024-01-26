"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  BREAKFAST_MENU,
  COLDDRINK_MENU,
  HOTDRINK_MENU,
} from "@/public/breakfasts";

export interface Breakfast {
  id: number;
  name: string;
  description: string;
  extras?: Array<{
    id: number;
    name: string;
    options?: Array<{ id: number; name: string }>;
  }>;
}
interface BreakfastOrder {
  selectedBreakfast: Breakfast | null;
  selectedColdDrink: Breakfast | null;
  selectedHotDrink: Breakfast | null;
  selectedNumberOfGuests: number;
}
interface BreakfastOrderContextValue {
  menuData: {
    breakfasts: Breakfast[];
    colddrinks: Breakfast[];
    hotdrinks: Breakfast[];
  };
  breakfastOrder: BreakfastOrder;
  setBreakfastOrder: Dispatch<SetStateAction<BreakfastOrder>>;
}
const BreakfastOrderContext = createContext<
  BreakfastOrderContextValue | undefined
>(undefined);

export function BreakfastOrderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuData, setMenuData] = useState({
    breakfasts: BREAKFAST_MENU,
    colddrinks: COLDDRINK_MENU,
    hotdrinks: HOTDRINK_MENU,
  });
  const [breakfastOrder, setBreakfastOrder] = useState<BreakfastOrder>({
    selectedNumberOfGuests: 1,
    selectedBreakfast: null,
    selectedColdDrink: null,
    selectedHotDrink: null,
  });
  const value: BreakfastOrderContextValue = {
    menuData,
    breakfastOrder,
    setBreakfastOrder,
  };
  return (
    <BreakfastOrderContext.Provider value={value}>
      {children}
    </BreakfastOrderContext.Provider>
  );
}
export function useBreakfastOrderContext() {
  const context = useContext(BreakfastOrderContext);
  if (!context) {
    throw new Error(
      "useBreakfastOrderContext must be used within a BreakfastOrderProvider"
    );
  }
  return context;
}
