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

export const BREAKFAST_EXTRAS = [
  { id: 1, name: "toast with salmon and vegetables", breakfastId: 2 }, // Breakfast as you like it
  { id: 2, name: "pancakes with cottage cheese and fruits", breakfastId: 2 },
  { id: 3, name: "scrambled eggs", breakfastId: 1 }, // Energy Breakfast
  { id: 4, name: "hot sausages", breakfastId: 1 },
  { id: 5, name: "fried eggs", breakfastId: 1 },
];

export const EXTRA_OPTIONS = [
  { id: 1, name: "on butter", extraId: 3 }, // Scrambled eggs
  { id: 2, name: "with ham", extraId: 3 },
  { id: 3, name: "with bacon", extraId: 3 },
];

// Cold Drinks Table
export const COLDDRINK_MENU = [
  { id: 1, name: "Cold drinks", description: "Orange juice" },
  { id: 2, name: "Cold drinks", description: "Grapefruit juice" },
  { id: 3, name: "Cold drinks", description: "Apple juice" },
  { id: 4, name: "Cold drinks", description: "Carrot juice" },
  { id: 5, name: "Cold drinks", description: "Carrot-apple juice" },
];

// Hot Drinks Table
export const HOTDRINK_MENU = [
  { id: 1, name: "Hot drinks", description: "Black Coffee" },
  { id: 2, name: "Hot drinks", description: "White Coffee" },
  { id: 3, name: "Hot drinks", description: "Espresso" },
  { id: 4, name: "Hot drinks", description: "Cappuccino" },
  { id: 5, name: "Hot drinks", description: "Latte" },
];

export async function fetchBreakfastDatabase() {
  return {
    breakfasts: BREAKFAST_MENU,
    extras: BREAKFAST_EXTRAS,
    options: EXTRA_OPTIONS,
    colddrinks: COLDDRINK_MENU,
    hotdrinks: HOTDRINK_MENU,
  };
}
