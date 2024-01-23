import React from "react";
import { render, screen } from "@testing-library/react";
import SelectColdDrink from "@/components/SelectColdDrink";

jest.mock("@mui/material/FormControl");
jest.mock("@mui/material/InputLabel");
jest.mock("@mui/material/Select");
jest.mock("@mui/material/MenuItem");

test("renders SelectColdDrink component", () => {
  // Mock data for options
  const options = [
    { id: 1, description: "Cola" },
    { id: 2, description: "Lemonade" },
    { id: 3, description: "Iced Tea" },
  ];

  // Render the component
  render(<SelectColdDrink value="" onChange={() => {}} options={options} />);

  options.forEach((option) => {
    expect(screen.getByText(option.description)).toBeInTheDocument();
  });
});
