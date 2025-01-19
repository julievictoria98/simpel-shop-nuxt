export const useBasket = () =>
  useState("basketItems", () => [
    { id: 100, title: "Product 1", price: 100, image: "" },
    { id: 200, title: "Product 1", price: 100, image: "" },
  ]);
