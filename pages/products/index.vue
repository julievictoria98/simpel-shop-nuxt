<template>
  <div>
    <div class="grid grid-col gap-4">
      <div v-for="p in products" :key="p.id">
        <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
