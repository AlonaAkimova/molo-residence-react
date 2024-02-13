import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import Details from "@/app/details/page";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
describe("Details Page", () => {
  it("Should have header", async () => {
    render(
      <BreakfastOrderProvider>
        <Details />
      </BreakfastOrderProvider>
    );
    await waitFor(() => {
      const heading = screen.getByRole("heading", {
        name: "Provide the details",
      });
      expect(heading).toBeInTheDocument();
    });
  });
  it("Should display the dropdown menu select a room number", async () => {
    render(
      <BreakfastOrderProvider>
        <Details />
      </BreakfastOrderProvider>
    );
    expect(
      within(await screen.findByTestId("room-select-label")).getByRole(
        "combobox"
      )
    ).toBeInTheDocument();
  });
  it("Should display date picker", async () => {
    render(
      <BreakfastOrderProvider>
        <Details />
      </BreakfastOrderProvider>
    );
    const datePicker = await screen.findByLabelText("Select Date");
    expect(datePicker).toBeInTheDocument();
  });

  it("Should display the textfield for comments", async () => {
    render(
      <BreakfastOrderProvider>
        <Details />
      </BreakfastOrderProvider>
    );
    expect(
      within(await screen.findByTestId("comments")).getByRole("textbox")
    ).toBeInTheDocument();
  });
  it("should navigate to the next page when button confirm is clicked", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(
      <BreakfastOrderProvider>
        <Details />
      </BreakfastOrderProvider>
    );
    const confirmButton = screen.findByRole("button", { name: "Confirm" });
    fireEvent.click(await confirmButton);

    expect(mockPush).toHaveBeenCalledWith("/summary-page");
  });
});
