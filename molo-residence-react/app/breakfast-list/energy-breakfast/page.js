"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import GuestNumberParagraph from "@/components/TrackGuestNumber";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { grey } from "@mui/material/colors";

export default function EnergyBreakfast() {
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentGuestNumber, setCurrentGuestNumber] = useState(1);
  const router = useRouter();
  const { setBreakfastOrderData, menuData, numberOfGuests } =
    useBreakfastOrder();
  const selectedBreakfastId = 1;

  useEffect(() => {
    console.log("Menu Data:", menuData);
  }, [menuData]);

  useEffect(() => {
    setCurrentGuestNumber(1);
  }, [numberOfGuests]);

  const handleBreakfastChange = (selectedId) => {
    const changeBreakfast = menuData.extras.find(
      (breakfast) => breakfast.id === selectedId
    );
    setSelectedBreakfast(changeBreakfast);
    setSelectedOptions({});
  };

  const handleCheckboxChange = (optionId, breakfastId) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [breakfastId]: optionId,
    }));
  };

  const handleSelectClick = () => {
    if (!selectedBreakfast) {
      return;
    }

    const breakfastWithSelectedOptions = {
      ...selectedBreakfast,
      selectedOptions: selectedOptions[selectedBreakfast.id],
    };

    setBreakfastOrderData({
      selectedBreakfast: breakfastWithSelectedOptions,
      selectedOptions: selectedOptions,
    });

    router.push("/drinks-menu");
  };

  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <FormControl>
            <FormLabel
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
                padding: "8px",
                textAlign: "center",
                "&.Mui-focused": {
                  color: "black",
                },
              }}
            >
              Select option
            </FormLabel>
            {numberOfGuests > 1 && (
              <GuestNumberParagraph currentGuestNumber={currentGuestNumber} />
            )}

            {menuData &&
              menuData.extras
                .filter((item) => item.breakfastId === selectedBreakfastId)
                .map((breakfast) => (
                  <div key={breakfast.id}>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={selectedBreakfast?.id === breakfast.id}
                          onChange={() => handleBreakfastChange(breakfast.id)}
                          name="radio-buttons"
                          sx={{
                            color: grey[700],
                            "&.Mui-checked": {
                              color: grey[700],
                            },
                          }}
                        />
                      }
                      label={breakfast.name}
                    />
                    {selectedBreakfast?.id === breakfast.id && (
                      <div className="flex flex-row">
                        {menuData.options &&
                          menuData.options
                            .filter((option) => option.extraId === breakfast.id)
                            .map((option) => (
                              <div key={option.id} className="optionItem">
                                <Checkbox
                                  checked={
                                    selectedOptions[breakfast.id] === option.id
                                  }
                                  onChange={() =>
                                    handleCheckboxChange(
                                      option.id,
                                      breakfast.id
                                    )
                                  }
                                />
                                <span className="breakfastOption">
                                  {option.name}
                                </span>
                              </div>
                            ))}
                      </div>
                    )}
                  </div>
                ))}

            <Button onClick={handleSelectClick}>Select</Button>
          </FormControl>
        </div>
      </div>
    </>
  );
}
