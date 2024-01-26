import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GuestNumber from "../../guest-list/page";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";
jest.mock("next/navigation");

jest.mock("@/store/BreakfastOrderProvider", () => ({
  ...jest.requireActual("@/store/BreakfastOrderProvider"),
  useBreakfastOrder: jest.fn(),
}));

test("Button navigates to next page", () => {
  const mockPush = jest.fn();
  useRouter.mockReturnValue({
    push: mockPush,
  });
  useBreakfastOrder.mockReturnValue({
    setBreakfastOrderData: jest.fn(),
  });

  render(<GuestNumber />);
  const nextPageButton = screen.getByText("Go to breakfast menu");
  fireEvent.click(nextPageButton);

  expect(mockPush).toHaveBeenCalledWith("/breakfast-list");
});

test("GuestNumber component should handle multiple clicks and update the number of guests", () => {
  // Render component and increase the initial number of guests to 3
  render(<GuestNumber />);
  const increaseButton = screen.getByText("+");
  fireEvent.click(increaseButton);
  fireEvent.click(increaseButton);
  fireEvent.click(increaseButton);

  // Decrease the number of guests by one
  const decreaseButton = screen.getByText("-");
  fireEvent.click(decreaseButton);

  // Check if the guest number is updated correctly
  const numberOfGuests = screen.getByText("3");
  expect(numberOfGuests).toHaveTextContent("3");
});