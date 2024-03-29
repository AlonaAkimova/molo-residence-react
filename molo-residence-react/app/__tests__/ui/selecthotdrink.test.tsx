import React from "react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SelectHotDrink from "@/components/SelectHotDrink";
import { SelectChangeEvent } from "@mui/material";

describe("Select hot drink test component", () => {
  it("should display label", async () => {
    const options = [
      { id: 1, name: "Hot drinks", description: "Black Coffee" },
      { id: 2, name: "Hot drinks", description: "White Coffee" },
    ];
    render(
      <SelectHotDrink
        options={options}
        value={""}
        onChange={function (
          event: SelectChangeEvent<string>,
          child: React.ReactNode
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(
      await screen.findByLabelText("Select a hot drink")
    ).toBeInTheDocument();
  });
  it("should display dropdown menu", async () => {
    const options = [
      { id: 1, name: "Hot drinks", description: "Black Coffee" },
      { id: 2, name: "Hot drinks", description: "White Coffee" },
    ];
    render(
      <SelectHotDrink
        options={options}
        value={""}
        onChange={function (
          event: SelectChangeEvent<string>,
          child: React.ReactNode
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(
      within(await screen.findByTestId("hot-drinks")).getByRole("combobox")
    ).toBeInTheDocument();
  });

  it("should display options", async () => {
    const options = [
      { id: 1, name: "Hot drinks", description: "Black Coffee" },
      { id: 2, name: "Hot drinks", description: "White Coffee" },
    ];
    render(
      <SelectHotDrink
        options={options}
        value={""}
        onChange={function (
          event: SelectChangeEvent<string>,
          child: React.ReactNode
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
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
    render(
      <SelectHotDrink
        options={options}
        value={selectedValue}
        onChange={function (
          event: SelectChangeEvent<string>,
          child: React.ReactNode
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
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
