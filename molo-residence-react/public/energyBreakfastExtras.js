export const ENERGY_BREAKFAST_EXTRAS = [
  {
    id: 1,
    name: "scrambled eggs",
    option1: "on butter",
    option2: "with bacon",
    option3: "with ham",
  },
  { id: 2, name: "hot sausages" },
  {
    id: 3,
    name: "fried eggs",
  },
];
export async function fetchEnergyBreakfastExtras() {
  const res = await fetch("/energyBreakfastExtras.json");

  if (!res.ok) {
    throw new Error("Failed to fetch breakfast data");
  }

  return res.json();
}
