import { render, screen } from "@testing-library/react";
import {
  BreakfastOrderProvider,
  useBreakfastOrderContext,
} from "@/store/BreakfastOrderProvider";

describe("BreakfastOrderProvider", () => {
  it("renders children and provides context values", () => {
    // Arrange
    const TestComponent = () => {
      const breakfastOrderContext = useBreakfastOrderContext();

      // Assert
      expect(breakfastOrderContext?.menuData).toBeDefined();
      expect(breakfastOrderContext?.breakfastOrder).toBeDefined();
      expect(breakfastOrderContext?.setBreakfastOrder).toBeDefined();

      return (
        <>
          <div data-testid="menuData">
            {JSON.stringify(breakfastOrderContext?.menuData)}
          </div>
          <div data-testid="breakfastOrder">
            {JSON.stringify(breakfastOrderContext?.breakfastOrder)}
          </div>
        </>
      );
    };

    // Act
    render(
      <BreakfastOrderProvider>
        <TestComponent />
      </BreakfastOrderProvider>
    );

    // Assert
    expect(screen.getByTestId("menuData")).toBeInTheDocument();
    expect(screen.getByTestId("breakfastOrder")).toBeInTheDocument();
  });
});
