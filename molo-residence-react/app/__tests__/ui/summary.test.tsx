import Summary from "@/app/summary-page/page";
import { render, screen, waitFor, act } from "@testing-library/react";
import {
  BreakfastOrderProvider,
  useBreakfastOrderContext,
} from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("@/store/BreakfastOrderProvider", () => ({
  ...jest.requireActual("@/store/BreakfastOrderProvider"),
  useBreakfastOrderContext: jest.fn(),
}));

describe("Summary Page", () => {
  it("should have header", async () => {
    (useBreakfastOrderContext as jest.Mock).mockReturnValue({
      breakfastOrder: {},
      setBreakfastOrder: jest.fn(),
      loading: false,
    });

    await act(async () => {
      render(
        <BreakfastOrderProvider>
          <Summary />
        </BreakfastOrderProvider>
      );
    });
    await waitFor(() => {
      const heading = screen.getByRole("heading", {
        name: "Summary",
      });
      expect(heading).toBeInTheDocument();
    });
  });
  it("should render a summary", async () => {
    const mockBreakfastOrder = {
      selectedBreakfast: {
        name: "Breakfast Name",
        description: "Breakfast Description",
      },
      selectedExtras: [
        {
          id: 1,
          name: "Extra Option",
          options: [
            { id: 1, name: "Option 1" },
            { id: 2, name: "Option 2" },
          ],
        },
      ],
      selectedHotDrink: "Coffee",
      selectedColdDrink: "Iced Tea",
      selectedNumberOfGuests: 2,
      selectedRoom: "Room 101",
      selectedDate: "2024-02-10",
      selectedTime: "08:00",
      additionalComments: "No sugar in coffee",
    };
    (useBreakfastOrderContext as jest.Mock).mockReturnValue({
      breakfastOrder: mockBreakfastOrder,
      setBreakfastOrder: jest.fn(),
      loading: false,
    });
    render(
      <BreakfastOrderProvider>
        <Summary />
      </BreakfastOrderProvider>
    );
    expect(screen.getByText("Breakfast Description")).toBeInTheDocument();
    expect(screen.getByText("Coffee")).toBeInTheDocument();
    expect(screen.getByText("Room 101")).toBeInTheDocument();
    expect(screen.getByText("No sugar in coffee")).toBeInTheDocument();
  });
  it("should display a message if no order details available", async () => {
    const mockBreakfastOrder = {
      breakfastOrder: {
        selectedBreakfast: null,
        selectedExtras: [],
        selectedHotDrink: "",
        selectedColdDrink: "",
        selectedNumberOfGuests: 0,
        selectedRoom: "",
        selectedDate: null,
        selectedTime: null,
        additionalComments: "",
      },
      setBreakfastOrder: jest.fn(),
      loading: false,
    };
    (useBreakfastOrderContext as jest.Mock).mockReturnValue(mockBreakfastOrder);
    render(
      <BreakfastOrderProvider>
        <Summary />
      </BreakfastOrderProvider>
    );

    expect(screen.getByText("No order details available.")).toBeInTheDocument();
  });
});
