<template>
  <div>
    <h1 class="text-3xl">Products</h1>
    <p v-if="pending">Loading products</p>
    <template v-else>
      <div class="flex flex-col mx-20">
        <FilterButtons />
        <div
          class="inline-flex flex-wrap w-auto gap-16 justify-center rounded-sm mt-8"
        >
          <div v-for="p in products" :key="p.id">
            <ProductCard :product="p" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
// import { useBasket } from "~/composables/useBasket";
// const basketItems = useBasket();
// console.log("index i product:", basketItems.value);

const { pending, data: products } = useFetch(
  "https://fakestoreapi.com/products"
);
</script>
