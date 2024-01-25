import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import BreakfastList from "@/app/breakfast-list/page";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
// Mock useRouter:

jest.mock("next/navigation");

describe("breakfastlist component renders breakfast menu", () => {
  it("displays the menu data", async () => {
    const menu = [
      {
        id: 1,
        name: "Energy Breakfast",
        description:
          "A hot beverage, juice, cold cuts and cheese plate, mix vegetables, fruits, honey, jam, butter, bread, sweet pastry, hot sausages or scrambled eggs",
      },
      {
        id: 2,
        name: "Breakfast as you like it",
        description:
          "A hot beverage, juice, honey, jam, fruits, butter, bread, sweet pastry. Toast with salmon with vegetables or pancakes with cottage cheese with fruits.",
      },
    ];

    render(
      <BreakfastOrderProvider>
        <BreakfastList />
      </BreakfastOrderProvider>
    );

    expect(
      screen.getByText(/Which breakfast do you prefer?/i)
    ).toBeInTheDocument();

    menu.forEach((menuItem) => {
      expect(screen.getByText(menuItem.name)).toBeInTheDocument();
      expect(screen.getByText(menuItem.description)).toBeInTheDocument();
    });
  });
  it("should navigate to the next page when the 'Select' button is clicked", async () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    const menuData = {
      breakfasts: [
        {
          id: 1,
          name: "Energy Breakfast",
          description: "A delicious energy-packed breakfast.",
        },
      ],
    };

    render(
      <BreakfastOrderProvider value={{ menuData }}>
        <BreakfastList />
      </BreakfastOrderProvider>
    );

    const selectButton = screen.getAllByText("Select");
    fireEvent.click(selectButton[0]);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/breakfast-list/energy-breakfast");
    });
  });
});
