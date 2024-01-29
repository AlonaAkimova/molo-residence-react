import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

test("handles click", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Click me</Button>);
  const buttonElement = screen.getByText("Click me") as HTMLButtonElement;
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
