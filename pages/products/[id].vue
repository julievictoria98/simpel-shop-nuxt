<template>
  <div>
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.price }} DK</p>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

// Get the product ID from the route params
const route = useRoute();
const id = route.params.id;

// Construct the API URL
const uri = `https://fakestoreapi.com/products/${id}`;

// Fetch product data
const { data: product, error } = await useFetch(uri);

// Optional: Log errors for debugging
if (error) {
  console.error("Failed to fetch product details:", error);
}
</script>

<style scoped></style>
