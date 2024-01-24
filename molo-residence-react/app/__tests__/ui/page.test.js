import HomePage from "../../page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test('renders heading "Breakfast in bed"', () => {
  render(<HomePage />);
  const heading = screen.getByRole("heading", {
    name: "Breakfast in bed",
  });
  expect(heading).toBeInTheDocument();
});

test("renders description text", () => {
  render(<HomePage />);
  const descriptionText = screen.getByText(
    "Try our delicious breakfast served straight to your room"
  );
  expect(descriptionText).toBeInTheDocument();
});

test("renders link with correct href", () => {
  render(<HomePage />);
  const orderLink = screen.getByRole("link", { name: "Order breakfast" });
  expect(orderLink).toHaveAttribute("href", "/guest-list");
});
