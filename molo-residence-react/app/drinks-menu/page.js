"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { HOTDRINK_MENU } from "@/public/hotdrinks";
import { COLDDRINK_MENU } from "@/public/colddrinks";
import Button from "@/components/Button";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
export default function DrinksMenu() {
  const [selectedHotDrink, setSelectedHotDrink] = useState("");
  const [selectedColdDrink, setSelectedColdDrink] = useState("");
  const { setBreakfastOrderData } = useBreakfastOrder();
  const handleHotDrinkChange = (event) => {
    setSelectedHotDrink(event.target.value);
  };

  const handleColdDrinkChange = (event) => {
    setSelectedColdDrink(event.target.value);
  };
  const handleNextClick = () => {
    setBreakfastOrderData({
      selectedHotDrink: selectedHotDrink,
      selectedColdDrink: selectedColdDrink,
    });
  };
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Choose a drink
          </h1>
          <div className="space-y-4">
            <FormControl fullWidth>
              <InputLabel id="hot-drinks-label">Select a hot drink</InputLabel>
              <Select
                labelId="hot-drinks-label"
                id="hot-drinks"
                value={selectedHotDrink}
                onChange={handleHotDrinkChange}
              >
                {HOTDRINK_MENU.map((drink) => (
                  <MenuItem key={drink.id} value={drink.description}>
                    {drink.description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="cold-drinks-label">
                Select a cold drink
              </InputLabel>
              <Select
                labelId="cold-drinks-label"
                id="cold-drinks"
                value={selectedColdDrink}
                onChange={handleColdDrinkChange}
              >
                {COLDDRINK_MENU.map((drink) => (
                  <MenuItem key={drink.id} value={drink.description}>
                    {drink.description}
                  </MenuItem>
                ))}
              </Select>
              <Button onClick={handleNextClick}>Next</Button>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
}
