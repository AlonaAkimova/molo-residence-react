import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EnergyBreakfast from "@/app/breakfast-list/energy-breakfast/page";
import {
  useBreakfastOrderContext,
  BreakfastOrderProvider,
} from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";
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
});
describe("Behavior", () => {
  // it("should update the context provider when select button is clicked", async () => {
  //   render(
  //     <BreakfastOrderProvider>
  //       <EnergyBreakfast />
  //     </BreakfastOrderProvider>
  //   );

  //   const buttonSelect = screen.getByText("Select");
  //   await userEvent.click(buttonSelect);

  //   const { breakfastOrder } = useBreakfastOrderContext();
  //   expect(breakfastOrder.selectedExtras).not.toBeNull();
  //   expect(breakfastOrder.selectedOptions.length).toBeGreaterThan(0);
  // });

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
    await waitFor(() => {
      fireEvent.click(screen.getByText("Select"));
      expect(mockPush).toHaveBeenCalledWith("/drinks-menu");
    });
  });
});
