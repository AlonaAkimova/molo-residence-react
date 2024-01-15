"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import GuestNumberParagraph from "@/components/TrackGuestNumber";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { grey } from "@mui/material/colors";

export default function EnergyBreakfast() {
  const { setBreakfastOrderData, menuData, numberOfGuests, breakfastOrder } =
    useBreakfastOrder();
  const [selectedExtras, setSelectedExtras] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const [currentGuestNumber, setCurrentGuestNumber] = useState(1);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const router = useRouter();
  const selectedBreakfastId = 1;

  useEffect(() => {
    console.log("useEffect - breakfastOrder:", breakfastOrder);
    console.log("useEffect - numberOfGuests:", numberOfGuests);
    console.log("useEffect - selectedOptions:", selectedOptions);
  }, [breakfastOrder, numberOfGuests, selectedOptions]);

  useEffect(() => {
    setCurrentGuestNumber(1);
  }, [numberOfGuests]);

  useEffect(() => {
    if (selectedBreakfast && selectedBreakfast.id === 3) {
      // "scrambled eggs" has options
      setShowCheckboxes(true);
    } else {
      setShowCheckboxes(false);
      setSelectedOptions([]);
    }
  }, [selectedBreakfast]);

  // breakfast Extra options
  function handleChange(event) {
    setSelectedExtras(event.target.value);
  }

  function handleCheckboxChange(event, option) {
    const isChecked = event.target.checked;

    setSelectedOptions((prevOptions) => {
      const updatedOptions = isChecked
        ? [...prevOptions, { id: option.id, name: option.name }]
        : prevOptions.filter((prevOption) => prevOption.id !== option.id);

      console.log("Updated State - selectedOptions:", updatedOptions);

      return updatedOptions;
    });
  }

  function handleRadioSelection(chooseBreakfastOption) {
    setSelectedBreakfast(chooseBreakfastOption);
    setSelectedExtras([]);
  }

  function handleSelectClick() {
    if (!selectedExtras && selectedOptions.length === 0) {
      return;
    }

    const selectedBreakfastInfo = menuData.breakfasts.find(
      (item) => item.id === selectedBreakfastId
    );

    const guestChoice = {
      selectedBreakfast: {
        id: selectedBreakfastInfo.id,
        name: selectedBreakfastInfo.name,
        description: selectedBreakfastInfo.description,
      },
      selectedExtras,
      selectedOptions: selectedOptions.map((option) => option.name),
    };

    setBreakfastOrderData(guestChoice);
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
            {menuData &&
              menuData.extras
                .filter((item) => item.breakfastId === selectedBreakfastId)
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
                ))}
          </RadioGroup>
          {selectedBreakfast && selectedBreakfast.options && (
            <div className="flex flex-row">
              {selectedBreakfast.options.map((option) => (
                <FormControlLabel
                  key={option.id}
                  control={
                    <Checkbox
                      checked={selectedOptions.some((o) => o.id === option.id)}
                      onChange={(event) => handleCheckboxChange(event, option)}
                    />
                  }
                  label={option.name}
                />
              ))}
            </div>
          )}

          <Button onClick={handleSelectClick}>Select</Button>
        </div>
      </div>
    </>
  );
}
