"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import { BREAKFASTASYOULIKEIT_EXTRAS } from "@/public/breakfastAsYouLikeItExtras";
import Button from "@/components/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { grey } from "@mui/material/colors";
export default function BreakfastAsYouLikeIt() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const router = useRouter();
  const { setBreakfastOrderData } = useBreakfastOrder();
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  function handleRadioSelection(breakfastItem) {
    setSelectedBreakfast(breakfastItem);
  }
  function handleSelectClick() {
    if (!selectedBreakfast) {
      return;
    }
    setBreakfastOrderData({
      selectedBreakfast: selectedBreakfast,
      selectedOption: selectedOption,
    });
    router.push("/drinks-menu");
  }
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Select option</h1>
          <RadioGroup value={selectedOption} onChange={handleChange}>
            {BREAKFASTASYOULIKEIT_EXTRAS.map((item) => (
              <FormControlLabel
                key={item.id}
                value={item.name}
                control={
                  <Radio
                    sx={{
                      color: grey[700],
                      "&.Mui-checked": {
                        color: grey[700],
                      },
                    }}
                  />
                }
                label={item.name}
                onClick={() => handleRadioSelection(item)}
              />
            ))}
          </RadioGroup>
          <Button onClick={handleSelectClick}>Select</Button>
        </div>
      </div>
    </>
  );
}
