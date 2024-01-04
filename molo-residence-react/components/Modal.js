"use client";
import React, { useState, useEffect } from "react";
import { BREAKFAST_MENU } from "@/public/breakfasts";
import { FormControlLabel, Radio, RadioGroup, Button } from "@mui/material";

export default function Modal({ selectedBreakfast, closeModal }) {
  const [optionsData, setOptionsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedBreakfast) {
      const selectedItem = BREAKFAST_MENU.find(
        (item) => item.id === selectedBreakfast.id
      );

      const options = [];

      if (selectedItem.option1) {
        options.push(selectedItem.option1);
      }
      if (selectedItem.option2) {
        options.push(selectedItem.option2);
      }
      if (
        selectedBreakfast.name === "Breakfast as you like it" ||
        selectedBreakfast.name === "Energy Breakfast"
      ) {
        if (selectedItem.option3) {
          options.push(selectedItem.option3);
        }
      }

      setOptionsData(options);
    }
  }, [selectedBreakfast]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    // Handling the next step after selecting an option
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <span
          className="absolute top-0 right-0 mt-1 mr-1 text-gray-500 cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </span>
        <div>
          <h2 className="text-2xl font-bold mb-2">Options</h2>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {optionsData &&
              optionsData.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio color="default" />}
                  label={option}
                />
              ))}
          </RadioGroup>
          <Button
            onClick={handleNextClick}
            variant="contained"
            sx={{
              backgroundColor: " #FF8032 ",
              color: "#292625",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              fontSize: "12px",
              fontWeight: "bold",
              borderRadius: "8px",
              py: "8px",
              px: "10px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#FF8032",
              },
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
