import { render, screen } from "@testing-library/react";
import {
  BreakfastOrderProvider,
  useBreakfastOrder,
} from "@/store/BreakfastOrderProvider";

// Create a MockComponent to render within the BreakfastOrderProvider
const MockComponent = () => {
  const {
    numberOfGuests,
    setNumberOfGuests,
    breakfastOrder,
    setBreakfastOrderData,
    menuData,
  } = useBreakfastOrder();

  return (
    <div>
      <span>{numberOfGuests}</span>
      <span>{JSON.stringify(breakfastOrder)}</span>
      <span>{JSON.stringify(menuData)}</span>
    </div>
  );
};

describe("<BreakfastOrderProvider />", () => {
  it("provides expected context obj to child elements", () => {
    render(
      <BreakfastOrderProvider>
        <MockComponent />
      </BreakfastOrderProvider>
    );

    expect(screen.getByText("1")).toBeInTheDocument();

    // check if data is present in the rendered output

    //  jest.mock('localStorage', () => ({ getItem: jest.fn() }));

    // Example:
    // expect(screen.getByText('{"breakfasts": [...], "colddrinks": [...], "hotdrinks": [...]}')).toBeInTheDocument();
  });
});
