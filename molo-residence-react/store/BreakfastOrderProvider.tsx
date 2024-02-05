"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import {
  BREAKFAST_MENU,
  COLDDRINK_MENU,
  HOTDRINK_MENU,
} from "@/public/breakfasts";
import { resolve } from "path";

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
  }> | null;
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
  loading: boolean;
  breakfastOrder: BreakfastOrder;
  setBreakfastOrder: Dispatch<SetStateAction<BreakfastOrder>>;
}
const BreakfastOrderContext = createContext<
  BreakfastOrderContextValue | undefined
>(undefined);

type BreakfastOrderProviderProps = {
  children: ReactNode;
};

export function BreakfastOrderProvider({
  children,
}: BreakfastOrderProviderProps) {
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
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise<void>((resolve) => resolve());
      setMenuData({
        breakfasts: BREAKFAST_MENU,
        colddrinks: COLDDRINK_MENU,
        hotdrinks: HOTDRINK_MENU,
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const value: BreakfastOrderContextValue = {
    menuData,
    breakfastOrder,
    setBreakfastOrder,
    loading,
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
