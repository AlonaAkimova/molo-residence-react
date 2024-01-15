"use client";
import Header from "@/components/Header";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Button from "@/components/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { grey } from "@mui/material/colors";
import GuestNumberParagraph from "@/components/TrackGuestNumber";

export default function BreakfastAsYouLikeIt() {
  const { setBreakfastOrderData, menuData, numberOfGuests } =
    useBreakfastOrder();
  const [selectedExtras, setSelectedExtras] = useState(null);
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const [currentGuestNumber, setCurrentGuestNumber] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (menuData && menuData.extras) {
      const filteredExtras = menuData.extras.filter(
        (item) => item.breakfastId === 2
      );
      console.log("Filtered Extras:", filteredExtras);
    }
  }, [menuData]);

  useEffect(() => {
    setCurrentGuestNumber(1);
  }, [numberOfGuests]);
  function handleChange(event) {
    setSelectedExtras(event.target.value);
  }

  function handleRadioSelection(chooseBreakfast) {
    setSelectedBreakfast(chooseBreakfast);
  }

  function handleSelectClick() {
    if (!selectedBreakfast || selectedExtras === "") {
      return;
    }

    const selectedBreakfastInfo = menuData.breakfasts.find(
      (item) => item.id === selectedBreakfast.breakfastId
    );
    console.log("Selected Breakfast:", selectedBreakfastInfo);
    console.log("Selected Option:", selectedExtras);

    setBreakfastOrderData({
      selectedBreakfast: {
        id: selectedBreakfastInfo.id,
        name: selectedBreakfastInfo.name,
        description: selectedBreakfastInfo.description,
      },
      selectedExtras,
    });
    router.push("/drinks-menu");
  }

  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Select option</h1>
          {numberOfGuests > 1 && (
            <GuestNumberParagraph currentGuestNumber={currentGuestNumber} />
          )}
          <RadioGroup value={selectedExtras} onChange={handleChange}>
            {menuData && menuData.extras
              ? menuData.extras
                  .filter((item) => item.breakfastId === 2)
                  .map((item) => (
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
                  ))
              : null}
          </RadioGroup>
          <Button onClick={handleSelectClick}>Select</Button>
        </div>
      </div>
    </>
  );
}
