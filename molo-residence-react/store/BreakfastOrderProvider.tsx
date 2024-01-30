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
import { Dayjs } from "dayjs";

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
export interface BreakfastOrder {
  selectedBreakfast: Breakfast | null;
  selectedColdDrink: string | null;
  selectedHotDrink: string | null;
  selectedNumberOfGuests: number;
  selectedExtras: Array<{
    id: number;
    name: string;
    options?: Array<{ id: number; name: string }>;
  }>;
  selectedOptions: Array<{ id: number; name: string }>;
  selectedDate?: string | null;
  selectedTime?: string | null;
  selectedRoom?: string;
  additionalComments?: string;
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
    selectedExtras: [],
    selectedOptions: [],
    selectedDate: null,
    selectedTime: null,
    selectedRoom: "",
    additionalComments: "",
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
