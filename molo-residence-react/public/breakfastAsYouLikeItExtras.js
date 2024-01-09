export const BREAKFASTASYOULIKEIT_EXTRAS = [
  {
    id: 1,
    name: "toast with salmon and vegetables",
  },
  { id: 2, name: "pancakes with cottage cheese and fruits" },
];
export async function fetchBreakfastAsYouLikeIt() {
  const res = await fetch("/breakfastAsYouLikeItExtras.json");

  if (!res.ok) {
    throw new Error("Failed to fetch breakfast data");
  }

  return res.json();
}
