"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import { BREAKFASTASYOULIKEIT_EXTRAS } from "@/public/breakfastAsYouLikeItExtras";
import Button from "@/components/Button";
export default function BreakfastAsYouLikeIt() {
  const [breakfastData, setBreakfastData] = useState(
    BREAKFASTASYOULIKEIT_EXTRAS
  );

  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div>
          <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Select option</h1>
            <ul>
              {breakfastData.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <Button>Select</Button>
          </div>
        </div>
      </div>
    </>
  );
}
