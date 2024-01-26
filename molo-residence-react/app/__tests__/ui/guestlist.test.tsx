import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GuestNumber from "@/app/guest-list/page";
import {
  BreakfastOrderProvider,
  useBreakfastOrderContext,
} from "@/store/BreakfastOrderProvider";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/store/BreakfastOrderProvider", () => ({
  ...jest.requireActual("@/store/BreakfastOrderProvider"),
  useBreakfastOrderContext: () => ({
    setBreakfastOrder: jest.fn(),
  }),
}));
describe("testing GuestList page wrapped with context provider", () => {
  it("increases/decreases number of guests when button is clicked", async () => {
    render(
      <BreakfastOrderProvider>
        <GuestNumber />
      </BreakfastOrderProvider>
    );
    // Initial state
    const numberOfGuestsText = screen.getByText(/How many persons?/i);
    expect(numberOfGuestsText).toBeInTheDocument();

    const decreaseButton = screen.getByText("-");
    userEvent.click(decreaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();
    1;

    const increaseButton = screen.getByText("+");
    userEvent.click(increaseButton);
    await waitFor(() => {
      expect(screen.getByText("2")).toBeInTheDocument();
    });
  });
  it("passes data to the breakfastContext provider when button goToBreakfastMenu is clicked", async () => {
    render(
      <BreakfastOrderProvider>
        <GuestNumber />
      </BreakfastOrderProvider>
    );

    const goToBreakfastMenuButton = screen.getByText("Go to breakfast menu");
    userEvent.click(goToBreakfastMenuButton);

    await waitFor(() => {
      const { setBreakfastOrder } = useBreakfastOrderContext();
      expect(setBreakfastOrder).toHaveBeenCalledWith({
        selectedNumberOfGuests: 1,
      });
    });
  });
});
