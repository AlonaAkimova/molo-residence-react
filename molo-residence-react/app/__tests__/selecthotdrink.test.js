import React from "react";
import { render, screen } from "@testing-library/react";
import SelectHotDrink from "@/components/SelectHotDrink";

jest.mock("@mui/material/FormControl");
jest.mock("@mui/material/InputLabel");
jest.mock("@mui/material/Select");
jest.mock("@mui/material/MenuItem");

test("renders SelectHotDrink component", () => {
  // Mock data for options
  const options = [
    { id: 1, description: "Tea" },
    { id: 2, description: "Coffee" },
    { id: 3, description: "Americano" },
  ];

  // Render the component
  render(<SelectHotDrink value="" onChange={() => {}} options={options} />);
});
