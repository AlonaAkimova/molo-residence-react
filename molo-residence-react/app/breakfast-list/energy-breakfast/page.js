"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { ENERGY_BREAKFAST_EXTRAS } from "@/public/energyBreakfastExtras";
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
  const router = useRouter();
  const { setBreakfastOrderData } = useBreakfastOrder();

  const handleBreakfastChange = (selectedId) => {
    const changeBreakfasts = ENERGY_BREAKFAST_EXTRAS.find(
      (breakfast) => breakfast.id === selectedId
    );
    setSelectedBreakfast(changeBreakfasts);
    setSelectedOptions({});
  };

  const handleCheckboxChange = (optionId, breakfastId) => {
    setSelectedOptions({
      ...selectedOptions,
      [breakfastId]: optionId,
    });
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
            {ENERGY_BREAKFAST_EXTRAS.map((breakfast) => (
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
                    {breakfast.options &&
                      breakfast.options.map((option) => (
                        <div key={option.id} className="optionItem">
                          <Checkbox
                            checked={
                              selectedOptions[breakfast.id] === option.id
                            }
                            onChange={() =>
                              handleCheckboxChange(option.id, breakfast.id)
                            }
                          />
                          <span className="breakfastOption">{option.name}</span>
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
