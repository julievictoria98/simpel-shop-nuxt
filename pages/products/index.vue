<template>
  <div>
    <h1 class="text-3xl">Products</h1>
    <p v-if="pending">Loading products</p>
    <template v-else>
      <div class="flex flex-col mx-20">
        <FilterButtons />
        <div
          class="inline-flex flex-wrap w-auto gap-16 justify-center rounded-sm mt-8"
        >
          <div v-for="p in products" :key="p.id">
            <ProductCard :product="p" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const { pending, data: products } = useLazyFetch(
  "https://fakestoreapi.com/products",
  {
    lazy: true,
  }
);
</script>
