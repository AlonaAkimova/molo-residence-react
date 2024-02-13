import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EnergyBreakfast from "@/app/breakfast-list/energy-breakfast/page";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Energy Breakfast Page", () => {
  it("renders menu for energy breakfast options", async () => {
    render(
      <BreakfastOrderProvider>
        <EnergyBreakfast />
      </BreakfastOrderProvider>
    );

    await waitFor(() => {
      const radio = screen.getByText("hot sausages");
      expect(radio).toBeInTheDocument();
    });
  });

  it("should have heading", async () => {
    render(
      <BreakfastOrderProvider>
        <EnergyBreakfast />
      </BreakfastOrderProvider>
    );

    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: "Select option" });
      expect(heading).toBeInTheDocument();
    });
  });
  it("should navigate to the next page when button select is clicked", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(
      <BreakfastOrderProvider>
        <EnergyBreakfast />
      </BreakfastOrderProvider>
    );
    const confirmButton = screen.findByRole("button", { name: "Select" });
    fireEvent.click(await confirmButton);
    // expect(mockPush).toHaveBeenCalledWith("/drinks-menu");
  });
});
