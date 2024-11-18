<template>
  <div>
    <NuxtLink :to="`/products/${product.id}`">
      <div
        class="bg-white shadow-md rounded p-4 flex flex-col items-center justify-center h- w-64"
      >
        <h2 class="text-xl font-semibold">{{ product.title }}</h2>
        <p class="text-lg text-gray-700">{{ product.price }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
