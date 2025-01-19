<script setup lang="ts">
import { useBasketStore } from "~/stores/basket";

const basketStore = useBasketStore();
console.log("Basket in Basket Component:", basketStore.basketItems);
</script>

<template>
  <div>
    <h1 class="text-3xl text-center mt-12">Basket</h1>
    <div
      v-for="item in basketStore.basketItems"
      :key="item.id"
      class="flex flex-wrap justify-center gap-4 mt-8"
    >
      <p>{{ item.id }} - {{ item.title }}</p>
    </div>
  </div>
</template>
