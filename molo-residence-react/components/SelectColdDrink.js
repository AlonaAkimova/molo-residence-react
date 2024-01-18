"use client";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
export default function SelectColdDrink({ value, onChange, options }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="cold-drinks-label">Select a cold drink</InputLabel>
      <Select
        labelId="cold-drinks-label"
        id="cold-drinks"
        value={value}
        onChange={onChange}
      >
        {options.map((drink) => (
          <MenuItem key={drink.id} value={drink.description}>
            {drink.description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
