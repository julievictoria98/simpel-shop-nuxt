<script setup>
const basket = useBasket();
</script>

<template>
  <div>
    <h1 class="text-3xl text-center mt-12">Basket</h1>
    <div class="flex flex-wrap justify-center gap-4 mt-8">
      <BasketItem v-for="item in basket" :key="item.title" :item="item" />
    </div>
  </div>
</template>
