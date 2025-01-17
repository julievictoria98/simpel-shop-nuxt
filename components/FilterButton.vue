<template>
  <div>
    <div
      class="py-1 hover:bg-indigo-600 shadow-md hover:text-white rounded-md px-2"
    >
      <button class="capitalize">{{ categoryTitle }}</button>
    </div>
  </div>
</template>

<script setup>
const { categoryTitle } = defineProps(["categoryTitle"]);
</script>

<style lang="scss" scoped></style>
