import DrinksMenu from "@/app/drinks-menu/page";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
describe("Drinks Menu component", () => {
  it("should have heading", async () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });

    render(
      <BreakfastOrderProvider>
        <DrinksMenu />
      </BreakfastOrderProvider>
    );

    await waitFor(() => {
      const heading = screen.getByRole("heading", {
        name: "Something to drink?",
      });
      expect(heading).toBeInTheDocument();
    });
  });
  it("should navigate to the next page when button next is clicked", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(
      <BreakfastOrderProvider>
        <DrinksMenu />
      </BreakfastOrderProvider>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByText("Next"));
      expect(mockPush).toHaveBeenCalledWith("/details");
    });
  });
});
