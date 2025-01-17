<template>
  <div class="hover:scale-105 transform transition duration-300 ease-in-out">
    <NuxtLink :to="`/products/${product.id}`">
      <div
        class="bg-white shadow-md rounded px-4 flex flex-col w-72 h-96 items-center justify-center"
      >
        <img
          class="object-fill w-fit h-2/3 rounded"
          :src="product.image"
          alt="product"
        />
        <div class="flex flex-col items-center justify-center mt-4">
          <h2 class="text-sm font-semibold text-center">{{ product.title }}</h2>
          <p class="text-lg text-gray-700 text-center">
            {{ product.price }} DK
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
