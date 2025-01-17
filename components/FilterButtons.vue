<template>
  <div class="flex gap-6 mx-12">
    <FilterButton v-for="c in categories" :key="c" :categoryTitle="c" />
  </div>
</template>

<script setup>
const { data: categories } = await useFetch(
  "https://fakestoreapi.com/products/categories"
);
</script>
