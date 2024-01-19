"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import GuestNumberParagraph from "@/components/TrackGuestNumber";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

export default function EnergyBreakfast() {
  const { setBreakfastOrderData, menuData } = useBreakfastOrder();
  const router = useRouter();
  const [selectedExtras, setSelectedExtras] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleRadioChange(event) {
    setSelectedExtras(event.target.value);
  }
  function handleCheckboxChange(option) {
    setSelectedOptions((prevOptions) => {
      const updatedOptions = prevOptions.includes(option)
        ? prevOptions.filter((prevOption) => prevOption !== option)
        : [...prevOptions, option];

      return updatedOptions;
    });
  }
  function handleSelectClick() {
    if (!selectedExtras) {
      return;
    }
    const selectedExtra = menuData.breakfasts[0].extras.find(
      (extra) => extra.name === selectedExtras
    );
    setBreakfastOrderData({
      selectedExtras: selectedExtra,
      selectedOptions,
    });
    router.push("/drinks-menu");
  }
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Select option</h1>
          <RadioGroup value={selectedExtras} onChange={handleRadioChange}>
            {menuData &&
              menuData.breakfasts[0].extras &&
              menuData.breakfasts[0].extras.map((extra) => (
                <FormControlLabel
                  key={extra.id}
                  value={extra.name}
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
                  label={extra.name}
                />
              ))}
          </RadioGroup>
          <div className="flex flex-row ml-6">
            {selectedExtras &&
              menuData.breakfasts[0].extras
                .find((extra) => extra.name === selectedExtras)
                ?.options?.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    control={<Checkbox />}
                    label={option.name}
                    onChange={() => handleCheckboxChange(option)}
                  />
                ))}
          </div>
          <Button onClick={handleSelectClick}>Select</Button>
        </div>
      </div>
    </>
  );
}
