import React from "react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SelectColdDrink from "@/components/SelectColdDrink";

describe("Select cold drink test component", () => {
  it("should display label", async () => {
    const options = [
      { id: 1, name: "Cold drinks", description: "Orange juice" },
      { id: 2, name: "Cold drinks", description: "Grapefruit juice" },
    ];
    render(<SelectColdDrink options={options} />);
    expect(
      await screen.findByLabelText("Select a cold drink")
    ).toBeInTheDocument();
  });
  it("should display dropdown menu", async () => {
    const options = [
      { id: 1, name: "Cold drinks", description: "Orange juice" },
      { id: 2, name: "Cold drinks", description: "Grapefruit juice" },
    ];
    render(<SelectColdDrink options={options} />);

    expect(
      within(await screen.findByTestId("cold-drinks")).getByRole("combobox")
    ).toBeInTheDocument();
  });

  it("should display options", async () => {
    const options = [
      { id: 1, name: "Cold drinks", description: "Orange juice" },
      { id: 2, name: "Cold drinks", description: "Grapefruit juice" },
    ];
    render(<SelectColdDrink options={options} />);
    const dropdown = within(await screen.findByTestId("cold-drinks")).getByRole(
      "combobox"
    );
    await userEvent.click(dropdown);
    expect(
      await screen.findByRole("option", { name: "Orange juice" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Grapefruit juice" })
    ).toBeInTheDocument();
  });
  it("should display selected value", async () => {
    const options = [
      { id: 1, name: "Cold drinks", description: "Orange juice" },
      { id: 2, name: "Cold drinks", description: "Grapefruit juice" },
    ];
    const selectedValue = "Orange juice";
    render(<SelectColdDrink options={options} value={selectedValue} />);
    const dropdown = within(await screen.findByTestId("cold-drinks")).getByRole(
      "combobox"
    );
    await userEvent.click(dropdown);
    await userEvent.click(
      await screen.findByRole("option", { name: selectedValue })
    );

    expect(screen.getByText("Orange juice")).toBeInTheDocument();
  });
});
