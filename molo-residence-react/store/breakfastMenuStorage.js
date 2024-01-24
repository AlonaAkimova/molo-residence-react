import {
  BREAKFAST_MENU,
  COLDDRINK_MENU,
  HOTDRINK_MENU,
} from "@/public/breakfasts";
export function localStorageBreakfastMenu() {
  const menuData = {
    breakfasts: BREAKFAST_MENU,
    colddrinks: COLDDRINK_MENU,
    hotdrinks: HOTDRINK_MENU,
  };

  const data = JSON.stringify(menuData);

  localStorage.setItem("breakfastMenu", data);
}

export function getMenuFromLocalStorage() {
  try {
    const data = localStorage.getItem("breakfastMenu");
    const menuData = JSON.parse(data);
    return menuData || {};
  } catch (error) {
    console.error("Error parsing menu data from local storage:", error);
    return {};
  }
}

localStorageBreakfastMenu();

// Retrieve menu data from local storage
const retrievedMenu = getMenuFromLocalStorage();

console.log(retrievedMenu);
