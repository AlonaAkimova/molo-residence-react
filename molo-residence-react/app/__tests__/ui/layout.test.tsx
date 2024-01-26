import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RootLayout from "../../layout";
import React from "react";

test("renders children inside AppRouterCacheProvider and BreakfastOrderProvider", () => {
  // Arrange
  const ChildComponent: React.FC = () => <div>Child Component</div>;

  // Act
  render(
    <RootLayout>
      <ChildComponent />
    </RootLayout>
  );

  // Assert
  expect(screen.getByText("Child Component")).toBeInTheDocument();
});
