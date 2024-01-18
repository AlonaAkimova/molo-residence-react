"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import Button from "@/components/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { grey } from "@mui/material/colors";

export default function BreakfastAsYouLikeIt() {
  const { setBreakfastOrderData, menuData } = useBreakfastOrder();
  const router = useRouter();
  const [selectedExtras, setSelectedExtras] = useState("");

  function handleRadioChange(event) {
    setSelectedExtras(event.target.value);
  }

  function handleSelectClick() {
    if (!selectedExtras) {
      return;
    }
    const selectedExtra = menuData.breakfasts[1].extras.find(
      (extra) => extra.name === selectedExtras
    );
    setBreakfastOrderData({
      selectedExtras: selectedExtra,
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
              menuData.breakfasts[1].extras &&
              menuData.breakfasts[1].extras.map((extra) => (
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
          <Button onClick={handleSelectClick}>Select</Button>
        </div>
      </div>
    </>
  );
}
