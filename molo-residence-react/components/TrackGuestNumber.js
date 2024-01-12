"use client";

import React, { useEffect } from "react";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";

export default function GuestNumberParagraph({ currentGuestNumber }) {
  const { numberOfGuests, setBreakfastOrderData } = useBreakfastOrder();

  useEffect(() => {
    setBreakfastOrderData({ numberOfGuests });
  }, [numberOfGuests]);

  return (
    <p className="text-lg">
      Configuring breakfast for person {currentGuestNumber} of {numberOfGuests}
    </p>
  );
}
