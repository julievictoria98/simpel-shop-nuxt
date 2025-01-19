<template>
  <div>
    <img :src="img" alt="Product Image" />
    <h2>{{ title }}</h2>
    <p>{{ price }} DK</p>
  </div>
</template>
<script setup>
defineProps(["title", "price", "img"]);
</script>
