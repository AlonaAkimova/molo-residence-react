import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GuestNumber from "@/app/guest-list/page";
import {
  BreakfastOrderProvider,
  useBreakfastOrderContext,
} from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";

jest.mock("next/navigation");

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
  it("navigates to the next page when button goToBreakfastMenu is clicked", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    render(
      <BreakfastOrderProvider>
        <GuestNumber />
      </BreakfastOrderProvider>
    );

    const goToBreakfastMenuButton = screen.getByText("Go to breakfast menu");
    userEvent.click(goToBreakfastMenuButton);

    await waitFor(() => {
      // Ensure that useRouter is called with the correct route
      expect(mockPush).toHaveBeenCalledWith("/breakfast-list");
    });
  });
});
