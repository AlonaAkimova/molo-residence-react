"use client";
import React, { createContext, useState } from "react";

export const GuestListContext = createContext();

export const GuestListProvider = ({ children }) => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleDecrease = () => {
    if (numberOfGuests > 1) {
      setNumberOfGuests(numberOfGuests - 1);
    }
  };

  const handleIncrease = () => {
    if (numberOfGuests < 6) {
      setNumberOfGuests(numberOfGuests + 1);
    }
  };

  const value = {
    numberOfGuests,
    handleDecrease,
    handleIncrease,
  };

  return (
    <GuestListContext.Provider value={value}>
      {children}
    </GuestListContext.Provider>
  );
};
