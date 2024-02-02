"use client";
import React, { useState, useEffect, FC, ChangeEvent } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import GuestNumberParagraph from "@/components/TrackGuestNumber";
import { useBreakfastOrderContext } from "@/store/BreakfastOrderProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

const EnergyBreakfast: FC = () => {
  const { setBreakfastOrder, menuData } = useBreakfastOrderContext();
  const router = useRouter();
  const [selectedExtras, setSelectedExtras] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<
    Array<{ id: number; name: string }>
  >([]);

  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedExtras(event.target.value);
  }

  function handleCheckboxChange(option: { id: number; name: string }) {
    setSelectedOptions((prevOptions) => {
      const updatedOptions = prevOptions.some(
        (prevOption) => prevOption.id === option.id
      )
        ? prevOptions.filter((prevOption) => prevOption.id !== option.id)
        : [...prevOptions, option];

      return updatedOptions;
    });
  }

  function handleSelectClick() {
    if (
      !selectedExtras ||
      !menuData?.breakfasts ||
      !menuData.breakfasts[0]?.extras
    ) {
      return;
    }
    const selectedExtra = menuData.breakfasts[0]?.extras.find(
      (extra) => extra.name === selectedExtras
    );
    if (!selectedExtra) {
      return;
    }

    setBreakfastOrder((prevBreakfastOrder) => ({
      ...prevBreakfastOrder,
      selectedExtras: [selectedExtra],
      selectedOptions,
    }));
    router.push("/drinks-menu");
  }

  return (
    <>
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
              menuData.breakfasts[0]?.extras
                ?.find((extra) => extra.name === selectedExtras)
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
};
export default EnergyBreakfast;
