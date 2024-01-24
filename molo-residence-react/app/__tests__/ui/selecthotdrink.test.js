import React from "react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SelectHotDrink from "@/components/SelectHotDrink";

describe("Select hot drink test component", () => {
  it("should display label", async () => {
    const options = [
      { id: 1, name: "Hot drinks", description: "Black Coffee" },
      { id: 2, name: "Hot drinks", description: "White Coffee" },
    ];
    render(<SelectHotDrink options={options} />);
    expect(
      await screen.findByLabelText("Select a hot drink")
    ).toBeInTheDocument();
  });
  it("should display dropdown menu", async () => {
    const options = [
      { id: 1, name: "Hot drinks", description: "Black Coffee" },
      { id: 2, name: "Hot drinks", description: "White Coffee" },
    ];
    render(<SelectHotDrink options={options} />);

    expect(
      within(await screen.findByTestId("hot-drinks")).getByRole("combobox")
    ).toBeInTheDocument();
  });

  it("should display options", async () => {
    const options = [
      { id: 1, name: "Hot drinks", description: "Black Coffee" },
      { id: 2, name: "Hot drinks", description: "White Coffee" },
    ];
    render(<SelectHotDrink options={options} />);
    const dropdown = within(await screen.findByTestId("hot-drinks")).getByRole(
      "combobox"
    );
    await userEvent.click(dropdown);
    expect(
      await screen.findByRole("option", { name: "Black Coffee" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "White Coffee" })
    ).toBeInTheDocument();
  });
  it("should display selected value", async () => {
    const options = [
      { id: 1, name: "Hot drinks", description: "Black Coffee" },
      { id: 2, name: "Hot drinks", description: "White Coffee" },
    ];
    const selectedValue = "Black Coffee";
    render(<SelectHotDrink options={options} value={selectedValue} />);
    const dropdown = within(await screen.findByTestId("hot-drinks")).getByRole(
      "combobox"
    );
    await userEvent.click(dropdown);
    await userEvent.click(
      await screen.findByRole("option", { name: selectedValue })
    );

    expect(screen.getByText("Black Coffee")).toBeInTheDocument();
  });
});
