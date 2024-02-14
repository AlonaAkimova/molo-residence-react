import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BreakfastItem from "@/components/BreakfastItem";

jest.mock("@/components/Button", () => ({ onClick, children }: any) => (
  <button onClick={onClick}>{children}</button>
));

describe("BreakfastItem", () => {
  it("renders BreakfastItem component", async () => {
    const breakfast = {
      id: 1,
      name: "Test Breakfast",
      description: "This is a test breakfast",
    };

    const onClick = jest.fn();

    render(<BreakfastItem breakfast={breakfast} onClick={onClick} />);

    expect(screen.getByText("Test Breakfast")).toBeInTheDocument();
    expect(screen.getByText("This is a test breakfast")).toBeInTheDocument();

    const selectButton = screen.getByText("Select") as HTMLButtonElement;
    fireEvent.click(selectButton);

    expect(onClick).toHaveBeenCalledWith(breakfast);
  });
});
BreakfastItem.displayName = "BreakfastItem";
