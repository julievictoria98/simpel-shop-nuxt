<template>
  <div>
    <img :src="item.img" alt="Product Image" />
    <h2>{{ item.title }}</h2>
    <p>{{ item.price }} DK</p>
  </div>
</template>
<script setup>
defineProps(["title", "price", "img"]);
</script>
