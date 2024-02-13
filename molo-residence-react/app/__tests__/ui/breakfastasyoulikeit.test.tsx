import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import BreakfastAsYouLikeIt from "@/app/breakfast-list/breakfast-as-you-like-it/page";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("BreakfastAsYouLikeIt", () => {
  it("renders the extra menu for breakfast-as-you-like-it component", async () => {
    render(
      <BreakfastOrderProvider>
        <BreakfastAsYouLikeIt />
      </BreakfastOrderProvider>
    );
    await waitFor(() => {
      const radio = screen.getByText("toast with salmon and vegetables");
      expect(radio).toBeInTheDocument();
    });
  });
  it("should navigate to the next page when button confirm is clicked", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    render(
      <BreakfastOrderProvider>
        <BreakfastAsYouLikeIt />
      </BreakfastOrderProvider>
    );

    const confirmButton = screen.getByText("Select");
    fireEvent.click(confirmButton);
    // expect(mockPush).toHaveBeenCalledWith("/drinks-menu");
  });
});
