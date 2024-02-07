import { render, screen, waitFor, within } from "@testing-library/react";
import BreakfastAsYouLikeIt from "@/app/breakfast-list/breakfast-as-you-like-it/page";
import {
  useBreakfastOrderContext,
  BreakfastOrderProvider,
} from "@/store/BreakfastOrderProvider";
import { useRouter } from "next/navigation";
import { userEvent } from "@testing-library/user-event";
jest.mock("next/navigation");
jest.mock("@/store/BreakfastOrderProvider");

describe("BreakfastAsYouLikeIt", () => {
  it("renders the extra menu for breakfast-as-you-like-it component", async () => {
    const mockData = {
      breakfasts: [
        {
          id: 1,
          name: "Energy Breakfast",
          description:
            "A hot beverage, juice, cold cuts and cheese plate, mix vegetables, fruits, honey, jam, butter, bread, sweet pastry, hot sausages or scrambled eggs",
          extras: [
            {
              id: 3,
              name: "scrambled eggs",
              options: [],
            },
            { id: 4, name: "hot sausages" },
            { id: 5, name: "fried eggs" },
          ],
        },
        {
          id: 2,
          name: "Breakfast as you like it",
          description:
            "A hot beverage, juice, honey, jam, fruits, butter, bread, sweet pastry. Toast with salmon with vegetables or pancakes with cottage cheese with fruits.",
          extras: [
            { id: 1, name: "toast with salmon and vegetables" },
            { id: 2, name: "pancakes with cottage cheese and fruits" },
          ],
        },
      ],
    };

    (useBreakfastOrderContext as jest.Mock).mockReturnValue({
      setBreakfastOrder: jest.fn(),
      menuData: mockData,
      loading: false,
    });

    render(<BreakfastAsYouLikeIt />);

    expect(
      screen.getByRole("radio", {
        name: "toast with salmon and vegetables",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("radio", {
        name: "pancakes with cottage cheese and fruits",
      })
    ).toBeInTheDocument();
  });
});
