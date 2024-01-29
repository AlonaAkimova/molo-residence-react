import React from "react";
import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";

test("page has correct image", () => {
  render(<Header />);
  const image = screen.getByRole("img", { name: "Logo" }) as HTMLImageElement;
  expect(image).toBeInTheDocument();
});
