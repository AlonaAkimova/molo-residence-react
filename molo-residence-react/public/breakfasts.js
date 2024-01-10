export const BREAKFAST_MENU = [
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
  {
    id: 3,
    name: "Fitness Breakfast",
    description:
      "A hot beverage, juice, musli, natural yoghurt, fruits, cheese plate, boiled egg, mixed vegetables, honey, jam, butter, bread, sweet pastry.",
  },
  {
    id: 4,
    name: "Sweet Breakfast",
    description:
      "Waffles with fruits, jam, whipped cream, nutella and maple syrup. A hot beverage and a fresh juice.",
  },
];

export async function fetchBreakfasts() {
  return BREAKFAST_MENU;
}
