"use client";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
export default function SelectHotDrink({ options, value, onChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="hot-drinks-label">Select a hot drink</InputLabel>
      <Select
        labelId="hot-drinks-label"
        id="hot-drinks"
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
