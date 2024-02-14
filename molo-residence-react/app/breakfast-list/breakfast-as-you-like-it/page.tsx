"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useBreakfastOrderContext } from "@/store/BreakfastOrderProvider";
import Button from "@/components/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { grey } from "@mui/material/colors";

export default function BreakfastAsYouLikeIt() {
  const { setBreakfastOrder, menuData, loading } = useBreakfastOrderContext();
  const router = useRouter();
  const [selectedExtras, setSelectedExtras] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedExtraName = event.target.value;
    setSelectedExtras(selectedExtraName);
    const selectedExtra = menuData.breakfasts[1].extras?.find(
      (extra) => extra.name === selectedExtraName
    );
    if (selectedExtra) {
      setBreakfastOrder((prevBreakfastOrder) => ({
        ...prevBreakfastOrder,
        selectedExtras: [selectedExtra],
      }));
    }
  };

  const handleSelectClick = () => {
    if (
      !selectedExtras ||
      !menuData?.breakfasts ||
      !menuData.breakfasts[1]?.extras
    ) {
      return;
    }
    router.push("/drinks-menu");
  };
  return (
    <>
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-neutral-950 font-bold mb-6">Select option</h1>
          {loading ? (
            <div className="text-neutral-950 font-bold mb-6">Loading...</div>
          ) : (
            <RadioGroup value={selectedExtras} onChange={handleRadioChange}>
              {menuData &&
                menuData.breakfasts[1].extras &&
                menuData.breakfasts[1].extras.map((extra) => (
                  <FormControlLabel
                    data-testid="extra-option"
                    key={extra.id}
                    value={extra.name}
                    control={
                      <Radio
                        data-testid="extra-option"
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
          )}
          <Button onClick={handleSelectClick}>Select</Button>
        </div>
      </div>
    </>
  );
}
