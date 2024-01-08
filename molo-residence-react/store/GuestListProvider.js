"use client";
import React, { createContext, useState } from "react";

export const GuestListContext = createContext();

export const GuestListProvider = ({ children }) => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleDecrease = () => {
    setNumberOfGuests((prevGuests) =>
      prevGuests > 1 ? prevGuests - 1 : prevGuests
    );
  };

  const handleIncrease = () => {
    setNumberOfGuests((prevGuests) =>
      prevGuests < 6 ? prevGuests + 1 : prevGuests
    );
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
