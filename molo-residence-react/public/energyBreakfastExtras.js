"use client";
export const ENERGY_BREAKFAST_EXTRAS = [
  {
    id: 1,
    name: "scrambled eggs",
    options: [
      {
        id: 1,
        name: "on butter",
      },
      {
        id: 2,
        name: "with ham",
      },
      {
        id: 3,
        name: "with bacon",
      },
    ],
  },
  { id: 2, name: "hot sausages" },
  {
    id: 3,
    name: "fried eggs",
  },
];
export async function fetchEnergyBreakfastExtras() {
  return ENERGY_BREAKFAST_EXTRAS;
}
