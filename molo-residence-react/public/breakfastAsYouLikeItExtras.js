export const BREAKFASTASYOULIKEIT_EXTRAS = [
  {
    id: 1,
    name: "toast with salmon and vegetables",
  },
  { id: 2, name: "pancakes with cottage cheese and fruits" },
];
export async function fetchBreakfastAsYouLikeIt() {
  return BREAKFASTASYOULIKEIT_EXTRAS;
}
