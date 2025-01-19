<script setup lang="ts">
import { useBasketStore } from "~/stores/basket";

const basketStore = useBasketStore();
</script>

<template>
  <div>
    <h1 class="text-3xl text-center mt-12">Basket</h1>
    <div
      v-for="item in basketStore.basketItems"
      :key="item.id"
      class="flex flex-wrap justify-center gap-4 mt-8"
    >
      <p>{{ item.title }} - {{ item.price }} DK</p>
    </div>
  </div>
</template>
