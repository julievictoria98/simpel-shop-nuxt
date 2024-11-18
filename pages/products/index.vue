<template>
  <div>
    <div class="flex flex-wrap gap-4 justify-left">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch(
  "https://fakestoreapi.com/products?limit=5"
);
</script>
