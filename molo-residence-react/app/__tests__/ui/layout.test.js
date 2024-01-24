import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RootLayout from "../../layout";

test("renders children inside AppRouterCacheProvider and BreakfastOrderProvider", () => {
  // Arrange
  const ChildComponent = () => <div>Child Component</div>;

  // Act
  render(
    <RootLayout>
      <ChildComponent />
    </RootLayout>
  );

  // Assert
  expect(screen.getByText("Child Component")).toBeInTheDocument();
});
