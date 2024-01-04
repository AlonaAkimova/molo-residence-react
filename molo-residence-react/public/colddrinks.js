export const COLDDRINK_MENU = [
  {
    id: 1,
    name: "Cold drinks",
    description: "Orange juice",
  },
  {
    id: 2,
    name: "Cold drinks",
    description: "Grapefruit juice",
  },
  {
    id: 3,
    name: "Cold drinks",
    description: "Apple juice",
  },
  {
    id: 4,
    name: "Cold drinks",
    description: "Carrot juice",
  },
  {
    id: 5,
    name: "Cold drinks",
    description: "Carrot-apple juice",
  },
];

export async function fetchColdDrinks() {
  const res = await fetch("/hotdrinks.json");

  if (!res.ok) {
    throw new Error("Failed to fetch breakfast data");
  }

  return res.json();
}
