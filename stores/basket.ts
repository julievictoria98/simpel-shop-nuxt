import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    basketItems: [
      { id: 100, title: "Product 1", price: 100, image: "" },
      { id: 200, title: "Product 2", price: 200, image: "" },
    ],
  }),
  actions: {
    addItem(item: { id: number; title: string; price: number; image: string }) {
      this.basketItems.push(item);
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "basket", // Key in localStorage
        storage: localStorage, // Use localStorage explicitly
      },
    ],
  },
});
