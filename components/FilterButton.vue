<template>
  <div>
    <div
      class="border-gray-800 border-2 px-2 py-1 hover:bg-black hover:text-white hover:font-semibold"
    >
      <button class="capitalize">{{ categoryTitle }}</button>
    </div>
  </div>
</template>

<script setup>
const { categoryTitle } = defineProps(["categoryTitle"]);
</script>

<style lang="scss" scoped></style>
