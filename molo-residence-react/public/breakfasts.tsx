// BREAKFAST_MENU
interface Option {
  id: number;
  name: string;
}

interface Extra {
  id: number;
  name: string;
  options?: Option[];
}

interface Breakfast {
  id: number;
  name: string;
  description: string;
  extras?: Extra[];
}
export const BREAKFAST_MENU: Breakfast[] = [
  {
    id: 1,
    name: "Energy Breakfast",
    description:
      "A hot beverage, juice, cold cuts and cheese plate, mix vegetables, fruits, honey, jam, butter, bread, sweet pastry, hot sausages or scrambled eggs",
    extras: [
      {
        id: 3,
        name: "scrambled eggs",
        options: [
          { id: 1, name: "on butter" },
          { id: 2, name: "with ham" },
          { id: 3, name: "with bacon" },
        ],
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

// COLDDRINK_MENU
export const COLDDRINK_MENU: Breakfast[] = [
  { id: 1, name: "Cold drinks", description: "Orange juice" },
  { id: 2, name: "Cold drinks", description: "Grapefruit juice" },
  { id: 3, name: "Cold drinks", description: "Apple juice" },
  { id: 4, name: "Cold drinks", description: "Carrot juice" },
  { id: 5, name: "Cold drinks", description: "Carrot-apple juice" },
];

// HOTDRINK_MENU
export const HOTDRINK_MENU: Breakfast[] = [
  { id: 1, name: "Hot drinks", description: "Black Coffee" },
  { id: 2, name: "Hot drinks", description: "White Coffee" },
  { id: 3, name: "Hot drinks", description: "Espresso" },
  { id: 4, name: "Hot drinks", description: "Cappuccino" },
  { id: 5, name: "Hot drinks", description: "Latte" },
];

export async function fetchBreakfastDatabase() {
  return {
    breakfasts: BREAKFAST_MENU,
    colddrinks: COLDDRINK_MENU,
    hotdrinks: HOTDRINK_MENU,
  };
}

// // BREAKFAST_MENU
// export const BREAKFAST_MENU = [
//   {
//     id: 1,
//     name: "Energy Breakfast",
//     description:
//       "A hot beverage, juice, cold cuts and cheese plate, mix vegetables, fruits, honey, jam, butter, bread, sweet pastry, hot sausages or scrambled eggs",
//     extras: [3], // Link to BREAKFAST_EXTRAS
//     options: [1, 2, 3], // Link to BREAKFAST_OPTIONS
//   },
//   {
//     id: 2,
//     name: "Breakfast as you like it",
//     description:
//       "A hot beverage, juice, honey, jam, fruits, butter, bread, sweet pastry. Toast with salmon with vegetables or pancakes with cottage cheese with fruits.",
//     extras: [1, 2], // Link to BREAKFAST_EXTRAS
//     options: [],
//   },
//   {
//     id: 3,
//     name: "Fitness Breakfast",
//     description:
//       "A hot beverage, juice, musli, natural yoghurt, fruits, cheese plate, boiled egg, mixed vegetables, honey, jam, butter, bread, sweet pastry.",
//   },
//   {
//     id: 4,
//     name: "Sweet Breakfast",
//     description:
//       "Waffles with fruits, jam, whipped cream, nutella and maple syrup. A hot beverage and a fresh juice.",
//   },
// ];

// export const BREAKFAST_EXTRAS = [
//   { id: 1, name: "toast with salmon and vegetables", breakfastId: 2 }, // Breakfast as you like it
//   { id: 2, name: "pancakes with cottage cheese and fruits", breakfastId: 2 },
//   // Energy Breakfast
//   {
//     id: 3,
//     name: "scrambled eggs",
//     breakfastId: 1,
//     options: [
//       { id: 1, name: "on butter" },
//       { id: 2, name: "with ham" },
//       { id: 3, name: "with bacon" },
//     ],
//   },
//   { id: 4, name: "hot sausages", breakfastId: 1 },
//   { id: 5, name: "fried eggs", breakfastId: 1 },
// ];

// // BREAKFAST_OPTIONS
// export const BREAKFAST_OPTIONS = [
//   { id: 1, name: "on butter", breakfastId: 1 },
//   { id: 2, name: "with ham", breakfastId: 1 },
//   { id: 3, name: "with bacon", breakfastId: 1 },
// ];
