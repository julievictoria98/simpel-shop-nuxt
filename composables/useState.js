export const useSelectedColor = () => useState("selected-color", () => "");
export const useAvailableColors = () =>
  useState("available-colors", () => ["red", "green", "blue", "yellow"]);
export const useBasket = () =>
  useState("basket", () => [
    { id: 1, title: "Product 1", price: 100, img: "" },
  ]);
